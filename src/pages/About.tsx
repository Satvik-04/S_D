import { Link } from "react-router-dom";
import { PROCESS, STAND_OUT, FOUNDER_IMAGE } from "../data";
import { Reveal, MaskLine, Kicker, ArrowLink } from "../components/ui";
import { IconTarget, IconEye, IconRoute, IconArrow, IconCheck, IconSpark, IconShield } from "../components/icons";

export default function About() {
  return (
    <>
      {/* ============ HEADER ============ */}
      <section className="mx-auto max-w-7xl px-5 pb-10 pt-32 sm:px-8 lg:pt-40">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <Kicker>about us · who we are</Kicker>
            </Reveal>
            <h1 className="mt-6 font-display text-[40px] font-bold leading-[1.04] tracking-tight sm:text-6xl">
              <MaskLine>Technology that</MaskLine>
              <MaskLine delay={140}>
                works <span className="text-teal-400">seamlessly.</span>
              </MaskLine>
            </h1>
            <Reveal delay={260}>
              <p className="mt-7 max-w-xl text-base leading-relaxed text-mist sm:text-lg">
                Teztecch is an IT company specializing in software development solutions designed
                to help businesses streamline operations and achieve growth. With a strong focus
                on innovation and efficiency, we develop software tailored to meet unique business
                requirements across industries.
              </p>
            </Reveal>
            <Reveal delay={340}>
              <div className="mt-8">
                <ArrowLink
                  onClick={() =>
                    document.getElementById("approach")?.scrollIntoView({ behavior: "smooth", block: "start" })
                  }
                >
                  See how we work
                </ArrowLink>
              </div>
            </Reveal>
          </div>

          {/* snapshot panel */}
          <div className="lg:col-span-5">
            <Reveal dir="right" delay={200}>
              <div className="border border-line bg-ink-900/80">
                <div className="flex items-center justify-between border-b border-line px-5 py-3.5">
                  <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-dim">
                    company.snapshot
                  </span>
                  <span className="flex gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-teal-400/70" />
                    <span className="h-2 w-2 rounded-full bg-amber-400/70" />
                    <span className="h-2 w-2 rounded-full bg-sky-400/70" />
                  </span>
                </div>
                <dl className="divide-y divide-line/70">
                  {[
                    ["Base", "Nagpur, India"],
                    ["Focus", "ERP · CRM · SaaS · Automation"],
                    ["Model", "End-to-end product development"],
                    ["Promise", "Scalable, secure, result-driven"],
                    ["Style", "Structured & transparent process"],
                  ].map(([k, v]) => (
                    <div key={k} className="flex items-baseline justify-between gap-6 px-5 py-4">
                      <dt className="font-mono text-[11px] uppercase tracking-[0.22em] text-dim">{k}</dt>
                      <dd className="text-right text-sm font-medium text-fog">{v}</dd>
                    </div>
                  ))}
                </dl>
                <div className="border-t border-line px-5 py-4">
                  <p className="font-mono text-[11px] leading-relaxed text-mist">
                    <span className="text-amber-400">$</span> teztecch --mission{" "}
                    <span className="text-teal-300">"empower businesses to grow"</span>
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ MISSION / VISION ============ */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-6 lg:grid-cols-12">
          <Reveal className="lg:col-span-7" dir="left">
            <div className="lift h-full border border-line bg-ink-900/80 p-8 sm:p-10">
              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center border border-teal-400/40 text-teal-400">
                  <IconTarget className="h-6 w-6" />
                </span>
                <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">Our Mission</h2>
              </div>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-mist">
                To deliver <span className="text-fog">high-quality, reliable, and scalable</span>{" "}
                software solutions that empower businesses to grow and succeed.
              </p>
            </div>
          </Reveal>
          <Reveal className="lg:col-span-5 lg:mt-8" dir="right" delay={140}>
            <div className="lift h-full border border-line bg-ink-800/80 p-8 sm:p-10">
              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center border border-amber-400/40 text-amber-400">
                  <IconEye className="h-6 w-6" />
                </span>
                <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">Our Vision</h2>
              </div>
              <p className="mt-6 leading-relaxed text-mist">
                To become a <span className="text-fog">trusted technology partner</span> for
                businesses looking to digitally transform their operations.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ APPROACH TIMELINE ============ */}
      <section id="approach" className="border-y border-line bg-ink-900/50 py-24">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <Reveal>
                <Kicker>our approach</Kicker>
              </Reveal>
              <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight sm:text-5xl">
                <MaskLine>A structured,</MaskLine>
                <MaskLine delay={120}>
                  <span className="text-amber-400">transparent</span> process.
                </MaskLine>
              </h2>
              <Reveal delay={220}>
                <p className="mt-6 max-w-sm leading-relaxed text-mist">
                  From the first conversation to years of support, every phase is planned,
                  documented and visible to you.
                </p>
              </Reveal>
              <Reveal delay={300}>
                <div className="mt-8 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-dim">
                  <IconRoute className="h-5 w-5 text-teal-400" />
                  six phases · zero surprises
                </div>
              </Reveal>
            </div>
          </div>

          <div className="lg:col-span-8">
            <ol className="relative">
              <span className="v-dash absolute bottom-4 left-[19px] top-4 w-[2px]" aria-hidden />
              {PROCESS.map((p, i) => (
                <Reveal key={p.step} delay={i * 80}>
                  <li className="group relative flex gap-6 pb-10 pl-0 last:pb-0 sm:gap-8">
                    <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center border border-line bg-ink-950 font-mono text-xs text-teal-400 transition-all duration-300 group-hover:border-teal-400 group-hover:bg-teal-400 group-hover:text-ink-950">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="border border-line bg-ink-900/70 p-6 transition-colors duration-300 group-hover:border-teal-400/35 sm:p-7">
                      <h3 className="font-display text-lg font-semibold tracking-tight text-fog sm:text-xl">
                        {p.step}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-mist">{p.desc}</p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ============ WHY WE STAND OUT ============ */}
      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
        <Reveal>
          <Kicker>why we stand out</Kicker>
        </Reveal>
        <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-5xl">
          <MaskLine>Built different, on purpose.</MaskLine>
        </h2>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {STAND_OUT.map((s, i) => (
            <Reveal key={s.title} delay={i * 90} className={i % 2 === 1 ? "sm:mt-6" : ""}>
              <div className="lift group h-full border border-line bg-ink-900/70 p-7 sm:p-8">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-dim">/{String(i + 1).padStart(2, "0")}</span>
                  <IconSpark className="h-5 w-5 text-amber-400/70 transition-transform duration-500 group-hover:rotate-90 group-hover:text-amber-400" />
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold tracking-tight text-fog">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-mist">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* founder teaser */}
        <Reveal delay={150}>
          <Link
            to="/founder"
            className="group mt-16 flex flex-col items-start gap-6 border border-line bg-ink-900/80 p-6 transition-colors hover:border-amber-400/40 sm:flex-row sm:items-center sm:p-8"
          >
            <div className="relative h-24 w-24 shrink-0 overflow-hidden border border-line sm:h-28 sm:w-28">
              <img
                src={FOUNDER_IMAGE}
                alt="Founder of Teztecch"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="flex-1">
              <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-amber-400">meet our founder</p>
              <h3 className="mt-2 font-display text-2xl font-bold tracking-tight text-fog">
                The person behind the product mindset
              </h3>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-mist">
                Teztecch began with a simple conviction — software should adapt to the business,
                never the other way around. Read the story behind the company.
              </p>
            </div>
            <span className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-teal-400">
              Read more
              <IconArrow className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
            </span>
          </Link>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-14 flex items-start gap-3 border-l-2 border-teal-400 pl-5">
            <IconShield className="mt-1 h-5 w-5 shrink-0 text-teal-400" />
            <p className="max-w-2xl text-sm leading-relaxed text-mist">
              <span className="font-semibold text-fog">The Teztecch commitment:</span> scalable and
              secure systems, a business-focused approach, and end-to-end support — on every
              project, every time.
              <span className="ml-2 inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.2em] text-teal-400">
                <IconCheck className="h-3.5 w-3.5" /> guaranteed
              </span>
            </p>
          </div>
        </Reveal>
      </section>
    </>
  );
}
