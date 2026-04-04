"use client";

import { useEffect } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";

const TILT_DEG = 5;
const SPRING_CONFIG = { damping: 20, stiffness: 150, mass: 0.5 };

interface TiltImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  className?: string;
}

export function TiltImage({
  src,
  alt,
  width = 1400,
  height = 875,
  fill = false,
  className,
}: TiltImageProps) {
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const rotateX = useSpring(
    useTransform(mouseY, [0, 1], [TILT_DEG, -TILT_DEG]),
    SPRING_CONFIG,
  );
  const rotateY = useSpring(
    useTransform(mouseX, [0, 1], [-TILT_DEG, TILT_DEG]),
    SPRING_CONFIG,
  );

  useEffect(() => {
    function handleMouseMove(e: MouseEvent) {
      mouseX.set(e.clientX / window.innerWidth);
      mouseY.set(e.clientY / window.innerHeight);
    }

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div
      style={{ perspective: 800 }}
      className={fill ? `h-full ${className ?? ""}` : className}
    >
      <motion.div
        style={{ rotateX, rotateY }}
        className={`rounded-2xl border border-white/10 bg-white/5 p-1.5 backdrop-blur-md shadow-xl shadow-primary-700/5 sm:p-2 ${fill ? "h-full" : ""}`}
      >
        <div
          className={`overflow-hidden rounded-xl ${fill ? "relative h-full" : ""}`}
        >
          {fill ? (
            <Image
              src={src}
              alt={alt}
              fill
              className="object-cover object-left-top"
            />
          ) : (
            <Image
              src={src}
              alt={alt}
              width={width}
              height={height}
              className="block h-auto w-full"
            />
          )}
        </div>
      </motion.div>
    </div>
  );
}
