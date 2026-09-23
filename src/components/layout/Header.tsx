"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowRight, ChevronDown, Handshake, MapPin, Menu, Phone } from "lucide-react";
import { nav, services } from "@/content/site";
import { resolveHref, telLink, whatsappLink } from "@/lib/links";
import { serviceIcons } from "@/lib/serviceIcons";
import { cn } from "@/lib/cn";
import { Logo } from "@/components/brand/Logo";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Photo } from "@/components/ui/Photo";
import { WhatsAppIcon } from "@/components/brand/BrandIcons";
import { MobileMenu } from "./MobileMenu";

const linkClass =
  "flex items-center gap-1 rounded-full px-4 py-2 text-[0.95rem] font-medium text-ink-soft transition-colors hover:bg-navy-50 hover:text-navy-700";

/** Hover / keyboard-focus dropdown panel shared by the desktop menus. */
function Dropdown({
  label,
  panelClass,
  children,
}: {
  label: string;
  panelClass: string;
  children: React.ReactNode;
}) {
  return (
    <li className="group relative">
      <button type="button" className={linkClass} aria-haspopup="true">
        {label}
        <ChevronDown className="size-4 transition-transform duration-200 group-focus-within:rotate-180 group-hover:rotate-180" />
      </button>
      <div
        className={cn(
          "invisible absolute top-full translate-y-1 pt-3 opacity-0 transition-all duration-200",
          "group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100",
          "group-hover:visible group-hover:translate-y-0 group-hover:opacity-100",
          panelClass,
        )}
      >
        <div className="rounded-3xl bg-white p-2 shadow-lift ring-1 ring-line">{children}</div>
      </div>
    </li>
  );
}

function ServicesMenu() {
  return (
    <Dropdown label="Services" panelClass="left-0 w-[760px] -translate-x-16">
      <div className="grid grid-cols-[1fr_240px] gap-2">
        <ul className="grid grid-cols-2 gap-1 p-1">
          {services.map((s) => {
            const Icon = serviceIcons[s.slug];
            return (
              <li key={s.slug}>
                <Link href="/#services" className="group/item flex gap-3 rounded-2xl p-3 transition-colors hover:bg-teal-50">
                  <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-navy-50 text-navy-600 transition-colors group-hover/item:bg-teal-600 group-hover/item:text-white">
                    <Icon className="size-[1.15rem]" aria-hidden />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[0.95rem] font-semibold text-navy-900">{s.title}</span>
                    <span className="line-clamp-1 text-[0.8125rem] text-muted">{s.summary}</span>
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="group/card relative flex min-h-full flex-col justify-end overflow-hidden rounded-[1.25rem] p-5 text-white"
        >
          <Photo src="/images/kit-portable.jpg" alt="" fill sizes="240px" className="object-cover" />
          <span className="absolute inset-0 bg-gradient-to-t from-navy-950/95 via-navy-950/40 to-transparent" aria-hidden />
          <span className="relative">
            <span className="block font-display text-lg leading-snug font-semibold">A full eye clinic, at your home</span>
            <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-teal-200">
              Book on WhatsApp
              <ArrowRight className="size-4 transition-transform group-hover/card:translate-x-0.5" aria-hidden />
            </span>
          </span>
        </a>
      </div>
    </Dropdown>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const progressRef = useRef<HTMLDivElement>(null);
  const closeMenu = useCallback(() => setMenuOpen(false), []);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setScrolled(window.scrollY > 8);
      if (progressRef.current) {
        progressRef.current.style.transform = `scaleX(${max > 0 ? Math.min(window.scrollY / max, 1) : 0})`;
      }
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-40 border-b transition-[background-color,border-color,box-shadow] duration-300",
          scrolled
            ? "border-line/80 bg-white/95 shadow-[0_8px_24px_-18px_rgb(15_46_69/0.35)] backdrop-blur-xl"
            : "border-transparent bg-canvas",
        )}
      >
        <Container className="flex h-[4.25rem] items-center justify-between gap-4 lg:h-[4.75rem]">
          <Link href="/" className="shrink-0 rounded-lg" aria-label="EyeSetu home">
            <Logo className="w-[140px] sm:w-[152px] xl:w-[184px]" />
          </Link>

          <nav aria-label="Main" className="hidden lg:block">
            <ul className="flex items-center gap-0.5">
              {nav.map((item) => {
                if (item.label === "Services") return <ServicesMenu key={item.label} />;
                if (item.children) {
                  const Icon = item.label === "Locations" ? MapPin : Handshake;
                  return (
                    <Dropdown key={item.label} label={item.label} panelClass="left-1/2 w-72 -translate-x-1/2">
                      <ul>
                        {item.children.map((child) => (
                          <li key={child.label}>
                            <Link
                              href={child.href}
                              className="group/item flex items-center gap-3 rounded-2xl px-3 py-3 hover:bg-teal-50"
                            >
                              <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-navy-50 text-navy-600 transition-colors group-hover/item:bg-teal-600 group-hover/item:text-white">
                                <Icon className="size-[1.1rem]" aria-hidden />
                              </span>
                              <span className="flex-1">
                                <span className="block text-[0.95rem] font-semibold text-navy-900">{child.label}</span>
                                {child.note && <span className="block text-[0.8125rem] text-muted">{child.note}</span>}
                              </span>
                              <ArrowRight
                                className="size-4 text-teal-600 transition-transform group-hover/item:translate-x-0.5"
                                aria-hidden
                              />
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </Dropdown>
                  );
                }
                return (
                  <li key={item.label}>
                    <Link href={resolveHref(item.href)} className={linkClass}>
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            {/* Wrappers own the responsive display: Button's own `inline-flex` would override `hidden`. */}
            <div className="hidden xl:block">
              <Button href={telLink} variant="ghost">
                <Phone className="size-4" aria-hidden />
                Call us
              </Button>
            </div>
            <div className="hidden sm:block">
              <Button href={whatsappLink()}>
                <WhatsAppIcon className="size-[1.1rem]" />
                Book home eye test
              </Button>
            </div>

            <a
              href={telLink}
              className="grid size-11 place-items-center rounded-full bg-teal-50 text-teal-700 ring-1 ring-teal-100 sm:hidden"
              aria-label="Call EyeSetu"
            >
              <Phone className="size-5" />
            </a>
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              className="grid size-11 place-items-center rounded-full text-navy-800 ring-1 ring-line hover:bg-navy-50 lg:hidden"
              aria-label="Open menu"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
            >
              <Menu className="size-5" />
            </button>
          </div>
        </Container>

        {/* Reading progress */}
        <div
          ref={progressRef}
          className="absolute inset-x-0 -bottom-px h-0.5 origin-left scale-x-0 bg-gradient-to-r from-teal-500 to-navy-500"
          aria-hidden
        />
      </header>

      <MobileMenu open={menuOpen} onClose={closeMenu} />
    </>
  );
}
