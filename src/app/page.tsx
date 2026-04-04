import { HeroCarousel } from "@/components/hero-carousel";
import { FeaturesSection } from "@/components/features-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { DownloadCtaSection } from "@/components/download-cta-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="relative flex-1 min-h-0 snap-y snap-mandatory overflow-x-hidden overflow-y-auto scroll-smooth">
      <HeroCarousel />
      <FeaturesSection />
      <TestimonialsSection />
      <DownloadCtaSection />
      <Footer />
    </main>
  );
}
