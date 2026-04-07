"use client";

import { motion } from "motion/react";
import { STROKE, STROKE_WIDTH, ANIM } from "./constants";

interface Props {
  hovered: boolean;
}

const CHIPS = [
  { x: 20, label: "Skills", color: STROKE.purple },
  { x: 100, label: "Memory", color: STROKE.orange },
  { x: 186, label: "+3 files", color: STROKE.whiteBright },
];

export function InputComposerIllustration({ hovered }: Props) {
  return (
    <svg
      viewBox="0 0 300 130"
      fill="none"
      preserveAspectRatio="xMidYMid meet"
      className="h-full w-full"
      aria-hidden
    >
      {/* Chip pills above the input — slide in on hover */}
      {CHIPS.map((chip, i) => (
        <motion.g
          key={i}
          initial={{ y: 10, opacity: 0 }}
          animate={
            hovered
              ? { y: 0, opacity: 1 }
              : { y: 10, opacity: 0 }
          }
          transition={{ ...ANIM.fadeIn, delay: i * ANIM.stagger }}
        >
          <rect
            x={chip.x}
            y="6"
            width={chip.label.length * 8 + 16}
            height="20"
            rx="10"
            stroke={chip.color}
            strokeWidth={STROKE_WIDTH.thin}
            fill="none"
          />
          <text
            x={chip.x + 8}
            y="20"
            fill={chip.color}
            fontSize="9.5"
            fontFamily="monospace"
          >
            {chip.label}
          </text>
        </motion.g>
      ))}

      {/* Circuit nodes connecting chips to input */}
      {hovered && (
        <>
          {CHIPS.map((chip, i) => (
            <motion.line
              key={i}
              x1={chip.x + 24}
              y1="26"
              x2={chip.x + 24}
              y2="36"
              stroke={chip.color}
              strokeWidth={STROKE_WIDTH.thin}
              strokeDasharray="2 2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ ...ANIM.pathDraw, delay: i * 0.1 }}
            />
          ))}
        </>
      )}

      {/* Main input field — full width */}
      <motion.rect
        x="8"
        y="36"
        width="284"
        height="44"
        rx="10"
        stroke={STROKE.white}
        strokeWidth={STROKE_WIDTH.normal}
        animate={hovered ? { stroke: STROKE.purple } : { stroke: STROKE.white }}
        transition={ANIM.fadeIn}
      />

      {/* Typing cursor */}
      <motion.line
        x1="22"
        y1="48"
        x2="22"
        y2="70"
        stroke={STROKE.whiteBright}
        strokeWidth={STROKE_WIDTH.medium}
        strokeLinecap="round"
        initial={{ opacity: 0.3 }}
        animate={hovered ? { opacity: [1, 0, 1] } : { opacity: 0.3 }}
        transition={hovered ? { duration: 0.8, repeat: Infinity } : ANIM.fadeOut}
      />

      {/* Typed text */}
      <motion.text
        x="30"
        y="63"
        fill={STROKE.whiteBright}
        fontSize="11"
        fontFamily="monospace"
        initial={{ opacity: 0 }}
        animate={hovered ? { opacity: 0.7 } : { opacity: 0 }}
        transition={ANIM.fadeIn}
      >
        refactor the auth module...
      </motion.text>

      {/* Send button */}
      <motion.circle
        cx="276"
        cy="58"
        r="11"
        stroke={STROKE.purple}
        strokeWidth={STROKE_WIDTH.normal}
        fill="rgba(0,0,0,0)"
        animate={hovered ? { fill: STROKE.purpleGlow, scale: 1.1 } : { fill: "rgba(0,0,0,0)", scale: 1 }}
        transition={ANIM.micro}
        style={{ transformOrigin: "276px 58px" }}
      />
      <path
        d="M 272 58 L 280 58 M 277 53 L 281 58 L 277 63"
        stroke={STROKE.whiteBright}
        strokeWidth={STROKE_WIDTH.thin}
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Attachment icon row below input */}
      {[80, 108, 136].map((x, i) => (
        <motion.rect
          key={i}
          x={x}
          y="92"
          width="18"
          height="18"
          rx="4"
          stroke={STROKE.muted}
          strokeWidth={STROKE_WIDTH.thin}
          fill="none"
          initial={{ opacity: 0.2, y: 4 }}
          animate={hovered ? { opacity: 0.6, y: 0 } : { opacity: 0.2, y: 4 }}
          transition={{ ...ANIM.fadeIn, delay: i * 0.06 }}
        />
      ))}
    </svg>
  );
}
