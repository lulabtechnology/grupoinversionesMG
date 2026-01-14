export const landing = {
  brand: {
    name: "Grupo MG",
    tagline:
      "Soluciones operativas y administrativas con bases tecnológicas para bodegas, PH y centros comerciales.",
    scope: "Panamá, Centroamérica y el Caribe.",
    logo: "/images/brand/logo.svg", // tú subes el asset luego
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
      image: "/images/services/contracts.jpg",
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
        "Diagnóstico por sistema: estructural, eléctrico, plomería, A/A, alarmas, contra incendio, fibra óptica.",
        "Mantenimiento correctivo y preventivo + recomendaciones de actualización.",
      ],
      image: "/images/services/inspection.jpg",
    },
  ],

  sectors: {
    title: "Sectores atendidos",
    subtitle:
      "Especializados en operación y administración de inmuebles que requieren orden, trazabilidad y ejecución confiable.",
    items: ["Plazas comerciales", "Bodegas", "Propiedad Horizontal (PH)"],
  },

  technology: {
    title: "Tecnología aplicada para decisiones más seguras",
    subtitle:
      "Herramientas para inspección, documentación y diagnóstico. La recomendación final siempre se respalda con criterio técnico y alcance contractual.",
    tools: [
      {
        title: "Cámaras térmicas",
        desc: "Detección de anomalías internas y puntos críticos sin intervención invasiva.",
        image: "/images/tech/thermal.jpg",
      },
      {
        title: "Drones e imágenes panorámicas",
        desc: "Levantamiento visual eficiente en cubiertas, fachadas y áreas de difícil acceso.",
        image: "/images/tech/drone.jpg",
      },
      {
        title: "Registro fotográfico HD",
        desc: "Evidencia clara para informes, comparativos y seguimiento por sistema.",
        image: "/images/tech/camera-hd.jpg",
      },
    ],
  },

  process: {
    title: "Cómo trabajamos",
    subtitle:
      "Un flujo claro, con pasos definidos y entregables alineados al contrato por servicio.",
    steps: [
      { title: "Solicitud", desc: "Recibimos tu necesidad y el contexto del inmueble." },
      { title: "Reunión", desc: "Coordinamos reunión virtual o física para entender alcance y prioridades." },
      { title: "Visita del inmueble", desc: "Cuando aplica, realizamos visita técnica para validar condiciones y riesgos." },
      { title: "Propuesta y contrato por servicio", desc: "Alcance, entregables y condiciones: contratos claros por servicios." },
      { title: "Ejecución y seguimiento", desc: "Implementación, reportes y recomendaciones según el contrato." },
    ],
  },

  faq: {
    title: "Preguntas frecuentes",
    items: [
      {
        q: "¿Trabajan por administración completa o por servicios puntuales?",
        a: "Ambos. Podemos asumir gestión integral o resolver necesidades específicas mediante un contrato por servicio.",
      },
      {
        q: "¿Cómo definen el alcance del trabajo?",
        a: "Se define por sistema/tarea/proyecto y queda establecido en un contrato con entregables y responsabilidades.",
      },
      {
        q: "¿Qué ocurre después de solicitar cotización?",
        a: "Coordinamos una reunión (virtual o física) y, cuando aplica, programamos visita del inmueble.",
      },
      {
        q: "¿Incluyen garantías?",
        a: "La garantía y condiciones aplican según el contrato de servicio acordado.",
      },
      {
        q: "¿Manejan proveedores y comparativos?",
        a: "Sí. Presentamos comparativos para facilitar la decisión del cliente y asegurar trazabilidad del proceso.",
      },
    ],
  },

  finalCta: {
    title: "Listos para optimizar la operación de tu inmueble.",
    subtitle:
      "Cuéntanos tu necesidad. Coordinamos reunión y, si aplica, visita del inmueble para levantar información técnica.",
    primary: "Solicitar cotización",
    secondary: "Hablar por WhatsApp",
  },

  contact: {
    title: "Contacto",
    subtitle:
      "Escríbenos y coordinamos los próximos pasos. También puedes contactarnos por WhatsApp.",
    email: "grupo@inversionesmg.com",
    phone: "6983-3111",
    whatsapp: "6983-3111",
    address: "Tumba Muerto, Dos Mares, PH Elite 500, ofic. 27C",
  },

  mailto: {
    to: "grupo@inversionesmg.com",
    subject: "Solicitud de cotización — Grupo MG",
  },
} as const;
