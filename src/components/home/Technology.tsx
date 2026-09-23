import { Activity, Brain, Check, ScanEye } from "lucide-react";
import { technology } from "@/content/site";
import { Chip } from "@/components/ui/Chip";
import { Container } from "@/components/ui/Container";
import { Photo } from "@/components/ui/Photo";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { EyeMark } from "@/components/brand/EyeMark";
import { WhatsAppIcon } from "@/components/brand/BrandIcons";

const icons = { brain: Brain, scan: ScanEye, activity: Activity };

const reportRows = [
  ["Vision test", "Done"],
  ["Eye pressure (IOP)", "Done"],
  ["Fundus imaging", "AI reviewed"],
  ["Specialist consult", "Completed"],
] as const;

/** Illustrative digital report: shows what families receive, with no patient data. */
function ReportCard() {
  return (
    <div className="rounded-[1.5rem] bg-white p-4 text-ink shadow-glass sm:p-5">
      <div className="flex items-center justify-between gap-2">
        <span className="flex items-center gap-2 font-display text-sm font-semibold text-navy-900 sm:text-[0.95rem]">
          <EyeMark className="w-5 text-navy-600" strokeWidth={2.4} />
          Eye report
        </span>
        <span className="rounded-full bg-sand px-2 py-0.5 text-[0.65rem] font-semibold tracking-wide text-muted uppercase">
          Sample
        </span>
      </div>
      <ul className="mt-3 space-y-2 sm:mt-4 sm:space-y-2.5">
        {reportRows.map(([test, status]) => (
          <li key={test} className="flex items-center justify-between gap-2 text-[0.8rem] sm:text-sm">
            <span className="flex items-center gap-2 text-ink">
              <span className="grid size-4 shrink-0 place-items-center rounded-full bg-teal-100 text-teal-700">
                <Check className="size-2.5" strokeWidth={3.5} aria-hidden />
              </span>
              {test}
            </span>
            <span className="font-medium whitespace-nowrap text-teal-700">{status}</span>
          </li>
        ))}
      </ul>
      <p className="mt-3 flex items-center gap-2 border-t border-line pt-3 text-[0.8rem] font-medium text-navy-800 sm:mt-4 sm:text-sm">
        <WhatsAppIcon className="size-4 text-teal-600" />
        Shared to your phone
      </p>
    </div>
  );
}

export function Technology() {
  return (
    <section className="relative isolate overflow-hidden bg-navy-950 py-20 text-white lg:py-28" aria-labelledby="tech-title">
      <EyeMark className="pointer-events-none absolute top-10 -left-40 -z-10 w-[720px] text-white/[0.04]" strokeWidth={0.8} />
      <div
        className="pointer-events-none absolute -right-40 -bottom-40 -z-10 size-[640px] rounded-full bg-[radial-gradient(closest-side,rgb(30_131_114/0.28),transparent)]"
        aria-hidden
      />

      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <SectionHeading
              id="tech-title"
              tone="dark"
              eyebrow={technology.eyebrow}
              title={technology.title}
              lede={technology.lede}
            />
            <Reveal delay={120}>
              <ul className="mt-8 flex flex-wrap gap-2">
                {technology.equipment.map((e) => (
                  <li key={e}>
                    <Chip tone="dark" className="px-3.5 py-1.5 text-sm">
                      <span className="size-1.5 rounded-full bg-teal-400" aria-hidden />
                      {e}
                    </Chip>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal className="relative sm:mb-10 lg:col-span-6 lg:mb-0">
            <div className="relative aspect-[5/4] overflow-hidden rounded-[1.75rem] ring-1 ring-white/10">
              <Photo
                src="/images/kit-portable.jpg"
                alt="EyeSetu's portable fundus camera and tonometer in their carry case"
                fill
                sizes="(min-width: 1024px) 600px, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-navy-950/50 via-transparent to-transparent" aria-hidden />
            </div>
            <div className="relative z-10 -mt-16 ml-3 w-[80%] max-w-[300px] sm:absolute sm:-bottom-10 sm:-left-6 sm:mt-0 sm:ml-0 sm:w-[68%]">
              <ReportCard />
            </div>
            <div className="absolute -top-5 right-3 w-[38%] max-w-[190px] rounded-[1.25rem] bg-teal-600 p-4 shadow-glass sm:-right-5 sm:p-5">
              <p className="font-display text-3xl font-semibold tracking-tight sm:text-5xl">95%</p>
              <p className="mt-1 text-xs leading-snug text-teal-50 sm:text-sm">AI accuracy matching specialist diagnosis</p>
            </div>
          </Reveal>
        </div>

        <div className="mt-20 grid gap-4 md:grid-cols-3 lg:mt-24 lg:gap-5">
          {technology.features.map((f, i) => {
            const Icon = icons[f.icon as keyof typeof icons];
            return (
              <Reveal key={f.title} delay={i * 90}>
                <div className="h-full rounded-[1.75rem] bg-white/[0.04] p-7 ring-1 ring-white/10 transition-colors hover:bg-white/[0.07]">
                  <span className="grid size-12 place-items-center rounded-2xl bg-teal-500/15 text-teal-300 ring-1 ring-teal-400/20">
                    <Icon className="size-[1.35rem]" aria-hidden />
                  </span>
                  <h3 className="mt-6 text-xl font-semibold text-white">{f.title}</h3>
                  <p className="mt-2 leading-relaxed text-white/65">{f.body}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
