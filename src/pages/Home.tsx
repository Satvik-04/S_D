import { Link } from "react-router-dom";
import { SERVICES, WHY_CHOOSE, STATS } from "../data";
import { Reveal, MaskLine, Scramble, Counter, Kicker, Marquee } from "../components/ui";
import { SERVICE_ICONS, IconArrow, IconCheck, IconRocket, IconShield, IconCloud, IconBolt } from "../components/icons";
import Terminal from "../components/Terminal";

export default function Home() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section className="relative mx-auto max-w-7xl px-5 pb-16 pt-32 sm:px-8 lg:pt-40">
        <div className="grid items-center gap-14 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <Kicker>teztecch · software development · nagpur</Kicker>
            </Reveal>
            <h1 className="mt-6 font-display text-[42px] font-bold leading-[1.02] tracking-tight sm:text-6xl lg:text-[68px]">
              <MaskLine delay={80}>Smart Software.</MaskLine>
              <MaskLine delay={220}>
                <Scramble text="Serious Growth." delay={450} className="text-teal-400" />
              </MaskLine>
            </h1>
            <Reveal delay={320}>
              <p className="mt-7 max-w-xl text-base leading-relaxed text-mist sm:text-lg">
                At Teztecch, we build <span className="text-fog">custom software</span> that
                simplifies operations, boosts productivity, and drives business growth — ERP, CRM,
                SaaS and automation systems engineered around <em className="not-italic text-amber-400">your</em> workflow.
              </p>
            </Reveal>
            <Reveal delay={420}>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <Link
                  to="/contact"
                  className="btn-primary inline-flex items-center gap-2.5 border border-teal-400 bg-teal-400/10 px-7 py-3.5 font-mono text-xs uppercase tracking-[0.2em] text-teal-300 transition-colors hover:text-ink-950"
                >
                  Request a Demo
                  <IconArrow className="h-4 w-4" />
                </Link>
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-2.5 border border-line bg-ink-800/60 px-7 py-3.5 font-mono text-xs uppercase tracking-[0.2em] text-fog transition-colors hover:border-amber-400/60 hover:text-amber-400"
                >
                  Get a Quote
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </Link>
              </div>
              <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.22em] text-dim">
                <span className="text-teal-400">✔</span> trusted partner for innovative software development
              </p>
            </Reveal>
          </div>

          <div className="relative lg:col-span-5">
            <Reveal dir="right" delay={250}>
              <Terminal />
            </Reveal>
            {/* floating spec badges */}
            <div className="drift-slow absolute -left-6 -top-5 hidden items-center gap-2 border border-line bg-ink-900/95 px-3.5 py-2 font-mono text-[10px] uppercase tracking-[0.18em] text-teal-300 shadow-lg sm:flex">
              <IconShield className="h-3.5 w-3.5" /> enterprise-grade security
            </div>
            <div className="drift-slower absolute -bottom-5 -right-4 hidden items-center gap-2 border border-line bg-ink-900/95 px-3.5 py-2 font-mono text-[10px] uppercase tracking-[0.18em] text-amber-400 shadow-lg sm:flex">
              <IconBolt className="h-3.5 w-3.5" /> cloud-ready · scalable
            </div>
          </div>
        </div>

        {/* stats band */}
        <div className="mt-20 grid grid-cols-2 gap-px overflow-hidden border border-line bg-line lg:grid-cols-4">
          {STATS.map((s, i) => (
            <div key={s.label} className="group bg-ink-900/80 px-6 py-7 transition-colors hover:bg-ink-800">
              <Reveal delay={i * 90}>
                <p className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
                  <Counter value={s.value} suffix={s.suffix} decimals={s.decimals} />
                </p>
                <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.24em] text-dim transition-colors group-hover:text-mist">
                  {s.label}
                </p>
              </Reveal>
            </div>
          ))}
        </div>
      </section>

      {/* ============ MARQUEE ============ */}
      <Marquee
        items={[
          "Custom Software",
          "ERP Solutions",
          "CRM Systems",
          "SaaS Products",
          "Business Automation",
          "Maintenance & Support",
        ]}
      />

      {/* ============ ABOUT TEASER ============ */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <div className="grid gap-8 border border-line bg-ink-900/60 px-7 py-10 sm:px-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <Reveal>
              <Kicker>about teztecch</Kicker>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="mt-4 font-display text-2xl font-bold leading-tight tracking-tight sm:text-3xl">
                A leading software development company —{" "}
                <span className="text-teal-400">focused on results.</span>
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            <Reveal delay={180}>
              <p className="leading-relaxed text-mist">
                Teztecch delivers scalable, secure, and result-driven solutions. We help
                businesses transform their operations with technology that works seamlessly —
                from the first requirement to years of support.
              </p>
            </Reveal>
            <Reveal delay={260}>
              <div className="mt-6">
                <Link
                  to="/about"
                  className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.22em] text-teal-400 hover:text-teal-300"
                >
                  <span className="link-draw">More about us</span>
                  <IconArrow className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                </Link>
              </div>
            </Reveal>
          </div>
          <div className="lg:col-span-2">
            <Reveal delay={320}>
              <div className="flex items-center justify-center gap-4 border border-line bg-ink-950/50 px-5 py-4 lg:flex-col lg:gap-1 lg:py-6">
                <p className="font-display text-3xl font-bold text-amber-400">6</p>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-dim">
                  core services
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ CORE SERVICES INDEX ============ */}
      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Reveal>
              <Kicker>what we build</Kicker>
            </Reveal>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-5xl">
              <MaskLine>Our Core Services</MaskLine>
            </h2>
          </div>
          <Reveal delay={150}>
            <Link
              to="/services"
              className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.22em] text-teal-400 hover:text-teal-300"
            >
              <span className="link-draw">Explore all services</span>
              <IconArrow className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-12 border-t border-line">
          {SERVICES.map((s, i) => {
            const Icon = SERVICE_ICONS[s.id];
            return (
              <Reveal key={s.id} delay={i * 60}>
                <Link
                  to="/services"
                  className="svc-row group grid grid-cols-[auto_1fr] items-center gap-x-5 gap-y-2 border-b border-line px-3 py-6 hover:bg-ink-800/70 sm:grid-cols-[72px_48px_1fr_auto] sm:gap-x-7 sm:px-5"
                >
                  <span className="font-mono text-sm text-dim transition-colors group-hover:text-amber-400">
                    {s.no}
                  </span>
                  <span className="hidden h-11 w-11 items-center justify-center border border-line text-teal-400 transition-colors duration-300 group-hover:border-teal-400/50 group-hover:text-teal-300 sm:flex">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block font-display text-lg font-semibold tracking-tight text-fog sm:text-xl">
                      {s.name}
                    </span>
                    <span className="mt-1 block max-w-xl text-sm text-mist">{s.short}</span>
                  </span>
                  <span className="col-start-2 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-dim transition-colors group-hover:text-teal-400 sm:col-start-auto">
                    view
                    <IconArrow className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* ============ WHY TEZTECCH ============ */}
      <section className="border-y border-line bg-ink-900/50">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 py-24 sm:px-8 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <Reveal>
                <Kicker>the teztecch edge</Kicker>
              </Reveal>
              <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight sm:text-5xl">
                <MaskLine>Why Choose</MaskLine>
                <MaskLine delay={120}>
                  <span className="text-amber-400">Teztecch</span>
                </MaskLine>
              </h2>
              <Reveal delay={200}>
                <p className="mt-6 max-w-md leading-relaxed text-mist">
                  We're not just coders — we're a technology partner focused on business outcomes.
                  Every engagement is structured, transparent and built for the long run.
                </p>
              </Reveal>
              <Reveal delay={280}>
                <div className="mt-8 flex items-center gap-4 border border-line bg-ink-900/80 px-5 py-4">
                  <IconCloud className="h-8 w-8 shrink-0 text-sky-400" />
                  <p className="font-mono text-[11px] uppercase leading-relaxed tracking-[0.18em] text-mist">
                    Scalable · Secure · Cloud-Ready — <span className="text-teal-300">by default</span>
                  </p>
                </div>
              </Reveal>
            </div>
          </div>

          <div className="lg:col-span-7">
            <ul className="space-y-4">
              {WHY_CHOOSE.map((w, i) => (
                <Reveal key={w.title} delay={i * 90}>
                  <li className="group flex items-start gap-5 border border-line bg-ink-900/70 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-teal-400/40">
                    <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center border border-teal-400/40 text-teal-400 transition-colors duration-300 group-hover:bg-teal-400 group-hover:text-ink-950">
                      <IconCheck className="h-4 w-4" />
                    </span>
                    <div>
                      <h3 className="font-display text-lg font-semibold tracking-tight text-fog">
                        <span className="mr-2 font-mono text-xs text-dim">0{i + 1}</span>
                        {w.title}
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-mist">{w.desc}</p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ============ CLOSING CTA ============ */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
          <div className="relative border border-line bg-ink-900/80 px-7 py-14 sm:px-12 lg:px-16">
            <span className="absolute right-10 top-8 hidden font-mono text-[11px] uppercase tracking-[0.24em] text-dim md:block">
              // ready when you are
            </span>
            <div className="grid items-center gap-10 lg:grid-cols-12">
              <div className="lg:col-span-8">
                <Reveal>
                  <h2 className="font-display text-3xl font-bold leading-tight tracking-tight sm:text-5xl">
                    <MaskLine>Let's build smart software</MaskLine>
                    <MaskLine delay={120}>
                      for <span className="text-teal-400">your business</span>
                      <IconRocket className="ml-3 inline-block h-8 w-8 -translate-y-1 text-amber-400 sm:h-10 sm:w-10" />
                    </MaskLine>
                  </h2>
                </Reveal>
                <Reveal delay={220}>
                  <p className="mt-5 max-w-xl text-mist">
                    Connect with us today to digitize and scale your operations. Build smarter
                    systems. Scale faster. Grow better — with Teztecch.
                  </p>
                </Reveal>
              </div>
              <div className="flex flex-col gap-4 lg:col-span-4 lg:items-end">
                <Reveal delay={300}>
                  <Link
                    to="/contact"
                    className="btn-primary inline-flex w-full items-center justify-center gap-2.5 border border-teal-400 bg-teal-400/10 px-7 py-3.5 font-mono text-xs uppercase tracking-[0.2em] text-teal-300 transition-colors hover:text-ink-950 lg:w-auto"
                  >
                    Request a Demo
                    <IconArrow className="h-4 w-4" />
                  </Link>
                </Reveal>
                <Reveal delay={380}>
                  <Link
                    to="/contact"
                    className="inline-flex w-full items-center justify-center gap-2.5 border border-line px-7 py-3.5 font-mono text-xs uppercase tracking-[0.2em] text-fog transition-colors hover:border-amber-400/60 hover:text-amber-400 lg:w-auto"
                  >
                    Get a Quote
                  </Link>
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
