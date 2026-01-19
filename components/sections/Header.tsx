"use client";

import Brand from "@/components/site/Brand";
import SkipLink from "@/components/site/SkipLink";
import { landing } from "@/content/landing";
import { Button } from "@/components/ui/button";
import { waLink } from "@/lib/links";
import { Menu, MessageCircle, X } from "lucide-react";
import { useId, useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const menuId = useId();

  const waMsg =
    "Hola, me gustaría solicitar una cotización con Grupo MG. ¿Podemos coordinar una reunión?";

  return (
    <header className="sticky top-0 z-40 border-b bg-white/85 backdrop-blur relative overflow-hidden">
      <SkipLink />

      {/* Watermark sutil del logo en el header (disimulado) */}
      <img
        src={landing.images.logo}
        alt=""
        aria-hidden="true"
        className="
          pointer-events-none select-none
          absolute -right-10 -top-10
          w-[220px] sm:w-[280px]
          opacity-[0.06]
          blur-[0.2px]
        "
      />

      {/* Más altura en desktop para permitir logo más grande */}
      <div className="container-pad h-16 lg:h-20 flex items-center justify-between gap-4">
        <a
          href="#top"
          className="focus-ring rounded-2xl flex items-center min-w-0"
          aria-label="Ir al inicio"
        >
          {/* Escalado seguro del Brand (no rompe nada) */}
          <div className="origin-left scale-[1.18] lg:scale-[1.28]">
            <Brand />
          </div>
        </a>

        <nav
          className="hidden lg:flex items-center gap-1"
          aria-label="Navegación principal"
        >
          {landing.nav.map((i) => (
            <a
              key={i.href}
              href={i.href}
              className="rounded-2xl px-3 py-2 text-sm text-slate-700 hover:bg-slate-900/5 focus-ring"
            >
              {i.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-2">
          <Button
            variant="outline"
            onClick={() => (window.location.hash = "#contacto")}
          >
            {landing.hero.primaryCta}
          </Button>
          <a
            href={waLink(landing.contact.whatsapp, waMsg)}
            target="_blank"
            rel="noreferrer"
          >
            <Button className="gap-2">
              <MessageCircle className="h-4 w-4" />
              {landing.hero.secondaryCta}
            </Button>
          </a>
        </div>

        <button
          className="lg:hidden shrink-0 rounded-2xl border p-2 hover:bg-slate-900/5 focus-ring"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          aria-controls={menuId}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <div id={menuId} className="lg:hidden border-t bg-white">
          <div className="container-pad py-3 grid gap-1">
            {landing.nav.map((i) => (
              <a
                key={i.href}
                href={i.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-3 py-2 text-sm text-slate-700 hover:bg-slate-900/5 focus-ring"
              >
                {i.label}
              </a>
            ))}

            <div className="pt-2 grid gap-2">
              <Button
                variant="outline"
                onClick={() => {
                  setOpen(false);
                  window.location.hash = "#contacto";
                }}
              >
                {landing.hero.primaryCta}
              </Button>

              <a
                href={waLink(landing.contact.whatsapp, waMsg)}
                target="_blank"
                rel="noreferrer"
              >
                <Button className="w-full gap-2">
                  <MessageCircle className="h-4 w-4" />
                  {landing.hero.secondaryCta}
                </Button>
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
