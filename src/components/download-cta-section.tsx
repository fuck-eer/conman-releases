import { SectionHeading } from "@/components/section-heading";
import { DownloadForm } from "@/components/download-form";
import { CtaImage } from "@/components/cta-image";
import { fetchLatestRelease } from "@/lib/github";

export async function DownloadCtaSection() {
  let version: string | undefined;
  try {
    const release = await fetchLatestRelease();
    version = release.version;
  } catch {
    /* falls back to undefined — form won't show version */
  }
  return (
    <section className="snap-section gap-8 relative mx-auto flex w-full flex-col justify-start px-4 py-6 pt-10 sm:px-6 lg:px-8">
      <SectionHeading
        title="We'd love you to be a part of this"
        subtitle="Drop your email, join the beta program, tell us what you think. We will not spam promise!"
        className="text-left sm:text-left max-w-none"
        subSection
      />

      <div className="flex flex-1 min-h-0 gap-12 items-stretch">
        <div className="flex w-[40%] items-center justify-end">
          <DownloadForm version={version} />
        </div>
        <div className="relative flex-1 min-w-0">
          <CtaImage />
        </div>
      </div>
    </section>
  );
}
