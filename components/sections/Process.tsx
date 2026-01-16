"use client";

import FadeIn from "@/components/motion/FadeIn";
import SectionHeading from "@/components/site/SectionHeading";
import { landing } from "@/content/landing";
import { ClipboardList, Handshake, FileSignature } from "lucide-react";

const ICONS = [ClipboardList, Handshake, FileSignature];

export default function Process() {
  const compact = [landing.process.steps[0], landing.process.steps[1], landing.process.steps[3]].filter(Boolean);

  return (
    <section id="proceso" className="section-pad scroll-mt-24">
      <div className="container-pad">
        <SectionHeading title={landing.process.title} subtitle={landing.process.subtitle} />

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {compact.map((s, idx) => {
            const Icon = ICONS[idx] ?? ClipboardList;
            return (
              <FadeIn key={s.title} delay={idx * 0.04}>
                <div className="surface p-7 hover-lift">
                  <div className="flex items-start gap-3">
                    <div className="rounded-2xl border bg-white p-2">
                      <Icon className="h-5 w-5 text-slate-800" />
                    </div>
                    <div>
                      <div className="font-display font-semibold tracking-tight">{s.title}</div>
                      <p className="mt-2 text-sm text-mutedForeground leading-6">{s.desc}</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>

        <div className="mt-6">
          <details className="surface px-6 py-5">
            <summary className="cursor-pointer font-display font-semibold tracking-tight">
              Ver flujo completo
            </summary>
            <ol className="mt-3 grid gap-2 text-sm text-mutedForeground leading-6">
              {landing.process.steps.map((s) => (
                <li key={s.title}>• {s.title}: {s.desc}</li>
              ))}
            </ol>
          </details>
        </div>
      </div>
    </section>
  );
}
