import React from "react";

type P = { className?: string };

const S = ({
  className,
  children,
  viewBox = "0 0 24 24",
}: P & { children: React.ReactNode; viewBox?: string }) => (
  <svg
    className={className}
    viewBox={viewBox}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    {children}
  </svg>
);

/* angle brackets + slash — custom software */
export const IconCode = ({ className }: P) => (
  <S className={className}>
    <path d="M8.5 6.5 3 12l5.5 5.5" />
    <path d="M15.5 6.5 21 12l-5.5 5.5" />
    <path d="M13.5 4.5 10.5 19.5" />
  </S>
);

/* connected modules — ERP */
export const IconErp = ({ className }: P) => (
  <S className={className}>
    <rect x="3.5" y="3.5" width="7" height="7" rx="1" />
    <rect x="13.5" y="3.5" width="7" height="7" rx="1" />
    <rect x="3.5" y="13.5" width="7" height="7" rx="1" />
    <rect x="13.5" y="13.5" width="7" height="7" rx="1" />
    <path d="M10.5 7h3M10.5 17h3M7 10.5v3M17 10.5v3" />
  </S>
);

/* people + pulse — CRM */
export const IconCrm = ({ className }: P) => (
  <S className={className}>
    <circle cx="9" cy="8" r="3.2" />
    <path d="M3.5 20c.6-3.4 2.8-5.2 5.5-5.2s4.9 1.8 5.5 5.2" />
    <circle cx="17" cy="9" r="2.4" />
    <path d="M15.6 14.6c2.5.2 4.2 1.8 4.8 4.6" />
    <path d="M17.5 3.5v-1M20.5 6h1" />
  </S>
);

/* bolt in loop — automation */
export const IconBolt = ({ className }: P) => (
  <S className={className}>
    <path d="M13 2.5 5 13.5h5.5L10 21.5l8-11h-5.5l.5-8z" />
  </S>
);

/* cloud with arrow — SaaS */
export const IconCloud = ({ className }: P) => (
  <S className={className}>
    <path d="M7 18.5a4.5 4.5 0 0 1-.6-8.96 6 6 0 0 1 11.7 1.2A3.9 3.9 0 0 1 17.5 18.5H7z" />
    <path d="M12 21v-6.5M9.5 16.5 12 14l2.5 2.5" />
  </S>
);

/* wrench — maintenance */
export const IconWrench = ({ className }: P) => (
  <S className={className}>
    <path d="M14.7 6.3a4.2 4.2 0 0 0-5.6 5.2L3.5 17a2 2 0 1 0 2.9 2.9l5.5-5.6a4.2 4.2 0 0 0 5.2-5.6L14 11.8l-2.4-2.4 3.1-3.1z" />
  </S>
);

export const IconCheck = ({ className }: P) => (
  <S className={className}>
    <path d="M4.5 12.5 9.5 17.5 19.5 6.5" />
  </S>
);

export const IconArrow = ({ className }: P) => (
  <S className={className}>
    <path d="M4.5 12h15" />
    <path d="m13.5 6 6 6-6 6" />
  </S>
);

export const IconPin = ({ className }: P) => (
  <S className={className}>
    <path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11z" />
    <circle cx="12" cy="10" r="2.6" />
  </S>
);

export const IconPhone = ({ className }: P) => (
  <S className={className}>
    <path d="M5.5 3.5h3.6l1.6 4.2-2.2 1.8a13.6 13.6 0 0 0 6 6l1.8-2.2 4.2 1.6v3.6a1.8 1.8 0 0 1-2 1.8A17.2 17.2 0 0 1 3.7 5.5a1.8 1.8 0 0 1 1.8-2z" />
  </S>
);

export const IconMail = ({ className }: P) => (
  <S className={className}>
    <rect x="3.5" y="5.5" width="17" height="13" rx="2" />
    <path d="m4.5 7.5 7.5 5.5 7.5-5.5" />
  </S>
);

