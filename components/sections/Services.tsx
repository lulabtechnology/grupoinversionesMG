"use client";

import Image from "next/image";
import FadeIn from "@/components/motion/FadeIn";
import SectionHeading from "@/components/site/SectionHeading";
import { landing } from "@/content/landing";
import { Building2, FileText, Hammer, ShieldCheck, Wallet } from "lucide-react";

const ICONS: Record<string, any> = {
  legal: FileText,
  finance: Wallet,
  maintenance: Hammer,
  contracts: ShieldCheck,
  diagnostics: Building2,
};

export default function Services() {
  return (
    <section id="servicios" className="section-pad scroll-mt-24">
      <div className="container-pad">
        <SectionHeading title={landing.services.title} subtitle={landing.services.subtitle} />

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {landing.services.items.map((s, idx) => {
            const Icon = ICONS[s.id] ?? FileText;
            const hasImage = Boolean((s as any).image);

            return (
              <FadeIn key={s.id} delay={idx * 0.03}>
                <div className="surface overflow-hidden hover-lift">
                  {hasImage ? (
                    <div className="relative aspect-[16/9] w-full">
                      <Image
                        src={(s as any).image}
                        alt={s.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/35 via-transparent to-transparent" />
                    </div>
                  ) : null}

                  <div className="p-6">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-start gap-3">
                        <div className="mt-0.5 rounded-2xl border bg-white p-2">
                          <Icon className="h-5 w-5 text-slate-800" />
                        </div>
                        <div>
                          <div className="font-display text-lg font-semibold tracking-tight">
                            {s.title}
                          </div>
                          <p className="mt-2 text-sm text-mutedForeground leading-6">
                            {s.summary}
                          </p>
                        </div>
                      </div>
                    </div>

                    <ul className="mt-4 grid gap-2 text-sm text-slate-700">
                      {s.short.map((b) => (
                        <li key={b} className="flex items-start gap-2">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[hsl(var(--primary))]" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>

                    <details className="mt-5 rounded-2xl border bg-white px-4 py-3">
                      <summary className="cursor-pointer text-sm font-medium text-slate-800">
                        Ver alcance completo
                      </summary>
                      <div className="mt-3 grid gap-2 text-sm text-slate-700 leading-6">
                        {s.full.map((x) => (
                          <p key={x}>• {x}</p>
                        ))}
                      </div>
                    </details>
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
