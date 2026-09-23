"use client";

import { useState } from "react";
import { ArrowRight, Baby, Check, Globe2, Video } from "lucide-react";
import { audiences } from "@/content/site";
import { whatsappLink } from "@/lib/links";
import { cn } from "@/lib/cn";
import { Container } from "@/components/ui/Container";
import { Photo } from "@/components/ui/Photo";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WhatsAppIcon } from "@/components/brand/BrandIcons";

type TabKey = "nri" | "kids";
const tabs: { key: TabKey; icon: typeof Globe2 }[] = [
  { key: "nri", icon: Globe2 },
  { key: "kids", icon: Baby },
];

function Points({ points }: { points: { title: string; body: string }[] }) {
  return (
    <ul className="mt-7 grid gap-x-6 gap-y-5 sm:grid-cols-2">
      {points.map((p) => (
        <li key={p.title} className="flex gap-3">
          <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-teal-100 text-teal-700">
            <Check className="size-3.5" strokeWidth={3} aria-hidden />
          </span>
          <span>
            <span className="block font-semibold text-navy-900">{p.title}</span>
            <span className="mt-0.5 block text-[0.95rem] leading-relaxed text-muted">{p.body}</span>
          </span>
        </li>
      ))}
    </ul>
  );
}

function Cta({ label, message, note }: { label: string; message: string; note: string }) {
  return (
    <div className="mt-8">
      <a
        href={whatsappLink(message)}
        target="_blank"
        rel="noopener noreferrer"
        className="group inline-flex h-13 items-center gap-2 rounded-full bg-teal-600 px-6 font-semibold text-white shadow-[0_6px_16px_-6px_rgb(30_131_114/0.6)] transition-colors hover:bg-teal-700 sm:h-14"
      >
        <WhatsAppIcon className="size-5" />
        {label}
        <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
      </a>
      <p className="mt-3 text-sm text-muted">{note}</p>
    </div>
  );
}

function NriPanel() {
  const a = audiences.nri;
  return (
    <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
      <div className="lg:col-span-7">
        <h3 className="text-2xl font-semibold sm:text-3xl">{a.title}</h3>
        <p className="mt-4 text-lg leading-relaxed text-muted">{a.body}</p>
        <Points points={a.points} />
        <ul className="mt-7 flex flex-wrap gap-2">
          {a.tags.map((t) => (
            <li key={t} className="rounded-full bg-white px-3 py-1.5 text-sm font-medium text-navy-700 ring-1 ring-line">
              {t}
            </li>
          ))}
        </ul>
        <Cta label={a.cta} message={a.ctaMessage} note={a.note} />
      </div>

      <div className="relative lg:col-span-5">
        <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-navy-100 shadow-lift sm:aspect-[5/4] lg:aspect-[4/5]">
          <Photo src={a.image} alt={a.imageAlt} fill sizes="(min-width: 1024px) 460px, 100vw" className="object-cover object-[28%_center]" />
        </div>
        {/* Family abroad joins live */}
        <div className="absolute right-3 -bottom-6 left-3 flex items-center gap-3 rounded-2xl bg-white/95 p-3.5 shadow-glass ring-1 ring-line backdrop-blur-md sm:right-auto sm:-left-6 sm:max-w-[320px]">
          <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-navy-900 text-teal-300">
            <Video className="size-5" aria-hidden />
          </span>
          <span>
            <span className="block font-display text-[0.95rem] font-semibold text-navy-900">You join the consult live</span>
            <span className="block text-[0.85rem] leading-snug text-muted">On video, from any country and time zone</span>
          </span>
        </div>
      </div>
    </div>
  );
}

function KidsPanel() {
  const a = audiences.kids;
  return (
    <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-14">
      <div className="lg:col-span-7">
        <h3 className="text-2xl font-semibold sm:text-3xl">{a.title}</h3>
        <p className="mt-4 text-lg leading-relaxed text-muted">{a.body}</p>
        <Points points={a.points} />
        <Cta label={a.cta} message={a.ctaMessage} note={a.note} />
      </div>

      <div className="lg:col-span-5">
        <div className="relative aspect-[5/4] overflow-hidden rounded-[2rem] bg-navy-100 shadow-lift">
          <Photo src={a.image} alt={a.imageAlt} fill sizes="(min-width: 1024px) 460px, 100vw" className="object-cover object-[center_30%]" />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-950/90 to-transparent p-5 pt-16">
            <p className="font-display text-3xl font-semibold text-white">{a.stat.value}</p>
            <p className="max-w-xs text-sm leading-snug text-white/85">{a.stat.label}</p>
          </div>
        </div>

        {/* Clinic vs home, for a child's eye test */}
        <table className="mt-4 w-full overflow-hidden rounded-2xl bg-white text-left text-[0.95rem] shadow-soft ring-1 ring-line">
          <caption className="sr-only">Traditional clinic compared with EyeSetu at home</caption>
          <thead>
            <tr className="text-sm">
              <th scope="col" className="px-4 py-3 font-medium text-muted">
                <span className="sr-only">Aspect</span>
              </th>
              <th scope="col" className="px-4 py-3 font-medium text-muted">Clinic</th>
              <th scope="col" className="bg-teal-600 px-4 py-3 font-semibold text-white">EyeSetu</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-line">
            {a.compare.map((row) => (
              <tr key={row.label}>
                <th scope="row" className="px-4 py-3 font-medium text-navy-900">
                  {row.label}
                </th>
                <td className="px-4 py-3 text-muted">{row.clinic}</td>
                <td className="bg-teal-50 px-4 py-3 font-semibold text-teal-800">{row.home}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export function Audiences() {
  const [active, setActive] = useState<TabKey>("nri");

  return (
    <section id="families" className="py-20 lg:py-28" aria-labelledby="audiences-title">
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading id="audiences-title" eyebrow={audiences.eyebrow} title={audiences.title} lede={audiences.lede} />

          <Reveal className="shrink-0">
            <div role="tablist" aria-label="Who is the eye test for?" className="inline-flex rounded-full bg-white p-1.5 shadow-soft ring-1 ring-line">
              {tabs.map(({ key, icon: Icon }) => {
                const selected = active === key;
                return (
                  <button
                    key={key}
                    type="button"
                    role="tab"
                    id={`tab-${key}`}
                    aria-selected={selected}
                    aria-controls={`panel-${key}`}
                    onClick={() => setActive(key)}
                    className={cn(
                      "flex h-11 items-center gap-2 rounded-full px-4 text-[0.95rem] font-semibold transition-colors sm:px-5",
                      selected ? "bg-navy-900 text-white" : "text-muted hover:text-navy-800",
                    )}
                  >
                    <Icon className={cn("size-4", selected && "text-teal-300")} aria-hidden />
                    {audiences[key].tab}
                  </button>
                );
              })}
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-10 rounded-[2rem] bg-sand/60 p-5 ring-1 ring-line sm:p-8 lg:mt-12 lg:p-12">
          {tabs.map(({ key }) => (
            <div key={key} role="tabpanel" id={`panel-${key}`} aria-labelledby={`tab-${key}`} hidden={active !== key}>
              <p className="mb-4 inline-flex rounded-full bg-white px-3 py-1 text-xs font-semibold tracking-wide text-teal-700 uppercase ring-1 ring-teal-100">
                {audiences[key].tag}
              </p>
              {key === "nri" ? <NriPanel /> : <KidsPanel />}
            </div>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
