"use client";

import { motion } from "motion/react";
import { STROKE, STROKE_WIDTH, ANIM } from "./constants";

interface Props {
  hovered: boolean;
}

const CLI_LABELS = ["claude", "codex", "gemini"];
const COLORS = [STROKE.purple, STROKE.orange, STROKE.whiteBright];

const CARD_W = 100;
const GAP = 10;
const TOTAL_W = CARD_W * 3 + GAP * 2;
const VB_W = TOTAL_W + 20;
const VB_H = 90;
const CARD_H = VB_H - 10;

export function MultiCliIllustration({ hovered }: Props) {
  const stackCenterX = (VB_W - CARD_W) / 2;

  return (
    <svg
      viewBox={`0 0 ${VB_W} ${VB_H}`}
      fill="none"
      className="h-full w-full"
      aria-hidden
    >
      {[2, 1, 0].map((i) => {
        const fanX = 10 + i * (CARD_W + GAP);
        const stackX = stackCenterX + i * 5;
        const stackY = i * 6;
        const restOpacity = 1 - i * 0.15;
        return (
          <motion.g
            key={i}
            initial={{ x: stackX, y: stackY, opacity: restOpacity }}
            animate={
              hovered
                ? { x: fanX, y: 0, opacity: 1 }
                : { x: stackX, y: stackY, opacity: restOpacity }
            }
            transition={{ ...ANIM.fadeIn, duration: 0.5, delay: i * ANIM.stagger }}
          >
            <rect
              x={0}
              y="5"
              width={CARD_W}
              height={CARD_H}
              rx="8"
              stroke={COLORS[i]}
              strokeWidth={STROKE_WIDTH.normal}
              fill="none"
            />
            <line
              x1={0}
              y1="22"
              x2={CARD_W}
              y2="22"
              stroke={STROKE.muted}
              strokeWidth={STROKE_WIDTH.thin}
            />
            <circle cx={11} cy="13.5" r="2.5" fill={COLORS[i]} opacity={0.6} />
            <circle cx={21} cy="13.5" r="2.5" fill={STROKE.muted} />
            <circle cx={31} cy="13.5" r="2.5" fill={STROKE.muted} />

            <motion.text
              x={CARD_W / 2}
              y="50"
              textAnchor="middle"
              fill={COLORS[i]}
              fontSize="11"
              fontFamily="monospace"
              initial={{ opacity: i === 0 ? 0.5 : 0 }}
              animate={hovered ? { opacity: 0.9 } : { opacity: i === 0 ? 0.5 : 0 }}
              transition={ANIM.fadeIn}
            >
              {CLI_LABELS[i]}
            </motion.text>

            <line
              x1={15}
              y1="64"
              x2={60}
              y2="64"
              stroke={COLORS[i]}
              strokeWidth={STROKE_WIDTH.thin}
              strokeLinecap="round"
              opacity={0.3}
            />
          </motion.g>
        );
      })}
    </svg>
  );
}
