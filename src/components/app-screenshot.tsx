import { cn } from "@/lib/utils";

interface AppScreenshotProps {
  className?: string;
  variant?: "full" | "sidebar";
}

export function AppScreenshot({
  className,
  variant = "full",
}: AppScreenshotProps) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-xl border border-border bg-[#1a1a1a] shadow-2xl shadow-purple-700/5",
        className,
      )}
    >
      <div className="flex items-center gap-2 border-b border-border px-4 py-2.5">
        <div className="size-3 rounded-full bg-red-500/70" />
        <div className="size-3 rounded-full bg-yellow-500/70" />
        <div className="size-3 rounded-full bg-green-500/70" />
        <div className="ml-3 flex-1">
          <div className="mx-auto h-4 w-48 max-w-full rounded bg-white/5" />
        </div>
      </div>

      {variant === "full" ? (
        <div className="flex">
          <div className="w-52 shrink-0 border-r border-border p-3">
            <div className="mb-3 text-xs font-medium tracking-wider text-muted-foreground/60 uppercase">
              GREETING-APP
            </div>
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className={cn(
                  "mb-2 rounded-lg px-3 py-2",
                  i === 1
                    ? "bg-purple-700/20 border border-purple-700/30"
                    : "bg-white/5",
                )}
              >
                <div className="h-3 w-full rounded bg-white/10" />
                <div className="mt-1 h-2 w-2/3 rounded bg-white/5" />
              </div>
            ))}
            <div className="mt-3 flex items-center gap-2 text-xs text-muted-foreground/50">
              <span>+</span>
              <span>Add project</span>
            </div>
          </div>

          <div className="flex-1 p-4">
            <div className="mb-3 h-4 w-3/4 rounded bg-white/5" />
            <div className="mb-4 rounded-lg bg-purple-700/10 p-3">
              <div className="h-3 w-full rounded bg-purple-700/20" />
              <div className="mt-1 h-3 w-5/6 rounded bg-purple-700/15" />
            </div>
            <div className="space-y-2">
              {[85, 72, 90, 65, 78].map((w, i) => (
                <div key={i} className="flex gap-2">
                  <div className="h-3 w-1 rounded-full bg-purple-700/40" />
                  <div
                    className="h-3 rounded bg-white/5"
                    style={{ width: `${w}%` }}
                  />
                </div>
              ))}
            </div>
            <div className="mt-4 space-y-2">
              <div className="h-3 w-32 rounded bg-white/8 font-bold" />
              {[70, 88, 55].map((w, i) => (
                <div key={i} className="flex gap-2">
                  <div className="h-3 w-1 rounded-full bg-purple-700/40" />
                  <div
                    className="h-3 rounded bg-white/5"
                    style={{ width: `${w}%` }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="p-3">
          <div className="mb-3 text-xs font-medium tracking-wider text-muted-foreground/60 uppercase">
            GREETING-APP
          </div>
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className={cn(
                "mb-2 rounded-lg px-3 py-2",
                i === 1
                  ? "bg-purple-700/20 border border-purple-700/30"
                  : "bg-white/5",
              )}
            >
              <div className="h-3 w-full rounded bg-white/10" />
              <div className="mt-1 h-2 w-2/3 rounded bg-white/5" />
            </div>
          ))}
          <div className="mt-3 flex items-center gap-2 text-xs text-muted-foreground/50">
            <span>+</span>
            <span>Add project</span>
          </div>
        </div>
      )}

      <div className="flex items-center gap-3 border-t border-border px-4 py-2">
        <div className="flex items-center gap-1">
          <div className="size-2 rounded-full bg-green-500" />
          <span className="text-[10px] text-muted-foreground/50">Live</span>
        </div>
        <span className="text-[10px] text-muted-foreground/40">
          3 completed
        </span>
      </div>
    </div>
  );
}
