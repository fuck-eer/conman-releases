"use client";

import { cn } from "@/lib/utils";

interface PaginationDotsProps {
  total: number;
  active: number;
  onDotClick: (index: number) => void;
  className?: string;
}

export function PaginationDots({
  total,
  active,
  onDotClick,
  className,
}: PaginationDotsProps) {
  return (
    <div className={cn("flex flex-col items-center gap-3", className)}>
      {Array.from({ length: total }).map((_, i) => (
        <button
          key={i}
          onClick={() => onDotClick(i)}
          aria-label={`Go to slide ${i + 1}`}
          className={cn(
            "size-3 rounded-full transition-all duration-300 cursor-pointer",
            i === active
              ? "bg-purple-700 scale-125"
              : "bg-muted-foreground/30 hover:bg-muted-foreground/50",
          )}
        />
      ))}
    </div>
  );
}
