import { problem } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { Photo } from "@/components/ui/Photo";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CrisisStats } from "./CrisisStats";

export function ProblemSolution() {
  return (
    <section className="py-20 lg:py-28" aria-labelledby="problem-title">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <SectionHeading id="problem-title" eyebrow={problem.eyebrow} title={problem.title} />

            <ol className="mt-10 space-y-8">
              {problem.points.map((p, i) => (
                <Reveal as="li" key={p.title} delay={i * 90} className="grid grid-cols-[auto_1fr] gap-5">
                  <span className="font-display text-sm font-semibold text-teal-600 tabular-nums">0{i + 1}</span>
                  <div className="border-t border-line pt-4">
                    <h3 className="text-xl font-semibold">{p.title}</h3>
                    <p className="mt-2 leading-relaxed text-muted">{p.body}</p>
                  </div>
                </Reveal>
              ))}
            </ol>

            <Reveal delay={200} className="mt-10 flex gap-4 rounded-3xl bg-white p-6 shadow-soft ring-1 ring-line">
              <span className="w-1 shrink-0 rounded-full bg-marigold-500" aria-hidden />
              <p className="font-display text-lg leading-snug font-medium text-navy-900">
                In India, millions lose vision every year because they don&apos;t get tested early enough.
                <span className="mt-2 block font-sans text-[0.95rem] font-normal text-muted">
                  Regular screening catches disease before symptoms, and before damage becomes irreversible.
                </span>
              </p>
            </Reveal>
          </div>

          <Reveal className="lg:col-span-6">
            <figure className="relative">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-navy-100 sm:aspect-[5/4] lg:aspect-[4/5]">
                <Photo
                  src="/images/elder-home-exam.jpg"
                  alt="An optometrist checking an elderly woman's eyes in her home"
                  fill
                  sizes="(min-width: 1024px) 560px, 100vw"
                  className="object-cover object-[center_35%]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-950/10 to-transparent" aria-hidden />
              </div>
              <figcaption className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                <p className="font-display text-2xl font-semibold text-white sm:text-3xl">{problem.solution.title}</p>
                <p className="mt-3 max-w-md leading-relaxed text-white/80">{problem.solution.body}</p>
              </figcaption>
            </figure>
          </Reveal>
        </div>

        <CrisisStats />
      </Container>
    </section>
  );
}
