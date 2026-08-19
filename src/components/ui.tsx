import React, { useState } from "react";
import { useInView, useCountUp, usePrefersReducedMotion } from "../hooks";
import { IconArrow } from "./icons";

/* ---------- scroll reveal wrapper ---------- */
export function Reveal({
  children,
  className = "",
  delay = 0,
  dir = "up",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  dir?: "up" | "left" | "right";
}) {
  const { ref, inView } = useInView<HTMLDivElement>();
  const dirClass = dir === "left" ? "reveal-left" : dir === "right" ? "reveal-right" : "";
  return (
    <div
      ref={ref}
      className={`reveal ${dirClass} ${inView ? "is-in" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

/* ---------- line-mask headline reveal ---------- */
export function MaskLine({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const { ref, inView } = useInView<HTMLSpanElement>();
  return (
    <span ref={ref} className={`line-mask ${inView ? "is-in" : ""} ${className}`}>
      <span style={{ transitionDelay: `${delay}ms` }}>{children}</span>
    </span>
  );
}

/* ---------- scramble / decode text ---------- */
const GLYPHS = "!<>-_\\/[]{}—=+*^?#01";

export function Scramble({
  text,
  className = "",
  speed = 28,
  delay = 0,
}: {
  text: string;
  className?: string;
  speed?: number;
  delay?: number;
}) {
  const reduced = usePrefersReducedMotion();
  const { ref, inView } = useInView<HTMLSpanElement>(0.1);
  const [out, setOut] = useState(text);
  const [started, setStarted] = React.useState(false);

  React.useEffect(() => {
    if (!inView || started || reduced) return;
    setStarted(true);
    let frame = 0;
    let raf = 0;
    let timeout = window.setTimeout(() => {
      const tick = () => {
        frame++;
        const settled = Math.floor(frame / 2.2);
        const next = text
          .split("")
          .map((ch, i) => {
            if (ch === " " || i < settled) return ch;
            return GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
          })
          .join("");
        setOut(next);
        if (settled <= text.length) {
          raf = requestAnimationFrame(tick);
        } else {
          setOut(text);
        }
      };
      raf = requestAnimationFrame(tick);
    }, delay);
    return () => {
      clearTimeout(timeout);
      cancelAnimationFrame(raf);
    };
  }, [inView, started, reduced, text, delay, speed]);

  return (
    <span ref={ref} className={className} aria-label={text}>
      {reduced || !started ? text : out}
    </span>
  );
}

/* ---------- animated counter ---------- */
export function Counter({
  value,
  suffix = "",
  decimals = 0,
  className = "",
}: {
  value: number;
  suffix?: string;
  decimals?: number;
  className?: string;
}) {
  const { ref, inView } = useInView<HTMLSpanElement>(0.4);
  const display = useCountUp(value, inView, 1600, decimals);
  return (
    <span ref={ref} className={className}>
      {display}
      <span className="text-teal-400">{suffix}</span>
    </span>
  );
}

/* ---------- mono kicker ---------- */
export function Kicker({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={`font-mono text-[11px] sm:text-xs uppercase tracking-[0.28em] text-mist ${className}`}>
      <span className="text-teal-400">//</span> {children}
    </p>
  );
}

/* ---------- marquee ---------- */
export function Marquee({ items }: { items: string[] }) {
  const row = (key: string) => (
    <div key={key} className="flex shrink-0 items-center" aria-hidden={key === "b"}>
      {items.map((it, i) => (
        <span key={i} className="flex items-center whitespace-nowrap">
          <span className="px-6 font-display text-lg sm:text-xl font-semibold tracking-wide text-mist">
            {it}
          </span>
          <svg viewBox="0 0 12 12" className="h-2.5 w-2.5 text-teal-400" fill="currentColor" aria-hidden>
            <path d="M6 0l1.8 4.2L12 6 7.8 7.8 6 12 4.2 7.8 0 6l4.2-1.8z" />
          </svg>
        </span>
      ))}
    </div>
  );
  return (
    <div className="relative overflow-hidden border-y border-line bg-ink-900/60 py-4">
      <div className="marquee-track flex w-max">{[row("a"), row("b")]}</div>
    </div>
  );
}

/* ---------- arrow cta link ---------- */
export function ArrowLink({
  href,
  onClick,
  children,
  className = "",
}: {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
}) {
  const cls = `group inline-flex cursor-pointer items-center gap-2 bg-transparent font-mono text-xs uppercase tracking-[0.22em] text-teal-400 hover:text-teal-300 ${className}`;
  const inner = (
    <>
      <span className="link-draw">{children}</span>
      <IconArrow className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
    </>
  );
  if (href) {
    return (
      <a href={href} onClick={onClick} className={cls}>
        {inner}
      </a>
    );
  }
  return (
    <button type="button" onClick={onClick} className={cls}>
      {inner}
    </button>
  );
}
