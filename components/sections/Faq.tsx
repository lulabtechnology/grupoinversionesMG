"use client";

import FadeIn from "@/components/motion/FadeIn";
import SectionHeading from "@/components/site/SectionHeading";
import { landing } from "@/content/landing";

export default function Faq() {
  const visible = landing.faq.items.slice(0, 3);
  const rest = landing.faq.items.slice(3);

  return (
    <section id="faqs" className="section-pad scroll-mt-24">
      <div className="container-pad">
        <SectionHeading title={landing.faq.title} subtitle="" />

        <div className="mt-8 grid gap-4">
          {visible.map((x, idx) => (
            <FadeIn key={x.q} delay={idx * 0.03}>
              <details className="surface px-6 py-5">
                <summary className="cursor-pointer font-display font-semibold tracking-tight">
                  {x.q}
                </summary>
                <p className="mt-3 text-sm text-mutedForeground leading-6">{x.a}</p>
              </details>
            </FadeIn>
          ))}

          {rest.length ? (
            <FadeIn delay={0.12}>
              <details className="surface px-6 py-5">
                <summary className="cursor-pointer font-display font-semibold tracking-tight">
                  Ver más preguntas
                </summary>
                <div className="mt-3 grid gap-4">
                  {rest.map((x) => (
                    <div key={x.q}>
                      <div className="text-sm font-medium text-slate-800">{x.q}</div>
                      <p className="mt-1 text-sm text-mutedForeground leading-6">{x.a}</p>
                    </div>
                  ))}
                </div>
              </details>
            </FadeIn>
          ) : null}
        </div>
      </div>
    </section>
  );
}
