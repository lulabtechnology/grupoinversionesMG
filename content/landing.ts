import { landing } from "@/content/landing";
import SectionHeading from "@/components/SectionHeading";
import { Card, CardContent } from "@/components/ui/card";
import { ClipboardList, Search, FileCheck } from "lucide-react";

const icons = [ClipboardList, Search, FileCheck];

export default function Process() {
  const steps = landing.process.steps;

  return (
    <section id="proceso" className="section-pad scroll-mt-24">
      <div className="container-pad">
        <SectionHeading
          title={landing.process.title}
          subtitle={landing.process.subtitle}
        />

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {steps.map((step, idx) => {
            const Icon = icons[idx] ?? ClipboardList;

            return (
              <Card key={step.title} className="surface">
                <CardContent className="p-7">
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
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
