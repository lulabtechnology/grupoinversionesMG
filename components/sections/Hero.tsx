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

  // Tu placeholder (recuerda subir la imagen a public/images/brand/hero-visual.svg)
  // const heroGraphic = "/images/brand/hero-visual.svg";

  const shortSubheadline =
    "Tecnología aplicada y criterio experto para operar inmuebles con alcance definido por contrato.";

  return (
    <section id="top" className="relative overflow-hidden" aria-label="Hero Grupo MG">
      {/* Background image (cover, responsivo real) */}
      <div className="absolute inset-0 -z-10">
        {/* MOBILE */}
        <Image
          src={landing.hero.heroImageMobile ?? landing.hero.heroImage}
          alt="Infraestructura y operación de inmuebles"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center sm:hidden"
        />

        {/* DESKTOP / TABLET */}
        <Image
          src={landing.hero.heroImage}
          alt="Infraestructura y operación de inmuebles"
          fill
          priority
          sizes="100vw"
          className="hidden sm:block object-cover object-center"
        />

        {/* Overlays premium: color + legibilidad */}
        <div className="absolute inset-0 bg-slate-950/45" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/20 via-slate-950/35 to-slate-950/65" />
        <div className="absolute inset-0 bg-[radial-gradient(900px_circle_at_18%_12%,rgba(33,134,140,0.45),transparent_0%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(900px_circle_at_88%_28%,rgba(15,23,42,0.40),transparent_0%)]" />

        {/* Watermark sutil del logo - COMENTADO PARA QUITAR EL SIGNO DE INTERROGACIÓN */}
        {/* <img
          src="/images/brand/hero-visual.svg"
          alt=""
          aria-hidden="true"
          className="
            pointer-events-none select-none
            absolute -right-10 -top-10
            w-[280px] sm:w-[360px] lg:w-[520px]
            opacity-[0.08]
            blur-[0.2px]
          "
        /> */}
      </div>

      <div className="container-pad relative">
        
        {/* 2. IMAGEN FLOTANTE MÓVIL (SOLUCIÓN PEDIDA) - COMENTADO */}
        {/* <div className="absolute top-0 -right-4 w-[140px] h-[140px] sm:hidden opacity-90 animate-in fade-in zoom-in duration-1000">
           <Image 
             src={heroGraphic}
             alt="Visual decorativo"
             width={200}
             height={200}
             className="object-contain drop-shadow-2xl"
           />
        </div> */}

        <div className="py-12 sm:py-14 lg:py-16">
          <div className="grid gap-7 lg:grid-cols-12 lg:items-center">
            {/* Agregué 'relative z-10' para asegurar que el texto quede ENCIMA de la imagen si se tocan */}
            <div className="lg:col-span-7 relative z-10"> 
              <FadeIn>
                <div className="flex flex-wrap items-center gap-2">
                  <p className="text-xs sm:text-sm text-white/80">
                    Operación y administración para inmuebles
                  </p>

                  <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] text-white/85">
                    Más de 10 años de experiencia
                  </span>
                </div>

                <h1 className="mt-3 font-display text-4xl sm:text-5xl font-semibold tracking-tight text-white">
                  {landing.hero.headline}
                </h1>

                <p className="mt-4 text-base sm:text-lg leading-7 text-white/80 max-w-2xl">
                  {shortSubheadline}
                </p>

                <div className="mt-5 grid gap-2 text-sm text-white/85 max-w-xl">
                  <div className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[hsl(var(--primary))]" />
                    <span>
                      <span className="font-medium text-white">Eficiencia:</span> orden y ejecución con trazabilidad.
                    </span>
                  </div>

                  <div className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[hsl(var(--primary))]" />
                    <span>
                      <span className="font-medium text-white">Contratos específicos por servicios:</span> alcance y entregables definidos.
                    </span>
                  </div>

                  <div className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[hsl(var(--primary))]" />
                    <span>
                      <span className="font-medium text-white">Tecnología + criterio humano:</span> diagnóstico y decisiones más seguras.
                    </span>
                  </div>
                </div>

                <div className="mt-7 flex flex-col sm:flex-row gap-3">
                  <Button
                    size="lg"
                    className="gap-2 bg-white text-slate-950 hover:bg-white/90"
                    onClick={goContact}
                  >
                    {landing.hero.primaryCta}
                    <ArrowRight className="h-4 w-4" />
                  </Button>

                  <a href={waLink(landing.contact.whatsapp, waMsg)} target="_blank" rel="noreferrer">
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

                <div className="mt-6 flex flex-wrap gap-2">
                  {["Plazas comerciales", "Bodegas", "Propiedad Horizontal (PH)", "Hoteles"].map((x) => (
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

            <div className="lg:col-span-5">
              <FadeIn delay={0.06}>
                {/* Desktop Image - COMENTADO */}
                {/* <div className="hidden lg:flex justify-center mb-6">
                   <Image 
                     src={heroGraphic}
                     alt="Visual decorativo desktop"
                     width={320}
                     height={320}
                     className="object-contain drop-shadow-2xl"
                   />
                </div> */}

                <div
                  className="
                    surface
                    border-white/15
                    bg-white/10
                    text-white
                    backdrop-blur-sm
                    p-5 sm:p-6
                  "
                >
                  <div className="font-display font-semibold tracking-tight">
                    Propuesta clara. Ejecución confiable.
                  </div>
                  <p className="mt-2 text-sm leading-6 text-white/80">
                    Coordinamos visita al inmueble y levantamos la propuesta para aprobación.
                  </p>

                  <div className="mt-5 hairline opacity-40" />
                  <p className="mt-4 text-xs leading-5 text-white/70">
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
