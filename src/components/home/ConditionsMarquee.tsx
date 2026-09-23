import { conditions } from "@/content/site";
import { EyeMark } from "@/components/brand/EyeMark";

/** Slow, pausable ticker of the conditions EyeSetu screens for. Static under reduced motion. */
export function ConditionsMarquee() {
  const row = (hidden: boolean) => (
    <ul className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {conditions.map((c) => (
        <li key={c} className="flex items-center gap-8 pr-8 whitespace-nowrap">
          <span className="font-display text-lg font-medium text-navy-800 sm:text-xl">{c}</span>
          <EyeMark className="w-6 text-teal-500" strokeWidth={2} />
        </li>
      ))}
    </ul>
  );

  return (
    <section aria-label="Conditions we screen for" className="border-y border-line bg-white">
      <div className="flex items-center">
        <p className="relative z-10 hidden shrink-0 bg-white py-5 pr-6 pl-8 text-xs font-semibold tracking-[0.14em] text-teal-700 uppercase shadow-[12px_0_16px_-8px_white] md:block lg:pl-[max(2rem,calc((100vw-80rem)/2+2rem))]">
          Early detection for
        </p>
        <div className="group relative flex overflow-hidden py-5 [mask-image:linear-gradient(90deg,transparent,black_6%,black_94%,transparent)]">
          <div className="marquee flex group-hover:[animation-play-state:paused]">
            {row(false)}
            {row(true)}
          </div>
        </div>
      </div>
    </section>
  );
}
