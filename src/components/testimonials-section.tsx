import { SectionHeading } from "@/components/section-heading";
import { TestimonialCard } from "@/components/testimonial-card";
import { getTestimonials } from "@/lib/testimonials";

export async function TestimonialsSection() {
  const testimonials = await getTestimonials();

  if (testimonials.length === 0) return null;

  const perRow = 5;
  const rows = Array.from(
    { length: Math.ceil(testimonials.length / perRow) },
    (_, i) => testimonials.slice(i * perRow, i * perRow + perRow),
  );

  return (
    <section className="snap-section mx-auto flex w-full max-w-7xl flex-col justify-start px-4 py-6 pt-10 sm:px-6 lg:px-8">
      <SectionHeading
        title="People are talking about us"
        subtitle="Ripples now waves tomorrow. Discover what our early community has to say about their experience"
        subSection
      />

      <div className="relative mt-12 sm:mt-16">
        <div className="space-y-4">
          {rows.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5"
            >
              {row.map((testimonial) => (
                <TestimonialCard
                  key={testimonial.id}
                  handle={testimonial.handle}
                  text={testimonial.text}
                  avatarUrl={testimonial.avatarUrl ?? undefined}
                />
              ))}
            </div>
          ))}
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-background to-transparent" />
      </div>
    </section>
  );
}
