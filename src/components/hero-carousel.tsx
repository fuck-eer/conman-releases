"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { AnimatePresence } from "motion/react";
import * as motion from "motion/react-client";
import { heroSlides } from "@/data/hero-slides";
import { PaginationDots } from "@/components/pagination-dots";
import { useMediaQuery } from "@/hooks/use-media-query";

const AUTO_ADVANCE_MS = 10000;
const SWIPE_Y = 40;
const SWIPE_X = 60;

export function HeroCarousel() {
	const [active, setActive] = useState(0);
	const [direction, setDirection] = useState(1);
	const isSmall = useMediaQuery("(max-width: 639px)");

	const goTo = useCallback(
		(index: number) => {
			setDirection(index > active ? 1 : -1);
			setActive(index);
		},
		[active],
	);

	useEffect(() => {
		const timer = setInterval(() => {
			setDirection(1);
			setActive((prev) => (prev + 1) % heroSlides.length);
		}, AUTO_ADVANCE_MS);
		return () => clearInterval(timer);
	}, [active]);

	const slide = heroSlides[active];

	const initialPos = isSmall
		? { opacity: 0, x: SWIPE_X * direction, y: 0 }
		: { opacity: 0, x: 0, y: SWIPE_Y * direction };

	const exitPos = isSmall
		? { opacity: 0, x: -SWIPE_X * direction, y: 0 }
		: { opacity: 0, x: 0, y: -SWIPE_Y * direction };

	return (
		<section className="snap-section relative mx-auto flex w-full max-w-7xl flex-col justify-start overflow-hidden py-6 pt-10 px-4 sm:px-6 lg:px-8">
			<AnimatePresence mode="wait" custom={direction}>
				<motion.div
					key={active}
					initial={initialPos}
					animate={{ opacity: 1, x: 0, y: 0 }}
					exit={exitPos}
					transition={{ duration: 0.55, ease: [0.4, 0, 0.2, 1] }}
				>
					<div className="mx-auto text-center">
						<h1 className="font-heading font-thin text-4xl leading-tight tracking-wide text-foreground sm:text-5xl md:text-6xl">
							{slide.title}
						</h1>
						<p className="mx-auto mt-1 text-sm font-light leading-relaxed text-muted-foreground sm:text-base">
							{slide.subtitle}
						</p>
					</div>

					<div className="relative mt-12 flex items-center justify-center sm:mt-16">
						<div className="mx-auto w-full max-w-[60rem]">
							<div className="rounded-2xl border border-white/10 bg-white/5 p-1.5 backdrop-blur-md shadow-xl shadow-primary-700/5 sm:p-2">
								<div className="overflow-hidden rounded-xl">
									<Image
										src={slide.image}
										alt={slide.title}
										width={1400}
										height={875}
										className="block w-full h-auto"
										priority={active === 0}
									/>
								</div>
							</div>
						</div>
					</div>
				</motion.div>
			</AnimatePresence>

			<PaginationDots
				total={heroSlides.length}
				active={active}
				onDotClick={goTo}
				className="absolute right-2 top-1/2 -translate-y-1/2 hidden sm:flex lg:right-8"
			/>

			<div className="mt-6 flex justify-center sm:hidden">
				<PaginationDots
					total={heroSlides.length}
					active={active}
					onDotClick={goTo}
					className="flex-row"
				/>
			</div>
		</section>
	);
}
