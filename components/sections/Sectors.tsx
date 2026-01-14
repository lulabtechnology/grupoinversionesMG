import SectionHeading from "@/components/site/SectionHeading";
import { landing } from "@/content/landing";
import FadeIn from "@/components/motion/FadeIn";
import { Building2, Warehouse, Home } from "lucide-react";

const ICONS = [Building2, Warehouse, Home];

export default function Sectors() {
  return (
    <section id="sectores" className="section-pad scroll-mt-24">
      <div className="container-pad">
        <div className="surface p-7 sm:p-10">
          <SectionHeading
            title={landing.sectors.title}
            subtitle={landing.sectors.subtitle}
          />

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {landing.sectors.items.map((item, idx) => {
              const Icon = ICONS[idx] ?? Building2;
              return (
                <FadeIn key={item} delay={idx * 0.03}>
                  <div className="rounded-3xl border bg-white p-5 hover:-translate-y-0.5 transition-transform">
                    <div className="rounded-2xl border bg-white p-2 w-fit">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="mt-3 font-display font-semibold tracking-tight">
                      {item}
                    </div>
                    <p className="mt-2 text-sm text-mutedForeground leading-6">
                      Operación, administración y soporte técnico ajustado a las necesidades del inmueble.
                    </p>
                  </div>
                </FadeIn>
              );
            })}
          </div>

          <div className="mt-8 hairline" />
          <p className="mt-6 text-sm text-mutedForeground">
            Alcance: <span className="text-slate-900">{landing.brand.scope}</span>
          </p>
        </div>
      </div>
    </section>
  );
}
