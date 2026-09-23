import { cn } from "@/lib/cn";

type Tone = "teal" | "navy" | "sand" | "dark" | "marigold";

const tones: Record<Tone, string> = {
  teal: "bg-teal-50 text-teal-800 ring-teal-100",
  navy: "bg-navy-50 text-navy-700 ring-navy-100",
  sand: "bg-sand text-ink-soft ring-line",
  dark: "bg-white/8 text-white/85 ring-white/12",
  marigold: "bg-marigold-100 text-marigold-700 ring-marigold-400/30",
};

export function Chip({ tone = "navy", className, children }: { tone?: Tone; className?: string; children: React.ReactNode }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[0.8125rem] leading-5 font-medium ring-1 ring-inset",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
