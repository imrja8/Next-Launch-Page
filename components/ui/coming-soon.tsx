"use client";

import { Fragment, useEffect, useState } from "react";
import { RiRocket2Line } from "@remixicon/react";

import { cn } from "@/lib/utils";
type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

function getTimeLeft(diffMs: number): TimeLeft {
  const diff = Math.max(0, diffMs);
  const totalSeconds = Math.floor(diff / 1000);
  return {
    days: Math.floor(totalSeconds / 86400),
    hours: Math.floor((totalSeconds % 86400) / 3600),
    minutes: Math.floor((totalSeconds % 3600) / 60),
    seconds: totalSeconds % 60,
  };
}

function pad(value: number): string {
  return value.toString().padStart(2, "0");
}

const tiles = [
  { key: "days", label: "Days" },
  { key: "hours", label: "Hours" },
  { key: "minutes", label: "Minutes" },
  { key: "seconds", label: "Seconds" },
] as const;

export type ComingSoonBlockProps = React.HTMLAttributes<HTMLElement> & {
  tagline?: string;
  heading?: string;
  description?: string;
  targetDate?: string;
};

export default function ComingSoonBlock({
  className,
  tagline,
  heading,
  description,
  targetDate,
  ...props
}: ComingSoonBlockProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() => {
    if (targetDate) {
      return getTimeLeft(new Date(targetDate).getTime() - Date.now());
    }
    return getTimeLeft(0);
  });

  useEffect(() => {
    if (!targetDate) return;

    const deadline = new Date(targetDate).getTime();
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft(deadline - Date.now()));
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <section 
      className={cn(
        "flex min-h-svh w-full flex-col items-center justify-center gap-8 bg-background px-6 py-12 text-center text-foreground",
        className
      )}
      {...props}
    >
      <div className="flex flex-col items-center gap-4">
        {tagline && (
          <span className="flex items-center gap-2 border border-border bg-muted/50 px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
            <RiRocket2Line className="size-3.5" aria-hidden="true" />
            {tagline}
          </span>
        )}
        {heading && (
          <h1 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            {heading}
          </h1>
        )}
        {description && (
          <p className="max-w-md text-sm text-muted-foreground sm:text-base">
            {description}
          </p>
        )}
      </div>

      {targetDate && (
        <div className="flex items-center justify-center gap-2 sm:gap-3">
          {tiles.map((tile, index) => (
            <Fragment key={tile.key}>
              <div className="flex w-16 flex-col overflow-hidden border border-border sm:w-20">
                <span
                  suppressHydrationWarning
                  className="bg-card py-3 font-mono text-3xl font-bold tabular-nums sm:text-4xl"
                >
                  {pad(timeLeft[tile.key])}
                </span>
                <span className="border-t border-border bg-muted/40 py-1.5 text-[10px] font-medium tracking-[0.12em] text-muted-foreground uppercase">
                  {tile.label}
                </span>
              </div>
              {index < tiles.length - 1 && (
                <span
                  aria-hidden="true"
                  className="font-mono text-2xl font-bold text-muted-foreground/30 sm:text-3xl"
                >
                  :
                </span>
              )}
            </Fragment>
          ))}
        </div>
      )}


    </section>
  );
}
