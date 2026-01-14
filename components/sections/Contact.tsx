import SectionHeading from "@/components/site/SectionHeading";
import { landing } from "@/content/landing";
import { mailLink, telLink, waLink } from "@/lib/links";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import FadeIn from "@/components/motion/FadeIn";
import { Button } from "@/components/ui/button";

export default function Contact() {
  const waMsg =
    "Hola, me gustaría solicitar una cotización con Grupo MG. ¿Podemos coordinar una reunión?";

  const bodyTemplate =
    "Hola Grupo MG,%0D%0A%0D%0AMe gustaría solicitar una cotización.%0D%0A%0D%0A" +
    "Tipo de inmueble: ____%0D%0AUbicación: ____%0D%0AServicio(s) de interés: ____%0D%0A" +
    "%0D%0AGracias.";

  const mapsQuery = encodeURIComponent(landing.contact.address);

  return (
    <section id="contacto" className="section-pad scroll-mt-24">
      <div className="container-pad">
        <SectionHeading title={landing.contact.title} subtitle={landing.contact.subtitle} />

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <FadeIn>
            <div className="surface p-7">
              <div className="flex items-center gap-3">
                <div className="rounded-2xl border bg-white p-2">
                  <Mail className="h-5 w-5" />
                </div>
                <div className="font-display font-semibold tracking-tight">Email</div>
              </div>
              <a className="mt-3 block text-sm text-slate-800 underline underline-offset-4" href={mailLink(landing.mailto.to, landing.mailto.subject, decodeURIComponent(bodyTemplate))}>
                {landing.contact.email}
              </a>
              <p className="mt-3 text-sm text-mutedForeground leading-6">
                Para cotización, comparte tipo de inmueble, ubicación y servicio(s) de interés.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.04}>
            <div className="surface p-7">
              <div className="flex items-center gap-3">
                <div className="rounded-2xl border bg-white p-2">
                  <MessageCircle className="h-5 w-5" />
                </div>
                <div className="font-display font-semibold tracking-tight">WhatsApp</div>
              </div>
              <a className="mt-3 block text-sm text-slate-800 underline underline-offset-4" href={waLink(landing.contact.whatsapp, waMsg)} target="_blank" rel="noreferrer">
                +507 {landing.contact.whatsapp}
              </a>
              <p className="mt-3 text-sm text-mutedForeground leading-6">
                Ideal para coordinar reunión y, si aplica, visita del inmueble.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.08}>
            <div className="surface p-7">
              <div className="flex items-center gap-3">
                <div className="rounded-2xl border bg-white p-2">
                  <MapPin className="h-5 w-5" />
                </div>
                <div className="font-display font-semibold tracking-tight">Dirección</div>
              </div>
              <p className="mt-3 text-sm text-slate-800 leading-6">
                {landing.contact.address}
              </p>
              <a
                className="mt-3 inline-block text-sm text-mutedForeground underline underline-offset-4"
                href={`https://www.google.com/maps/search/?api=1&query=${mapsQuery}`}
                target="_blank"
                rel="noreferrer"
              >
                Abrir en Maps
              </a>
            </div>
          </FadeIn>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <a href={telLink(landing.contact.phone)}>
            <Button variant="outline" size="lg" className="gap-2 w-full sm:w-auto">
              <Phone className="h-4 w-4" />
              Llamar: {landing.contact.phone}
            </Button>
          </a>
          <a href={mailLink(landing.mailto.to, landing.mailto.subject, decodeURIComponent(bodyTemplate))}>
            <Button size="lg" className="gap-2 w-full sm:w-auto">
              <Mail className="h-4 w-4" />
              Enviar correo
            </Button>
          </a>
        </div>

        <p className="mt-6 text-xs text-mutedForeground">
          Nota: El formulario se integra en la siguiente fase (FASE 3). Por ahora, el flujo usa mailto y WhatsApp.
        </p>
      </div>
    </section>
  );
}
