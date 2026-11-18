"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "What's next", href: "/whats-next" },
  { label: "Power use", href: "/power-use" },
] as const;

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="shrink-0">
          <Image
            src="/assets/logo-full.png"
            alt="ConMan"
            width={120}
            height={120}
            className="h-10 w-auto sm:h-30"
            priority
          />
        </Link>

        <nav className="hidden rounded-full border border-border bg-card/60 px-2 py-1.5 backdrop-blur-md md:block">
          <ul className="flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="rounded-full px-4 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/try-it-out"
            className="hidden rounded-full bg-purple-700 px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-purple-600 md:block"
          >
            Try Now
          </Link>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex size-9 items-center justify-center rounded-lg text-muted-foreground md:hidden"
            aria-label="Toggle menu"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              {mobileOpen ? (
                <>
                  <line x1="4" y1="4" x2="16" y2="16" />
                  <line x1="16" y1="4" x2="4" y2="16" />
                </>
              ) : (
                <>
                  <line x1="3" y1="6" x2="17" y2="6" />
                  <line x1="3" y1="10" x2="17" y2="10" />
                  <line x1="3" y1="14" x2="17" y2="14" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      <div
        className={cn(
          "overflow-hidden border-b border-border bg-background/95 backdrop-blur-md transition-all duration-300 md:hidden",
          mobileOpen ? "max-h-80" : "max-h-0 border-b-0",
        )}
      >
        <nav className="px-4 py-4">
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-lg px-4 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-card hover:text-foreground"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="mt-2">
              <Link
                href="/try-it-out"
                onClick={() => setMobileOpen(false)}
                className="block rounded-full bg-purple-700 px-5 py-2.5 text-center text-sm font-medium text-white transition-colors hover:bg-purple-600"
              >
                Try Now
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
