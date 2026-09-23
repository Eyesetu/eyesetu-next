import { ArrowUpRight } from "lucide-react";
import { services, type Service } from "@/content/site";
import { whatsappLink } from "@/lib/links";
import { serviceIcons } from "@/lib/serviceIcons";
import { cn } from "@/lib/cn";
import { Button } from "@/components/ui/Button";
import { Chip } from "@/components/ui/Chip";
import { Container } from "@/components/ui/Container";
import { Photo } from "@/components/ui/Photo";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WhatsAppIcon } from "@/components/brand/BrandIcons";

/** Bento layout slots for the four photo cards (desktop). */
const photoLayout: Record<string, string> = {
  retina: "lg:col-span-2 lg:row-span-2",
  glaucoma: "lg:col-span-2",
  basic: "",
  kids: "",
};

const bookHref = (s: Service) => whatsappLink(`Hi EyeSetu, I'd like to book the ${s.title} at home.`);

function PhotoCard({ service, large }: { service: Service; large?: boolean }) {
  return (
    <a
      href={bookHref(service)}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex h-full min-h-[400px] flex-col justify-end overflow-hidden rounded-[1.75rem] bg-navy-900 p-6 text-white sm:min-h-[340px] lg:min-h-0 lg:p-7"
    >
      <Photo
        src={service.image!}
        alt={service.imageAlt ?? ""}
        fill
        sizes={large ? "(min-width: 1024px) 620px, 100vw" : "(min-width: 1024px) 310px, (min-width: 640px) 50vw, 100vw"}
        className="object-cover transition-transform duration-700 ease-out-soft group-hover:scale-[1.04]"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-navy-950/95 via-navy-950/45 to-navy-950/0"
        aria-hidden
      />
      {service.tag && (
        <Chip tone="marigold" className="absolute top-5 left-5 bg-marigold-100/95 lg:top-6 lg:left-6">
          {service.tag}
        </Chip>
      )}
      <span
        className="absolute top-5 right-5 grid size-10 place-items-center rounded-full bg-white/15 ring-1 ring-white/25 backdrop-blur-md transition-colors group-hover:bg-teal-600 lg:top-6 lg:right-6"
        aria-hidden
      >
        <ArrowUpRight className="size-[1.1rem]" />
      </span>

      <div className="relative">
        <h3 className={cn("font-semibold text-white", large ? "text-2xl sm:text-[1.75rem]" : "text-xl")}>
          {service.title}
        </h3>
        <p className="mt-2 max-w-md text-[0.975rem] leading-relaxed text-white/80">{service.summary}</p>
        <ul className={cn("mt-4 flex flex-wrap gap-1.5", !large && "lg:hidden xl:flex")}>
          {service.tests.slice(0, large ? 6 : 3).map((t) => (
            <li key={t}>
              <Chip tone="dark" className="backdrop-blur-sm">
                {t}
              </Chip>
            </li>
          ))}
        </ul>
      </div>
    </a>
  );
}

function CompactCard({ service }: { service: Service }) {
  const Icon = serviceIcons[service.slug];
  return (
    <a
      href={bookHref(service)}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex h-full flex-col rounded-[1.5rem] bg-canvas p-4 ring-1 ring-line sm:rounded-[1.75rem] sm:p-6 transition-[box-shadow,transform,background-color] duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-lift"
    >
      <div className="flex items-start justify-between">
        <span className="grid size-10 place-items-center rounded-xl bg-white text-navy-600 sm:size-12 sm:rounded-2xl ring-1 ring-line transition-colors group-hover:bg-teal-600 group-hover:text-white group-hover:ring-teal-600">
          <Icon className="size-[1.35rem]" aria-hidden />
        </span>
        <ArrowUpRight
          className="hidden size-5 text-navy-300 transition-[color,transform] sm:block group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-teal-600"
          aria-hidden
        />
      </div>
      <h3 className="mt-4 text-base leading-snug font-semibold sm:mt-5 sm:text-lg">{service.title}</h3>
      <p className="mt-1.5 text-sm leading-relaxed text-muted sm:text-[0.95rem]">{service.summary}</p>
      <ul className="mt-auto hidden flex-wrap gap-1.5 pt-5 sm:flex">
        {service.tests.map((t) => (
          <li key={t}>
            <Chip tone="sand">{t}</Chip>
          </li>
        ))}
      </ul>
    </a>
  );
}

export function Services() {
  const photo = services.filter((s) => s.image);
  const compact = services.filter((s) => !s.image);

  return (
    <section id="services" className="bg-white py-20 lg:py-28" aria-labelledby="services-title">
      <Container>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            id="services-title"
            eyebrow="Tests we bring home"
            title="Hospital-grade eye tests, without the hospital."
            lede="Every visit includes the tests, a digital report and a video consult with an eye specialist."
          />
          <Reveal className="shrink-0">
            <Button href={whatsappLink("Hi EyeSetu, which eye test is right for me?")} variant="secondary">
              <WhatsAppIcon className="size-[1.1rem] text-teal-600" />
              Not sure? Ask us
            </Button>
          </Reveal>
        </div>

        {/* Swipeable row on phones, bento grid from tablet up */}
        <div className="snap-row -mx-4 mt-10 flex scroll-px-4 gap-3 overflow-x-auto px-4 pb-1 sm:mx-0 sm:mt-12 sm:grid sm:grid-cols-2 sm:gap-4 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-4 lg:grid-rows-[300px_300px] lg:gap-5">
          {photo.map((s, i) => (
            <Reveal key={s.slug} delay={i * 70} className={cn("w-[82%] shrink-0 sm:w-auto", photoLayout[s.slug])}>
              <PhotoCard service={s} large={s.slug === "retina" || s.slug === "glaucoma"} />
            </Reveal>
          ))}
        </div>

        <div className="mt-4 grid grid-cols-2 gap-3 sm:gap-4 lg:mt-5 lg:grid-cols-4 lg:gap-5">
          {compact.map((s, i) => (
            <Reveal key={s.slug} delay={i * 70}>
              <CompactCard service={s} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
