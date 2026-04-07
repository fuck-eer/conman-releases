import Image from "next/image";
import Link from "next/link";
import { GitHubIcon } from "@/components/icons/github";

const PRODUCT_LINKS = [
  { label: "Home", href: "/" },
  { label: "What's next", href: "/whats-next" },
  { label: "Power use", href: "/power-use" },
] as const;

const RESOURCE_LINKS = [
  {
    label: "GitHub Releases",
    href: "https://github.com/fuck-eer/conman-releases/releases",
    external: true,
  },
  {
    label: "Report an Issue",
    href: "https://github.com/fuck-eer/conman-releases/issues",
    external: true,
  },
  {
    label: "Changelog",
    href: "https://github.com/fuck-eer/conman-releases/releases",
    external: true,
  },
] as const;

const LEGAL_LINKS = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
] as const;

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="shrink-0 snap-end border-t border-border bg-card/30">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="mb-6 w-fit mx-auto rounded-lg border border-border bg-card/50 px-3 py-2">
          <p className="text-xs text-muted-foreground/70">
            This app is unsigned. macOS users may need to allow it in System
            Settings &rarr; Privacy &amp; Security.
          </p>
        </div>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block">
              <Image
                src="/assets/logo-icon.png"
                alt="ConMan"
                width={120}
                height={32}
                className="h-8"
                style={{ width: "auto" }}
              />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Think. Tinker. Build.
            </p>
            <div className="mt-5 flex items-center gap-4">
              <a
                href="https://github.com/fuck-eer/conman-releases"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-foreground cursor-pointer"
                aria-label="GitHub"
              >
                <GitHubIcon className="size-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-heading text-sm tracking-wider text-foreground uppercase">
              Product
            </h4>
            <ul className="mt-4 space-y-2.5">
              {PRODUCT_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground cursor-pointer"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-sm tracking-wider text-foreground uppercase">
              Resources
            </h4>
            <ul className="mt-4 space-y-2.5">
              {RESOURCE_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground cursor-pointer"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-sm tracking-wider text-foreground uppercase">
              Legal
            </h4>
            <ul className="mt-4 space-y-2.5">
              {LEGAL_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground cursor-pointer"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-xs text-muted-foreground/60">
            &copy; {currentYear} ConMan. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground/40">
            Gated Beta &mdash; Access is limited
          </p>
        </div>
      </div>
    </footer>
  );
}
