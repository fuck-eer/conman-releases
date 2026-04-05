export interface Feature {
  title: string;
  description: string;
}

export const features: Feature[] = [
  {
    title: "Forget cold Starts and start with Lukewarm Sessions",
    description:
      "Using thin RAG layer, ConMan determines what pre-existing context needs to be injected in your new sessions, So that you don't play the handoff dance anymore.",
  },
  {
    title: "House multiple CLIs in a single UI",
    description:
      "A clear dropdown that enables you to start threads from multiple CLIs. Which makes yo save limits and select who runs what tasks.",
  },
  {
    title: "Better session visibility and parallel task support.",
    description:
      "Manage sessions like slack threads. Divided on the basis of project directories. Click 'em and start typing.",
  },
  {
    title: "Composer that works, Type Less, Do More",
    description:
      "Input composer which is built like a bullet, allows auto-complete, multi-file attachment, add skills, enable memory-injection, etc...",
  },
  {
    title: "A Real Dashboard, Not Just a Chat Window",
    description:
      "What you get is Live streaming text, Rich text rendering, tool info, cost tracking, One-Click IDE launch, Built-In Dev Server Management, etc...",
  },
  {
    title: "Better session visibility and parallel task support.",
    description:
      "Manage sessions like slack threads. Divided on the basis of project directories. Click 'em and start typing.",
  },
];
