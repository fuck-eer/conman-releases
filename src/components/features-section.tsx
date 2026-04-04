import { SectionHeading } from "@/components/section-heading";
import { FeatureCard } from "@/components/feature-card";
import { features } from "@/data/features";

export function FeaturesSection() {
  return (
    <section className="snap-section mx-auto flex w-full max-w-7xl flex-col justify-start py-6 px-4 sm:px-6 lg:px-8">
      <SectionHeading
        title="What do we offer"
        subtitle="Features that make you day a little easier. These are the things you can expect out of the box"
        subSection
      />

      <div className="mt-12 grid gap-4 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, i) => (
          <FeatureCard
            key={i}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </section>
  );
}
