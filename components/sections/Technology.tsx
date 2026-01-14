import SectionHeading from "@/components/site/SectionHeading";
import { landing } from "@/content/landing";
import FadeIn from "@/components/motion/FadeIn";
import Image from "next/image";

export default function Technology() {
  return (
    <section id="tecnologia" className="section-pad scroll-mt-24">
      <div className="container-pad">
        <SectionHeading
          title={landing.technology.title}
          subtitle={landing.technology.subtitle}
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {landing.technology.tools.map((t, idx) => (
            <FadeIn key={t.title} delay={idx * 0.04}>
              <div className="surface overflow-hidden hover:-translate-y-0.5 transition-transform">
                <div className="relative h-44 bg-slate-100">
                  <Image
                    src={t.image}
                    alt={t.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 380px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/10 via-transparent to-white/10" />
                </div>
                <div className="p-6">
                  <div className="font-display text-lg font-semibold tracking-tight">
                    {t.title}
                  </div>
                  <p className="mt-2 text-sm text-mutedForeground leading-6">
                    {t.desc}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
