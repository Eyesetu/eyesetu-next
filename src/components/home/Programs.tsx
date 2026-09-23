import { programs } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { Photo } from "@/components/ui/Photo";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Programs() {
  return (
    <section className="pb-20 lg:pb-28" aria-labelledby="programs-title">
      <Container>
        <SectionHeading
          id="programs-title"
          eyebrow="Who we care for"
          title="Care that fits every stage of life."
          lede="From a child's first eye check to a grandparent's glaucoma follow-up, all at home."
        />
      </Container>

      {/* Horizontal snap row on phones; four-up grid on desktop */}
      <Container className="mt-10 px-0 sm:px-6 lg:px-8">
        <ul className="snap-row flex gap-4 overflow-x-auto scroll-px-4 px-4 pb-2 sm:px-0 lg:grid lg:grid-cols-4 lg:gap-5 lg:overflow-visible lg:pb-0">
          {programs.map((p, i) => (
            <Reveal
              as="li"
              key={p.title}
              delay={i * 80}
              className="group relative aspect-[3/4] w-[76%] shrink-0 overflow-hidden rounded-[1.75rem] bg-navy-900 sm:w-[44%] lg:w-auto"
            >
              <Photo
                src={p.image}
                alt={p.imageAlt}
                fill
                sizes="(min-width: 1024px) 300px, (min-width: 640px) 44vw, 76vw"
                className="object-cover transition-transform duration-700 ease-out-soft group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/20 to-transparent" aria-hidden />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <h3 className="text-2xl font-semibold text-white">{p.title}</h3>
                <p className="mt-1.5 leading-snug text-white/80">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
