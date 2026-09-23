import { cn } from "@/lib/cn";
import { Reveal } from "./Reveal";

type SectionHeadingProps = {
  eyebrow?: string;
  title: React.ReactNode;
  lede?: React.ReactNode;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
  id?: string;
};

export function SectionHeading({ eyebrow, title, lede, align = "left", tone = "light", className, id }: SectionHeadingProps) {
  const dark = tone === "dark";
  return (
    <Reveal className={cn("max-w-2xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow && (
        <p
          className={cn(
            "mb-4 inline-flex items-center gap-2 text-[0.8125rem] font-semibold tracking-[0.14em] uppercase",
            dark ? "text-teal-300" : "text-teal-700",
          )}
        >
          <span className={cn("h-px w-6", dark ? "bg-teal-300/60" : "bg-teal-600/50")} aria-hidden />
          {eyebrow}
        </p>
      )}
      <h2
        id={id}
        className={cn(
          "text-[1.875rem] font-semibold sm:text-4xl lg:text-[2.75rem]",
          dark && "text-white",
        )}
      >
        {title}
      </h2>
      {lede && (
        <p className={cn("mt-4 text-lg leading-relaxed", dark ? "text-white/70" : "text-muted")}>{lede}</p>
      )}
    </Reveal>
  );
}
