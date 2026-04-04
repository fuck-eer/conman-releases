import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
  subSection?: boolean;
}

export function SectionHeading({
  title,
  subtitle,
  className,
  subSection,
}: SectionHeadingProps) {
  return (
    <div className={cn("mx-auto max-w-3xl text-center", className)}>
      <h2
        className={cn(
          "font-heading text-2xl text-center tracking-wide text-foreground sm:text-4xl md:text-6xl",
          subSection &&
            "text-2xl tracking-wide text-foreground sm:text-4xl md:text-4xl",
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-center text-sm leading-relaxed font-light text-muted-foreground sm:text-base">
          {subtitle}
        </p>
      )}
    </div>
  );
}
