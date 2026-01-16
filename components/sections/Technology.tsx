"use client";

import Image from "next/image";
import FadeIn from "@/components/motion/FadeIn";
import SectionHeading from "@/components/site/SectionHeading";
import { landing } from "@/content/landing";

export default function Technology() {
  return (
    <section id="tecnologia" className="section-pad scroll-mt-24">
      <div className="container-pad">
        <SectionHeading title={landing.technology.title} subtitle={landing.technology.subtitle} />

        <div className="mt-10 grid gap-6 lg:grid-cols-12 lg:items-start">
          <FadeIn className="lg:col-span-6">
            <div className="surface p-7">
              <ul className="grid gap-2 text-sm text-slate-700">
                {landing.technology.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[hsl(var(--primary))]" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <details className="mt-6 rounded-2xl border bg-white px-4 py-3">
                <summary className="cursor-pointer text-sm font-medium text-slate-800">
                  {landing.technology.detailsTitle}
                </summary>
                <div className="mt-3 grid gap-2 text-sm text-slate-700 leading-6">
                  {landing.technology.details.map((x) => (
                    <p key={x}>• {x}</p>
                  ))}
                </div>
              </details>
            </div>
          </FadeIn>

          <FadeIn delay={0.06} className="lg:col-span-6">
            <div className="grid gap-6">
              {landing.technology.images.map((img) => (
                <div key={img.src} className="surface overflow-hidden hover-lift">
                  <div className="relative aspect-[16/10] w-full">
                    <Image src={img.src} alt={img.alt} fill className="object-cover" />
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
