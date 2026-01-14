import SectionHeading from "@/components/site/SectionHeading";
import { landing } from "@/content/landing";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";

export default function Process() {
  return (
    <section id="proceso" className="section-pad scroll-mt-24">
      <div className="container-pad">
        <SectionHeading title={landing.process.title} subtitle={landing.process.subtitle} />

        <Stagger className="mt-10 grid gap-5 lg:grid-cols-5">
          {landing.process.steps.map((s, idx) => (
            <StaggerItem key={s.title}>
              <div className="surface p-6 h-full">
                <div className="text-xs text-mutedForeground">Paso {idx + 1}</div>
                <div className="mt-1 font-display font-semibold tracking-tight">
                  {s.title}
                </div>
                <p className="mt-2 text-sm text-mutedForeground leading-6">
                  {s.desc}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
