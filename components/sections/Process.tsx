"use client";

import FadeIn from "@/components/motion/FadeIn";
import SectionHeading from "@/components/site/SectionHeading";
import { landing } from "@/content/landing";
import { ClipboardList, Handshake, FileSignature } from "lucide-react";

const ICONS = [ClipboardList, Handshake, FileSignature];

export default function Process() {
  return (
    <section id="proceso" className="section-pad scroll-mt-24">
      <div className="container-pad">
        <SectionHeading title={landing.process.title} subtitle="" />

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {landing.process.steps.map((s, idx) => {
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
                      <p className="mt-2 text-sm text-mutedForeground leading-6">{s.text}</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
