import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
	title: "Terms of Service",
};

export default function TermsPage() {
	return (
		<main className="flex flex-1 flex-col overflow-y-auto">
			<article className="mx-auto w-full max-w-3xl px-6 py-20 sm:px-8">
				<h1 className="font-heading text-5xl tracking-wide text-foreground">
					Terms of Service
				</h1>
				<p className="mt-2 text-sm text-muted-foreground/60">
					Last updated: April 4, 2026
				</p>

				<div className="mt-12 space-y-10 text-sm leading-relaxed text-muted-foreground">
					<section>
						<h2 className="font-heading text-xl tracking-wide text-foreground">
							Acceptance
						</h2>
						<p className="mt-3">
							By accessing this website or downloading the ConMan desktop
							application, you agree to these terms. If you do not agree, do
							not use the service.
						</p>
					</section>

					<section>
						<h2 className="font-heading text-xl tracking-wide text-foreground">
							Description of Service
						</h2>
						<p className="mt-3">
							ConMan is a free, open-source (MIT-licensed) desktop application
							that provides a unified interface for managing AI coding CLIs.
							It runs locally on your machine and coordinates tools like
							Claude Code, OpenAI Codex, Gemini CLI, and others. This website
							provides download access during the gated beta period.
						</p>
					</section>

					<section>
						<h2 className="font-heading text-xl tracking-wide text-foreground">
							Gated Beta
						</h2>
						<p className="mt-3">
							ConMan is currently in a gated beta phase. Access is limited to
							a fixed number of active users. We may place you on a waitlist
							and admit users at our discretion. We reserve the right to
							modify beta capacity, revoke access, or end the beta program at
							any time without prior notice.
						</p>
					</section>

					<section>
						<h2 className="font-heading text-xl tracking-wide text-foreground">
							License
						</h2>
						<p className="mt-3">
							The ConMan desktop application is released under the{" "}
							<a
								href="https://opensource.org/licenses/MIT"
								target="_blank"
								rel="noopener noreferrer"
								className="text-foreground underline underline-offset-2 transition-colors hover:text-foreground/70"
							>
								MIT License
							</a>
							. You are free to use, modify, and distribute the software in
							accordance with that license.
						</p>
					</section>

					<section>
						<h2 className="font-heading text-xl tracking-wide text-foreground">
							Third-Party Services
						</h2>
						<p className="mt-3">
							ConMan integrates with third-party AI CLI tools (Anthropic,
							OpenAI, Google, etc.) that you install and configure
							independently. Your use of those tools is governed by their
							respective terms of service and privacy policies. ConMan does
							not proxy or store your API keys for those services beyond your
							local configuration file.
						</p>
					</section>

					<section>
						<h2 className="font-heading text-xl tracking-wide text-foreground">
							Unsigned Software
						</h2>
						<p className="mt-3">
							The ConMan desktop application is currently unsigned. On macOS,
							you may need to allow the application in System Settings &rarr;
							Privacy &amp; Security. By proceeding with the installation, you
							acknowledge that you understand the implications of running
							unsigned software.
						</p>
					</section>

					<section>
						<h2 className="font-heading text-xl tracking-wide text-foreground">
							Your Responsibilities
						</h2>
						<ul className="mt-3 list-disc space-y-1.5 pl-5">
							<li>
								Provide a valid email address when signing up for the beta.
							</li>
							<li>
								Maintain the security of your machine and any credentials
								configured within ConMan.
							</li>
							<li>
								Comply with the terms of any third-party AI services you use
								through ConMan.
							</li>
							<li>
								Use ConMan in accordance with applicable laws and
								regulations.
							</li>
						</ul>
					</section>

					<section>
						<h2 className="font-heading text-xl tracking-wide text-foreground">
							Disclaimer of Warranties
						</h2>
						<p className="mt-3">
							ConMan is provided{" "}
							<strong className="text-foreground/90">
								&ldquo;as is&rdquo;
							</strong>{" "}
							and{" "}
							<strong className="text-foreground/90">
								&ldquo;as available&rdquo;
							</strong>{" "}
							without warranties of any kind, whether express or implied. We
							do not guarantee that the application will be error-free,
							uninterrupted, or compatible with your system. AI-generated
							output is not verified by ConMan and may be inaccurate.
						</p>
					</section>

					<section>
						<h2 className="font-heading text-xl tracking-wide text-foreground">
							Limitation of Liability
						</h2>
						<p className="mt-3">
							To the maximum extent permitted by law, ConMan and its
							contributors shall not be liable for any indirect, incidental,
							special, consequential, or punitive damages arising from your
							use of the software or this website. This includes, without
							limitation, damages for data loss, loss of profits, or
							interruption of business &mdash; whether or not we were advised
							of the possibility of such damages.
						</p>
					</section>

					<section>
						<h2 className="font-heading text-xl tracking-wide text-foreground">
							Intellectual Property
						</h2>
						<p className="mt-3">
							The ConMan name, logo, and website content (excluding the
							open-source application code) are the property of their
							respective owners. The open-source codebase is governed by the
							MIT License.
						</p>
					</section>

					<section>
						<h2 className="font-heading text-xl tracking-wide text-foreground">
							Modifications
						</h2>
						<p className="mt-3">
							We may revise these terms at any time. Changes will be posted on
							this page with an updated date. Your continued use of the
							website or application constitutes acceptance of the revised
							terms.
						</p>
					</section>

					<section>
						<h2 className="font-heading text-xl tracking-wide text-foreground">
							Termination
						</h2>
						<p className="mt-3">
							We may suspend or terminate your beta access at our discretion.
							Upon termination, your right to download ConMan through this
							website ceases. Locally installed copies remain subject to the
							MIT License.
						</p>
					</section>

					<section>
						<h2 className="font-heading text-xl tracking-wide text-foreground">
							Contact
						</h2>
						<p className="mt-3">
							Questions about these terms? Open an issue on{" "}
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
							href="/privacy"
							className="underline underline-offset-2 transition-colors hover:text-muted-foreground"
						>
							Privacy Policy
						</Link>
					</p>
				</div>
			</article>
			<Footer />
		</main>
	);
}
