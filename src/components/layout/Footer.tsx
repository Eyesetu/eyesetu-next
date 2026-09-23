import Link from "next/link";
import { ArrowUp, ArrowUpRight, FileCheck2, Home, Mail, MapPin, Phone, ShieldCheck, Stethoscope } from "lucide-react";
import { contact, footerLinks, socials } from "@/content/site";
import { mailLink, resolveHref, telLink, whatsappLink } from "@/lib/links";
import { Logo } from "@/components/brand/Logo";
import { socialIcons, WhatsAppIcon } from "@/components/brand/BrandIcons";
import { Container } from "@/components/ui/Container";

const badges = [
  { icon: Stethoscope, label: "AIIMS-trained specialists" },
  { icon: ShieldCheck, label: "Non-invasive & painless" },
  { icon: FileCheck2, label: "Digital reports, same day" },
  { icon: Home, label: "Home visits, Delhi & Gurgaon" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative isolate overflow-hidden bg-navy-950 text-white/70">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-teal-400/40 to-transparent"
        aria-hidden
      />

      <Container className="pt-12 pb-10 lg:pt-16">
        {/* Trust badges */}
        <ul className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl bg-white/10 ring-1 ring-white/10 lg:grid-cols-4">
          {badges.map(({ icon: Icon, label }) => (
            <li key={label} className="flex items-center gap-3 bg-navy-950 px-4 py-4 text-sm font-medium text-white/85 sm:px-6 sm:py-5 sm:text-[0.95rem]">
              <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-teal-500/15 text-teal-300 ring-1 ring-teal-400/20">
                <Icon className="size-4" aria-hidden />
              </span>
              {label}
            </li>
          ))}
        </ul>

        <div className="mt-14 grid gap-12 lg:mt-16 lg:grid-cols-12">
          {/* Brand block */}
          <div className="lg:col-span-4">
            <Logo variant="light" className="w-[190px]" />
            <p className="mt-6 max-w-sm leading-relaxed">
              Comprehensive eye examinations, advanced diagnostics and personalised treatment plans, brought to your
              doorstep. An AIIMS faculty – IIM initiative.
            </p>
            <ul className="mt-7 flex gap-2.5" aria-label="Social media">
              {socials.map((s) => {
                const Icon = socialIcons[s.icon];
                return (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="grid size-11 place-items-center rounded-full bg-white/[0.06] text-white/80 ring-1 ring-white/10 transition-colors hover:bg-teal-600 hover:text-white hover:ring-teal-500"
                    >
                      <Icon className="size-[1.05rem]" />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:col-span-5">
            {Object.entries(footerLinks).map(([heading, links]) => (
              <div key={heading}>
                <h3 className="font-display text-sm font-semibold tracking-wide text-white">{heading}</h3>
                <ul className="mt-4 space-y-3 text-[0.95rem]">
                  {links.map((l) => (
                    <li key={l.label}>
                      <Link href={resolveHref(l.href)} className="transition-colors hover:text-teal-300">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Contact card */}
          <div className="lg:col-span-3">
            <div className="rounded-3xl bg-white/[0.04] p-6 ring-1 ring-white/10">
              <h3 className="font-display text-sm font-semibold tracking-wide text-white">Talk to us</h3>
              <ul className="mt-5 space-y-4 text-[0.95rem]">
                <li>
                  <a href={telLink} className="flex items-start gap-3 hover:text-teal-300">
                    <Phone className="mt-1 size-4 shrink-0 text-teal-300" aria-hidden />
                    {contact.phoneDisplay}
                  </a>
                </li>
                <li>
                  <a href={mailLink} className="flex items-start gap-3 break-all hover:text-teal-300">
                    <Mail className="mt-1 size-4 shrink-0 text-teal-300" aria-hidden />
                    {contact.email}
                  </a>
                </li>
                <li>
                  <a
                    href={contact.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 hover:text-teal-300"
                  >
                    <MapPin className="mt-1 size-4 shrink-0 text-teal-300" aria-hidden />
                    {contact.address}
                  </a>
                </li>
              </ul>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 flex h-12 items-center justify-center gap-2 rounded-full bg-teal-600 font-semibold text-white transition-colors hover:bg-teal-500"
              >
                <WhatsAppIcon className="size-5" />
                WhatsApp us
                <ArrowUpRight className="size-4 opacity-70" aria-hidden />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-white/50 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center justify-between gap-4 md:justify-start">
            <p>© {year} EyeSetu Medicare Private Limited. All rights reserved.</p>
            <a
              href="#"
              className="grid size-10 shrink-0 place-items-center rounded-full bg-white/[0.06] text-white/80 ring-1 ring-white/10 transition-colors hover:bg-teal-600 hover:text-white md:hidden"
              aria-label="Back to top"
            >
              <ArrowUp className="size-4" />
            </a>
          </div>
          <p className="max-w-xl md:text-right">
            EyeSetu provides scheduled home eye care and is not an emergency service. For sudden vision loss or eye
            injury, visit the nearest hospital immediately.
          </p>
        </div>
      </Container>

      {/* Oversized wordmark, cropped by the footer edge */}
      <div className="pointer-events-none relative -mb-[0.22em] overflow-hidden text-center select-none" aria-hidden>
        <p className="font-display text-[23vw] leading-[0.8] font-semibold tracking-[-0.05em] text-white/[0.035] lg:text-[17rem]">
          EyeSetu
        </p>
      </div>

      <a
        href="#"
        className="absolute right-8 bottom-10 hidden items-center gap-2 rounded-full bg-white/[0.06] px-4 py-2.5 text-sm font-medium text-white/80 ring-1 ring-white/10 transition-colors hover:bg-teal-600 hover:text-white md:inline-flex"
      >
        <ArrowUp className="size-4" aria-hidden />
        Back to top
      </a>
    </footer>
  );
}
