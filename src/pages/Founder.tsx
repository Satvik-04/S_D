import { Link } from "react-router-dom";
import { FOUNDER_IMAGE } from "../data";
import { Reveal, MaskLine, Kicker } from "../components/ui";
import { IconArrow, IconQuote, IconTarget, IconSpark, IconPin, IconShield, IconRocket } from "../components/icons";

const DRIVERS = [
  {
    icon: IconTarget,
    title: "Business outcomes first",
    desc: "Every line of code must earn its place by moving a business metric — efficiency, revenue or growth.",
  },
  {
    icon: IconSpark,
    title: "Innovation as habit",
    desc: "Modern stacks, continuous learning and a refusal to ship yesterday's ideas as tomorrow's software.",
  },
  {
    icon: IconShield,
    title: "Trust, earned long-term",
    desc: "Clients stay for years because we treat their systems — and their businesses — like our own.",
  },
];

const FACTS: [string, string][] = [
  ["Role", "Founder & CEO"],
  ["Based in", "Nagpur, Maharashtra"],
  ["Leads", "ERP · CRM · SaaS delivery"],
  ["Philosophy", "Software adapts to business"],
];

export default function Founder() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-5 pb-24 pt-32 sm:px-8 lg:pt-40">
        <Reveal>
          <Kicker>our founder · the person behind teztecch</Kicker>
        </Reveal>

        <div className="mt-10 grid gap-12 lg:grid-cols-12">
          {/* portrait column */}
          <div className="lg:col-span-5">
            <Reveal dir="left" delay={120}>
              <div className="relative">
                <span className="absolute -left-3 -top-3 h-full w-full border border-teal-400/30" aria-hidden />
                <div className="group relative overflow-hidden border border-line">
                  <img
                    src={FOUNDER_IMAGE}
                    alt="Founder and CEO of Teztecch"
                    className="w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink-950/95 via-ink-950/60 to-transparent px-6 pb-5 pt-16">
                    <p className="font-display text-2xl font-bold tracking-tight text-fog">
                      Tejas Deshmukh
                    </p>
                    <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.24em] text-teal-300">
                      Founder & CEO, Teztecch
                    </p>
                  </div>
                </div>
                <div className="drift-slow absolute -right-4 -top-5 hidden items-center gap-2 border border-line bg-ink-900/95 px-3.5 py-2 font-mono text-[10px] uppercase tracking-[0.18em] text-amber-400 shadow-lg sm:flex">
                  <IconPin className="h-3.5 w-3.5" /> Nagpur, India
                </div>
              </div>
            </Reveal>

            {/* fact sheet */}
            <Reveal delay={240}>
              <dl className="mt-10 divide-y divide-line/70 border border-line bg-ink-900/80">
                {FACTS.map(([k, v]) => (
                  <div key={k} className="flex items-baseline justify-between gap-6 px-5 py-3.5">
                    <dt className="font-mono text-[10px] uppercase tracking-[0.24em] text-dim">{k}</dt>
                    <dd className="text-right text-sm font-medium text-fog">{v}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          {/* bio column */}
          <div className="lg:col-span-7">
            <h1 className="font-display text-[36px] font-bold leading-[1.06] tracking-tight sm:text-5xl lg:text-[54px]">
              <MaskLine>"Software should adapt</MaskLine>
              <MaskLine delay={140}>
                to the <span className="text-teal-400">business</span> —
              </MaskLine>
              <MaskLine delay={280}>never the other way around."</MaskLine>
            </h1>

            <Reveal delay={320}>
              <div className="mt-8 max-w-2xl space-y-5 text-[15px] leading-relaxed text-mist sm:text-base">
                <p>
                  Teztecch was founded on a conviction Tejas saw playing out in business after
                  business: companies were being forced to bend their workflows around rigid,
                  off-the-shelf software — instead of software being built around the way they
                  actually work.
                </p>
                <p>
                  Starting from Nagpur, he built Teztecch as an engineering partner for businesses
                  that outgrow generic tools — delivering custom software, ERP and CRM platforms,
                  SaaS products and automation systems that fit each client's processes precisely,
                  and scale as they grow.
                </p>
                <p>
                  Under his leadership, the team follows one non-negotiable rule:{" "}
                  <span className="text-fog">technology must serve business outcomes</span>. Every
                  engagement starts with understanding operations, and every release is measured
                  against efficiency, productivity and growth — not just code quality.
                </p>
              </div>
            </Reveal>

            <Reveal delay={380}>
              <blockquote className="mt-10 flex max-w-2xl gap-5 border-l-2 border-amber-400 pl-6">
                <IconQuote className="h-8 w-8 shrink-0 text-amber-400/70" />
                <p className="font-display text-lg font-medium leading-relaxed text-fog sm:text-xl">
                  We don't sell software. We build the systems our clients' businesses deserve —
                  then we stay to make sure they keep winning with them.
                </p>
              </blockquote>
            </Reveal>

            {/* what drives */}
            <div className="mt-14">
              <Reveal>
                <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-dim">
                  <span className="text-teal-400">//</span> what drives the company
                </p>
              </Reveal>
              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                {DRIVERS.map((d, i) => {
                  const Icon = d.icon;
                  return (
                    <Reveal key={d.title} delay={i * 100}>
                      <div className="lift group h-full border border-line bg-ink-900/70 p-6">
                        <span className="flex h-10 w-10 items-center justify-center border border-line text-teal-400 transition-colors duration-300 group-hover:border-teal-400/50">
                          <Icon className="h-5 w-5" />
                        </span>
                        <h3 className="mt-4 font-display text-base font-semibold tracking-tight text-fog">
                          {d.title}
                        </h3>
                        <p className="mt-2 text-[13px] leading-relaxed text-mist">{d.desc}</p>
                      </div>
                    </Reveal>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* CTA strip */}
        <Reveal delay={140}>
          <div className="mt-20 flex flex-col items-start justify-between gap-6 border border-line bg-ink-900/80 px-7 py-9 sm:flex-row sm:items-center sm:px-10">
            <div>
              <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
                Want to build something <span className="text-teal-400">smart</span>?
              </h2>
              <p className="mt-2 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-dim">
                <IconRocket className="h-4 w-4 text-amber-400" />
                Talk directly to the team that builds with this mindset.
              </p>
            </div>
            <Link
              to="/contact"
              className="btn-primary inline-flex shrink-0 items-center gap-2.5 border border-teal-400 bg-teal-400/10 px-7 py-3.5 font-mono text-xs uppercase tracking-[0.2em] text-teal-300 transition-colors hover:text-ink-950"
            >
              Start the conversation
              <IconArrow className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
