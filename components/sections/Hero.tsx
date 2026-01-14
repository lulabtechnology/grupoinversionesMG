"use client";

import FadeIn from "@/components/motion/FadeIn";
import { Button } from "@/components/ui/button";
import { landing } from "@/content/landing";
import { mailLink, waLink } from "@/lib/links";
import { ArrowRight, Mail, MessageCircle } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  const waMsg =
    "Hola, me gustaría solicitar una cotización con Grupo MG. ¿Podemos coordinar una reunión?";

  const mailBody =
    `Hola Grupo MG,%0D%0A%0D%0A` +
    `Me gustaría solicitar una cotización.%0D%0A` +
    `Tipo de inmueble: ____%0D%0A` +
    `Ubicación: ____%0D%0A` +
    `Servicio(s) de interés: ____%0D%0A%0D%0A` +
    `Quedo atento/a. धन्यवाद%0D%0A`;

  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-36 right-[-120px] h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle_at_center,rgba(33,134,140,0.18),transparent_60%)]" />
        <div className="absolute -bottom-40 left-[-180px] h-[560px] w-[560px] rounded-full bg-[radial-gradient(circle_at_center,rgba(41,46,89,0.14),transparent_60%)]" />
      </div>

      <div className="container-pad section-pad">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <FadeIn>
            <p className="inline-flex items-center rounded-full border bg-white px-3 py-1 text-xs text-slate-700">
              {landing.brand.tagline}
            </p>

            <h1 className="mt-4 font-display text-4xl sm:text-5xl leading-[1.08] font-semibold tracking-tight">
              {landing.hero.headline}
            </h1>

            <p className="mt-4 text-base sm:text-lg text-mutedForeground leading-7 max-w-xl">
              {landing.hero.subheadline}
            </p>

            <div className="mt-7 flex flex-col sm:flex-row gap-3">
              <Button
                size="lg"
                className="gap-2"
                onClick={() => (window.location.hash = "#contacto")}
              >
                {landing.hero.primaryCta}
                <ArrowRight className="h-4 w-4" />
              </Button>

              <div className="flex gap-3">
                <a href={waLink(landing.contact.whatsapp, waMsg)} target="_blank" rel="noreferrer" className="flex-1">
                  <Button size="lg" variant="outline" className="w-full gap-2">
                    <MessageCircle className="h-4 w-4" />
                    WhatsApp
                  </Button>
                </a>

                <a href={mailLink(landing.mailto.to, landing.mailto.subject, decodeURIComponent(mailBody))} className="flex-1">
                  <Button size="lg" variant="outline" className="w-full gap-2">
                    <Mail className="h-4 w-4" />
                    Email
                  </Button>
                </a>
              </div>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {landing.valueProps.map((v) => (
                <div key={v.title} className="rounded-3xl border bg-white p-4">
                  <div className="font-display text-sm font-semibold tracking-tight">
                    {v.title}
                  </div>
                  <div className="mt-2 text-xs text-mutedForeground leading-5">
                    {v.desc}
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.08}>
            <div className="surface overflow-hidden">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={landing.hero.heroImage}
                  alt="Grupo MG"
                  fill
                  sizes="(max-width: 1024px) 100vw, 540px"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/10 via-transparent to-white/10" />
              </div>

              <div className="p-6 sm:p-8">
                <div className="text-sm text-mutedForeground">
                  Alcance regional
                </div>
                <div className="mt-1 font-display text-lg font-semibold tracking-tight">
                  {landing.brand.scope}
                </div>
                <div className="mt-3 text-sm text-mutedForeground leading-6">
                  Operación, administración y diagnóstico para inmuebles con enfoque en
                  entregables y contratos claros por servicios.
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
