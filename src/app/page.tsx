"use client";

import Image from "next/image";
import * as motion from "motion/react-client";
import { GitHubIcon } from "@/components/icons/github";
import { CursorBlob } from "@/components/cursor-blob";

export default function Home() {
	return (
		<main className="relative flex flex-1 flex-col items-center justify-center gap-16 overflow-hidden">
			<CursorBlob />
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8, ease: "easeOut" }}
			>
				<Image
					src="/images/logo-full.png"
					alt="Conman"
					width={512}
					height={512}
					priority
				/>
			</motion.div>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
				className="absolute bottom-10 flex gap-4 flex-col items-center"
			>
				<a
					href="https://github.com/fuck-eer/conman-releases/releases"
					target="_blank"
					rel="noopener noreferrer"
					className="flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm text-foreground transition-colors hover:bg-accent cursor-pointer"
				>
					<GitHubIcon className="size-4" />
					View on GitHub
				</a>
				<p className="text-xs tracking-[0.25em] uppercase text-muted-foreground/50">
					Landing page coming soon
				</p>
			</motion.div>
		</main>
	);
}
