import { Award, Check, Phone, Video } from "lucide-react";
import { contact, hero, plans, recognition, team } from "@/content/site";
import { telLink, whatsappLink } from "@/lib/links";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Photo } from "@/components/ui/Photo";
import { EyeMark } from "@/components/brand/EyeMark";
import { WhatsAppIcon } from "@/components/brand/BrandIcons";

const doctors = team.filter((m) => m.name.startsWith("Dr."));
const startingPrice = Math.min(...plans.map((p) => p.inr)).toLocaleString("en-IN");

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden" aria-labelledby="hero-title">
      {/* Dot grid, faded towards the edges */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(rgb(32_86_125/0.13)_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_70%_60%_at_70%_40%,black,transparent)] bg-[size:22px_22px]"
        aria-hidden
      />
      {/* Soft brand glow */}
      <div
        className="pointer-events-none absolute -top-40 right-[-10%] -z-10 size-[720px] rounded-full bg-[radial-gradient(closest-side,rgb(30_131_114/0.14),transparent)]"
        aria-hidden
      />

      <Container className="grid items-center gap-14 pt-8 pb-16 sm:pt-12 lg:grid-cols-12 lg:gap-10 lg:pt-14 lg:pb-20">
        {/* Copy */}
        <div className="lg:col-span-6">
          <p className="inline-flex items-center gap-2 rounded-full bg-white py-1.5 pr-4 pl-1.5 text-sm font-medium text-navy-800 shadow-soft ring-1 ring-line">
            <span className="grid size-6 place-items-center rounded-full bg-teal-600 text-white">
              <EyeMark className="w-3.5" strokeWidth={2.6} />
            </span>
            {hero.eyebrow}
          </p>

          <h1
            id="hero-title"
            className="mt-6 text-[2.6rem] leading-[1.05] font-semibold tracking-[-0.03em] sm:text-6xl lg:text-[4.25rem]"
          >
            {hero.title}{" "}
            <span className="relative inline-block text-teal-600">
              {hero.titleAccent}
              {/* "Setu" = bridge: an arc underline */}
              <svg
                viewBox="0 0 300 16"
                preserveAspectRatio="none"
                className="absolute -bottom-2 left-0 h-3 w-full text-teal-300"
                aria-hidden
              >
                <path d="M3 13 Q150 -6 297 13" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted sm:text-xl">{hero.lede}</p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button href={whatsappLink()} size="lg">
              <WhatsAppIcon className="size-5" />
              Book eye test at home
            </Button>
            <Button href={telLink} variant="secondary" size="lg">
              <Phone className="size-[1.1rem]" aria-hidden />
              {contact.phoneDisplay}
            </Button>
          </div>
          <p className="mt-4 text-[0.95rem] text-muted">
            Home eye tests from{" "}
            <a href="#pricing" className="font-semibold text-navy-900 underline decoration-teal-300 underline-offset-4">
              ₹{startingPrice}
            </a>{" "}
            · Specialist review included
          </p>

          {/* Who reviews your reports */}
          <div className="mt-10 flex items-center gap-4 border-t border-line pt-7">
            <ul className="flex shrink-0 -space-x-3" aria-hidden>
              {doctors.map((m) => (
                <li key={m.name} className="relative size-12 overflow-hidden rounded-full bg-navy-100 ring-[3px] ring-canvas">
                  <Photo src={m.avatar} alt="" fill sizes="48px" className="object-cover object-top" />
                </li>
              ))}
            </ul>
            <p className="text-[0.95rem] leading-snug text-muted">
              <span className="font-semibold text-navy-900">Led by AIIMS gold-medalist ophthalmologists.</span>{" "}
              Every report is reviewed by a specialist.
            </p>
          </div>

          <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2.5 text-[0.95rem] font-medium text-ink">
            {hero.facts.map((fact) => (
              <li key={fact} className="flex items-center gap-2">
                <span className="grid size-5 shrink-0 place-items-center rounded-full bg-teal-100 text-teal-700">
                  <Check className="size-3" strokeWidth={3} aria-hidden />
                </span>
                {fact}
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-wrap items-center gap-2.5">
            <span className="text-xs font-semibold tracking-[0.12em] text-muted uppercase">Recognized by</span>
            {recognition.map((r) => (
              <span
                key={r}
                className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-sm font-semibold text-navy-800 ring-1 ring-line"
              >
                <Award className="size-4 text-marigold-500" aria-hidden />
                {r}
              </span>
            ))}
          </div>
        </div>

        {/* Visual */}
        <div className="relative lg:col-span-6">
          <EyeMark
            className="pointer-events-none absolute top-1/2 left-1/2 -z-10 w-[135%] -translate-x-1/2 -translate-y-1/2 text-navy-200/70"
            strokeWidth={0.3}
          />

          <div className="relative mx-auto max-w-[520px] lg:mr-2 lg:ml-auto">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-navy-100 shadow-lift ring-1 ring-black/5">
              <Photo
                src="/images/hero-portrait.jpg"
                alt="An EyeSetu optometrist taking a retina photo of an elderly patient in her living room"
                fill
                priority
                sizes="(min-width: 1024px) 520px, (min-width: 640px) 520px, 92vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/30 via-transparent to-transparent" aria-hidden />
              <span className="absolute top-4 left-4 inline-flex items-center gap-2 rounded-full bg-white/85 px-3 py-1.5 text-xs font-semibold text-navy-900 shadow-soft backdrop-blur-md sm:text-[0.8125rem]">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-teal-500 opacity-60" />
                  <span className="relative inline-flex size-2 rounded-full bg-teal-600" />
                </span>
                A real EyeSetu home visit
              </span>
            </div>

            {/* Inset: what the device sees */}
            <div className="absolute top-16 -right-3 w-[36%] rotate-3 rounded-2xl bg-white p-1.5 shadow-lift ring-1 ring-line sm:-right-8">
              <div className="relative aspect-square overflow-hidden rounded-xl">
                <Photo
                  src="/images/device-retina-scan.jpg"
                  alt="Retina image on the handheld fundus camera screen"
                  fill
                  sizes="(min-width: 640px) 200px, 34vw"
                  className="object-cover"
                />
              </div>
              <p className="flex items-center justify-between px-1.5 pt-1.5 pb-0.5 text-[0.7rem] font-semibold text-navy-800 sm:text-xs">
                AI fundus imaging
                <span className="rounded-full bg-teal-50 px-1.5 py-0.5 text-[0.65rem] text-teal-700">Live</span>
              </p>
            </div>

            {/* Floating status card */}
            <div className="absolute right-3 -bottom-7 left-3 flex items-center gap-3.5 rounded-2xl bg-white/95 p-3.5 shadow-glass ring-1 ring-line backdrop-blur-md sm:right-auto sm:-left-8 sm:max-w-[340px] lg:-left-12">
              <span className="relative grid size-11 shrink-0 place-items-center rounded-xl bg-teal-600 text-white">
                <Video className="size-5" aria-hidden />
                <span className="absolute -top-0.5 -right-0.5 size-3 rounded-full bg-marigold-500 ring-2 ring-white" aria-hidden />
              </span>
              <span className="min-w-0">
                <span className="block font-display text-[0.95rem] font-semibold text-navy-900">Doctor review, same visit</span>
                <span className="block text-[0.85rem] leading-snug text-muted">
                  Reports explained live by an AIIMS-trained specialist
                </span>
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
