import { crisisStats } from "@/content/site";
import { CountUp } from "@/components/ui/CountUp";
import { Reveal } from "@/components/ui/Reveal";
import { EyeMark } from "@/components/brand/EyeMark";

/** "India has a vision crisis hiding in plain sight." Numbers from eyesetu.co.in. */
export function CrisisStats() {
  return (
    <Reveal className="relative isolate mt-16 overflow-hidden rounded-[2rem] bg-navy-900 p-6 text-white sm:p-10 lg:mt-20 lg:p-12">
      <EyeMark className="pointer-events-none absolute -right-20 -bottom-24 -z-10 w-[420px] text-white/[0.05]" strokeWidth={0.8} />
      <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
        <h3 className="max-w-md text-2xl font-semibold text-white sm:text-3xl">
          India has a vision crisis hiding in plain sight.
        </h3>
        <p className="max-w-sm text-white/65">Most of it is preventable, if eye care reaches people early enough.</p>
      </div>
      <dl className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-white/10 lg:mt-10 lg:grid-cols-4">
        {crisisStats.map((s) => (
          <div key={s.label} className="flex flex-col gap-2 bg-navy-900 p-4 sm:p-6">
            <dt className="order-2 text-sm leading-snug text-white/65 sm:text-[0.95rem]">{s.label}</dt>
            <dd className="order-1 font-display text-[1.4rem] font-semibold tracking-tight whitespace-nowrap text-teal-300 sm:text-4xl">
              <CountUp value={s.value} prefix={s.prefix} suffix={s.suffix} />
            </dd>
          </div>
        ))}
      </dl>
    </Reveal>
  );
}
