import { BadgeCheck, Stethoscope } from "lucide-react";
import { team } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { Photo } from "@/components/ui/Photo";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Team() {
  const [lead, ...others] = team;

  return (
    <section id="team" className="bg-white py-20 lg:py-28" aria-labelledby="team-title">
      <Container>
        <SectionHeading
          id="team-title"
          eyebrow="The people behind EyeSetu"
          title="Built by AIIMS doctors and IIM product leaders."
          lede="Clinical excellence and technology, working together so that quality eye care reaches every home."
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-12">
          {/* Featured founder: her portrait is high-resolution, so it can be shown large */}
          <Reveal className="lg:col-span-7">
            <article className="grid h-full overflow-hidden rounded-[1.75rem] bg-canvas ring-1 ring-line sm:grid-cols-[0.95fr_1.05fr]">
              <div className="relative aspect-[4/5] bg-navy-50 sm:aspect-auto sm:min-h-[420px]">
                <Photo
                  src={lead.image}
                  alt={`Portrait of ${lead.name}`}
                  fill
                  sizes="(min-width: 1024px) 360px, (min-width: 640px) 45vw, 100vw"
                  className="object-cover object-top"
                />
              </div>
              <div className="flex flex-col p-6 sm:p-8">
                <span className="w-fit rounded-full bg-teal-600 px-3 py-1 text-xs font-semibold tracking-wide text-white">
                  {lead.role}
                </span>
                <h3 className="mt-4 flex items-center gap-2 text-2xl font-semibold sm:text-[1.75rem]">
                  {lead.name}
                  <BadgeCheck className="size-6 text-teal-600" aria-label="Verified" />
                </h3>
                <p className="mt-3 leading-relaxed text-muted">{lead.bio}</p>
                <ul className="mt-6 space-y-2.5 border-t border-line pt-6">
                  {lead.creds.map((c) => (
                    <li key={c} className="flex items-center gap-2.5 text-[0.95rem] font-medium text-navy-800">
                      <span className="size-1.5 shrink-0 rounded-full bg-teal-500" aria-hidden />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </Reveal>

          <div className="grid gap-5 lg:col-span-5">
            {others.map((m, i) => (
              <Reveal key={m.name} delay={(i + 1) * 90}>
                <article className="flex h-full flex-col rounded-[1.75rem] bg-canvas p-6 ring-1 ring-line">
                  <div className="flex items-center gap-4">
                    <div className="relative size-20 shrink-0 overflow-hidden rounded-2xl bg-navy-100 ring-4 ring-white">
                      <Photo src={m.avatar} alt={`Portrait of ${m.name}`} fill sizes="80px" className="object-cover object-top" />
                    </div>
                    <div>
                      <h3 className="flex items-center gap-1.5 text-xl font-semibold">
                        {m.name}
                        <BadgeCheck className="size-5 text-teal-600" aria-label="Verified" />
                      </h3>
                      <p className="text-[0.95rem] font-medium text-teal-700">{m.role}</p>
                    </div>
                  </div>
                  <p className="mt-4 text-[0.95rem] leading-relaxed text-muted">{m.bio}</p>
                  <ul className="mt-auto flex flex-wrap gap-1.5 pt-5">
                    {m.creds.map((c) => (
                      <li key={c} className="rounded-full bg-white px-3 py-1 text-[0.8rem] font-medium text-navy-700 ring-1 ring-line">
                        {c}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal className="mt-5">
          <p className="flex items-start gap-3 rounded-[1.5rem] bg-teal-50 p-5 text-[0.975rem] text-navy-900 ring-1 ring-teal-100 sm:items-center sm:px-6">
            <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-teal-600 text-white">
              <Stethoscope className="size-5" aria-hidden />
            </span>
            <span>
              <span className="font-semibold">Backed by super-specialist, AIIMS-trained ophthalmologists</span>{" "}
              <span className="text-muted">who review results live over tele-ophthalmology during your visit.</span>
            </span>
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
