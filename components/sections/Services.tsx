"use client";

import FadeIn from "@/components/motion/FadeIn";
import SectionHeading from "@/components/site/SectionHeading";
import { landing } from "@/content/landing";
import { FileText, Wallet, Hammer, ShieldCheck, Radar } from "lucide-react";

const ICONS: Record<string, any> = {
  legal: FileText,
  finance: Wallet,
  maintenance: Hammer,
  contracts: ShieldCheck,
  inspection: Radar,
};

export default function Services() {
  return (
    <section id="servicios" className="section-pad scroll-mt-24">
      <div className="container-pad">
        <SectionHeading
          title="Servicios"
          subtitle="Vista corta por defecto. Expande cada bloque si necesitas el detalle completo."
        />

        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          {landing.services.map((s, idx) => {
            const Icon = ICONS[s.key] ?? FileText;
            const top = s.bullets.slice(0, 3);
            const rest = s.bullets.slice(3);

            return (
              <FadeIn key={s.key} delay={idx * 0.02}>
                <div className="surface p-6 sm:p-7 hover-lift">
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 rounded-2xl border bg-white p-2">
                      <Icon className="h-5 w-5 text-slate-800" />
                    </div>

                    <div>
                      <div className="font-display text-lg font-semibold tracking-tight">
                        {s.title}
                      </div>
                      <p className="mt-2 text-sm text-mutedForeground leading-6">
                        {s.desc}
                      </p>
                    </div>
                  </div>

                  <ul className="mt-4 grid gap-2 text-sm text-slate-700">
                    {top.map((b) => (
                      <li key={b} className="flex items-start gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[hsl(var(--primary))]" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  {rest.length ? (
                    <details className="mt-5 rounded-2xl border bg-white px-4 py-3">
                      <summary className="cursor-pointer text-sm font-medium text-slate-800">
                        Ver alcance completo
                      </summary>
                      <div className="mt-3 grid gap-2 text-sm text-slate-700 leading-6">
                        {rest.map((x) => (
                          <p key={x}>• {x}</p>
                        ))}
                      </div>
                    </details>
                  ) : null}
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
