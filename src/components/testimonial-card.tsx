import Image from "next/image";
import { cn } from "@/lib/utils";

interface TestimonialCardProps {
	handle: string;
	text: string;
	avatarUrl?: string;
	className?: string;
}

export function TestimonialCard({
	handle,
	text,
	avatarUrl,
	className,
}: TestimonialCardProps) {
	return (
		<div
			className={cn(
				"rounded-xl border border-border bg-card/50 p-5",
				className
			)}
		>
			<div className="flex items-center gap-3">
				<div className="size-8 shrink-0 overflow-hidden rounded-full bg-muted">
					{avatarUrl ? (
						<Image
							src={avatarUrl}
							alt={handle}
							width={32}
							height={32}
							className="size-full object-cover"
						/>
					) : (
						<div className="flex size-full items-center justify-center text-xs font-medium text-muted-foreground">
							{handle.charAt(1).toUpperCase()}
						</div>
					)}
				</div>
				<span className="text-sm font-medium text-foreground">{handle}</span>
			</div>
			<p className="mt-3 text-sm leading-relaxed text-muted-foreground">
				{text}
			</p>
		</div>
	);
}
