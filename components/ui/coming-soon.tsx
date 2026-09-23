"use client";

import { Fragment, useEffect, useState } from "react";
import { RiRocketLine, RiStarLine, RiFlashlightLine, RiNotification3Line, RiSparkling2Line } from "@remixicon/react";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

const ICON_MAP: Record<string, React.ElementType> = {
  rocket: RiRocketLine,
  star: RiStarLine,
  bolt: RiFlashlightLine,
  bell: RiNotification3Line,
  sparkles: RiSparkling2Line,
};
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
  data: {
    tagline?: string;
    taglineIcon?: string;
    heading?: string;
    description?: string;
    targetDate?: string;
  };
};

export default function ComingSoonBlock({
  className,
  data,
  ...props
}: ComingSoonBlockProps) {
  const { tagline, taglineIcon, heading, description, targetDate } = data;
  
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() => {
    if (targetDate) {
      return getTimeLeft(new Date(targetDate).getTime() - Date.now());
    }
    return getTimeLeft(0);
  });

  const IconComponent = ICON_MAP[taglineIcon || "rocket"] || RiRocketLine;

  useEffect(() => {
    if (!targetDate) return;

    const deadline = new Date(targetDate).getTime();
    
    // Immediately calculate time on mount to prevent 1s delay
    setTimeLeft(getTimeLeft(deadline - Date.now()));

    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft(deadline - Date.now()));
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <section 
      className={cn(
        "flex min-h-svh w-full flex-col items-center justify-center gap-8 bg-transparent z-10 px-6 py-12 text-center text-foreground",
        className
      )}
      {...props}
    >
      <div className="flex flex-col items-center gap-4">
        {tagline && (
          <motion.span 
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex items-center gap-2 rounded-[var(--radius-pill)] border border-white/10 bg-white/10 backdrop-blur-md px-3 py-1 text-xs font-medium text-white/80 shadow-sm"
          >
            <IconComponent className="size-3.5" aria-hidden="true" />
            {tagline}
          </motion.span>
        )}
        {heading && (
          <motion.h1 
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
            className="text-3xl font-bold tracking-tight text-balance sm:text-4xl text-white"
          >
            {heading}
          </motion.h1>
        )}
        {description && (
          <motion.p 
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="max-w-md text-sm text-white/80 sm:text-base"
          >
            {description}
          </motion.p>
        )}
      </div>

      {targetDate && (
        <div className="flex items-center justify-center gap-2 sm:gap-3">
          {tiles.map((tile, index) => (
            <Fragment key={tile.key}>
              <motion.div 
                initial={false}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.45, ease: "easeOut" }}
                className="flex w-16 flex-col overflow-hidden rounded-[var(--radius-card)] border border-white/10 bg-white/5 backdrop-blur-md shadow-sm sm:w-20"
              >
                <div className="flex items-center justify-center h-[60px] sm:h-[72px]">
                  <span className="font-mono text-3xl font-bold tabular-nums sm:text-4xl text-white">
                    {pad(timeLeft[tile.key])}
                  </span>
                </div>
                <span className="border-t border-white/10 bg-white/5 py-1.5 text-[10px] font-medium tracking-[0.12em] text-white/70 uppercase">
                  {tile.label}
                </span>
              </motion.div>
              {index < tiles.length - 1 && (
                <motion.span
                  initial={false}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.45, ease: "easeOut" }}
                  aria-hidden="true"
                  className="font-mono text-2xl font-bold text-muted-foreground/30 sm:text-3xl"
                >
                  :
                </motion.span>
              )}
            </Fragment>
          ))}
        </div>
      )}


    </section>
  );
}
