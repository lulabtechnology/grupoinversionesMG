export const landing = {
  brand: {
    name: "Grupo MG",
    tagline:
      "Soluciones operativas y administrativas con bases tecnológicas para bodegas, PH y centros comerciales.",
    scope: "Panamá, Centroamérica y el Caribe.",
    logo: "/images/brand/logo.svg",
  },

  // Alias útil para componentes que usan landing.images.*
  images: {
    logo: "/images/brand/logo.svg",
    hero: "/images/hero/hero.jpg",
    services: {
      legal: "/images/services/legal.jpg",
      accounting: "/images/services/accounting.jpg",
      construction: "/images/services/construction.jpg",
    },
    tech: {
      thermal: "/images/tech/thermal.jpg",
      drone: "/images/tech/drone.jpg",
    },
    og: "/og.jpg",
  },

  nav: [
    { label: "Servicios", href: "#servicios" },
    { label: "Sectores", href: "#sectores" },
    { label: "Tecnología", href: "#tecnologia" },
    { label: "Proceso", href: "#proceso" },
    { label: "FAQs", href: "#faqs" },
    { label: "Contacto", href: "#contacto" },
  ],

  hero: {
    headline: "Eficiencia operativa y contratos claros por servicios.",
    subheadline:
      "Soluciones para bienes inmuebles con tecnología de punta y profesionalismo humano: diagnóstico, administración y ejecución con alcance definido por contrato.",
    primaryCta: "Solicitar cotización",
    secondaryCta: "Hablar por WhatsApp",
    heroImage: "/images/hero/hero.jpg",
  },

  valueProps: [
    {
      title: "Eficiencia en la operación",
      desc: "Orden, control y ejecución enfocada en lo que tu inmueble necesita hoy, sin fricción ni improvisación.",
    },
    {
      title: "Contratos claros por servicios",
      desc: "Alcance definido por tarea o proyecto, entregables concretos y responsabilidades alineadas desde el inicio.",
    },
    {
      title: "Tecnología + profesionalismo humano",
      desc: "Herramientas técnicas para diagnosticar y documentar, con criterio experto y comunicación directa.",
    },
  ],

  // Servicios: mantenemos todo el contenido, pero la UI lo mostrará resumido + expandible
  services: [
    {
      key: "legal",
      title: "Servicios administrativos y legales",
      desc: "Soporte legal y estructuración para la operación y administración de bienes inmuebles.",
      bullets: [
        "Constitución de empresas e inscripción en entidades gubernamentales.",
        "Constitución de personería jurídica para administración de PH o bienes inmuebles.",
        "Reglamentos internos de convivencia y uso (PH, bodegas, plazas, hoteles, parques e industria).",
      ],
      image: "/images/services/legal.jpg",
    },
    {
      key: "finance",
      title: "Contabilidad y finanzas",
      desc: "Control financiero, reportes y planificación para decisiones seguras.",
      bullets: [
        "Contabilidad completa.",
        "Informes mensuales, trimestrales y anuales.",
        "Auditoría y fiscalización.",
        "Sistema de facturación y presupuesto anual.",
        "Comparativo de proveedores.",
        "Supervisión de trabajos para pagos y garantías.",
        "Cronogramas y costos de mantenimiento.",
        "Asesoría de nuevas inversiones basada en el mercado.",
      ],
      image: "/images/services/accounting.jpg",
    },
    {
      key: "maintenance",
      title: "Construcción y mantenimiento",
      desc: "Ejecución con personal idóneo (arquitectos e ingenieros) y enfoque preventivo/correctivo.",
      bullets: [
        "Diseños de construcción.",
        "Estructura (techo, paredes, pisos, cimientos y estacionamientos).",
        "Cuartos de bombas y cuartos eléctricos.",
        "Aire acondicionado.",
        "Voz y data.",
        "Tanques de reserva.",
        "Alarmas y contra incendio (incl. sistema húmedo).",
      ],
      image: "/images/services/construction.jpg",
    },
    {
      key: "contracts",
      title: "Gestión de contratistas, contratos y seguros",
      desc: "Comparación, formalización y cobertura por proyecto para reducir riesgos.",
      bullets: [
        "Contratistas certificados: 3 opciones por proyecto + comparativo para decisión.",
        "Gestión de créditos en materiales y mano de obra (según evaluación).",
        "Contratos específicos por tareas o proyectos.",
        "Seguros de daños a terceros.",
        "Fianzas de cumplimiento y reclamo por incumplimiento (según aplique).",
      ],
      image: "", // reducimos uso real de imágenes
    },
    {
      key: "inspection",
      title: "Informes técnicos y diagnóstico con tecnología",
      desc: "Levantamiento detallado por sistema, con herramientas de inspección avanzadas.",
      bullets: [
        "Peritajes, certificados e informes técnicos (según requerimiento).",
        "Cámaras térmicas infrarrojas telescópicas para detectar daños internos.",
        "Drones para imágenes panorámicas.",
        "Cámaras fotográficas de alta definición.",
        "Diagnóstico por sistema: estructural, eléctrico, plomería, A/A, alarmas, contra incendi
