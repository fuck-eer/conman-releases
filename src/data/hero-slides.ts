export interface HeroSlide {
	title: string;
	subtitle: string;
	image: string;
}

export const heroSlides: HeroSlide[] = [
	{
		title: "A Lightweight UI for all your CLIs",
		subtitle:
			"Choose who runs which thread and how, attach multiple files, generate, preview mermaid flows and md files, manage and runs skills on demand and more...",
		image: "/assets/carouselImages/screen1.png",
	},
	{
		title: "Cures Amnesia for your new sessions",
		subtitle:
			"We hate cold-starts like you do, So added a thin RAG layer for thread wise chat summaries which can be injected into another thread automagically",
		image: "/assets/carouselImages/screen2.png",
	},
	{
		title: "Bring all you CLIs under one umbrella",
		subtitle:
			"Single place to interact with all you CLIs, In project wise threaded view, run multiple threads simultaneously and never lose a session to file void",
		image: "/assets/carouselImages/screen3.png",
	},
	{
		title: "Local first, So nothing leaves your PC",
		subtitle:
			"Built for privacy and easy management with local first mindset. Manages you memories and long-term contexts locally so fast injections.",
		image: "/assets/carouselImages/screen4.png",
	},
];
