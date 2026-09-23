import { Check, Phone } from "lucide-react";
import { surgiSetu } from "@/content/site";
import { telLink, whatsappLink } from "@/lib/links";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WhatsAppIcon } from "@/components/brand/BrandIcons";

export function SurgiSetu() {
  return (
    <section id="surgisetu" className="py-20 lg:py-28" aria-labelledby="surgi-title">
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading id="surgi-title" eyebrow={surgiSetu.eyebrow} title={surgiSetu.title} lede={surgiSetu.lede} />
          <Reveal delay={120} className="flex shrink-0 flex-col gap-3 sm:flex-row">
            <Button href={whatsappLink("Hi EyeSetu, I'd like to know about SurgiSetu surgery support.")}>
              <WhatsAppIcon className="size-[1.1rem]" />
              Talk to a care coordinator
            </Button>
            <Button href={telLink} variant="secondary">
              <Phone className="size-4" aria-hidden />
              Call us
            </Button>
          </Reveal>
        </div>

        <ol className="relative mt-12 grid gap-4 md:grid-cols-3 lg:gap-5">
          {surgiSetu.phases.map((phase, i) => (
            <Reveal
              as="li"
              key={phase.label}
              delay={i * 100}
              className="relative flex flex-col rounded-[1.75rem] bg-white p-7 shadow-soft ring-1 ring-line"
            >
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-navy-50 px-3 py-1 text-sm font-semibold text-navy-700 ring-1 ring-navy-100">
                  {phase.label}
                </span>
                <span className="font-display text-4xl font-semibold text-navy-100 tabular-nums">0{i + 1}</span>
              </div>
              <h3 className="mt-6 text-xl font-semibold">{phase.title}</h3>
              <ul className="mt-5 space-y-3.5">
                {phase.points.map((pt) => (
                  <li key={pt} className="flex items-start gap-3 text-[0.975rem] leading-snug text-ink">
                    <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-teal-100 text-teal-700">
                      <Check className="size-3" strokeWidth={3} aria-hidden />
                    </span>
                    {pt}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
