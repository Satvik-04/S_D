#!/usr/bin/env node
/**
 * Teztecch — zero-dependency project zipper.
 *
 * Usage:
 *   node scripts/zip-project.mjs              → writes teztecch-source.zip
 *   node scripts/zip-project.mjs my-build.zip → writes my-build.zip
 *
 * Packages the entire project (source, config, assets) while skipping
 * node_modules, dist, .git and any existing .zip files.
 * Uses only Node built-ins (fs, path, zlib) — no npm install required.
 */
import { readdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import { join, relative, sep } from "node:path";
import { deflateRawSync } from "node:zlib";

const ROOT = process.cwd();
const OUTPUT = process.argv[2] || "teztecch-source.zip";
const EXCLUDED_DIRS = new Set(["node_modules", "dist", ".git"]);

/* ---------------- CRC-32 (ZIP spec) ---------------- */
const CRC_TABLE = (() => {
  const t = new Uint32Array(256);
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    t[n] = c >>> 0;
  }
  return t;
})();

function crc32(buf) {
  let c = 0xffffffff;
  for (let i = 0; i < buf.length; i++) {
    c = CRC_TABLE[(c ^ buf[i]) & 0xff] ^ (c >>> 8);
  }
  return (c ^ 0xffffffff) >>> 0;
}

/* ---------------- helpers ---------------- */
function dosDateTime(d) {
  const year = Math.max(1980, d.getFullYear());
  const date = (((year - 1980) & 0x7f) << 9) | ((d.getMonth() + 1) << 5) | d.getDate();
  const time = (d.getHours() << 11) | (d.getMinutes() << 5) | (d.getSeconds() >> 1);
  return { date, time };
}

function walk(dir, out) {
  const items = readdirSync(dir, { withFileTypes: true }).sort((a, b) =>
    a.name.localeCompare(b.name),
  );
  for (const item of items) {
    if (EXCLUDED_DIRS.has(item.name) || item.name.endsWith(".zip") || item.name === ".DS_Store") {
      continue;
    }
    const full = join(dir, item.name);
    if (item.isDirectory()) {
      out.push({ path: full, isDir: true });
      walk(full, out);
    } else if (item.isFile()) {
      out.push({ path: full, isDir: false });
    }
  }
}

/* ---------------- build the archive ---------------- */
const entries = [];
walk(ROOT, entries);

const chunks = [];
const central = [];
let offset = 0;
let rawTotal = 0;

for (const entry of entries) {
  const zipName = relative(ROOT, entry.path).split(sep).join("/");
  const nameBuf = Buffer.from(entry.isDir ? zipName + "/" : zipName, "utf8");
  const { date, time } = dosDateTime(statSync(entry.path).mtime);

  let data = Buffer.alloc(0);
  let crc = 0;
  let rawSize = 0;
  let method = 0; // 0 = store (used for directories)

  if (!entry.isDir) {
    const raw = readFileSync(entry.path);
    rawSize = raw.length;
    crc = crc32(raw);
    const deflated = deflateRawSync(raw, { level: 9 });
    if (deflated.length < raw.length) {
      data = deflated;
      method = 8; // deflate
    } else {
      data = raw; // incompressible — store as-is
    }
    rawTotal += rawSize;
  }

  /* local file header (30 bytes) */
  const local = Buffer.alloc(30);
  local.writeUInt32LE(0x04034b50, 0); // signature
  local.writeUInt16LE(20, 4); // version needed (2.0)
  local.writeUInt16LE(0x0800, 6); // flags: UTF-8 filenames
  local.writeUInt16LE(method, 8);
  local.writeUInt16LE(time, 10);
  local.writeUInt16LE(date, 12);
  local.writeUInt32LE(crc, 14);
  local.writeUInt32LE(data.length, 18); // compressed size
  local.writeUInt32LE(rawSize, 22); // uncompressed size
  local.writeUInt16LE(nameBuf.length, 26);
  local.writeUInt16LE(0, 28); // extra field length
  chunks.push(local, nameBuf, data);

  /* central directory entry (46 bytes) */
  const cd = Buffer.alloc(46);
  cd.writeUInt32LE(0x02014b50, 0);
  cd.writeUInt16LE(20, 4); // version made by
  cd.writeUInt16LE(20, 6); // version needed
  cd.writeUInt16LE(0x0800, 8);
  cd.writeUInt16LE(method, 10);
  cd.writeUInt16LE(time, 12);
  cd.writeUInt16LE(date, 14);
  cd.writeUInt32LE(crc, 16);
  cd.writeUInt32LE(data.length, 20);
  cd.writeUInt32LE(rawSize, 24);
  cd.writeUInt16LE(nameBuf.length, 28);
  cd.writeUInt32LE(entry.isDir ? ((0o40755 << 16) | 0x10) >>> 0 : (0o100644 << 16) >>> 0, 38);
  cd.writeUInt32LE(offset, 42); // local header offset
  central.push(cd, nameBuf);

  offset += local.length + nameBuf.length + data.length;
}

/* end of central directory (22 bytes) */
const cdBuf = Buffer.concat(central);
const eocd = Buffer.alloc(22);
eocd.writeUInt32LE(0x06054b50, 0);
eocd.writeUInt16LE(entries.length, 8);
eocd.writeUInt16LE(entries.length, 10);
eocd.writeUInt32LE(cdBuf.length, 12);
eocd.writeUInt32LE(offset, 16);

const archive = Buffer.concat([...chunks, cdBuf, eocd]);
const outPath = join(ROOT, OUTPUT);
writeFileSync(outPath, archive);

const kb = (n) => (n / 1024).toFixed(1) + " KB";
console.log(`✔ ${OUTPUT} created`);
console.log(`  ${entries.length} entries · ${kb(rawTotal)} source → ${kb(archive.length)} zipped`);
