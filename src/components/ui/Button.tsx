import Link from "next/link";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost" | "light" | "outline-light";
type Size = "md" | "lg";

const base =
  "group/btn inline-flex items-center justify-center gap-2 rounded-full font-semibold whitespace-nowrap transition-[background-color,color,box-shadow,transform,border-color] duration-200 active:scale-[0.98] disabled:opacity-50";

const variants: Record<Variant, string> = {
  primary: "bg-teal-600 text-white shadow-[0_6px_16px_-6px_rgb(30_131_114/0.6)] hover:bg-teal-700",
  secondary: "bg-white text-navy-800 ring-1 ring-line hover:ring-navy-300 hover:bg-navy-50",
  ghost: "text-navy-700 hover:bg-navy-50",
  light: "bg-white text-navy-900 hover:bg-teal-50",
  "outline-light": "text-white ring-1 ring-white/30 hover:bg-white/10 hover:ring-white/60",
};

const sizes: Record<Size, string> = {
  md: "h-11 px-5 text-[0.95rem]",
  lg: "h-13 px-6 text-base sm:h-14 sm:px-7",
};

type ButtonProps = {
  href: string;
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
  external?: boolean;
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href">;

/** All CTAs on the site are links (WhatsApp, tel:, pages), so Button renders an anchor. */
export function Button({ href, variant = "primary", size = "md", className, children, external, ...rest }: ButtonProps) {
  const classes = cn(base, variants[variant], sizes[size], className);
  const isExternal = external ?? /^(https?:|tel:|mailto:)/.test(href);

  if (isExternal) {
    return (
      <a
        href={href}
        className={classes}
        {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        {...rest}
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={classes} {...rest}>
      {children}
    </Link>
  );
}
