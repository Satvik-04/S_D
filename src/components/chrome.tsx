import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { NAV, CONTACT, SERVICES } from "../data";
import { LogoMark, IconMenu, IconX, IconPhone, IconMail, IconPin, IconRocket } from "./icons";

/* ================= ambient background ================= */
export function Ambient() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0" aria-hidden>
      <div className="bg-blueprint absolute inset-0" />
      <div className="absolute -top-40 left-1/2 h-[480px] w-[720px] -translate-x-1/2 rounded-full bg-teal-400/[0.07] blur-[120px]" />
      <div className="absolute top-1/3 -right-32 h-[380px] w-[380px] rounded-full bg-amber-400/[0.05] blur-[100px]" />
      <div className="absolute bottom-0 -left-32 h-[340px] w-[420px] rounded-full bg-sky-400/[0.05] blur-[110px]" />
      {/* drifting code glyphs */}
      <span className="drift-slow absolute left-[6%] top-[22%] hidden font-mono text-2xl text-teal-400/15 lg:block">{"</>"}</span>
      <span className="drift-slower absolute right-[8%] top-[18%] hidden font-mono text-2xl text-amber-400/15 lg:block">{"{ }"}</span>
      <span className="drift-slow absolute bottom-[24%] left-[12%] hidden font-mono text-xl text-sky-400/15 lg:block">{"( )"}</span>
      <span className="drift-slower absolute bottom-[14%] right-[14%] hidden font-mono text-xl text-teal-400/10 lg:block">{"[ ]"}</span>
      <span className="drift-slow absolute left-[46%] top-[58%] hidden font-mono text-lg text-mist/10 lg:block">{"=> "}</span>
      <div className="noise-overlay absolute inset-0" />
    </div>
  );
}

/* ================= nav ================= */
export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const loc = useLocation();

  useEffect(() => setOpen(false), [loc.pathname]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
        scrolled ? "border-line bg-ink-950/90 backdrop-blur-md" : "border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link to="/" className="group flex items-center gap-2.5">
          <LogoMark className="h-8 w-8 transition-transform duration-300 group-hover:rotate-6" />
          <span className="font-display text-lg font-bold tracking-wide">
            TEZ<span className="text-teal-400">TECCH</span>
          </span>
        </Link>

        <ul className="hidden items-center gap-7 lg:flex">
          {NAV.map((n) => (
            <li key={n.to}>
              <NavLink
                to={n.to}
                end={n.to === "/"}
                className={({ isActive }) =>
                  `${isActive ? "" : "link-draw"} font-mono text-[11px] uppercase tracking-[0.22em] transition-colors ${
                    isActive ? "text-amber-400" : "text-mist hover:text-fog"
                  }`
                }
              >
                {({ isActive }) => (
                  <span className="relative inline-block">
                    {n.label}
                    {isActive && (
                      <span
                        className="absolute -bottom-[7px] left-0 h-[2px] w-full bg-amber-400"
                        aria-hidden
                      />
                    )}
                  </span>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <Link
            to="/contact"
            className="btn-primary inline-flex items-center gap-2 border border-teal-400/60 bg-teal-400/10 px-5 py-2.5 font-mono text-[11px] uppercase tracking-[0.2em] text-teal-300 transition-colors hover:text-ink-950"
          >
            Request a Demo
          </Link>
        </div>

        <button
          className="text-fog lg:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <IconX className="h-6 w-6" /> : <IconMenu className="h-6 w-6" />}
        </button>
      </nav>

      {/* mobile panel */}
      <div
        className={`overflow-hidden border-b border-line bg-ink-950/97 backdrop-blur-md transition-all duration-300 lg:hidden ${
          open ? "max-h-[420px]" : "max-h-0 border-b-0"
        }`}
      >
        <ul className="space-y-1 px-5 py-4">
          {NAV.map((n, i) => (
            <li key={n.to}>
              <NavLink
                to={n.to}
                end={n.to === "/"}
                className={({ isActive }) =>
                  `flex items-center justify-between border-b border-line/60 py-3 font-mono text-xs uppercase tracking-[0.22em] ${
                    isActive ? "text-amber-400" : "text-mist"
                  }`
                }
              >
                <span>
                  <span className="mr-3 text-teal-400/70">0{i + 1}</span>
                  {n.label}
                </span>
                <span className="text-teal-400">→</span>
              </NavLink>
            </li>
          ))}
          <li className="pt-3">
            <Link
              to="/contact"
              className="btn-primary inline-flex w-full items-center justify-center gap-2 border border-teal-400/60 bg-teal-400/10 px-5 py-3 font-mono text-[11px] uppercase tracking-[0.2em] text-teal-300 hover:text-ink-950"
            >
              Request a Demo
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

/* ================= footer ================= */
export function Footer() {
  return (
    <footer className="relative z-10 border-t border-line bg-ink-900/70">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Link to="/" className="flex items-center gap-2.5">
              <LogoMark className="h-9 w-9" />
              <span className="font-display text-xl font-bold tracking-wide">
                TEZ<span className="text-teal-400">TECCH</span>
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-mist">
              Empowering businesses with smart software solutions — custom software, ERP, CRM,
              SaaS and automation from Nagpur, India.
            </p>
            <p className="mt-5 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.22em] text-dim">
              <IconRocket className="h-4 w-4 text-amber-400" />
              Building software that builds businesses
            </p>
          </div>

          <div className="lg:col-span-3">
            <h4 className="font-mono text-[11px] uppercase tracking-[0.28em] text-dim">Company</h4>
            <ul className="mt-4 space-y-2.5">
              {NAV.map((n) => (
                <li key={n.to}>
                  <Link to={n.to} className="link-draw text-sm text-mist transition-colors hover:text-teal-300">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-mono text-[11px] uppercase tracking-[0.28em] text-dim">Services</h4>
            <ul className="mt-4 space-y-2.5">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <Link to="/services" className="link-draw text-sm text-mist transition-colors hover:text-teal-300">
                    {s.name.replace(" Software Solutions", "").replace(" Software Development", "").replace(" Software", "")}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-mono text-[11px] uppercase tracking-[0.28em] text-dim">Contact</h4>
            <ul className="mt-4 space-y-3 text-sm text-mist">
              <li className="flex items-start gap-2.5">
                <IconPin className="mt-0.5 h-4 w-4 shrink-0 text-teal-400" />
                {CONTACT.location}
              </li>
              <li className="flex items-start gap-2.5">
                <IconPhone className="mt-0.5 h-4 w-4 shrink-0 text-teal-400" />
                <span className="font-mono text-[13px]">{CONTACT.phone}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <IconMail className="mt-0.5 h-4 w-4 shrink-0 text-teal-400" />
                <a href={`mailto:${CONTACT.email}`} className="link-draw hover:text-teal-300">
                  {CONTACT.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-line pt-6 font-mono text-[11px] uppercase tracking-[0.2em] text-dim sm:flex-row sm:items-center">
          <p>© 2026 Teztecch · Nagpur, India</p>
          <p>
            <span className="text-teal-400">$</span> teztecch --status{" "}
            <span className="text-teal-300">operational</span>
            <span className="term-caret ml-1 inline-block h-3 w-1.5 translate-y-0.5 bg-teal-400" />
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ================= scroll restore + page fade ================= */
export function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);
  return null;
}

export function PageShell({ children }: { children: React.ReactNode }) {
  const { pathname } = useLocation();
  return (
    <main key={pathname} className="page-enter relative z-10">
      {children}
    </main>
  );
}
