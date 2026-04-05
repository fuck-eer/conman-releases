export const STROKE = {
  purple: "rgba(168,85,247,0.7)",
  purpleGlow: "rgba(168,85,247,0.4)",
  orange: "rgba(251,146,60,0.75)",
  orangeGlow: "rgba(251,146,60,0.4)",
  white: "rgba(255,255,255,0.25)",
  whiteBright: "rgba(255,255,255,0.5)",
  muted: "rgba(255,255,255,0.12)",
} as const;

export const STROKE_WIDTH = {
  thin: 1.25,
  normal: 1.75,
  medium: 2,
} as const;

export const ANIM = {
  pathDraw: { duration: 0.8, ease: "easeOut" as const },
  fadeIn: { duration: 0.4, ease: "easeOut" as const },
  fadeOut: { duration: 0.3, ease: "easeIn" as const },
  micro: { duration: 0.25, ease: "easeOut" as const },
  loop: { duration: 2.5, ease: "easeInOut" as const, repeat: Infinity },
  stagger: 0.08,
} as const;

export const NODE_RADIUS = 4;
