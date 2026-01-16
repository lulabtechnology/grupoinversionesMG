"use client";

import Image from "next/image";
import { landing } from "@/content/landing";
import FadeIn from "@/components/motion/FadeIn";
import { Button } from "@/components/ui/button";
import { waLink } from "@/lib/links";
import { ArrowRight, MessageCircle } from "lucide-react";

export default function Hero() {
  const waMsg =
    "Hola, me gustaría solicitar una cotización con Grupo MG. ¿Podemos coordinar una reunión?";

  const goContact = () => {
    window.location.hash = "#contacto";
  };

  return (
    <section
      id="top"
      className="relative overflow-hidden"
      aria-label="Hero Grupo MG"
    >
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={landing.hero.heroImage}
          alt="Infraestructura y operación de inmuebles"
          fill
          className="object-cover"
          priority
        />

        {/* Overlays para look premium y legibilidad */}
        <div className="absolute inset-0 bg-slate-950/55" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/35 via-slate-950/35 to-slate-950/65" />
        <div className="absolute inset-0 bg-[radial-gradient(900px_circle_at_20%_10%,rgba(33,134,140,0.35),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(900px_circle_at_85%_30%,rgba(15,23,42,0.35),transparent_60%)]" />
      </div>

      {/* Content */}
      <div className="container-pad">
        <div className="py-14 sm:py-16 lg:py-20">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <FadeIn>
                <p className="text-sm text-white/80">
                  Operación y administración para inmuebles
                </p>

                <h1 className="mt-3 font-display text-4xl sm:text-5xl font-semibold tracking-tight text-white">
                  {landing.hero.headline}
                </h1>

                <p className="mt-4 text-base sm:text-lg leading-7 text-white/80 max-w-2xl">
                  {landing.hero.subheadline}
                </p>

                {/* Micro-bullets compactos */}
                <ul className="mt-6 grid gap-2 text-sm text-white/85 max-w-xl">
                  {landing.valueProps.slice(0, 3).map((p) => (
                    <li key={p.title} className="flex items-start gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[hsl(var(--primary))]" />
                      <span>
                        <span className="font-medium text-white">{p.title}:</span>{" "}
                        {p.desc}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-7 flex flex-col sm:flex-row gap-3">
                  <Button
                    size="lg"
                    className="gap-2 bg-white text-slate-950 hover:bg-white/90"
                    onClick={goContact}
                  >
                    {landing.hero.primaryCta}
                    <ArrowRight className="h-4 w-4" />
                  </Button>

                  <a
                    href={waLink(landing.contact.whatsapp, waMsg)}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Button
                      size="lg"
                      variant="outline"
                      className="w-full sm:w-auto gap-2 border-white/25 bg-white/5 text-white hover:bg-white/10"
                    >
                      <MessageCircle className="h-4 w-4" />
                      {landing.hero.secondaryCta}
                    </Button>
                  </a>
                </div>

                <div className="mt-7 flex flex-wrap gap-2">
                  {["Plazas comerciales", "Bodegas", "Propiedad Horizontal (PH)"].map((x) => (
                    <span
                      key={x}
                      className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/85"
                    >
                      {x}
                    </span>
                  ))}
                </div>
              </FadeIn>
            </div>

            {/* Panel lateral corto (premium), sin imagen extra */}
            <div className="lg:col-span-5">
              <FadeIn delay={0.06}>
                <div className="surface bg-white/7 border-white/15 backdrop-blur-sm p-6 sm:p-7">
                  <div className="font-display font-semibold tracking-tight text-white">
                    Contratos claros por servicios
                  </div>
                  <p className="mt-2 text-sm leading-6 text-white/80">
                    Alcance definido, entregables y seguimiento. Garantía según contrato.
                  </p>
                  <div className="mt-5 hairline opacity-40" />
                  <p className="mt-5 text-xs leading-5 text-white/70">
                    Panamá, Centroamérica y Caribe.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
