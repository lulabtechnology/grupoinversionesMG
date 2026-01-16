"use client";

import FadeIn from "@/components/motion/FadeIn";
import SectionHeading from "@/components/site/SectionHeading";
import { landing } from "@/content/landing";

export default function Sectors() {
  return (
    <section id="sectores" className="section-pad scroll-mt-24">
      <div className="container-pad">
        <FadeIn>
          <div className="surface p-7 sm:p-10">
            <SectionHeading title={landing.sectors.title} subtitle={landing.sectors.subtitle} />

            <div className="mt-6 flex flex-wrap gap-2">
              {landing.sectors.items.map((x) => (
                <span key={x} className="rounded-full border bg-white px-3 py-1 text-xs text-slate-700">
                  {x}
                </span>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
