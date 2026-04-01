"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useTransform } from "motion/react";

const BLOB_SIZE = 288;
const HALF = BLOB_SIZE / 2;

export function CursorBlob() {
  const [mounted, setMounted] = useState(false);

  const springConfig = { damping: 25, stiffness: 120, mass: 0.5 };
  const cursorX = useSpring(0, springConfig);
  const cursorY = useSpring(0, springConfig);

  const left = useTransform(cursorX, (v) => v - HALF);
  const top = useTransform(cursorY, (v) => v - HALF);

  useEffect(() => {
    cursorX.jump(window.innerWidth / 2);
    cursorY.jump(window.innerHeight);
    setMounted(true);

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [cursorX, cursorY]);

  if (!mounted) return null;

  return (
    <motion.div
      className="pointer-events-none fixed -z-10 bg-purple-500/20 blur-[128px]"
      style={{ left, top, width: BLOB_SIZE, height: BLOB_SIZE }}
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        scaleX: [1, 1.25, 0.95, 1.1, 1],
        scaleY: [1, 0.9, 1.2, 0.95, 1],
        borderRadius: [
          "50%",
          "40% 60% 55% 45%",
          "55% 45% 40% 60%",
          "45% 55% 60% 40%",
          "50%",
        ],
      }}
      transition={{
        opacity: { duration: 1, ease: "easeOut" },
        scaleX: { duration: 6, repeat: Infinity, ease: "easeInOut" },
        scaleY: { duration: 6, repeat: Infinity, ease: "easeInOut" },
        borderRadius: { duration: 6, repeat: Infinity, ease: "easeInOut" },
      }}
    />
  );
}
