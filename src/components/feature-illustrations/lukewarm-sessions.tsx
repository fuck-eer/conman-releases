"use client";

import { motion } from "motion/react";
import { STROKE, STROKE_WIDTH, ANIM, NODE_RADIUS } from "./constants";

interface Props {
  hovered: boolean;
}

export function LukewarmSessionsIllustration({ hovered }: Props) {
  return (
    <svg
      viewBox="0 0 320 180"
      fill="none"
      className="h-full w-full"
      aria-hidden
    >
      {/* Left chat window */}
      <motion.rect
        x="20"
        y="30"
        width="90"
        height="120"
        rx="8"
        stroke={STROKE.white}
        strokeWidth={STROKE_WIDTH.normal}
        animate={hovered ? { stroke: STROKE.purpleGlow } : { stroke: STROKE.white }}
        transition={ANIM.fadeIn}
      />
      <line x1="20" y1="50" x2="110" y2="50" stroke={STROKE.muted} strokeWidth={STROKE_WIDTH.thin} />
      {[60, 74, 88, 102].map((y, i) => (
        <motion.line
          key={`left-${i}`}
          x1="30"
          y1={y}
          x2={65 + (i % 2) * 20}
          y2={y}
          stroke={STROKE.muted}
          strokeWidth={STROKE_WIDTH.thin}
          strokeLinecap="round"
          initial={{ opacity: 0.3 }}
          animate={hovered ? { opacity: [0.3, 0.8, 0.3] } : { opacity: 0.3 }}
          transition={hovered ? { ...ANIM.loop, delay: i * 0.15 } : ANIM.fadeOut}
        />
      ))}

      {/* Right chat window */}
      <motion.rect
        x="210"
        y="30"
        width="90"
        height="120"
        rx="8"
        stroke={STROKE.white}
        strokeWidth={STROKE_WIDTH.normal}
        animate={hovered ? { stroke: STROKE.purpleGlow } : { stroke: STROKE.white }}
        transition={ANIM.fadeIn}
      />
      <line x1="210" y1="50" x2="300" y2="50" stroke={STROKE.muted} strokeWidth={STROKE_WIDTH.thin} />
      {[60, 74, 88, 102].map((y, i) => (
        <motion.line
          key={`right-${i}`}
          x1="220"
          y1={y}
          x2={255 + (i % 2) * 20}
          y2={y}
          stroke={STROKE.muted}
          strokeWidth={STROKE_WIDTH.thin}
          strokeLinecap="round"
          initial={{ opacity: 0.3 }}
          animate={hovered ? { opacity: [0.3, 0.8, 0.3] } : { opacity: 0.3 }}
          transition={hovered ? { ...ANIM.loop, delay: i * 0.15 + 0.3 } : ANIM.fadeOut}
        />
      ))}

      {/* Center brain node */}
      <motion.circle
        cx="160"
        cy="90"
        r="16"
        stroke={STROKE.purpleGlow}
        strokeWidth={STROKE_WIDTH.medium}
        fill="none"
        animate={
          hovered
            ? { scale: [1, 1.15, 1], stroke: STROKE.purple }
            : { scale: 1, stroke: STROKE.purpleGlow }
        }
        transition={hovered ? { ...ANIM.loop, duration: 2 } : ANIM.fadeOut}
        style={{ transformOrigin: "160px 90px" }}
      />
      <motion.circle
        cx="160"
        cy="90"
        r="6"
        fill={STROKE.purpleGlow}
        initial={{ opacity: 0.3 }}
        animate={hovered ? { opacity: [0.4, 1, 0.4] } : { opacity: 0.3 }}
        transition={hovered ? { ...ANIM.loop, duration: 2 } : ANIM.fadeOut}
      />

      {/* Connector lines (dashed) */}
      <motion.path
        d="M 110 90 L 144 90"
        stroke={STROKE.orange}
        strokeWidth={STROKE_WIDTH.normal}
        strokeDasharray="4 4"
        initial={{ pathLength: 0, opacity: 0.2 }}
        animate={hovered ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0.2 }}
        transition={ANIM.pathDraw}
      />
      <motion.path
        d="M 176 90 L 210 90"
        stroke={STROKE.orange}
        strokeWidth={STROKE_WIDTH.normal}
        strokeDasharray="4 4"
        initial={{ pathLength: 0, opacity: 0.2 }}
        animate={hovered ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0.2 }}
        transition={{ ...ANIM.pathDraw, delay: 0.15 }}
      />

      {/* Junction nodes */}
      {[110, 144, 176, 210].map((cx) => (
        <motion.circle
          key={cx}
          cx={cx}
          cy={90}
          r={NODE_RADIUS}
          fill={STROKE.orange}
          initial={{ opacity: 0.2 }}
          animate={hovered ? { opacity: 1 } : { opacity: 0.2 }}
          transition={ANIM.fadeIn}
        />
      ))}

      {/* Flowing particles on hover */}
      {hovered && (
        <>
          <motion.circle
            cx="110"
            cy="90"
            r="2"
            fill={STROKE.orange}
            initial={{ opacity: 1 }}
            animate={{ cx: [110, 144], opacity: [1, 0] }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
          <motion.circle
            cx="210"
            cy="90"
            r="2"
            fill={STROKE.orange}
            initial={{ opacity: 1 }}
            animate={{ cx: [210, 176], opacity: [1, 0] }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear", delay: 0.5 }}
          />
        </>
      )}
    </svg>
  );
}
