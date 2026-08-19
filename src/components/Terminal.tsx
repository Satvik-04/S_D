import { useEffect, useState } from "react";
import { usePrefersReducedMotion } from "../hooks";
import { IconCheck } from "./icons";

type Line = {
  kind: "cmd" | "out" | "ok";
  text: string;
};

const SCRIPT: Line[] = [
  { kind: "cmd", text: "teztecch init --project \"your-business\"" },
  { kind: "out", text: "analyzing workflows .............. done" },
  { kind: "out", text: "modules: erp · crm · saas · automation" },
  { kind: "out", text: "security: enterprise-grade ....... done" },
  { kind: "cmd", text: "teztecch deploy --env production" },
  { kind: "ok", text: "build successful — 0 errors, 0 warnings" },
  { kind: "out", text: "status: your software is live ▮ scaling…" },
];

export default function Terminal() {
  const reduced = usePrefersReducedMotion();
  const [lineIdx, setLineIdx] = useState(reduced ? SCRIPT.length : 0);
  const [chars, setChars] = useState(0);

  useEffect(() => {
    if (reduced) {
      setLineIdx(SCRIPT.length);
      return;
    }
    if (lineIdx >= SCRIPT.length) return;
    const line = SCRIPT[lineIdx];
    let t: number;
    if (line.kind === "cmd") {
      if (chars < line.text.length) {
        t = window.setTimeout(() => setChars((c) => c + 1), 34);
      } else {
        t = window.setTimeout(() => {
          setLineIdx((i) => i + 1);
          setChars(0);
        }, 420);
      }
    } else {
      t = window.setTimeout(
        () => {
          setLineIdx((i) => i + 1);
          setChars(0);
        },
        line.kind === "ok" ? 520 : 340,
      );
    }
    return () => clearTimeout(t);
  }, [lineIdx, chars, reduced]);

  return (
    <div className="overflow-hidden rounded-lg border border-line bg-ink-900/90 shadow-[0_32px_64px_-32px_rgba(2,10,20,0.95)]">
      {/* title bar */}
      <div className="flex items-center gap-2 border-b border-line bg-ink-800/80 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff6b6b]/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-teal-400/80" />
        <span className="ml-3 font-mono text-[11px] tracking-wider text-dim">
          teztecch@nagpur: ~/deploy
        </span>
        <span className="ml-auto flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest text-teal-400">
          <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-teal-400" />
          live
        </span>
      </div>
      {/* body */}
      <div className="min-h-[248px] px-4 py-4 font-mono text-[12.5px] leading-6 sm:px-5 sm:text-[13px]">
        {SCRIPT.slice(0, lineIdx).map((line, i) => (
          <TermLine key={i} line={line} full />
        ))}
        {lineIdx < SCRIPT.length && SCRIPT[lineIdx].kind === "cmd" && (
          <TermLine
            line={{ ...SCRIPT[lineIdx], text: SCRIPT[lineIdx].text.slice(0, chars) }}
            caret
          />
        )}
        {lineIdx >= SCRIPT.length && (
          <p className="text-mist">
            <span className="text-teal-400">$</span>{" "}
            <span className="term-caret inline-block h-4 w-2 translate-y-0.5 bg-teal-400" />
          </p>
        )}
      </div>
    </div>
  );
}

function TermLine({ line, caret }: { line: Line; full?: boolean; caret?: boolean }) {
  return (
    <p
      className={
        line.kind === "cmd"
          ? "text-fog"
          : line.kind === "ok"
            ? "flex items-start gap-2 text-teal-400"
            : "pl-4 text-mist"
      }
    >
      {line.kind === "cmd" && <span className="mr-2 select-none text-amber-400">$</span>}
      {line.kind === "ok" && <IconCheck className="mt-1 h-3.5 w-3.5 shrink-0" />}
      <span>{line.text}</span>
      {caret && (
        <span className="term-caret ml-0.5 inline-block h-4 w-2 translate-y-0.5 bg-teal-400" />
      )}
    </p>
  );
}
