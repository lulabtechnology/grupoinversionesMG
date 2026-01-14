import SectionHeading from "@/components/site/SectionHeading";
import { landing } from "@/content/landing";
import { mailLink, telLink, waLink } from "@/lib/links";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import FadeIn from "@/components/motion/FadeIn";
import { Button } from "@/components/ui/button";
import ContactForm from "@/components/forms/ContactForm";

export default function Contact() {
  const waMsg =
    "Hola, me gustaría solicitar una cotización con Grupo MG. ¿Podemos coordinar una reunión?";

  const quickBody =
    "Hola Grupo MG,\n\nMe gustaría solicitar una cotización.\n\n" +
    "Tipo de inmueble: ____\n" +
    "Ubicación: ____\n" +
    "Servicio(s) de interés: ____\n\n" +
    "Gracias.";

  const mapsQuery = encodeURIComponent(landing.contact.address);

  return (
    <section id="contacto" className="section-pad scroll-mt-24">
      <div className="container-pad">
        <SectionHeading title={landing.contact.title} subtitle={landing.contact.subtitle} />

        <div className="mt-10 grid gap-6 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <ContactForm />
          </div>

          <div className="lg:col-span-2 grid gap-6">
            <FadeIn>
              <div className="surface p-7">
                <div className="flex items-center gap-3">
                  <div className="rounded-2xl border bg-white p-2">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div className="font-display font-semibold tracking-tight">Email</div>
                </div>
                <a
                  className="mt-3 block text-sm text-slate-800 underline underline-offset-4"
                  href={mailLink(landing.mailto.to, landing.mailto.subject, quickBody)}
                >
                  {landing.contact.email}
                </a>
                <p className="mt-3 text-sm text-mutedForeground leading-6">
                  Si prefieres, puedes enviarnos un correo directo con los datos básicos.
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
                <a
                  className="mt-3 block text-sm text-slate-800 underline underline-offset-4"
                  href={waLink(landing.contact.whatsapp, waMsg)}
                  target="_blank"
                  rel="noreferrer"
                >
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

            <div className="flex flex-col gap-3">
              <a href={telLink(landing.contact.phone)}>
                <Button variant="outline" size="lg" className="gap-2 w-full">
                  <Phone className="h-4 w-4" />
                  Llamar: {landing.contact.phone}
                </Button>
              </a>
              <a href={waLink(landing.contact.whatsapp, waMsg)} target="_blank" rel="noreferrer">
                <Button size="lg" className="gap-2 w-full">
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
