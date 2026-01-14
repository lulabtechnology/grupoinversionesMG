"use client";

import FadeIn from "@/components/motion/FadeIn";
import { Button } from "@/components/ui/button";
import { landing } from "@/content/landing";
import { waLink } from "@/lib/links";
import { ArrowRight, MessageCircle } from "lucide-react";

export default function FinalCta() {
  const waMsg =
    "Hola, me gustaría solicitar una cotización con Grupo MG. ¿Podemos coordinar una reunión?";

  return (
    <section className="section-pad">
      <div className="container-pad">
        <FadeIn>
          <div className="surface overflow-hidden">
            <div className="relative p-8 sm:p-12">
              <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(33,134,140,0.18),transparent_60%)]" />
              <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_bottom,rgba(41,46,89,0.14),transparent_60%)]" />

              <h3 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight">
                {landing.finalCta.title}
              </h3>
              <p className="mt-3 max-w-2xl text-sm sm:text-base text-mutedForeground leading-7">
                {landing.finalCta.subtitle}
              </p>

              <div className="mt-7 flex flex-col sm:flex-row gap-3">
                <Button
                  size="lg"
                  className="gap-2"
                  onClick={() => (window.location.hash = "#contacto")}
                >
                  {landing.finalCta.primary}
                  <ArrowRight className="h-4 w-4" />
                </Button>

                <a href={waLink(landing.contact.whatsapp, waMsg)} target="_blank" rel="noreferrer">
                  <Button size="lg" variant="outline" className="gap-2">
                    <MessageCircle className="h-4 w-4" />
                    {landing.finalCta.secondary}
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
