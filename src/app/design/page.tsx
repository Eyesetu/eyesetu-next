import type { Metadata } from "next";
import { ArrowUpRight, Phone } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { EyeMark } from "@/components/brand/EyeMark";
import { WhatsAppIcon } from "@/components/brand/BrandIcons";
import { Button } from "@/components/ui/Button";
import { Chip } from "@/components/ui/Chip";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Design system",
  robots: { index: false },
};

const scales = [
  {
    name: "Navy",
    note: "Brand · from “Eye”",
    brand: "600",
    swatches: [
      ["50", "#f1f6fa"], ["100", "#e3edf4"], ["200", "#c3d7e6"], ["300", "#93b6cf"], ["400", "#5b8db2"],
      ["500", "#2f6e9a"], ["600", "#20567d"], ["700", "#1a4766"], ["800", "#153a53"], ["900", "#0f2e45"], ["950", "#0a1f2f"],
    ],
  },
  {
    name: "Teal",
    note: "Brand · from “Setu”",
    brand: "600",
    swatches: [
      ["50", "#eef8f5"], ["100", "#d8efe9"], ["200", "#b0dfd3"], ["300", "#7cc7b5"], ["400", "#45a893"],
      ["500", "#259380"], ["600", "#1e8372"], ["700", "#176a5c"], ["800", "#13564b"], ["900", "#0f463e"],
    ],
  },
] as const;

const neutrals = [
  ["Canvas", "#faf8f4", "Page background, warm off-white"],
  ["Sand", "#f3efe8", "Chips, quiet fills"],
  ["Line", "#e6e4df", "Borders & dividers"],
  ["Muted", "#5a6b7a", "Secondary text"],
  ["Ink soft", "#333333", "Logo tagline grey"],
  ["Ink", "#1c2733", "Body text"],
  ["Marigold", "#e9a23b", "Sparing accent: badges, highlights"],
] as const;

const typeScale = [
  ["Display / H1", "text-[2.6rem] sm:text-6xl font-semibold tracking-[-0.03em] leading-[1.05]", "Poppins 600 · 42–68px"],
  ["H2", "text-[1.875rem] sm:text-4xl lg:text-[2.75rem] font-semibold", "Poppins 600 · 30–44px"],
  ["H3", "text-xl font-semibold", "Poppins 600 · 20px"],
  ["Lede", "text-lg sm:text-xl text-muted font-sans", "Inter 400 · 18–20px"],
  ["Body", "text-[1.0625rem] font-sans", "Inter 400 · 17px"],
  ["Caption", "text-sm text-muted font-sans", "Inter 400 · 14px"],
] as const;

function isDark(hex: string) {
  const n = parseInt(hex.slice(1), 16);
  const [r, g, b] = [(n >> 16) & 255, (n >> 8) & 255, n & 255];
  return 0.299 * r + 0.587 * g + 0.114 * b < 150;
}

