"use client";

import { cn } from "@/lib/utils";
import { BlobCard } from "@/components/blob-card";
import type { ComponentType } from "react";

interface FeatureCardProps {
  title: string;
  description: string;
  className?: string;
  gridClassName?: string;
  index?: number;
  illustration?: ComponentType<{ hovered: boolean }>;
}

export function FeatureCard({
  title,
  description,
  className,
  gridClassName,
  index = 0,
  illustration: Illustration,
}: FeatureCardProps) {
  return (
    <BlobCard seed={index} className={gridClassName}>
      {({ hovered }) => (
        <div
          className={cn(
            "relative flex h-full flex-col rounded-xl border border-border bg-card/50 backdrop-blur-md p-6 transition-colors sm:p-8",
            className,
          )}
        >
          <h3 className="font-heading text-xl tracking-wide text-foreground sm:text-2xl">
            {title}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            {description}
          </p>
          {Illustration && (
            <div className="pointer-events-none mt-4 h-28 w-full sm:h-32">
              <Illustration hovered={hovered} />
            </div>
          )}
        </div>
      )}
    </BlobCard>
  );
}
