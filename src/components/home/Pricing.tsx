"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight, ArrowUpRight, Check, Sparkles } from "lucide-react";
import { plans, platform, type Plan } from "@/content/site";
import { whatsappLink } from "@/lib/links";
import { cn } from "@/lib/cn";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

type Currency = "INR" | "USD";

const formatPrice = (plan: Plan, currency: Currency) =>
  currency === "USD" ? `$${plan.usd}` : `₹${plan.inr.toLocaleString("en-IN")}`;

function PlanCard({ plan, currency }: { plan: Plan; currency: Currency }) {
  const dark = plan.popular;
  return (
    <article
      className={cn(
        "relative flex h-full flex-col rounded-[1.75rem] p-7 lg:p-8",
        dark ? "bg-navy-900 text-white shadow-lift lg:-my-4 lg:py-12" : "bg-white ring-1 ring-line",
      )}
    >
      {plan.popular && (
        <span className="absolute -top-3.5 left-7 inline-flex items-center gap-1.5 rounded-full bg-marigold-500 px-3 py-1 text-xs font-semibold text-navy-950 shadow-soft">
          <Sparkles className="size-3.5" aria-hidden />
          Most popular
        </span>
      )}
      <h3 className={cn("text-xl font-semibold", dark && "text-white")}>{plan.name}</h3>
      <p className={cn("mt-1 text-[0.95rem]", dark ? "text-white/65" : "text-muted")}>{plan.subhead}</p>

      <p className="mt-6 flex items-baseline gap-1.5">
        <span
          className={cn("font-display text-5xl font-semibold tracking-tight", dark ? "text-white" : "text-navy-900")}
        >
          {formatPrice(plan, currency)}
        </span>
        <span className={cn("text-[0.95rem]", dark ? "text-white/60" : "text-muted")}>{plan.period}</span>
      </p>

      <ul className={cn("mt-7 space-y-3 border-t pt-7", dark ? "border-white/10" : "border-line")}>
        {plan.features.map((f) => (
          <li key={f} className="flex items-start gap-3 text-[0.95rem] leading-snug">
            <span
              className={cn(
                "mt-0.5 grid size-5 shrink-0 place-items-center rounded-full",
                dark ? "bg-teal-500 text-white" : "bg-teal-100 text-teal-700",
              )}
            >
              <Check className="size-3" strokeWidth={3} aria-hidden />
            </span>
            <span className={dark ? "text-white/90" : "text-ink"}>{f}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-8">
        <a
          href={whatsappLink(
            `Hi EyeSetu, I'd like the ${plan.name} plan (${formatPrice(plan, currency)} ${plan.period}).`,
          )}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "group flex h-12 items-center justify-center gap-2 rounded-full font-semibold transition-colors",
            dark
              ? "bg-teal-500 text-white hover:bg-teal-400"
              : "bg-navy-50 text-navy-800 ring-1 ring-navy-100 hover:bg-teal-600 hover:text-white hover:ring-teal-600",
          )}
        >
          {plan.cta}
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
        </a>
      </div>
    </article>
  );
}

export function Pricing() {
  const [currency, setCurrency] = useState<Currency>("INR");

  return (
    <section id="pricing" className="bg-white py-20 lg:py-28" aria-labelledby="pricing-title">
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            id="pricing-title"
            eyebrow="Pricing"
            title="Simple pricing. No hidden hospital fees."
            lede="Pay only for what you need. Every plan includes a specialist review, and that's never an upsell."
          />
          <Reveal className="shrink-0">
            <div
              role="radiogroup"
              aria-label="Currency"
              className="inline-flex rounded-full bg-sand p-1 ring-1 ring-line"
            >
              {(["INR", "USD"] as const).map((c) => (
                <button
                  key={c}
                  type="button"
                  role="radio"
                  aria-checked={currency === c}
                  onClick={() => setCurrency(c)}
                  className={cn(
                    "h-10 rounded-full px-5 text-sm font-semibold transition-colors",
                    currency === c ? "bg-white text-navy-900 shadow-soft" : "text-muted hover:text-navy-800",
                  )}
                >
                  {c === "INR" ? "₹ INR" : "$ USD"}
                </button>
              ))}
            </div>
            <p className="mt-2 text-xs text-muted lg:text-right">USD for families booking from abroad</p>
          </Reveal>
        </div>

        {/* Swipeable on phones, three-up from tablet */}
        <div className="snap-row -mx-4 mt-10 flex scroll-px-4 gap-4 overflow-x-auto px-4 pt-4 pb-2 md:mx-0 md:mt-14 md:grid md:grid-cols-3 md:items-stretch md:gap-5 md:overflow-visible md:px-0 md:pb-0">
          {plans.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 90} className="w-[86%] shrink-0 md:w-auto">
              <PlanCard plan={plan} currency={currency} />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-8">
          <p className="rounded-2xl bg-canvas px-5 py-4 text-center text-[0.95rem] text-muted ring-1 ring-line">
            <span className="font-semibold text-navy-900">SurgiSetu</span> (surgery coordination) and{" "}
            <span className="font-semibold text-navy-900">Prescription &amp; Glasses</span> are quoted individually for
            your case.{" "}
            <a
              href={whatsappLink("Hi EyeSetu, I'd like to talk about surgery coordination.")}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-teal-700 underline decoration-teal-300 underline-offset-4 hover:text-teal-800"
            >
              Talk to us
            </a>
          </p>
        </Reveal>

        {/* The wider platform */}
        <div id="platform" className="mt-20 scroll-mt-24 border-t border-line pt-16 lg:mt-24 lg:pt-20">
          <SectionHeading
            eyebrow="Built for everyone"
            title="One platform for patients, optometrists and teams."
            lede="Beyond home visits, EyeSetu powers everyday eye health, independent practices and workplace screening."
          />
          <div className="snap-row -mx-4 mt-10 flex scroll-px-4 gap-3 overflow-x-auto px-4 pb-2 md:mx-0 md:grid md:grid-cols-3 md:gap-4 md:overflow-visible md:px-0 md:pb-0 lg:gap-5">
            {platform.map((p, i) => (
              <Reveal key={p.name} delay={i * 90} className="w-[82%] shrink-0 md:w-auto">
                <Link
                  href={p.href}
                  className="group flex h-full flex-col rounded-[1.75rem] bg-canvas p-6 ring-1 ring-line transition-[background-color,box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-lift"
                >
                  <div className="flex items-start justify-between">
                    <span className="text-xs font-semibold tracking-[0.12em] text-teal-700 uppercase">
                      {p.audience}
                    </span>
                    <ArrowUpRight
                      className="size-5 text-navy-300 transition-[color,transform] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-teal-600"
                      aria-hidden
                    />
                  </div>
                  <h3 className="mt-3 text-xl font-semibold">{p.name}</h3>
                  <p className="mt-3 flex items-baseline gap-1">
                    <span className="font-display text-3xl font-semibold text-navy-900">{p.price}</span>
                    <span className="text-sm text-muted">{p.period}</span>
                  </p>
                  <ul className="mt-5 space-y-2.5">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-[0.95rem] text-ink">
                        <span className="mt-2 size-1.5 shrink-0 rounded-full bg-teal-500" aria-hidden />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <span className="mt-auto inline-flex items-center gap-1.5 pt-6 font-semibold text-teal-700">
                    {p.cta}
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
