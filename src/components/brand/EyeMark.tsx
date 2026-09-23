import { cn } from "@/lib/cn";

type EyeMarkProps = { className?: string; strokeWidth?: number };

/** The EyeSetu eye symbol as line art. Inherits colour from `currentColor`. */
export function EyeMark({ className, strokeWidth = 1.4 }: EyeMarkProps) {
  return (
    <svg viewBox="0 0 33.238 22.37" className={cn("h-auto", className)} aria-hidden="true" fill="none">
      <g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
        <path
          d="M1.411 11.185 A16.719 16.719 0 0 1 31.827 11.185 A16.719 16.719 0 0 1 1.411 11.185 Z"
          strokeWidth={strokeWidth}
        />
        <circle cx="16.628" cy="11.187" r="4.059" strokeWidth={strokeWidth * 1.13} />
      </g>
    </svg>
  );
}
