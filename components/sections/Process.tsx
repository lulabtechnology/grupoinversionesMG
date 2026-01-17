import { landing } from "@/content/landing";
import { ClipboardList, Search, FileCheck } from "lucide-react";

const icons = [ClipboardList, Search, FileCheck];

function SectionHeadingInline({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="max-w-2xl">
      <h2 className="text-3xl font-semibold tracking-tight text-slate-900">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-3 text-sm leading-6 text-slate-600">{subtitle}</p>
      ) : null}
    </div>
  );
}

export default function Process() {
  const steps = landing.process.steps;

  return (
    <section id="proceso" className="section-pad scroll-mt-24">
      <div className="container-pad">
        <SectionHeadingInline
          title={landing.process.title}
          subtitle={landing.process.subtitle}
        />

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {steps.map((step, idx) => {
            const Icon = icons[idx] ?? ClipboardList;

            return (
              <div key={step.title} className="surface">
                <div className="p-7">
                  <div className="flex items-start gap-4">
                    <div className="grid h-12 w-12 place-items-center rounded-2xl border border-slate-200 bg-white shadow-sm">
                      <Icon className="h-5 w-5 text-slate-700" />
                    </div>

                    <div className="min-w-0">
                      <h3 className="text-lg font-semibold tracking-tight text-slate-900">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-slate-600">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
