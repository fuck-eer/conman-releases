import { cn } from "@/lib/utils";

interface FeatureCardProps {
  title: string;
  description: string;
  className?: string;
}

export function FeatureCard({
  title,
  description,
  className,
}: FeatureCardProps) {
  return (
    <div
      className={cn(
        "rounded-xl border border-border bg-card/50 p-6 transition-colors hover:border-purple-700/40 sm:p-8",
        className,
      )}
    >
      <h3 className="font-heading text-xl tracking-wide text-foreground sm:text-2xl">
        {title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
        {description}
      </p>
    </div>
  );
}
