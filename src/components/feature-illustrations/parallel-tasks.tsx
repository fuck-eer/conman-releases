"use client";

import { motion } from "motion/react";
import { STROKE, STROKE_WIDTH, ANIM, NODE_RADIUS } from "./constants";

interface Props {
  hovered: boolean;
}

export function ParallelTasksIllustration({ hovered }: Props) {
  return (
    <svg
      viewBox="0 0 200 160"
      fill="none"
      className="h-full w-full"
      aria-hidden
    >
      {/* Left terminal */}
      <motion.rect
        x="8"
        y="10"
        width="84"
        height="100"
        rx="8"
        stroke={STROKE.white}
        strokeWidth={STROKE_WIDTH.normal}
        animate={hovered ? { stroke: STROKE.purpleGlow } : { stroke: STROKE.white }}
        transition={ANIM.fadeIn}
      />
      <line x1="8" y1="28" x2="92" y2="28" stroke={STROKE.muted} strokeWidth={STROKE_WIDTH.thin} />
      <circle cx="18" cy="19" r="2.5" fill={STROKE.purple} opacity={0.5} />
      <circle cx="27" cy="19" r="2.5" fill={STROKE.muted} />

      {[36, 46, 56, 66].map((y, i) => (
        <line
          key={y}
          x1="16"
          y1={y}
          x2={40 + (i % 2) * 20}
          y2={y}
          stroke={STROKE.muted}
          strokeWidth={STROKE_WIDTH.thin}
          strokeLinecap="round"
        />
      ))}

      {/* Left progress bar */}
      <rect x="16" y="82" width="68" height="6" rx="3" stroke={STROKE.muted} strokeWidth={STROKE_WIDTH.thin} fill="none" />
      <motion.rect
        x="16"
        y="82"
        width="0"
        height="6"
        rx="3"
        fill={STROKE.purple}
        initial={{ width: 0 }}
        animate={hovered ? { width: [0, 68] } : { width: 0 }}
        transition={hovered ? { duration: 1.5, repeat: Infinity, ease: "easeInOut" } : ANIM.fadeOut}
      />

      {/* Right terminal */}
      <motion.rect
        x="108"
        y="10"
        width="84"
        height="100"
        rx="8"
        stroke={STROKE.white}
        strokeWidth={STROKE_WIDTH.normal}
        animate={hovered ? { stroke: STROKE.orangeGlow } : { stroke: STROKE.white }}
        transition={ANIM.fadeIn}
      />
      <line x1="108" y1="28" x2="192" y2="28" stroke={STROKE.muted} strokeWidth={STROKE_WIDTH.thin} />
      <circle cx="118" cy="19" r="2.5" fill={STROKE.orange} opacity={0.5} />
      <circle cx="127" cy="19" r="2.5" fill={STROKE.muted} />

      {[36, 46, 56, 66].map((y, i) => (
        <line
          key={y}
          x1="116"
          y1={y}
          x2={140 + (i % 2) * 20}
          y2={y}
          stroke={STROKE.muted}
          strokeWidth={STROKE_WIDTH.thin}
          strokeLinecap="round"
        />
      ))}

      {/* Right progress bar */}
      <rect x="116" y="82" width="68" height="6" rx="3" stroke={STROKE.muted} strokeWidth={STROKE_WIDTH.thin} fill="none" />
      <motion.rect
        x="116"
        y="82"
        width="0"
        height="6"
        rx="3"
        fill={STROKE.orange}
        initial={{ width: 0 }}
        animate={hovered ? { width: [0, 68] } : { width: 0 }}
        transition={hovered ? { duration: 1.8, repeat: Infinity, ease: "easeInOut", delay: 0.2 } : ANIM.fadeOut}
      />

      {/* Central circuit connector */}
      <motion.line
        x1="92"
        y1="60"
        x2="108"
        y2="60"
        stroke={STROKE.orange}
        strokeWidth={STROKE_WIDTH.normal}
        strokeDasharray="3 3"
        initial={{ opacity: 0.15 }}
        animate={hovered ? { opacity: 1 } : { opacity: 0.15 }}
        transition={ANIM.fadeIn}
      />

      {/* Connector nodes */}
      <motion.circle
        cx="92"
        cy="60"
        r={NODE_RADIUS}
        fill={STROKE.purple}
        initial={{ opacity: 0.15 }}
        animate={hovered ? { opacity: 1 } : { opacity: 0.15 }}
        transition={ANIM.fadeIn}
      />
      <motion.circle
        cx="108"
        cy="60"
        r={NODE_RADIUS}
        fill={STROKE.orange}
        initial={{ opacity: 0.15 }}
        animate={hovered ? { opacity: 1 } : { opacity: 0.15 }}
        transition={ANIM.fadeIn}
      />

      {/* Bottom status bar */}
      <motion.rect
        x="8"
        y="122"
        width="184"
        height="26"
        rx="6"
        stroke={STROKE.muted}
        strokeWidth={STROKE_WIDTH.thin}
        fill="none"
        animate={hovered ? { stroke: STROKE.white } : { stroke: STROKE.muted }}
        transition={ANIM.fadeIn}
      />

      {/* Status dots */}
      {[
        { cx: 40, color: STROKE.purple },
        { cx: 100, color: STROKE.orange },
        { cx: 160, color: STROKE.whiteBright },
      ].map((dot, i) => (
        <motion.circle
          key={i}
          cx={dot.cx}
          cy="135"
          r="4"
          fill={dot.color}
          initial={{ opacity: 0.2 }}
          animate={hovered ? { opacity: [0.3, 1, 0.3] } : { opacity: 0.2 }}
          transition={hovered ? { ...ANIM.loop, delay: i * 0.3 } : ANIM.fadeOut}
        />
      ))}
    </svg>
  );
}
