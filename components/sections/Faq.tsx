import SectionHeading from "@/components/site/SectionHeading";
import { landing } from "@/content/landing";
import FadeIn from "@/components/motion/FadeIn";

export default function Faq() {
  return (
    <section id="faqs" className="section-pad scroll-mt-24">
      <div className="container-pad">
        <SectionHeading title={landing.faq.title} />

        <div className="mt-10 grid gap-4">
          {landing.faq.items.map((it, idx) => (
            <FadeIn key={it.q} delay={idx * 0.02}>
              <details className="surface p-6 group">
                <summary className="cursor-pointer list-none focus-ring rounded-2xl">
                  <div className="flex items-start justify-between gap-4">
                    <div className="font-display font-semibold tracking-tight">
                      {it.q}
                    </div>
                    <div className="mt-1 h-6 w-6 rounded-full border bg-white text-center leading-6 text-sm text-mutedForeground group-open:rotate-45 transition-transform">
                      +
                    </div>
                  </div>
                </summary>
                <p className="mt-3 text-sm text-mutedForeground leading-6">
                  {it.a}
                </p>
              </details>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
