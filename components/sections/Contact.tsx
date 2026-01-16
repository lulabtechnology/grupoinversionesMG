import SectionHeading from "@/components/site/SectionHeading";
import { landing } from "@/content/landing";
import { mailLink, telLink, waLink } from "@/lib/links";
import { Mail, MessageCircle, Phone } from "lucide-react";
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
                <div className="font-display font-semibold tracking-tight">
                  Respuesta rápida
                </div>

                <div className="mt-4 grid gap-3">
                  <a href={waLink(landing.contact.whatsapp, waMsg)} target="_blank" rel="noreferrer">
                    <Button size="lg" className="w-full gap-2">
                      <MessageCircle className="h-4 w-4" />
                      WhatsApp
                    </Button>
                  </a>

                  <a href={telLink(landing.contact.phone)}>
                    <Button variant="outline" size="lg" className="w-full gap-2">
                      <Phone className="h-4 w-4" />
                      Llamar
                    </Button>
                  </a>

                  <a href={mailLink(landing.mailto.to, landing.mailto.subject, quickBody)}>
                    <Button variant="outline" size="lg" className="w-full gap-2">
                      <Mail className="h-4 w-4" />
                      Email
                    </Button>
                  </a>
                </div>

                <p className="mt-5 text-sm text-mutedForeground leading-6">
                  Dirección: {landing.contact.address}
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
