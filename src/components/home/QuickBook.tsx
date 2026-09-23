"use client";

import { useState } from "react";
import { ArrowRight, Moon, Sun, Sunset } from "lucide-react";
import { quickBook } from "@/content/site";
import { whatsappLink } from "@/lib/links";
import { cn } from "@/lib/cn";
import { WhatsAppIcon } from "@/components/brand/BrandIcons";

const timeIcons = { Morning: Sun, Afternoon: Sunset, Evening: Moon } as const;

type OptionGroupProps = {
  legend: string;
  step: number;
  name: string;
  options: string[];
  value: string;
  onChange: (v: string) => void;
  variant?: "chips" | "segmented";
};

/** Radio group styled as chips or a segmented control; stays a real radio group for keyboards & screen readers. */
function OptionGroup({ legend, step, name, options, value, onChange, variant = "chips" }: OptionGroupProps) {
  return (
    <fieldset>
      <legend className="flex items-center gap-2 text-sm font-semibold text-navy-900">
        <span className="grid size-5 place-items-center rounded-full bg-navy-900 text-[0.7rem] text-white">{step}</span>
        {legend}
      </legend>
      <div
        className={cn("mt-3", variant === "chips" ? "flex flex-wrap gap-2" : "grid gap-1 rounded-2xl bg-sand p-1")}
        style={variant === "segmented" ? { gridTemplateColumns: `repeat(${options.length}, minmax(0, 1fr))` } : undefined}
      >
        {options.map((opt) => {
          const Icon = name === "time" ? timeIcons[opt as keyof typeof timeIcons] : null;
          const checked = value === opt;
          return (
            <label key={opt} className="relative cursor-pointer">
              <input
                type="radio"
                name={name}
                value={opt}
                checked={checked}
                onChange={() => onChange(opt)}
                className="peer sr-only"
              />
              <span
                className={cn(
                  "flex items-center justify-center gap-1.5 text-sm font-medium transition-colors peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-teal-600",
                  variant === "chips"
                    ? cn(
                        "h-10 rounded-full px-4 ring-1",
                        checked ? "bg-teal-600 text-white ring-teal-600" : "bg-white text-navy-800 ring-line hover:ring-navy-300",
                      )
                    : cn("h-11 rounded-xl", checked ? "bg-white text-navy-900 shadow-soft" : "text-muted hover:text-navy-800"),
                )}
              >
                {Icon && <Icon className={cn("size-4", checked ? "text-marigold-500" : "")} aria-hidden />}
                {opt}
              </span>
            </label>
          );
        })}
      </div>
    </fieldset>
  );
}

export function QuickBook() {
  const [test, setTest] = useState(quickBook.tests[0]);
  const [city, setCity] = useState(quickBook.cities[0]);
  const [time, setTime] = useState(quickBook.times[0]);

  const message =
    `Hi EyeSetu, I'd like to book a home eye test.\n` +
    `• Test: ${test}\n• City: ${city}\n• Preferred time: ${time}`;

  return (
    <div className="rounded-[1.75rem] bg-white p-5 shadow-glass sm:p-7">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="font-display text-xl font-semibold text-navy-900">Book in 30 seconds</p>
          <p className="mt-1 text-sm text-muted">Pick what you need. We&apos;ll confirm your slot on WhatsApp.</p>
        </div>
        <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-teal-50 text-teal-600">
          <WhatsAppIcon className="size-5" />
        </span>
      </div>

      <div className="mt-6 space-y-6">
        <OptionGroup legend="Choose a test" step={1} name="test" options={quickBook.tests} value={test} onChange={setTest} />
        <OptionGroup
          legend="Your city"
          step={2}
          name="city"
          options={quickBook.cities}
          value={city}
          onChange={setCity}
          variant="segmented"
        />
        <OptionGroup
          legend="Preferred time"
          step={3}
          name="time"
          options={quickBook.times}
          value={time}
          onChange={setTime}
          variant="segmented"
        />
      </div>

      <a
        href={whatsappLink(message)}
        target="_blank"
        rel="noopener noreferrer"
        className="group mt-7 flex h-14 items-center justify-center gap-2 rounded-full bg-teal-600 font-semibold text-white shadow-[0_8px_20px_-8px_rgb(30_131_114/0.7)] transition-colors hover:bg-teal-700"
      >
        <WhatsAppIcon className="size-5" />
        Continue on WhatsApp
        <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
      </a>
    </div>
  );
}
