"use client";

import { useState, useSyncExternalStore, useTransition, type FormEvent } from "react";
import { detectPlatform, type Platform, type PlatformInfo } from "@/lib/platform";
import type { PlatformDownloads } from "@/lib/github";
import { registerBetaUser } from "@/app/actions";
import { BlobCard } from "@/components/blob-card";

const EMPTY_SUB = () => () => {};
const DEFAULT_PLATFORM: PlatformInfo = { platform: "windows", label: "Windows" };
let cachedPlatform: PlatformInfo | null = null;
function getPlatformSnapshot() {
	if (!cachedPlatform) cachedPlatform = detectPlatform();
	return cachedPlatform;
}
function getPlatformServerSnapshot() { return DEFAULT_PLATFORM; }

type FormState = "idle" | "loading" | "active" | "waitlisted" | "error";

interface DownloadLink {
	label: string;
	url: string;
	primary?: boolean;
}

function getLinksForPlatform(
	platform: Platform,
	downloads: PlatformDownloads,
): DownloadLink[] {
	const links: DownloadLink[] = [];

	switch (platform) {
		case "mac":
			if (downloads.mac_dmg)
				links.push({ label: "Download DMG", url: downloads.mac_dmg, primary: true });
			if (downloads.mac_zip)
				links.push({ label: "Download ZIP", url: downloads.mac_zip });
			break;
		case "windows":
			if (downloads.win_installer)
				links.push({ label: "Download Installer", url: downloads.win_installer, primary: true });
			if (downloads.win_portable)
				links.push({ label: "Portable .exe", url: downloads.win_portable });
			break;
		case "linux":
			if (downloads.linux_appimage)
				links.push({ label: "Download AppImage", url: downloads.linux_appimage, primary: true });
			if (downloads.linux_deb)
				links.push({ label: "Download .deb", url: downloads.linux_deb });
			break;
	}

	return links;
}

interface DownloadFormProps {
	version?: string;
}

export function DownloadForm({ version: initialVersion }: DownloadFormProps) {
	const platformInfo = useSyncExternalStore(EMPTY_SUB, getPlatformSnapshot, getPlatformServerSnapshot);
	const platform: Platform = platformInfo.platform;
	const platformLabel = platformInfo.label;
	const [email, setEmail] = useState("");
	const [state, setState] = useState<FormState>("idle");
	const [downloads, setDownloads] = useState<PlatformDownloads | null>(null);
	const [waitlistPosition, setWaitlistPosition] = useState(0);
	const [errorMsg, setErrorMsg] = useState("");
	const [version, setVersion] = useState(initialVersion);
	const [isPending, startTransition] = useTransition();

	function handleSubmit(e: FormEvent) {
		e.preventDefault();
		if (!email.trim()) return;

		setErrorMsg("");

		startTransition(async () => {
			setState("loading");

			const result = await registerBetaUser(email.trim());

			if (result.status === "active") {
				setDownloads(result.downloads);
				if (result.downloads?.version) setVersion(result.downloads.version);
				setState("active");
			} else if (result.status === "waitlisted") {
				setWaitlistPosition(result.position);
				setState("waitlisted");
			} else {
				setErrorMsg(result.error);
				setState("error");
			}
		});
	}

	const isLoading = state === "loading" || isPending;
	const links = downloads ? getLinksForPlatform(platform, downloads) : [];

	return (
		<BlobCard seed={99} className="w-fit min-w-[400px]">
		<div className="relative w-full h-full rounded-xl border border-border bg-card/50 backdrop-blur-md p-6 sm:p-8">
			<p className="text-sm text-muted-foreground">Download for</p>
			<h3 className="mt-1 font-heading text-3xl tracking-wide text-foreground">
				{platformLabel}
			</h3>

			{state === "active" && downloads ? (
				<div className="mt-6 space-y-3">
					{links.map((link) => (
						<a
							key={link.url}
							href={link.url}
							download
							className={
								link.primary
									? "block w-full rounded-full bg-purple-700 px-6 py-3 text-center text-sm font-medium text-white transition-colors hover:bg-purple-600"
									: "block w-full rounded-full border border-border px-6 py-3 text-center text-sm font-medium text-muted-foreground transition-colors hover:bg-card hover:text-foreground"
							}
						>
							{link.label}
						</a>
					))}

					{links.length === 0 && (
						<p className="text-sm text-muted-foreground">
							No downloads available for {platformLabel} yet.
						</p>
					)}

					{version && (
						<p className="pt-2 text-center text-xs text-muted-foreground/50">
							{version}
						</p>
					)}
				</div>
			) : state === "waitlisted" ? (
				<div className="mt-6">
					<div className="rounded-lg border border-gold/30 bg-gold/5 px-4 py-3">
						<p className="text-sm text-foreground">
							You&apos;re <span className="font-medium text-gold">#{waitlistPosition}</span> on the waitlist
						</p>
						<p className="mt-1 text-xs text-muted-foreground">
							We&apos;ll email you when a spot opens up.
						</p>
					</div>
				</div>
			) : (
				<form onSubmit={handleSubmit}>
					<div className="mt-6">
						<label className="text-sm text-muted-foreground">
							Email Here
						</label>
						<input
							type="email"
							placeholder="your@email.com"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							required
							disabled={isLoading}
							className="mt-2 block w-full rounded-lg border border-border bg-transparent px-4 py-2.5 text-sm text-white placeholder:text-muted-foreground/50 outline-none transition-colors focus:border-purple-700 invalid:[&:not(:placeholder-shown)]:border-red-500 disabled:opacity-50"
						/>
						<p className="mt-1.5 text-xs text-muted-foreground/60">
							Don&apos;t worry we won&apos;t spam
						</p>
					</div>

					{state === "error" && (
						<p className="mt-2 text-xs text-red-400">{errorMsg}</p>
					)}

					<button
						type="submit"
						disabled={isLoading}
						className="mt-6 w-full rounded-full bg-purple-700 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-purple-600 disabled:opacity-50 disabled:cursor-not-allowed"
					>
						{isLoading
							? "Checking..."
							: `Download for ${platformLabel}`}
					</button>

					{version && (
						<p className="mt-3 text-center text-xs text-muted-foreground/50">
							{version}
						</p>
					)}
				</form>
			)}
		</div>
		</BlobCard>
	);
}
