import SectionHeading from "@/components/site/SectionHeading";
import { landing } from "@/content/landing";
import FadeIn from "@/components/motion/FadeIn";
import { Check } from "lucide-react";

export default function ValueProps() {
  return (
    <section className="section-pad">
      <div className="container-pad">
        <SectionHeading
          title="Una operación más ordenada, con alcance contractual claro"
          subtitle="Diseñado para dueños y administradores que necesitan ejecución confiable, documentación y trazabilidad."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {landing.valueProps.map((v, idx) => (
            <FadeIn key={v.title} delay={idx * 0.04}>
              <div className="surface p-6 sm:p-7 hover:-translate-y-0.5 transition-transform">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 rounded-2xl border bg-white p-2">
                    <Check className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-display text-lg font-semibold tracking-tight">
                      {v.title}
                    </div>
                    <p className="mt-2 text-sm text-mutedForeground leading-6">
                      {v.desc}
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