export default function DesignPage() {
  return (
    <div className="py-16 lg:py-24">
      <Container>
        <SectionHeading
          eyebrow="EyeSetu design system"
          title="Theme palette & components"
          lede="Every colour is derived from the logo: navy from “Eye”, teal from “Setu”. Warm neutrals keep the site calm and premium; marigold is used sparingly."
        />

        {/* Logo */}
        <section className="mt-16">
          <h3 className="text-sm font-semibold tracking-[0.14em] text-muted uppercase">Logo</h3>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            <div className="grid min-h-48 place-items-center rounded-3xl bg-white p-10 ring-1 ring-line">
              <Logo className="w-56" />
            </div>
            <div className="grid min-h-48 place-items-center rounded-3xl bg-navy-950 p-10">
              <Logo variant="light" className="w-56" />
            </div>
            <div className="grid min-h-48 place-items-center rounded-3xl bg-teal-600 p-10 text-white">
              <EyeMark className="w-24" strokeWidth={1.6} />
            </div>
          </div>
        </section>

        {/* Brand scales */}
        {scales.map((scale) => (
          <section key={scale.name} className="mt-16">
            <div className="flex items-baseline gap-3">
              <h3 className="text-2xl font-semibold">{scale.name}</h3>
              <span className="text-sm text-muted">{scale.note}</span>
            </div>
            <ul className="mt-5 grid grid-cols-3 gap-2 sm:grid-cols-6 lg:grid-cols-11">
              {scale.swatches.map(([step, hex]) => (
                <li key={step}>
                  <div
                    className="flex aspect-[4/5] flex-col justify-end rounded-2xl p-3 text-xs ring-1 ring-black/5"
                    style={{ background: hex, color: isDark(hex) ? "#fff" : "#1c2733" }}
                  >
                    {step === scale.brand && <span className="mb-auto font-semibold">Brand</span>}
                    <span className="font-semibold">{step}</span>
                    <span className="font-mono opacity-80">{hex}</span>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        ))}

        {/* Neutrals */}
        <section className="mt-16">
          <h3 className="text-2xl font-semibold">Neutrals & accent</h3>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {neutrals.map(([name, hex, use]) => (
              <li key={name} className="flex items-center gap-4 rounded-2xl bg-white p-3 ring-1 ring-line">
                <span className="size-14 shrink-0 rounded-xl ring-1 ring-black/10" style={{ background: hex }} />
                <span>
                  <span className="block font-semibold text-navy-900">{name}</span>
                  <span className="block font-mono text-xs text-muted">{hex}</span>
                  <span className="block text-xs text-muted">{use}</span>
                </span>
              </li>
            ))}
          </ul>
        </section>

        {/* Type */}
        <section className="mt-16">
          <h3 className="text-2xl font-semibold">Typography</h3>
          <p className="mt-2 text-muted">Poppins for headings (matches the wordmark) · Inter for reading.</p>
          <div className="mt-6 divide-y divide-line rounded-3xl bg-white px-6 ring-1 ring-line">
            {typeScale.map(([label, cls, spec]) => (
              <div key={label} className="grid gap-2 py-6 md:grid-cols-[180px_1fr] md:items-baseline">
                <div>
                  <p className="text-sm font-semibold text-navy-800">{label}</p>
                  <p className="text-xs text-muted">{spec}</p>
                </div>
                <p className={`${cls} ${label.startsWith("H") || label.startsWith("Display") ? "font-display text-navy-900" : ""}`}>
                  Advanced eye care, at your doorstep.
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Components */}
        <section className="mt-16">
          <h3 className="text-2xl font-semibold">Buttons & chips</h3>
          <div className="mt-6 space-y-6 rounded-3xl bg-white p-6 ring-1 ring-line sm:p-8">
            <div className="flex flex-wrap items-center gap-3">
              <Button href="#" size="lg">
                <WhatsAppIcon className="size-5" />
                Primary
              </Button>
              <Button href="#" variant="secondary" size="lg">
                <Phone className="size-[1.1rem]" />
                Secondary
              </Button>
              <Button href="#" variant="ghost">
                Ghost
              </Button>
            </div>
            <div className="flex flex-wrap items-center gap-3 rounded-2xl bg-navy-950 p-5">
              <Button href="#" variant="light">
                Light
              </Button>
              <Button href="#" variant="outline-light">
                Outline light
              </Button>
              <Chip tone="dark">Dark chip</Chip>
            </div>
            <div className="flex flex-wrap gap-2">
              <Chip tone="teal">Teal chip</Chip>
              <Chip tone="navy">Navy chip</Chip>
              <Chip tone="sand">Sand chip</Chip>
              <Chip tone="marigold">Marigold badge</Chip>
            </div>
          </div>
        </section>

        <section className="mt-16">
          <h3 className="text-2xl font-semibold">Surfaces & radius</h3>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <div className="rounded-[1.75rem] bg-white p-6 shadow-soft ring-1 ring-line">
              <p className="font-display font-semibold text-navy-900">Card · soft shadow</p>
              <p className="mt-1 text-sm text-muted">28px radius, 1px line ring</p>
            </div>
            <div className="rounded-[1.75rem] bg-white p-6 shadow-lift ring-1 ring-line">
              <p className="font-display font-semibold text-navy-900">Card · lifted (hover)</p>
              <p className="mt-1 text-sm text-muted">Used for interactive cards</p>
            </div>
            <div className="flex items-start justify-between rounded-[1.75rem] bg-navy-950 p-6 text-white">
              <div>
                <p className="font-display font-semibold">Dark surface</p>
                <p className="mt-1 text-sm text-white/65">Technology, footer</p>
              </div>
              <ArrowUpRight className="size-5 text-teal-300" />
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
}
