import { Check, Clock, Heart, Home, Hospital, X } from "lucide-react";
import { comparison, pillars } from "@/content/site";
import { cn } from "@/lib/cn";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { EyeMark } from "@/components/brand/EyeMark";

const pillarIcons = { home: Home, clock: Clock, heart: Heart };

export function Comparison() {
  const last = comparison.length - 1;

  return (
    <section className="pb-20 lg:pb-28" aria-labelledby="compare-title">
      <Container>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            id="compare-title"
            eyebrow="The EyeSetu difference"
            title="Same quality of care. None of the hassle."
          />
          <Reveal className="flex flex-wrap gap-2">
            {pillars.map((p) => {
              const Icon = pillarIcons[p.icon];
              return (
                <span
                  key={p.title}
                  className="inline-flex items-center gap-2 rounded-full bg-white py-2 pr-4 pl-2 text-sm font-semibold text-navy-800 shadow-soft ring-1 ring-line"
                >
                  <span className="grid size-7 place-items-center rounded-full bg-teal-50 text-teal-700">
                    <Icon className="size-3.5" aria-hidden />
                  </span>
                  {p.title}
                </span>
              );
            })}
          </Reveal>
        </div>

        {/* Desktop table */}
        <Reveal className="mt-12 hidden md:block">
          <div role="table" aria-label="Hospital visit compared with EyeSetu at home" className="grid grid-cols-[0.8fr_1fr_1.1fr]">
            <div role="row" className="contents">
              <span role="columnheader" className="sr-only">
                Aspect
              </span>
              <span aria-hidden className="border-b border-line" />
              <span
                role="columnheader"
                className="flex items-center gap-2.5 border-b border-line px-6 pb-5 font-display text-lg font-semibold text-muted"
              >
                <Hospital className="size-5" aria-hidden />
                Hospital visit
              </span>
              <span
                role="columnheader"
                className="flex items-center gap-2.5 rounded-t-[1.75rem] bg-navy-900 px-7 pt-6 pb-5 font-display text-lg font-semibold text-white"
              >
                <EyeMark className="w-7 text-teal-300" strokeWidth={2.2} />
                EyeSetu at home
              </span>
            </div>

            {comparison.map((row, i) => (
              <div role="row" key={row.label} className="contents">
                <span
                  role="rowheader"
                  className={cn("flex items-center py-5 pr-4 font-semibold text-navy-900", i < last && "border-b border-line")}
                >
                  {row.label}
                </span>
                <span
                  role="cell"
                  className={cn("flex items-center gap-3 px-6 py-5 text-muted", i < last && "border-b border-line")}
                >
                  <span className="grid size-6 shrink-0 place-items-center rounded-full bg-sand text-muted">
                    <X className="size-3.5" strokeWidth={2.5} aria-hidden />
                  </span>
                  {row.hospital}
                </span>
                <span
                  role="cell"
                  className={cn(
                    "flex items-center gap-3 bg-navy-900 px-7 py-5 font-medium text-white",
                    i < last ? "border-b border-white/10" : "rounded-b-[1.75rem] pb-7",
                  )}
                >
                  <span className="grid size-6 shrink-0 place-items-center rounded-full bg-teal-500 text-white">
                    <Check className="size-3.5" strokeWidth={3} aria-hidden />
                  </span>
                  {row.eyesetu}
                </span>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Mobile: one compact card */}
        <Reveal className="mt-10 overflow-hidden rounded-3xl bg-white shadow-soft ring-1 ring-line md:hidden">
          <div className="flex items-center justify-between bg-navy-900 px-5 py-3.5 text-sm font-semibold text-white">
            <span className="flex items-center gap-2">
              <EyeMark className="w-5 text-teal-300" strokeWidth={2.4} />
              EyeSetu at home
            </span>
            <span className="text-white/50">vs hospital</span>
          </div>
          <ul className="divide-y divide-line">
            {comparison.map((row) => (
              <li key={row.label} className="px-5 py-4">
                <p className="text-xs font-semibold tracking-[0.12em] text-muted uppercase">{row.label}</p>
                <p className="mt-2 flex items-start gap-2.5 font-semibold text-navy-900">
                  <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-teal-600 text-white">
                    <Check className="size-3" strokeWidth={3} aria-hidden />
                  </span>
                  <span>
                    <span className="sr-only">EyeSetu at home: </span>
                    {row.eyesetu}
                  </span>
                </p>
                <p className="mt-1 pl-[1.875rem] text-sm text-muted line-through decoration-muted/40">
                  <span className="sr-only">Hospital visit: </span>
                  {row.hospital}
                </p>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
