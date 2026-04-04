import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
	title: "Privacy Policy",
};

export default function PrivacyPage() {
	return (
		<main className="flex flex-1 flex-col overflow-y-auto">
			<article className="mx-auto w-full max-w-3xl px-6 py-20 sm:px-8">
				<h1 className="font-heading text-5xl tracking-wide text-foreground">
					Privacy Policy
				</h1>
				<p className="mt-2 text-sm text-muted-foreground/60">
					Last updated: April 4, 2026
				</p>

				<div className="mt-12 space-y-10 text-sm leading-relaxed text-muted-foreground">
					<section>
						<h2 className="font-heading text-xl tracking-wide text-foreground">
							Overview
						</h2>
						<p className="mt-3">
							ConMan is a local-first desktop application. Your code, your
							data, and your AI conversations stay on your machine. We do not
							operate cloud infrastructure that stores or processes your
							project files. This policy covers what limited information we do
							collect through this website and the ConMan desktop application.
						</p>
					</section>

					<section>
						<h2 className="font-heading text-xl tracking-wide text-foreground">
							What We Collect
						</h2>

						<h3 className="mt-4 text-base font-medium text-foreground/80">
							On this website
						</h3>
						<ul className="mt-2 list-disc space-y-1.5 pl-5">
							<li>
								<strong className="text-foreground/90">Email address</strong>{" "}
								&mdash; provided when you sign up for the gated beta. Used
								solely to manage beta access and notify you when a slot becomes
								available.
							</li>
							<li>
								<strong className="text-foreground/90">Beta status</strong>{" "}
								&mdash; whether your account is active or waitlisted, and the
								timestamp of signup.
							</li>
						</ul>
						<p className="mt-3">
							We do not use cookies, analytics scripts, tracking pixels, or
							any third-party advertising services on this website.
						</p>

						<h3 className="mt-6 text-base font-medium text-foreground/80">
							In the desktop application
						</h3>
						<p className="mt-2">
							ConMan stores all data locally on your machine. This includes:
						</p>
						<ul className="mt-2 list-disc space-y-1.5 pl-5">
							<li>
								Thread and session history (prompts, messages, project paths)
								in a local SQLite database.
							</li>
							<li>
								Memory files (project summaries and RAG embeddings) stored in{" "}
								<code className="rounded bg-card px-1.5 py-0.5 text-xs text-foreground/80">
									~/.conman/memory/
								</code>
								.
							</li>
							<li>
								Configuration and preferences in{" "}
								<code className="rounded bg-card px-1.5 py-0.5 text-xs text-foreground/80">
									~/.conman/config.json
								</code>
								.
							</li>
							<li>Temporary file uploads in your OS temp directory.</li>
						</ul>
						<p className="mt-3">
							ConMan does not send telemetry, analytics, crash reports, or
							usage data to any server. The embedding model used for memory
							search runs entirely on your device via ONNX.
						</p>
					</section>

					<section>
						<h2 className="font-heading text-xl tracking-wide text-foreground">
							Third-Party Services
						</h2>
						<p className="mt-3">
							ConMan coordinates AI coding CLIs (Claude Code, OpenAI Codex,
							Gemini CLI, and others) that you install and configure
							separately. These tools connect to their respective providers
							using your own API keys or subscriptions. ConMan spawns these
							CLIs as child processes and does not intercept, proxy, or log
							their API traffic.
						</p>
						<p className="mt-3">
							The desktop application checks GitHub for software updates. No
							personal data is transmitted during this check.
						</p>
					</section>

					<section>
						<h2 className="font-heading text-xl tracking-wide text-foreground">
							Data Storage &amp; Security
						</h2>
						<p className="mt-3">
							Beta signup emails are stored in a PostgreSQL database. We use
							reasonable safeguards to protect this data but cannot guarantee
							absolute security.
						</p>
						<p className="mt-3">
							All application data resides on your local filesystem. You are
							responsible for securing your machine and any backups you create.
						</p>
					</section>

					<section>
						<h2 className="font-heading text-xl tracking-wide text-foreground">
							Data Retention &amp; Deletion
						</h2>
						<p className="mt-3">
							You can request deletion of your beta signup email at any time
							by emailing us. Local application data can be removed by
							uninstalling ConMan and deleting the{" "}
							<code className="rounded bg-card px-1.5 py-0.5 text-xs text-foreground/80">
								~/.conman/
							</code>{" "}
							directory.
						</p>
					</section>

					<section>
						<h2 className="font-heading text-xl tracking-wide text-foreground">
							Children&apos;s Privacy
						</h2>
						<p className="mt-3">
							ConMan is not directed at anyone under 13. We do not knowingly
							collect personal information from children.
						</p>
					</section>

					<section>
						<h2 className="font-heading text-xl tracking-wide text-foreground">
							Changes to This Policy
						</h2>
						<p className="mt-3">
							We may update this policy as ConMan evolves. Changes will be
							posted on this page with a revised date. Continued use of the
							website or application after changes constitutes acceptance.
						</p>
					</section>

					<section>
						<h2 className="font-heading text-xl tracking-wide text-foreground">
							Contact
						</h2>
						<p className="mt-3">
							Questions about this policy? Open an issue on{" "}
							<a
								href="https://github.com/fuck-eer/conman-releases/issues"
								target="_blank"
								rel="noopener noreferrer"
								className="text-foreground underline underline-offset-2 transition-colors hover:text-foreground/70"
							>
								GitHub
							</a>
							.
						</p>
					</section>

					<p className="pt-4 text-xs text-muted-foreground/40">
						See also:{" "}
						<Link
							href="/terms"
							className="underline underline-offset-2 transition-colors hover:text-muted-foreground"
						>
							Terms of Service
						</Link>
					</p>
				</div>
			</article>
			<Footer />
		</main>
	);
}
