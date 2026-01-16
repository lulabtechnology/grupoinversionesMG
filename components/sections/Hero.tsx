"use client";

import Image from "next/image";
import { landing } from "@/content/landing";
import { Button } from "@/components/ui/button";
import FadeIn from "@/components/motion/FadeIn";
import { waLink } from "@/lib/links";
import { ArrowRight, MessageCircle } from "lucide-react";

export default function Hero() {
  const waMsg =
    "Hola, me gustaría solicitar una cotización con Grupo MG. ¿Podemos coordinar una reunión?";

  return (
    <section id="top" className="section-pad">
      <div className="container-pad">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-6">
            <FadeIn>
              <h1 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight">
                {landing.hero.headline}
              </h1>
              <p className="mt-4 text-base sm:text-lg text-mutedForeground leading-7">
                {landing.hero.subheadline}
              </p>

              <ul className="mt-6 grid gap-2 text-sm text-slate-700">
                {landing.valueProps.map((p) => (
                  <li key={p.title} className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[hsl(var(--primary))]" />
                    <span>
                      <span className="font-medium">{p.title}:</span> {p.desc}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Button
                  size="lg"
                  className="gap-2"
                  onClick={() => (window.location.hash = "#contacto")}
                >
                  {landing.hero.primaryCta}
                  <ArrowRight className="h-4 w-4" />
                </Button>

                <a href={waLink(landing.contact.whatsapp, waMsg)} target="_blank" rel="noreferrer">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto gap-2">
                    <MessageCircle className="h-4 w-4" />
                    {landing.hero.secondaryCta}
                  </Button>
                </a>
              </div>
            </FadeIn>
          </div>

          <div className="lg:col-span-6">
            <FadeIn delay={0.06}>
              <div className="surface overflow-hidden hover-lift">
                <div className="relative aspect-[16/11] w-full">
                  <Image
                    src={landing.hero.heroImage}
                    alt="Infraestructura y operación de inmuebles"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/45 via-transparent to-transparent" />
                </div>

                <div className="p-5 sm:p-6">
                  <div className="font-display font-semibold tracking-tight">
                    Contratos claros por servicios
                  </div>
                  <p className="mt-2 text-sm text-mutedForeground leading-6">
