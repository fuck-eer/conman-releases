"use client";

import { motion } from "motion/react";
import { STROKE, STROKE_WIDTH, ANIM, NODE_RADIUS } from "./constants";

interface Props {
  hovered: boolean;
}

export function DashboardPanelsIllustration({ hovered }: Props) {
  return (
    <svg
      viewBox="0 0 320 160"
      fill="none"
      className="h-full w-full"
      aria-hidden
    >
      {/* Main streaming text panel */}
      <motion.rect
        x="10"
        y="10"
        width="150"
        height="100"
        rx="8"
        stroke={STROKE.white}
        strokeWidth={STROKE_WIDTH.normal}
        animate={hovered ? { stroke: STROKE.purpleGlow } : { stroke: STROKE.white }}
        transition={ANIM.fadeIn}
      />
      <line x1="10" y1="28" x2="160" y2="28" stroke={STROKE.muted} strokeWidth={STROKE_WIDTH.thin} />
      <text x="18" y="22" fill={STROKE.whiteBright} fontSize="8" fontFamily="monospace" opacity={0.5}>
        Stream
      </text>

      {/* Streaming text lines */}
      {[38, 50, 62, 74, 86].map((y, i) => (
        <motion.line
          key={y}
          x1="20"
          y1={y}
          x2={60 + (i % 3) * 28}
          y2={y}
          stroke={STROKE.muted}
          strokeWidth={STROKE_WIDTH.thin}
          strokeLinecap="round"
          initial={{ opacity: 0.2 }}
          animate={
            hovered
              ? { opacity: [0, 0.7, 0.7], x2: [20, 60 + (i % 3) * 28] }
              : { opacity: 0.2 }
          }
          transition={hovered ? { duration: 0.6, delay: i * 0.12, ease: "easeOut" } : ANIM.fadeOut}
        />
      ))}

      {/* Tool info card (top right) */}
      <motion.rect
        x="172"
        y="10"
        width="138"
        height="44"
        rx="8"
        stroke={STROKE.white}
        strokeWidth={STROKE_WIDTH.normal}
        animate={hovered ? { stroke: STROKE.orangeGlow } : { stroke: STROKE.white }}
        transition={ANIM.fadeIn}
      />
      <text x="180" y="28" fill={STROKE.whiteBright} fontSize="8" fontFamily="monospace" opacity={0.5}>
        Tool Info
      </text>
      <line x1="172" y1="33" x2="310" y2="33" stroke={STROKE.muted} strokeWidth={STROKE_WIDTH.thin} />
      {[42, 48].map((y, i) => (
        <line
          key={y}
          x1="180"
          y1={y}
          x2={240 + i * 20}
          y2={y}
          stroke={STROKE.muted}
          strokeWidth={STROKE_WIDTH.thin}
          strokeLinecap="round"
        />
      ))}

      {/* Cost ticker (bottom right) */}
      <motion.rect
        x="172"
        y="64"
        width="138"
        height="46"
        rx="8"
        stroke={STROKE.white}
        strokeWidth={STROKE_WIDTH.normal}
        animate={hovered ? { stroke: STROKE.orangeGlow } : { stroke: STROKE.white }}
        transition={ANIM.fadeIn}
      />
      <text x="180" y="80" fill={STROKE.whiteBright} fontSize="8" fontFamily="monospace" opacity={0.5}>
        Cost
      </text>

      <motion.text
        x="250"
        y="98"
        textAnchor="middle"
        fill={STROKE.orange}
        fontSize="16"
        fontFamily="monospace"
        initial={{ opacity: 0.3 }}
        animate={hovered ? { opacity: 1 } : { opacity: 0.3 }}
        transition={ANIM.fadeIn}
      >
        $0.12
      </motion.text>

      {/* Bottom bar — IDE launch + dev server */}
      <motion.rect
        x="10"
        y="120"
        width="300"
        height="30"
        rx="6"
        stroke={STROKE.muted}
        strokeWidth={STROKE_WIDTH.thin}
        animate={hovered ? { stroke: STROKE.white } : { stroke: STROKE.muted }}
        transition={ANIM.fadeIn}
      />

      {["VS Code", "Cursor", "Dev Server"].map((label, i) => (
        <g key={i}>
          <rect
            x={22 + i * 100}
            y="126"
            width={label.length * 6.5 + 14}
            height="18"
            rx="4"
            stroke={i === 2 ? STROKE.orange : STROKE.purpleGlow}
            strokeWidth={STROKE_WIDTH.thin}
            fill="none"
          />
          <text
            x={29 + i * 100}
            y="138"
            fill={STROKE.whiteBright}
            fontSize="8"
            fontFamily="monospace"
            opacity={0.6}
          >
            {label}
          </text>
        </g>
      ))}

      {/* Circuit connector nodes between panels */}
      {[
        { cx: 166, cy: 40 },
        { cx: 166, cy: 87 },
      ].map((node, i) => (
        <motion.circle
          key={i}
          cx={node.cx}
          cy={node.cy}
          r={NODE_RADIUS}
          fill={STROKE.orange}
          initial={{ opacity: 0.15 }}
          animate={hovered ? { opacity: 1 } : { opacity: 0.15 }}
          transition={ANIM.fadeIn}
        />
      ))}
    </svg>
  );
}
