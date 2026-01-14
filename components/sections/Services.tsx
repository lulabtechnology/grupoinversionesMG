import SectionHeading from "@/components/site/SectionHeading";
import { landing } from "@/content/landing";
import FadeIn from "@/components/motion/FadeIn";
import Image from "next/image";
import { FileText, Scale, Wrench, ShieldCheck, Cpu } from "lucide-react";

const ICONS: Record<string, any> = {
  legal: Scale,
  finance: FileText,
  maintenance: Wrench,
  contracts: ShieldCheck,
  inspection: Cpu,
};

export default function Services() {
  return (
    <section id="servicios" className="section-pad scroll-mt-24">
      <div className="container-pad">
        <SectionHeading
          title="Servicios consolidados operativos y administrativos"
          subtitle="Organizados por bloques para que contrates exactamente lo que necesitas: puntual, por contrato específico, con entregables definidos."
        />

        <div className="mt-10 grid gap-6 lg:gap-8">
          {landing.services.map((s, idx) => {
            const Icon = ICONS[s.key] ?? FileText;
            const flip = idx % 2 === 1;

            return (
              <FadeIn key={s.key} delay={idx * 0.03}>
                <div className="surface overflow-hidden">
                  <div className={`grid gap-0 lg:grid-cols-2 ${flip ? "lg:[&>*:first-child]:order-2" : ""}`}>
                    <div className="p-7 sm:p-10">
                      <div className="flex items-center gap-3">
                        <div className="rounded-2xl border bg-white p-2">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div className="font-display text-xl font-semibold tracking-tight">
                          {s.title}
                        </div>
                      </div>

                      <p className="mt-3 text-sm sm:text-base text-mutedForeground leading-7">
                        {s.desc}
                      </p>

                      <ul className="mt-5 grid gap-2 text-sm text-slate-800">
                        {s.bullets.map((b) => (
                          <li key={b} className="flex gap-2">
                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-900/70" />
                            <span className="leading-6">{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="relative min-h-[240px] lg:min-h-[360px] bg-slate-100">
                      <Image
                        src={s.image}
                        alt={s.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 560px"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/10 via-transparent to-white/10" />
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
