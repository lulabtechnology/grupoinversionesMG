"use client";

import FadeIn from "@/components/motion/FadeIn";
import { landing } from "@/content/landing";
import { Button } from "@/components/ui/button";
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
            <div className="p-8 sm:p-10">
              <div className="font-display text-2xl sm:text-3xl font-semibold tracking-tight">
                {landing.finalCta.title}
              </div>
              <p className="mt-3 text-sm sm:text-base text-mutedForeground leading-7 max-w-2xl">
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
                  <Button size="lg" variant="outline" className="w-full sm:w-auto gap-2">
                    <MessageCircle className="h-4 w-4" />
                    {landing.finalCta.secondary}
                  </Button>
                </a>
              </div>

              <div className="mt-6 hairline" />
              <p className="mt-6 text-xs text-mutedForeground leading-5">
                Alcance, entregables y garantía se establecen según contrato.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