export const IconGlobe = ({ className }: P) => (
  <S className={className}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M3.5 12h17M12 3.5c2.6 2.3 3.9 5.1 3.9 8.5s-1.3 6.2-3.9 8.5c-2.6-2.3-3.9-5.1-3.9-8.5s1.3-6.2 3.9-8.5z" />
  </S>
);

export const IconClock = ({ className }: P) => (
  <S className={className}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M12 7v5.2l3.4 2" />
  </S>
);

export const IconTarget = ({ className }: P) => (
  <S className={className}>
    <circle cx="12" cy="12" r="8.5" />
    <circle cx="12" cy="12" r="4.5" />
    <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" />
  </S>
);

export const IconEye = ({ className }: P) => (
  <S className={className}>
    <path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z" />
    <circle cx="12" cy="12" r="3" />
  </S>
);

export const IconRoute = ({ className }: P) => (
  <S className={className}>
    <circle cx="6" cy="19" r="2" />
    <circle cx="18" cy="5" r="2" />
    <path d="M8 19h7a3.5 3.5 0 0 0 0-7H9a3.5 3.5 0 0 1 0-7h7" strokeDasharray="3 3" />
  </S>
);

export const IconRocket = ({ className }: P) => (
  <S className={className}>
    <path d="M12 15.5c5.5-3.5 7.5-8 7.5-12-4 0-8.5 2-12 7.5" />
    <path d="M7.5 11 4 12.5 7 15.5M13 16.5 11.5 20 8.5 17" />
    <path d="M5.5 18.5c-1 .5-1.5 1.5-1.5 3 1.5 0 2.5-.5 3-1.5" />
    <circle cx="14" cy="10" r="1.6" />
  </S>
);

export const IconShield = ({ className }: P) => (
  <S className={className}>
    <path d="M12 3 5 5.8v5.4c0 4.6 3 7.8 7 9.8 4-2 7-5.2 7-9.8V5.8L12 3z" />
    <path d="m9 11.8 2.2 2.2 4-4.5" />
  </S>
);

export const IconSpark = ({ className }: P) => (
  <S className={className}>
    <path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M18 6l-2.5 2.5M8.5 15.5 6 18" />
  </S>
);

export const IconQuote = ({ className }: P) => (
  <S className={className}>
    <path d="M5 16.5c-1-.8-1.5-2-1.5-3.5C3.5 9.5 6 7 9.5 6l.8 1.6c-2 .8-3.2 2.2-3.4 3.7.3-.1.7-.2 1.1-.2 1.7 0 3 1.3 3 3s-1.4 3.2-3.2 3.2c-1 0-2-.4-2.8-.8z" fill="currentColor" stroke="none" />
    <path d="M14.5 16.5c-1-.8-1.5-2-1.5-3.5 0-3.5 2.5-6 6-7l.8 1.6c-2 .8-3.2 2.2-3.4 3.7.3-.1.7-.2 1.1-.2 1.7 0 3 1.3 3 3s-1.4 3.2-3.2 3.2c-1 0-2-.4-2.8-.8z" fill="currentColor" stroke="none" />
  </S>
);

export const IconMenu = ({ className }: P) => (
  <S className={className}>
    <path d="M4 7h16M4 12h16M4 17h10" />
  </S>
);

export const IconX = ({ className }: P) => (
  <S className={className}>
    <path d="m6 6 12 12M18 6 6 18" />
  </S>
);

export const SERVICE_ICONS: Record<string, (p: P) => React.ReactElement> = {
  "custom-software": IconCode,
  erp: IconErp,
  crm: IconCrm,
  automation: IconBolt,
  saas: IconCloud,
  maintenance: IconWrench,
};

/* logo mark */
export const LogoMark = ({ className }: P) => (
  <svg className={className} viewBox="0 0 40 40" fill="none" aria-hidden="true">
    <rect x="1.5" y="1.5" width="37" height="37" rx="9" stroke="#2FD9B4" strokeWidth="2" />
    <path d="M12 14h16M20 14v14" stroke="#E9F2F8" strokeWidth="3" strokeLinecap="round" />
    <circle cx="28" cy="28" r="3.5" fill="#FFB454" />
  </svg>
);
