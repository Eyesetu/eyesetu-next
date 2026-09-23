"use client";

import Link from "next/link";
import { useEffect } from "react";
import { ArrowRight, MapPin, Phone, X } from "lucide-react";
import { contact, nav, services } from "@/content/site";
import { resolveHref, telLink, whatsappLink } from "@/lib/links";
import { cn } from "@/lib/cn";
import { serviceIcons } from "@/lib/serviceIcons";
import { Logo } from "@/components/brand/Logo";
import { Button } from "@/components/ui/Button";
import { WhatsAppIcon } from "@/components/brand/BrandIcons";

type MobileMenuProps = { open: boolean; onClose: () => void };

const links = nav.filter((item) => !item.children).map((item) => ({ label: item.label, href: resolveHref(item.href) }));
const groups = nav.filter((item) => item.children);

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.documentElement.style.overflow = "";
    };
  }, [open, onClose]);

  return (
    <div
      id="mobile-menu"
      role="dialog"
      aria-modal="true"
      aria-label="Menu"
      aria-hidden={!open}
      className={cn("fixed inset-0 z-50 overflow-hidden lg:hidden", open ? "visible" : "invisible transition-[visibility] delay-300")}
    >
      <div
        className={cn(
          "absolute inset-0 bg-navy-950/40 backdrop-blur-sm transition-opacity duration-300",
          open ? "opacity-100" : "opacity-0",
        )}
        onClick={onClose}
      />
      <div
        className={cn(
          "absolute inset-y-0 right-0 flex w-full max-w-md flex-col bg-canvas shadow-2xl transition-transform duration-300 ease-out-soft",
          open ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="flex h-[4.25rem] items-center justify-between border-b border-line px-4">
          <Logo className="w-[138px]" />
          <button
            type="button"
            onClick={onClose}
            className="grid size-11 place-items-center rounded-full ring-1 ring-line hover:bg-navy-50"
            aria-label="Close menu"
          >
            <X className="size-5" />
          </button>
        </div>

        <nav aria-label="Mobile" className="flex-1 overflow-y-auto px-4 py-2">
          <ul className="divide-y divide-line">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={onClose}
                  className="flex items-center justify-between py-4 font-display text-lg font-medium text-navy-900"
                >
                  {link.label}
                  <ArrowRight className="size-5 text-teal-600" aria-hidden />
                </Link>
              </li>
            ))}
          </ul>

          {groups.map((group) => (
            <div key={group.label} className="mt-5">
              <p className="text-xs font-semibold tracking-[0.14em] text-muted uppercase">{group.label}</p>
              <ul className="mt-2 grid grid-cols-2 gap-2">
                {group.children!.map((c) => (
                  <li key={c.href}>
                    <Link
                      href={c.href}
                      onClick={onClose}
                      className="flex h-full flex-col rounded-2xl bg-white px-4 py-3 ring-1 ring-line active:bg-teal-50"
                    >
                      <span className="font-semibold text-navy-900">{c.label}</span>
                      {c.note && <span className="text-xs text-muted">{c.note}</span>}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="mt-6">
            <p className="text-xs font-semibold tracking-[0.14em] text-muted uppercase">Popular tests</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {services.slice(0, 6).map((s) => {
                const Icon = serviceIcons[s.slug];
                return (
                  <li key={s.slug}>
                    <a
                      href={whatsappLink(`Hi EyeSetu, I'd like to book the ${s.title} at home.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-10 items-center gap-2 rounded-full bg-white px-3.5 text-sm font-medium text-navy-800 ring-1 ring-line active:bg-teal-50"
                    >
                      <Icon className="size-4 text-teal-600" aria-hidden />
                      {s.title.replace("Advanced ", "")}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="mt-6 mb-2 flex items-start gap-3 rounded-2xl bg-navy-50 p-4 text-sm text-navy-800 ring-1 ring-navy-100">
            <MapPin className="mt-0.5 size-4 shrink-0 text-teal-600" aria-hidden />
            <span>
              <span className="block font-semibold">Home visits across Delhi &amp; Gurgaon</span>
              <span className="text-muted">{contact.address}</span>
            </span>
          </div>
        </nav>

        <div className="space-y-3 border-t border-line bg-white px-4 pt-4 pb-[max(1rem,env(safe-area-inset-bottom))]">
          <Button href={whatsappLink()} size="lg" className="w-full">
            <WhatsAppIcon className="size-5" />
            Book on WhatsApp
          </Button>
          <Button href={telLink} variant="secondary" size="lg" className="w-full">
            <Phone className="size-5" aria-hidden />
            Call {contact.phoneDisplay}
          </Button>
        </div>
      </div>
    </div>
  );
}
