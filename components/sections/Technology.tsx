"use client";

import Image from "next/image";
import FadeIn from "@/components/motion/FadeIn";
import SectionHeading from "@/components/site/SectionHeading";
import { landing } from "@/content/landing";

export default function Technology() {
  const withImage = landing.technology.tools.filter((t) => t.image).slice(0, 2);
  const rest = landing.technology.tools.slice(2);

  return (
    <section id="tecnologia" className="section-pad scroll-mt-24">
      <div className="container-pad">
        <SectionHeading title={landing.technology.title} subtitle={landing.technology.subtitle} />

        <div className="mt-10 grid gap-6 lg:grid-cols-12 lg:items-start">
          <FadeIn className="lg:col-span-6">
            <div className="surface p-7">
              <div className="grid gap-4">
                {landing.technology.tools.slice(0, 2).map((t) => (
                  <div key={t.title}>
                    <div className="font-display font-semibold tracking-tight">{t.title}</div>
                    <p className="mt-1 text-sm text-mutedForeground leading-6">{t.desc}</p>
                  </div>
                ))}
              </div>

              {rest.length ? (
                <details className="mt-6 rounded-2xl border bg-white px-4 py-3">
                  <summary className="cursor-pointer text-sm font-medium text-slate-800">
                    Ver más tecnología
                  </summary>
                  <div className="mt-3 grid gap-4">
                    {rest.map((t) => (
                      <div key={t.title}>
                        <div className="text-sm font-medium text-slate-800">{t.title}</div>
                        <p className="mt-1 text-sm text-mutedForeground leading-6">{t.desc}</p>
                      </div>
                    ))}
                  </div>
                </details>
              ) : null}
            </div>
          </FadeIn>

          <FadeIn delay={0.06} className="lg:col-span-6">
            <div className="grid gap-6">
              {withImage.map((t) => (
                <div key={t.title} className="surface overflow-hidden hover-lift">
                  <div className="relative aspect-[16/10] w-full">
                    <Image src={t.image!} alt={t.title} fill className="object-cover" />
                  </div>
                  <div className="p-5">
                    <div className="font-display font-semibold tracking-tight">{t.title}</div>
                    <p className="mt-2 text-sm text-mutedForeground leading-6">{t.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
