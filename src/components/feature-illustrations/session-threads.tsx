"use client";

import { motion } from "motion/react";
import { STROKE, STROKE_WIDTH, ANIM, NODE_RADIUS } from "./constants";

interface Props {
  hovered: boolean;
}

const THREADS = [
  { y: 24, width: 70, label: "Desktop" },
  { y: 52, width: 85, label: "PresPRoj" },
  { y: 80, width: 60, label: "Docs" },
];

export function SessionThreadsIllustration({ hovered }: Props) {
  return (
    <svg
      viewBox="0 0 200 160"
      fill="none"
      className="h-full w-full"
      aria-hidden
    >
      {/* Sidebar panel */}
      <motion.rect
        x="10"
        y="10"
        width="100"
        height="140"
        rx="8"
        stroke={STROKE.white}
        strokeWidth={STROKE_WIDTH.normal}
        animate={hovered ? { stroke: STROKE.purpleGlow } : { stroke: STROKE.white }}
        transition={ANIM.fadeIn}
      />

      {/* Thread rows */}
      {THREADS.map((thread, i) => (
        <motion.g key={i}>
          <motion.rect
            x="18"
            y={thread.y}
            width="84"
            height="22"
            rx="4"
            fill={STROKE.muted}
            animate={
              hovered
                ? { fill: i === 1 ? STROKE.purpleGlow : STROKE.muted }
                : { fill: STROKE.muted }
            }
            transition={ANIM.fadeIn}
          />
          <text
            x="28"
            y={thread.y + 14.5}
            fill={STROKE.whiteBright}
            fontSize="9"
            fontFamily="monospace"
            opacity={0.6}
          >
            {thread.label}
          </text>
          <motion.circle
            cx="94"
            cy={thread.y + 11}
            r="3"
            fill={STROKE.orange}
            initial={{ opacity: 0.15, scale: 1 }}
            animate={
              hovered
                ? { opacity: [0.2, 1, 0.2], scale: [0.8, 1.2, 0.8] }
                : { opacity: 0.15, scale: 1 }
            }
            transition={hovered ? { ...ANIM.loop, delay: i * 0.3 } : ANIM.fadeOut}
            style={{ transformOrigin: `94px ${thread.y + 11}px` }}
          />
        </motion.g>
      ))}

      {/* Main chat area */}
      <motion.rect
        x="125"
        y="10"
        width="65"
        height="140"
        rx="8"
        stroke={STROKE.white}
        strokeWidth={STROKE_WIDTH.normal}
        animate={hovered ? { stroke: STROKE.purpleGlow } : { stroke: STROKE.white }}
        transition={ANIM.fadeIn}
      />

      {/* Chat area content lines */}
      {[28, 42, 56, 70, 84].map((y, i) => (
        <motion.line
          key={y}
          x1="133"
          y1={y}
          x2={155 + (i % 3) * 10}
          y2={y}
          stroke={STROKE.muted}
          strokeWidth={STROKE_WIDTH.thin}
          strokeLinecap="round"
          initial={{ opacity: 0.2 }}
          animate={hovered ? { opacity: [0.2, 0.7, 0.2] } : { opacity: 0.2 }}
          transition={hovered ? { ...ANIM.loop, delay: i * 0.12 } : ANIM.fadeOut}
        />
      ))}

      {/* Connector line from sidebar to chat */}
      <motion.path
        d="M 110 63 L 125 63"
        stroke={STROKE.orange}
        strokeWidth={STROKE_WIDTH.normal}
        strokeDasharray="3 3"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={hovered ? { pathLength: 1, opacity: 0.8 } : { pathLength: 0, opacity: 0 }}
        transition={ANIM.pathDraw}
      />
      <motion.circle
        cx="110"
        cy={63}
        r={NODE_RADIUS}
        fill={STROKE.orange}
        initial={{ opacity: 0 }}
        animate={hovered ? { opacity: 1 } : { opacity: 0 }}
        transition={ANIM.fadeIn}
      />
      <motion.circle
        cx="125"
        cy={63}
        r={NODE_RADIUS}
        fill={STROKE.orange}
        initial={{ opacity: 0 }}
        animate={hovered ? { opacity: 1 } : { opacity: 0 }}
        transition={ANIM.fadeIn}
      />
    </svg>
  );
}
