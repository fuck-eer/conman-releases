import { cn } from "@/lib/utils";
import React from "react";

const Aurora = () => {
  return (
    <>
      <AuroraStrip className="rotate-30 right-[10px] top-0 w-[180px] h-[450px]" />
      <AuroraStrip className="rotate-30 right-[280px] top-0 " />
      <AuroraStrip className="-rotate-30 left-[10px] top-0 w-[180px] h-[450px]" />
      <AuroraStrip className="-rotate-30 left-[280px] top-0 " />
    </>
  );
};

export default Aurora;

const AuroraStrip = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "fixed bg-linear-to-b from-purple-500/20 to-transparent flex w-[120px] h-[400px] -z-50 blur-2xl",
        className,
      )}
    ></div>
  );
};
