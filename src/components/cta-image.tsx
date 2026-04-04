"use client";

import { useEffect } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";

const TILT_DEG = 4;
const SPRING_CONFIG = { damping: 30, stiffness: 120, mass: 0.8 };

export function CtaImage() {
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
      className="absolute left-0 top-0 hidden h-full min-w-full w-[1020px] lg:block"
      style={{ perspective: 1000 }}
    >
      <motion.div
        style={{ rotateX, rotateY }}
        className="h-full rounded-2xl border border-white/10 bg-white/5 p-1.5 backdrop-blur-md shadow-xl shadow-primary-700/5 sm:p-2"
      >
        <div className="relative h-full overflow-hidden rounded-xl">
          <Image
            src="/assets/carouselImages/cta.png"
            alt="ConMan — Think. Tinker. Build."
            fill
            className="object-cover object-left-top"
          />
        </div>
      </motion.div>
    </div>
  );
}
