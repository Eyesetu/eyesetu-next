import { Check, Mail, Phone } from "lucide-react";
import { contact } from "@/content/site";
import { mailLink, telLink } from "@/lib/links";
import { Container } from "@/components/ui/Container";
import { Photo } from "@/components/ui/Photo";
import { Reveal } from "@/components/ui/Reveal";
import { EyeMark } from "@/components/brand/EyeMark";
import { QuickBook } from "./QuickBook";

const promises = ["Trained optometrist at your door", "Specialist video consult included", "Digital report on your phone"];

export function FinalCta() {
  return (
    <section id="book" className="scroll-mt-20 py-20 lg:py-24" aria-labelledby="cta-title">
      <Container>
        <Reveal className="relative isolate overflow-hidden rounded-[2rem] bg-navy-900 lg:rounded-[2.5rem]">
          {/* Background photo, heavily tinted so text stays readable */}
          <Photo
            src="/images/visual-field-vr.jpg"
            alt=""
            fill
            sizes="100vw"
            className="-z-20 object-cover opacity-25 mix-blend-luminosity"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-navy-900 via-navy-900/95 to-teal-900/90" aria-hidden />
          <EyeMark
            className="pointer-events-none absolute -top-24 -left-24 -z-10 w-[520px] text-white/[0.05]"
            strokeWidth={0.8}
          />

          <div className="grid items-center gap-10 p-6 sm:p-10 lg:grid-cols-12 lg:gap-12 lg:p-14">
            <div className="lg:col-span-6">
              <p className="text-sm font-semibold tracking-[0.14em] text-teal-300 uppercase">Delhi · Gurgaon</p>
              <h2 id="cta-title" className="mt-4 text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">
                Book a home eye test for your family today.
              </h2>
              <p className="mt-5 max-w-md text-lg leading-relaxed text-white/75">
                Tell us what you need and when. Our optometrist brings the eye clinic to you.
              </p>

              <ul className="mt-8 space-y-3">
                {promises.map((p) => (
                  <li key={p} className="flex items-center gap-3 text-white/90">
                    <span className="grid size-6 place-items-center rounded-full bg-teal-500/20 text-teal-300 ring-1 ring-teal-400/30">
                      <Check className="size-3.5" strokeWidth={3} aria-hidden />
                    </span>
                    {p}
                  </li>
                ))}
              </ul>

              <div className="mt-9 flex flex-col gap-3 border-t border-white/10 pt-7 text-white/80 sm:flex-row sm:gap-8">
                <a href={telLink} className="flex items-center gap-2.5 font-medium hover:text-white">
                  <Phone className="size-4 text-teal-300" aria-hidden />
                  {contact.phoneDisplay}
                </a>
                <a href={mailLink} className="flex items-center gap-2.5 font-medium hover:text-white">
                  <Mail className="size-4 text-teal-300" aria-hidden />
                  {contact.email}
                </a>
              </div>
            </div>

            <div className="lg:col-span-6 xl:col-span-5 xl:col-start-8">
              <QuickBook />
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
