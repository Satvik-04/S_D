import { useRef, useState } from "react";
import { buildZip, triggerDownload, formatKB, type ZipEntry } from "../utils/clientZip";

/**
 * Every project file, loaded as raw text on demand (code-split by Vite —
 * zero cost to the initial bundle until the visitor clicks).
 */
const SOURCE_MODULES = import.meta.glob(
  [
    "/src/**/*.{ts,tsx,css}",
    "/index.html",
    "/package.json",
    "/package-lock.json",
    "/vite.config.ts",
    "/tsconfig.json",
    "/README.md",
    "/.gitignore",
    "/scripts/*.mjs",
  ],
  { query: "?raw", import: "default" },
) as Record<string, () => Promise<string>>;

type State = "idle" | "packing" | "done" | "error";

function IconDownload({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" className={className} aria-hidden>
      <path d="M10 3v9m0 0 3.5-3.5M10 12 6.5 8.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M3.5 13.5v2a1.5 1.5 0 0 0 1.5 1.5h10a1.5 1.5 0 0 0 1.5-1.5v-2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export default function DownloadSource() {
  const [state, setState] = useState<State>("idle");
  const [detail, setDetail] = useState("");
  const busy = useRef(false);

  const handleDownload = async () => {
    if (busy.current) return;
    busy.current = true;
    setState("packing");
    try {
      const entries: ZipEntry[] = [];
      for (const [path, load] of Object.entries(SOURCE_MODULES)) {
        const content = await load();
        entries.push({ path: path.replace(/^\//, ""), content });
      }
      entries.sort((a, b) => a.path.localeCompare(b.path));

      const blob = buildZip(entries);
      triggerDownload(blob, "teztecch-source.zip");

      setDetail(`${entries.length} files · ${formatKB(blob.size)}`);
      setState("done");
      window.setTimeout(() => setState("idle"), 4500);
    } catch {
      setState("error");
      window.setTimeout(() => setState("idle"), 3500);
    } finally {
      busy.current = false;
    }
  };

  const label =
    state === "packing"
      ? "packing archive…"
      : state === "done"
        ? `saved ✓ ${detail}`
        : state === "error"
          ? "download failed — try again"
          : "download source .zip";

  return (
    <button
      onClick={handleDownload}
      disabled={state === "packing"}
      title="Package the full project source as a ZIP archive"
      aria-label="Download project source as a ZIP archive"
      className={`group inline-flex items-center gap-2.5 border px-4 py-2 font-mono text-[11px] uppercase tracking-[0.18em] transition-all duration-300 ${
        state === "done"
          ? "border-amber-400/60 bg-amber-400/10 text-amber-400"
          : state === "error"
            ? "border-red-400/50 text-red-300"
            : "border-line text-mist hover:border-teal-400/60 hover:bg-teal-400/5 hover:text-teal-300"
      }`}
    >
      <IconDownload
        className={`h-4 w-4 shrink-0 transition-transform duration-300 ${
          state === "packing" ? "animate-bounce text-teal-400" : "group-hover:translate-y-0.5"
        } ${state === "done" ? "text-amber-400" : ""}`}
      />
      <span className={state === "packing" ? "animate-pulse" : ""}>{label}</span>
    </button>
  );
}
