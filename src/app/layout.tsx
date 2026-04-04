import type { Metadata } from "next";
import { Josefin_Sans, Bebas_Neue, Geist_Mono } from "next/font/google";
import { Navbar } from "@/components/navbar";
import { GatedBetaBadge } from "@/components/gated-beta-badge";
import "./globals.css";
import Aurora from "@/components/aurora";

const josefinSans = Josefin_Sans({
  variable: "--font-josefin-sans",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas-neue",
  subsets: ["latin"],
  weight: "400",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "ConMan — Command Center for Autonomous Builds",
    template: "%s | ConMan",
  },
  description:
    "A lightweight UI for all your CLIs. Manage sessions, inject memory, run parallel tasks — all local-first.",
  openGraph: {
    title: "ConMan — Command Center for Autonomous Builds",
    description:
      "A lightweight UI for all your CLIs. Manage sessions, inject memory, run parallel tasks — all local-first.",
    images: ["/images/logo-full.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${josefinSans.variable} ${bebasNeue.variable} ${geistMono.variable} dark h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="h-full flex flex-col overflow-hidden bg-background text-foreground">
        <Aurora />
        <Navbar />
        {children}
        <GatedBetaBadge />
      </body>
    </html>
  );
}
