import { landing } from "@/content/landing";

export default function Page() {
  return (
    <main className="min-h-screen">
      <div className="container-pad section-pad">
        <div className="surface p-8 sm:p-10">
          <p className="text-sm text-mutedForeground">Fase 1 (base)</p>
          <h1 className="mt-2 text-3xl sm:text-4xl font-semibold tracking-tight [font-family:var(--font-manrope)]">
            {landing.hero.headline}
          </h1>
          <p className="mt-3 max-w-2xl text-base sm:text-lg text-mutedForeground">
            {landing.hero.subheadline}
          </p>
          <div className="mt-6 hairline" />
          <p className="mt-6 text-sm text-mutedForeground">
            En la siguiente fase se montan todas las secciones premium (Hero real,
            servicios, proceso, FAQs, contacto) y animaciones.
          </p>
        </div>
      </div>
    </main>
  );
}
