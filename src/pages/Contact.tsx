import React, { useEffect, useMemo, useState } from "react";
import { CONTACT, SERVICES } from "../data";
import { Reveal, MaskLine, Kicker } from "../components/ui";
import {
  IconPin,
  IconPhone,
  IconMail,
  IconGlobe,
  IconClock,
  IconArrow,
  IconCheck,
  IconRocket,
} from "../components/icons";

type Form = {
  name: string;
  phone: string;
  email: string;
  requirement: string;
  message: string;
};

const EMPTY: Form = { name: "", phone: "", email: "", requirement: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState<Form>(EMPTY);
  const [errors, setErrors] = useState<Partial<Form>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [refId, setRefId] = useState("");

  const now = new Date();
  const openState = useMemo(() => {
    const day = now.getDay(); // 0 = Sunday
    const h = now.getHours() + now.getMinutes() / 60;
    const open = day !== 0 && h >= 10 && h < 19;
    return open;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const set = (k: keyof Form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [k]: e.target.value }));
    setErrors((er) => ({ ...er, [k]: undefined }));
  };

  const validate = (): boolean => {
    const er: Partial<Form> = {};
    if (form.name.trim().length < 2) er.name = "Please enter your name.";
    if (form.phone && !/^[+\d][\d\s-]{6,14}$/.test(form.phone.trim()))
      er.phone = "Enter a valid phone number.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) er.email = "Enter a valid email address.";
    if (!form.requirement) er.requirement = "Select a requirement.";
    if (form.message.trim().length < 10) er.message = "Tell us a little more (min 10 characters).";
    setErrors(er);
    return Object.keys(er).length === 0;
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("sending");
    window.setTimeout(() => {
      setRefId(`TZ-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`);
      setStatus("sent");
    }, 900);
  };

  useEffect(() => {
    if (status === "sent") window.scrollTo({ top: 0, behavior: "smooth" });
  }, [status]);

  const infoItems = [
    { icon: IconPin, label: "Location", value: CONTACT.location, href: undefined },
    { icon: IconPhone, label: "Phone", value: CONTACT.phone, href: undefined },
    { icon: IconMail, label: "Email", value: CONTACT.email, href: `mailto:${CONTACT.email}` },
    { icon: IconGlobe, label: "Website", value: CONTACT.website, href: CONTACT.websiteUrl },
  ];

  return (
    <>
      <section className="mx-auto max-w-7xl px-5 pb-24 pt-32 sm:px-8 lg:pt-40">
        {/* header */}
        <Reveal>
          <Kicker>contact us · get in touch</Kicker>
        </Reveal>
        <div className="mt-6 flex flex-wrap items-end justify-between gap-6">
          <h1 className="font-display text-[40px] font-bold leading-[1.04] tracking-tight sm:text-6xl">
            <MaskLine>Let's connect &</MaskLine>
            <MaskLine delay={140}>
              <span className="text-teal-400">build together.</span>
            </MaskLine>
          </h1>
          <Reveal delay={220}>
            <p className="max-w-md text-base leading-relaxed text-mist">
              Ready to transform your business with software? Share your requirement and our team
              will get back to you within one business day.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-12">
          {/* ===== info column ===== */}
          <div className="space-y-6 lg:col-span-5">
            <div className="grid gap-4 sm:grid-cols-2">
              {infoItems.map((it, i) => {
                const Icon = it.icon;
                const inner = (
                  <>
                    <span className="flex h-11 w-11 items-center justify-center border border-line text-teal-400 transition-colors duration-300 group-hover:border-teal-400/50 group-hover:bg-teal-400/10">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span>
                      <span className="block font-mono text-[10px] uppercase tracking-[0.24em] text-dim">
                        {it.label}
                      </span>
                      <span className="mt-1 block font-mono text-[13px] font-medium text-fog">
                        {it.value}
                      </span>
                    </span>
                  </>
                );
                return (
                  <Reveal key={it.label} delay={i * 80}>
                    {it.href ? (
                      <a
                        href={it.href}
                        target={it.href.startsWith("http") ? "_blank" : undefined}
                        rel="noreferrer"
                        className="lift group flex h-full items-start gap-4 border border-line bg-ink-900/80 p-5"
                      >
                        {inner}
                      </a>
                    ) : (
                      <div className="lift group flex h-full items-start gap-4 border border-line bg-ink-900/80 p-5">
                        {inner}
                      </div>
                    )}
                  </Reveal>
                );
              })}
            </div>

            {/* business hours */}
            <Reveal delay={200}>
              <div className="border border-line bg-ink-900/80">
                <div className="flex items-center justify-between border-b border-line px-6 py-4">
                  <span className="flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.24em] text-dim">
                    <IconClock className="h-4 w-4 text-teal-400" />
                    business hours
                  </span>
                  <span
                    className={`flex items-center gap-2 border px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] ${
                      openState
                        ? "border-teal-400/50 text-teal-300"
                        : "border-amber-400/50 text-amber-400"
                    }`}
                  >
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${
                        openState ? "pulse-dot bg-teal-400" : "bg-amber-400"
                      }`}
                    />
                    {openState ? "Open now" : "Currently closed"}
                  </span>
                </div>
                <div className="divide-y divide-line/70">
                  {CONTACT.hours.map((h) => (
                    <div key={h.day} className="flex items-center justify-between px-6 py-4">
                      <span className="text-sm text-mist">{h.day}</span>
                      <span
                        className={`font-mono text-[13px] ${
                          h.time === "Closed" ? "text-amber-400" : "text-fog"
                        }`}
                      >
                        {h.time}
                      </span>
                    </div>
                  ))}
                </div>
                <p className="border-t border-line px-6 py-4 font-mono text-[11px] leading-relaxed text-dim">
                  <span className="text-teal-400">//</span> urgent production issue? Existing
                  clients get priority support 24/7.
                </p>
              </div>
            </Reveal>

            <Reveal delay={260}>
              <div className="border border-line bg-ink-800/70 p-6">
                <p className="font-mono text-[12px] leading-relaxed text-mist">
                  <span className="text-amber-400">$</span> teztecch --ping{" "}
                  <span className="text-teal-300">response &lt; 24h ✓</span>
                </p>
                <p className="mt-2 font-mono text-[12px] leading-relaxed text-mist">
                  <span className="text-amber-400">$</span> teztecch --location{" "}
                  <span className="text-teal-300">"Nagpur → serving everywhere"</span>
                </p>
              </div>
            </Reveal>
          </div>

          {/* ===== form column ===== */}
          <div className="lg:col-span-7">
            <Reveal dir="right" delay={150}>
              <div className="relative border border-line bg-ink-900/85">
                <div className="flex items-center justify-between border-b border-line px-7 py-4">
                  <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-dim">
                    quick inquiry form
                  </span>
                  <span className="font-mono text-[11px] text-dim">
                    {status === "sent" ? (
                      <span className="text-teal-400">✔ transmitted</span>
                    ) : (
                      <>
                        <span className="text-teal-400">*</span> required
                      </>
                    )}
                  </span>
                </div>

                {status === "sent" ? (
                  <div className="px-7 py-16 text-center sm:py-20">
                    <span className="mx-auto flex h-16 w-16 items-center justify-center border border-teal-400/50 bg-teal-400/10 text-teal-400">
                      <IconCheck className="h-8 w-8" />
                    </span>
                    <h2 className="mt-6 font-display text-2xl font-bold tracking-tight sm:text-3xl">
                      Inquiry received. Thank you, {form.name.split(" ")[0]}.
                    </h2>
                    <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-mist">
                      Our team will reach out at <span className="text-fog">{form.email}</span>{" "}
                      within one business day about{" "}
                      <span className="text-teal-300">{form.requirement}</span>.
                    </p>
                    <p className="mt-6 inline-block border border-line bg-ink-950/60 px-5 py-2.5 font-mono text-xs tracking-[0.18em] text-amber-400">
                      REF: {refId}
                    </p>
                    <div className="mt-8">
                      <button
                        onClick={() => {
                          setForm(EMPTY);
                          setStatus("idle");
                        }}
                        className="font-mono text-[11px] uppercase tracking-[0.22em] text-teal-400 link-draw hover:text-teal-300"
                      >
                        Submit another inquiry
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={submit} noValidate className="grid gap-5 px-7 py-8 sm:grid-cols-2">
                    <Field label="Name" required error={errors.name}>
                      <input
                        type="text"
                        value={form.name}
                        onChange={set("name")}
                        placeholder="Your full name"
                        className={`field w-full border bg-ink-950/50 px-4 py-3 text-sm text-fog placeholder:text-dim ${
                          errors.name ? "border-amber-400/70" : "border-line"
                        }`}
                      />
                    </Field>
                    <Field label="Phone Number" error={errors.phone}>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={set("phone")}
                        placeholder="+91 ..."
                        className={`field w-full border bg-ink-950/50 px-4 py-3 font-mono text-sm text-fog placeholder:text-dim ${
                          errors.phone ? "border-amber-400/70" : "border-line"
                        }`}
                      />
                    </Field>
                    <Field label="Email" required error={errors.email}>
                      <input
                        type="email"
                        value={form.email}
                        onChange={set("email")}
                        placeholder="you@company.com"
                        className={`field w-full border bg-ink-950/50 px-4 py-3 text-sm text-fog placeholder:text-dim ${
                          errors.email ? "border-amber-400/70" : "border-line"
                        }`}
                      />
                    </Field>
                    <Field label="Requirement" required error={errors.requirement}>
                      <select
                        value={form.requirement}
                        onChange={set("requirement")}
                        className={`field w-full border bg-ink-950/50 px-4 py-3 text-sm text-fog ${
                          errors.requirement ? "border-amber-400/70" : "border-line"
                        } ${form.requirement ? "" : "text-dim"}`}
                      >
                        <option value="" disabled>
                          Select a service…
                        </option>
                        {SERVICES.map((s) => (
                          <option key={s.id} value={s.name} className="bg-ink-900 text-fog">
                            {s.name}
                          </option>
                        ))}
                        <option value="Something else" className="bg-ink-900 text-fog">
                          Something else
                        </option>
                      </select>
                    </Field>
                    <Field label="Message" required error={errors.message} className="sm:col-span-2">
                      <textarea
                        rows={5}
                        value={form.message}
                        onChange={set("message")}
                        placeholder="Briefly describe your business, current challenges and what you'd like to build…"
                        className={`field w-full resize-none border bg-ink-950/50 px-4 py-3 text-sm leading-relaxed text-fog placeholder:text-dim ${
                          errors.message ? "border-amber-400/70" : "border-line"
                        }`}
                      />
                    </Field>
                    <div className="flex flex-wrap items-center gap-5 sm:col-span-2">
                      <button
                        type="submit"
                        disabled={status === "sending"}
                        className="btn-primary inline-flex items-center gap-2.5 border border-teal-400 bg-teal-400/10 px-8 py-3.5 font-mono text-xs uppercase tracking-[0.2em] text-teal-300 transition-colors hover:text-ink-950 disabled:cursor-wait disabled:opacity-70"
                      >
                        {status === "sending" ? (
                          <>
                            <span className="term-caret inline-block h-3.5 w-2 bg-teal-400" />
                            transmitting…
                          </>
                        ) : (
                          <>
                            Submit Inquiry
                            <IconArrow className="h-4 w-4" />
                          </>
                        )}
                      </button>
                      <p className="font-mono text-[11px] leading-relaxed text-dim">
                        No spam, no obligation —<br className="hidden sm:block" /> just a
                        conversation about your software.
                      </p>
                    </div>
                  </form>
                )}
              </div>
            </Reveal>
          </div>
        </div>

        {/* closing line */}
        <Reveal delay={120}>
          <div className="mt-20 flex flex-col items-center gap-4 border-t border-line pt-12 text-center">
            <IconRocket className="h-8 w-8 text-amber-400" />
            <p className="font-display text-2xl font-bold tracking-tight sm:text-4xl">
              Teztecch — <span className="text-teal-400">Building Software That Builds Businesses</span>
            </p>
            <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-dim">
              nagpur · india — serving businesses everywhere
            </p>
          </div>
        </Reveal>
      </section>
    </>
  );
}

function Field({
  label,
  required,
  error,
  className = "",
  children,
}: {
  label: string;
  required?: boolean;
  error?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <label className={`block ${className}`}>
      <span className="mb-2 block font-mono text-[10px] uppercase tracking-[0.24em] text-mist">
        {label} {required && <span className="text-teal-400">*</span>}
      </span>
      {children}
      {error && (
        <span className="mt-1.5 block font-mono text-[11px] text-amber-400">▲ {error}</span>
      )}
    </label>
  );
}
