import { BadgeCheck, CreditCard, Lock, Quote, ShieldCheck, Stethoscope } from "lucide-react";
import { reviews, testimonials, trustBadges } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { Photo } from "@/components/ui/Photo";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Testimonials() {
  return (
    <section className="py-20 lg:py-28" aria-labelledby="stories-title">
      <Container>
        <SectionHeading
          id="stories-title"
          eyebrow="Patient stories"
          title="Real families. Real homes. Better vision."
        />
      </Container>

      <Container className="mt-10 px-0 sm:px-6 lg:px-8">
        <ul className="snap-row flex gap-4 overflow-x-auto scroll-px-4 px-4 pb-2 sm:px-0 md:grid md:grid-cols-3 md:gap-5 md:overflow-visible md:pb-0">
          {testimonials.map((t, i) => (
            <Reveal
              as="li"
              key={t.image}
              delay={i * 90}
              className="flex w-[84%] shrink-0 flex-col overflow-hidden rounded-[1.75rem] bg-white shadow-soft ring-1 ring-line sm:w-[60%] md:w-auto"
            >
              <figure className="flex h-full flex-col">
                <div className="relative aspect-[4/3] overflow-hidden bg-navy-100">
                  <Photo
                    src={t.image}
                    alt={`${t.name}, EyeSetu patient`}
                    fill
                    sizes="(min-width: 768px) 380px, 84vw"
                    className="object-cover object-[center_25%]"
                  />
                </div>
                <blockquote className="relative flex-1 px-6 pt-8 pb-2">
                  <span className="absolute -top-6 left-6 grid size-12 place-items-center rounded-2xl bg-teal-600 text-white shadow-soft">
                    <Quote className="size-5" aria-hidden />
                  </span>
                  <p className="text-[1.0625rem] leading-relaxed text-ink">&ldquo;{t.quote}&rdquo;</p>
                </blockquote>
                <figcaption className="px-6 pt-4 pb-6">
                  <span className="block font-display font-semibold text-navy-900">{t.name}</span>
                  <span className="block text-sm text-muted">{t.meta}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>
      </Container>

      {/* Verified-booking reviews + trust signals */}
      <Container className="mt-5">
        <ul className="snap-row -mx-4 flex scroll-px-4 gap-4 overflow-x-auto px-4 pb-2 sm:mx-0 sm:px-0 md:grid md:grid-cols-3 md:gap-5 md:overflow-visible md:pb-0">
          {reviews.map((r, i) => (
            <Reveal
              as="li"
              key={r.name}
              delay={i * 90}
              className="flex w-[86%] shrink-0 flex-col rounded-[1.75rem] bg-white p-6 ring-1 ring-line sm:w-[60%] md:w-auto"
            >
              <div className="flex items-center justify-between">
                <Quote className="size-6 text-teal-200" aria-hidden />
                <span className="inline-flex items-center gap-1 rounded-full bg-teal-50 px-2.5 py-1 text-xs font-semibold text-teal-700">
                  <BadgeCheck className="size-3.5" aria-hidden />
                  Verified booking
                </span>
              </div>
              <blockquote className="mt-4 flex-1 leading-relaxed text-ink">&ldquo;{r.quote}&rdquo;</blockquote>
              <p className="mt-5 flex items-center gap-3 border-t border-line pt-4">
                <span className="grid size-10 place-items-center rounded-full bg-navy-50 font-display text-sm font-semibold text-navy-700">
                  {r.name.slice(0, 1)}
                </span>
                <span>
                  <span className="block font-semibold text-navy-900">{r.name}</span>
                  <span className="block text-sm text-muted">{r.meta}</span>
                </span>
              </p>
            </Reveal>
          ))}
        </ul>

        <Reveal className="mt-8">
          <ul className="flex flex-col items-start gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-x-8">
            {trustBadges.map((b, i) => {
              const Icon = [Stethoscope, CreditCard, Lock][i] ?? ShieldCheck;
              return (
                <li key={b} className="flex items-center gap-2.5 text-[0.95rem] font-medium text-navy-800">
                  <span className="grid size-8 place-items-center rounded-full bg-white text-teal-600 ring-1 ring-line">
                    <Icon className="size-4" aria-hidden />
                  </span>
                  {b}
                </li>
              );
            })}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
