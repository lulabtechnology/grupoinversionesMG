"use client";

import { landing } from "@/content/landing";
import { Button } from "@/components/ui/button";
import { waLink } from "@/lib/links";
import { MessageCircle } from "lucide-react";

export default function StickyCta() {
  const waMsg =
    "Hola, me gustaría solicitar una cotización con Grupo MG. ¿Podemos coordinar una reunión?";

  return (
    <div className="lg:hidden fixed inset-x-0 bottom-0 z-50 border-t bg-white/90 backdrop-blur">
      <div className="container-pad py-3 flex gap-2">
        <Button
          className="flex-1"
          size="lg"
          onClick={() => {
            window.location.hash = "#contacto";
          }}
        >
          {landing.hero.primaryCta}
        </Button>

        <a
          className="flex-1"
          href={waLink(landing.contact.whatsapp, waMsg)}
          target="_blank"
          rel="noreferrer"
        >
          <Button size="lg" variant="outline" className="w-full gap-2">
            <MessageCircle className="h-4 w-4" />
            WhatsApp
          </Button>
        </a>
      </div>
    </div>
  );
}
