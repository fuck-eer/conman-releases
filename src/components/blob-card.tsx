"use client";

import { useRef, useCallback, useMemo, useState, type ReactNode } from "react";
import { motion, useMotionValue, useSpring, animate } from "motion/react";
import { cn } from "@/lib/utils";

function seededRandom(seed: number) {
  let s = seed;
  return () => {
    s = (s * 16807 + 0) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

function generateBlob(seed: number) {
  const rng = seededRandom(seed + 1);
  return {
    top: rng() * 80,
    left: rng() * 80,
    width: 150 + rng() * 80,
    height: 150 + rng() * 80,
    opacity: 0.15 + rng() * 0.35,
    borderRadius: `${30 + rng() * 40}% ${30 + rng() * 40}% ${30 + rng() * 40}% ${30 + rng() * 40}%`,
    rotate: rng() * 360,
  };
}

const springConfig = { stiffness: 80, damping: 20, mass: 0.8 };

interface BlobCardProps {
  seed?: number;
  className?: string;
  children: ReactNode | ((state: { hovered: boolean }) => ReactNode);
}

export function BlobCard({ seed = 0, className, children }: BlobCardProps) {
  const blob = useMemo(() => generateBlob(seed * 7 + 42), [seed]);
  const cardRef = useRef<HTMLDivElement>(null);
  const breathRef = useRef<ReturnType<typeof animate> | null>(null);
  const [hovered, setHovered] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const scale = useMotionValue(1);

  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);
  const springScale = useSpring(scale, springConfig);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const card = cardRef.current;
      if (!card) return;
      const rect = card.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      mouseX.set((e.clientX - cx) * 0.15);
      mouseY.set((e.clientY - cy) * 0.15);
    },
    [mouseX, mouseY],
  );

  const handleMouseEnter = useCallback(() => {
    setHovered(true);
    breathRef.current = animate(scale, [1, 1.12, 0.96, 1.08, 1], {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    });
  }, [scale]);

  const handleMouseLeave = useCallback(() => {
    setHovered(false);
    breathRef.current?.stop();
    mouseX.set(0);
    mouseY.set(0);
    scale.set(1);
  }, [mouseX, mouseY, scale]);

  return (
    <div
      ref={cardRef}
      className={cn("relative overflow-hidden rounded-xl", className)}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className="pointer-events-none absolute"
        style={{
          top: `${blob.top}%`,
          left: `${blob.left}%`,
          width: blob.width,
          height: blob.height,
          borderRadius: blob.borderRadius,
          rotate: blob.rotate,
          background: `radial-gradient(circle, rgba(168,85,247,${blob.opacity}) 0%, transparent 70%)`,
          x: springX,
          y: springY,
          scale: springScale,
        }}
      />
      {typeof children === "function" ? children({ hovered }) : children}
    </div>
  );
}
