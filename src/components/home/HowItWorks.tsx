import { CalendarCheck } from "lucide-react";
import { steps } from "@/content/site";
import { whatsappLink } from "@/lib/links";
import { Container } from "@/components/ui/Container";
import { Photo } from "@/components/ui/Photo";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WhatsAppIcon } from "@/components/brand/BrandIcons";

/** The "setu" (bridge) arc joining one step number to the next. */
function BridgeArc() {
  return (
    <svg
      viewBox="0 0 100 20"
      preserveAspectRatio="none"
      className="absolute top-1/2 left-14 h-5 w-[calc(100%-3rem)] -translate-y-full text-teal-300"
      aria-hidden
    >
      <path d="M2 18 Q50 -4 98 18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 5" vectorEffect="non-scaling-stroke" />
    </svg>
  );
}

function BookTile() {
  return (
    <div className="flex h-full flex-col justify-between bg-gradient-to-br from-teal-600 to-navy-700 p-5 text-white">
      <CalendarCheck className="size-8 text-teal-100" aria-hidden />
      <div className="space-y-2">
        <div className="flex items-center gap-2 rounded-xl bg-white/15 px-3 py-2 text-sm backdrop-blur">
          <WhatsAppIcon className="size-4" />
          <span className="truncate">Book eye test</span>
        </div>
        <div className="ml-auto w-fit rounded-xl bg-white px-3 py-2 text-sm font-medium text-navy-900">Slot confirmed ✓</div>
      </div>
    </div>
  );
}

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 lg:py-28" aria-labelledby="how-title">
      <Container>
        <SectionHeading
          id="how-title"
          align="center"
          eyebrow="How it works"
          title="From booking to diagnosis, in one easy visit."
          lede="Five simple steps. No queues, no travel, no second trip for your report."
        />

        {/* Desktop: five columns bridged by arcs */}
        <ol className="mt-16 hidden gap-6 lg:grid lg:grid-cols-5">
          {steps.map((step, i) => (
            <Reveal as="li" key={step.title} delay={i * 90} className="relative">
              <div className="relative mb-6 h-12">
                <span className="relative z-10 grid size-12 place-items-center rounded-full bg-white font-display text-lg font-semibold text-teal-700 shadow-soft ring-1 ring-teal-100">
                  {i + 1}
                </span>
                {i < steps.length - 1 && <BridgeArc />}
              </div>
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-navy-100">
                {step.image ? (
                  <Photo
                    src={step.image}
                    alt={step.imageAlt ?? ""}
                    fill
                    sizes="240px"
                    className="object-cover"
                    style={{ objectPosition: step.imagePosition }}
                  />
                ) : (
                  <BookTile />
                )}
              </div>
              <h3 className="mt-5 text-lg font-semibold">{step.title}</h3>
              <p className="mt-1.5 text-[0.95rem] leading-relaxed text-muted">{step.body}</p>
            </Reveal>
          ))}
        </ol>

        {/* Mobile & tablet: vertical timeline */}
        <ol className="mt-12 lg:hidden">
          {steps.map((step, i) => (
            <Reveal as="li" key={step.title} className="relative grid grid-cols-[3rem_1fr] gap-4 pb-10 last:pb-0">
              {i < steps.length - 1 && (
                <span className="absolute top-12 bottom-0 left-6 w-px -translate-x-1/2 border-l-2 border-dashed border-teal-200" aria-hidden />
              )}
              <span className="relative grid size-12 place-items-center rounded-full bg-white font-display text-lg font-semibold text-teal-700 shadow-soft ring-1 ring-teal-100">
                {i + 1}
              </span>
              <div className="pt-2">
                <h3 className="text-lg font-semibold">{step.title}</h3>
                <p className="mt-1 leading-relaxed text-muted">{step.body}</p>
                {step.image && (
                  <div className="relative mt-4 aspect-[16/10] overflow-hidden rounded-2xl bg-navy-100">
                    <Photo src={step.image} alt={step.imageAlt ?? ""} fill sizes="(min-width: 640px) 80vw, 90vw" className="object-cover" />
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </ol>

        <Reveal className="mt-14 flex justify-center">
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-white py-2 pr-5 pl-2 font-medium text-navy-800 shadow-soft ring-1 ring-line transition-shadow hover:shadow-lift"
          >
            <span className="grid size-9 place-items-center rounded-full bg-teal-600 text-white">
              <WhatsAppIcon className="size-[1.1rem]" />
            </span>
            Step 1 takes a minute. Book on WhatsApp
          </a>
        </Reveal>
      </Container>
    </section>
  );
}
