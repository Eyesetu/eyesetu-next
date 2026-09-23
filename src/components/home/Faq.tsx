import { Plus } from "lucide-react";
import { faqs } from "@/content/site";
import { whatsappLink } from "@/lib/links";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WhatsAppIcon } from "@/components/brand/BrandIcons";

export function Faq() {
  return (
    <section id="faq" className="bg-white py-20 lg:py-28" aria-labelledby="faq-title">
      <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:col-span-4 lg:self-start">
          <SectionHeading id="faq-title" eyebrow="FAQs" title="Questions families usually ask." />
          <Reveal delay={100} className="mt-8 rounded-[1.75rem] bg-teal-50 p-6 ring-1 ring-teal-100">
            <p className="font-display text-lg font-semibold text-navy-900">Still have a question?</p>
            <p className="mt-1.5 leading-relaxed text-muted">
              Message us on WhatsApp and our care team will get back to you.
            </p>
            <Button href={whatsappLink("Hi EyeSetu, I have a question.")} className="mt-5">
              <WhatsAppIcon className="size-[1.1rem]" />
              Ask on WhatsApp
            </Button>
          </Reveal>
        </div>

        <Reveal className="lg:col-span-8">
          <div className="divide-y divide-line border-y border-line">
            {faqs.map((f, i) => (
              <details key={f.q} className="group" open={i === 0}>
                <summary className="flex cursor-pointer items-center justify-between gap-6 py-5 font-display text-lg font-medium text-navy-900 transition-colors hover:text-teal-700 sm:py-6">
                  {f.q}
                  <span className="grid size-9 shrink-0 place-items-center rounded-full bg-canvas ring-1 ring-line transition-[transform,background-color] duration-300 group-open:rotate-45 group-open:bg-teal-600 group-open:text-white group-open:ring-teal-600">
                    <Plus className="size-4" aria-hidden />
                  </span>
                </summary>
                <p className="max-w-2xl pr-12 pb-6 leading-relaxed text-muted">{f.a}</p>
              </details>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
