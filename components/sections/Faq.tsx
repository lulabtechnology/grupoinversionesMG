"use client";

import FadeIn from "@/components/motion/FadeIn";
import SectionHeading from "@/components/site/SectionHeading";
import { landing } from "@/content/landing";

export default function Faq() {
  return (
    <section className="section-pad">
      <div className="container-pad">
        <SectionHeading title={landing.faq.title} subtitle="" />

        <div className="mt-8 grid gap-4">
          {landing.faq.items.map((x, idx) => (
            <FadeIn key={x.q} delay={idx * 0.03}>
              <details className="surface px-6 py-5">
                <summary className="cursor-pointer font-display font-semibold tracking-tight">
                  {x.q}
                </summary>
                <p className="mt-3 text-sm text-mutedForeground leading-6">{x.a}</p>
              </details>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
