"use client";

import Brand from "@/components/site/Brand";
import { landing } from "@/content/landing";
import { Button } from "@/components/ui/button";
import { waLink } from "@/lib/links";
import { Menu, MessageCircle } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  const waMsg =
    "Hola, me gustaría solicitar una cotización con Grupo MG. ¿Podemos coordinar una reunión?";

  return (
    <header className="sticky top-0 z-40 border-b bg-white/80 backdrop-blur">
      <div className="container-pad h-16 flex items-center justify-between gap-4">
        <a href="#top" className="focus-ring rounded-2xl">
          <Brand />
        </a>

        <nav className="hidden lg:flex items-center gap-1">
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
          <a href={waLink(landing.contact.whatsapp, waMsg)} target="_blank" rel="noreferrer">
            <Button className="gap-2">
              <MessageCircle className="h-4 w-4" />
              {landing.hero.secondaryCta}
            </Button>
          </a>
        </div>

        <button
          className="lg:hidden rounded-2xl border p-2 hover:bg-slate-900/5 focus-ring"
          aria-label="Abrir menú"
          onClick={() => setOpen((v) => !v)}
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>

      {open ? (
        <div className="lg:hidden border-t bg-white">
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
              <a href={waLink(landing.contact.whatsapp, waMsg)} target="_blank" rel="noreferrer">
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
