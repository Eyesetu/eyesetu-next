import { Baby, CalendarClock, Crosshair, Eye, Glasses, HeartPulse, ScanEye, Stethoscope, type LucideIcon } from "lucide-react";

/** One icon per service slug in content/site.ts. */
export const serviceIcons: Record<string, LucideIcon> = {
  retina: ScanEye,
  glaucoma: Eye,
  basic: Stethoscope,
  kids: Baby,
  "post-surgery": HeartPulse,
  lasik: Crosshair,
  chronic: CalendarClock,
  glasses: Glasses,
};
