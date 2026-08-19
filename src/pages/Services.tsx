import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SERVICES, CROSS_FEATURES } from "../data";
import { Reveal, MaskLine, Kicker } from "../components/ui";
import { SERVICE_ICONS, IconArrow, IconCheck, IconRocket } from "../components/icons";

const ACCENT = {
  teal: { text: "text-teal-400", border: "border-teal-400/40", chip: "border-teal-400/30 text-teal-300", bar: "bg-teal-400" },
  amber: { text: "text-amber-400", border: "border-amber-400/40", chip: "border-amber-400/30 text-amber-400", bar: "bg-amber-400" },
  sky: { text: "text-sky-400", border: "border-sky-400/40", chip: "border-sky-400/30 text-sky-400", bar: "bg-sky-400" },
} as const;

export default function Services() {
  const [active, setActive] = useState(SERVICES[0].id);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    SERVICES.forEach((s) => {
      const el = document.getElementById(s.id);
      if (!el) return;
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) setActive(s.id);
          });
        },
        { rootMargin: "-38% 0px -52% 0px" },
      );
      io.observe(el);
      observers.push(io);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const jump = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      {/* header */}
      <section className="mx-auto max-w-7xl px-5 pb-8 pt-32 sm:px-8 lg:pt-40">
        <Reveal>
          <Kicker>services · software development</Kicker>
        </Reveal>
        <h1 className="mt-6 max-w-4xl font-display text-[40px] font-bold leading-[1.04] tracking-tight sm:text-6xl">
          <MaskLine>Software development</MaskLine>
          <MaskLine delay={140}>
            services, <span className="text-teal-400">end to end.</span>
          </MaskLine>
        </h1>
        <Reveal delay={260}>
          <p className="mt-7 max-w-2xl text-base leading-relaxed text-mist sm:text-lg">
            Six focused practices — one standard of engineering. Whether you need a bespoke
            system, an enterprise suite or a cloud product, Teztecch builds it scalable, secure
            and ready for growth.
          </p>
        </Reveal>
      </section>

      {/* rail + sections */}
      <section className="mx-auto max-w-7xl px-5 pb-10 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* sticky rail */}
          <aside className="hidden lg:col-span-3 lg:block">
            <div className="sticky top-28">
              <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-dim">index</p>
              <ul className="mt-4 space-y-1 border-l border-line">
                {SERVICES.map((s) => (
                  <li key={s.id}>
                    <button
                      onClick={() => jump(s.id)}
                      className={`group relative -ml-px flex w-full items-baseline gap-3 border-l-2 py-2.5 pl-5 text-left transition-all duration-300 ${
                        active === s.id
                          ? "border-teal-400 bg-ink-800/60 text-fog"
                          : "border-transparent text-mist hover:border-line hover:text-fog"
                      }`}
                    >
                      <span
                        className={`font-mono text-[11px] ${active === s.id ? "text-amber-400" : "text-dim"}`}
                      >
                        {s.no}
                      </span>
                      <span className="font-display text-sm font-medium leading-snug">{s.name}</span>
                    </button>
                  </li>
                ))}
              </ul>
              <div className="mt-8 border border-line bg-ink-900/80 p-5">
                <p className="font-mono text-[11px] uppercase leading-relaxed tracking-[0.2em] text-mist">
                  Not sure what you need?
                  <Link to="/contact" className="mt-2 block text-teal-400 hover:text-teal-300">
                    → talk to an engineer
                  </Link>
                </p>
              </div>
            </div>
          </aside>

          {/* detail blocks */}
          <div className="space-y-16 lg:col-span-9">
            {SERVICES.map((s, idx) => {
              const Icon = SERVICE_ICONS[s.id];
              const a = ACCENT[s.accent];
              return (
                <article key={s.id} id={s.id} className="scroll-mt-28">
                  <Reveal>
                    <div className="relative border border-line bg-ink-900/80">
                      <span className={`absolute left-0 top-0 h-full w-[3px] ${a.bar}`} aria-hidden />
                      {/* head */}
                      <div className="flex flex-wrap items-center gap-4 border-b border-line px-7 py-6 sm:gap-5 sm:px-9">
                        <span className={`flex h-12 w-12 shrink-0 items-center justify-center border ${a.border} ${a.text}`}>
                          <Icon className="h-6 w-6" />
                        </span>
                        <div className="min-w-0">
                          <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-dim">
                            {s.no} / {s.tagline}
                          </p>
                          <h2 className="mt-1.5 font-display text-2xl font-bold tracking-tight text-fog sm:text-3xl">
                            {s.name}
                          </h2>
                        </div>
                      </div>
                      {/* body */}
                      <div className="px-7 py-7 sm:px-9 sm:py-8">
                        <div className="max-w-3xl space-y-3 text-[15px] leading-relaxed text-mist">
                          {s.desc.map((d, i) => (
                            <p key={i}>{d}</p>
                          ))}
                        </div>

                        <div className="mt-8 grid gap-8 md:grid-cols-2">
                          <div>
                            <h3 className={`font-mono text-[11px] uppercase tracking-[0.26em] ${a.text}`}>
                              ▸ {s.offerTitle}
                            </h3>
                            <ul className="mt-4 space-y-2.5">
                              {s.offer.map((o) => (
                                <li key={o} className="flex items-start gap-3 text-sm text-mist">
                                  <IconArrow className={`mt-0.5 h-3.5 w-3.5 shrink-0 ${a.text}`} />
                                  {o}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="border border-line/80 bg-ink-950/50 p-6">
                            <h3 className="font-mono text-[11px] uppercase tracking-[0.26em] text-fog">
                              {s.benefitTitle}
                            </h3>
                            <ul className="mt-4 space-y-2.5">
                              {s.benefits.map((b) => (
                                <li key={b} className="flex items-start gap-3 text-sm text-mist">
                                  <span className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center border ${a.border} ${a.text}`}>
                                    <IconCheck className="h-3 w-3" />
                                  </span>
                                  {b}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        {/* tags + note */}
                        <div className="mt-8 flex flex-wrap items-center gap-2">
                          {s.tags.map((t) => (
                            <span
                              key={t}
                              className={`border ${a.chip} bg-ink-950/40 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.16em] transition-transform duration-200 hover:-translate-y-0.5`}
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                        <p className="mt-6 border-t border-line/70 pt-5 font-mono text-[12px] text-dim">
                          <span className={a.text}>→</span> {s.note}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                  {idx < SERVICES.length - 1 && (
                    <div className="mt-16 flex items-center gap-4" aria-hidden>
                      <span className="h-px flex-1 bg-line" />
                      <span className="font-mono text-[11px] text-dim">
                        {SERVICES[idx + 1].no} · next
                      </span>
                      <span className="h-px flex-1 bg-line" />
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* cross-cutting features */}
      <section className="border-y border-line bg-ink-900/50 py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <Kicker>across every engagement</Kicker>
          </Reveal>
          <h2 className="mt-4 font-display text-2xl font-bold tracking-tight sm:text-4xl">
            <MaskLine>Key features across all services</MaskLine>
          </h2>
          <div className="mt-9 flex flex-wrap gap-3">
            {CROSS_FEATURES.map((f, i) => (
              <Reveal key={f} delay={i * 80}>
                <span className="flex items-center gap-2.5 border border-line bg-ink-900/80 px-5 py-3 font-display text-sm font-medium text-fog transition-colors duration-300 hover:border-teal-400/50 hover:text-teal-300">
                  <IconCheck className="h-4 w-4 text-teal-400" />
                  {f}
                </span>
              </Reveal>
            ))}
          </div>
          <Reveal delay={200}>
            <p className="mt-8 font-mono text-xs uppercase tracking-[0.22em] text-dim">
              <span className="text-teal-400">→</span> Build powerful software solutions with Teztecch.
            </p>
          </Reveal>
        </div>
      </section>

      {/* closing CTA */}
      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
        <Reveal>
          <div className="relative overflow-hidden border border-line bg-ink-900/80 px-7 py-14 text-center sm:px-12">
            <span className="absolute left-6 top-6 font-mono text-[11px] uppercase tracking-[0.24em] text-dim">
              // closing
            </span>
            <span className="absolute bottom-6 right-6 font-mono text-[11px] uppercase tracking-[0.24em] text-dim">
              exit code: 0
            </span>
            <h2 className="font-display text-3xl font-bold leading-tight tracking-tight sm:text-5xl">
              <MaskLine>Build smarter systems.</MaskLine>
              <MaskLine delay={130}>
                Scale faster. Grow better — <span className="text-teal-400">with Teztecch.</span>
              </MaskLine>
            </h2>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/contact"
                className="btn-primary inline-flex items-center gap-2.5 border border-teal-400 bg-teal-400/10 px-7 py-3.5 font-mono text-xs uppercase tracking-[0.2em] text-teal-300 transition-colors hover:text-ink-950"
              >
                Request a Demo
                <IconArrow className="h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2.5 border border-line px-7 py-3.5 font-mono text-xs uppercase tracking-[0.2em] text-fog transition-colors hover:border-amber-400/60 hover:text-amber-400"
              >
                Get a Quote
              </Link>
            </div>
            <p className="mt-6 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-dim">
              <IconRocket className="h-4 w-4 text-amber-400" />
              ready to transform your business?
            </p>
          </div>
        </Reveal>
      </section>
    </>
  );
}
