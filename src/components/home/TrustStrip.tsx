import { trustFacts } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function TrustStrip() {
  return (
    <section aria-label="Why families trust EyeSetu" className="pt-8 pb-14 lg:pt-4 lg:pb-16">
      <Container>
        <Reveal>
          <dl className="grid grid-cols-2 overflow-hidden rounded-3xl bg-white shadow-soft ring-1 ring-line lg:grid-cols-4">
            {trustFacts.map((f, i) => (
              <div
                key={f.label}
                className={[
                  "flex flex-col gap-1 p-5 sm:p-7",
                  i % 2 === 1 ? "border-l border-line" : "",
                  i >= 2 ? "border-t border-line lg:border-t-0" : "",
                  i === 2 ? "lg:border-l" : "",
                ].join(" ")}
              >
                <dt className="order-2 text-sm leading-snug text-muted sm:text-[0.95rem]">{f.label}</dt>
                <dd className="order-1 font-display text-xl font-semibold tracking-tight text-navy-700 sm:text-2xl lg:text-[1.75rem]">
                  {f.value}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </Container>
    </section>
  );
}
