export const landing = {
  brand: {
    name: "Grupo MG",
    tagline:
      "Soluciones operativas y administrativas con bases tecnológicas para bodegas, PH y centros comerciales.",
    scope: "Panamá, Centroamérica y el Caribe.",
    logo: "/images/brand/logo.svg",
  },

  images: {
    logo: "/images/brand/logo.svg",
    hero: "/images/hero/hero.jpg",
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
    // CAMBIO: frase exacta pedida en el HERO
    headline: "Grupo MG: Eficiencia operativa y contratos específicos por servicios.",
    subheadline:
      "Operación y administración de inmuebles con tecnología de punta y alcance definido por contrato.",
    primaryCta: "Solicitar cotización",
    secondaryCta: "Hablar por WhatsApp",
    heroImage: "/images/hero/hero.jpg",
  },

  valueProps: [
    {
      title: "Eficiencia en la operación",
      desc: "Orden, control y ejecución enfocada en lo que tu inmueble necesita hoy.",
    },
    {
      // CAMBIO: alineado al headline
      title: "Contratos específicos por servicios",
      desc: "Alcance definido por tarea o proyecto, con entregables y responsabilidades claras.",
    },
    {
      title: "Tecnología + profesionalismo humano",
      desc: "Herramientas técnicas para diagnosticar y documentar, con criterio experto.",
    },
  ],

  services: [
    {
      key: "legal",
      title: "Servicios administrativos y legales",
      // CAMBIO: exacto como lo pediste (solo eso)
      desc: "Soporte legal y estructura para la operación.",
      bullets: [
        "Constitución de empresas e inscripción en entidades gubernamentales.",
        "Reglamentos de uso para PH, bodegas, centros comerciales y hoteles.",
      ],
      gallery: [
        "/images/services/admin-legal-1.jpg",
        "/images/services/admin-legal-2.jpg",
        "/images/services/admin-legal-3.jpg",
        "/images/services/admin-legal-4.jpg",
      ],
    },

    {
      key: "finance",
      title: "Contabilidad y finanzas",
      desc: "Control financiero, reportes y planificación para decisiones seguras.",
      bullets: [
        "Ciclo contable.",
        "Informes mensuales, trimestrales y anuales.",
        "Auditoría y fiscalización.",
        "Sistema de facturación y presupuesto anual.",
        "Comparativo de proveedores.",
        "Supervisión de trabajos para pagos y garantías.",
        "Cronogramas y costos de mantenimiento.",
        "Gestión de mercadeo y ventas.",
        "Asesoría de nuevas inversiones basada en el mercado.",
      ],
      gallery: [
        "/images/services/accounting-1.jpg",
        "/images/services/accounting-2.jpg",
        "/images/services/accounting-3.jpg",
        "/images/services/accounting-4.jpg",
       
      ],
    },

    {
      key: "maintenance",
      title: "Construcción y mantenimiento",
      desc: "Ejecución con personal idóneo (arquitectos e ingenieros) y enfoque preventivo/correctivo.",
      bullets: [
        "Diseños de construcción.",
        "Mantenimiento de estructura (techo, paredes, pisos, cimientos y estacionamientos).",
        "Áreas verdes y mantenimiento de exteriores.",
        "Impermeabilización.",
        "Pintura.",
        "Cuarto de bombas y cuartos eléctricos.",
        "Aire acondicionado.",
        "Voz y data.",
        "Tanques de reserva.",
        "Seguridad: portones eléctricos y cámaras.",
        "Sistema contra incendio y sistema húmedo.",
        "Sistema eléctrico de alta, media y baja tensión.",
        "Servicio de limpieza (áreas comunes, exteriores y post-obra).",
      ],
      gallery: [
        "/images/services/greens-1.jpg",
        "/images/services/greens-2.jpg",
        "/images/services/greens-3.jpg",
        "/images/services/waterproofing-1.jpg",
        
        "/images/services/painting-1.jpg",
        "/images/services/security-1.jpg",
        "/images/services/electrical-1.jpg",
        
      ],
    },

    {
      key: "contracts",
      title: "Gestión de proveedores, pólizas y contratos",
      desc: "Comparación, formalización y cobertura por proyecto para reducir riesgos.",
      bullets: [
        "Comparativo, contratación y cobertura por proyecto para minimizar riesgos.",
        "Gestión de créditos en materiales y mano de obra (según evaluación).",
        "Contratos específicos por tareas o proyectos.",
        "Pólizas y seguros de daños a terceros (según aplique).",
        "Fianzas de cumplimiento y reclamo por incumplimiento (según aplique).",
      ],
      gallery: [
        "/images/services/contracts-1.jpg",
        "/images/services/contracts-2.jpg",
      ],
    },

    {
      key: "inspection",
      title: "Informes técnicos con tecnología de punta",
      desc: "Levantamiento detallado por sistema, con herramientas de inspección avanzadas.",
      bullets: [
        "Peritajes, certificados e informes técnicos (según requerimiento).",
        "Cámaras térmicas infrarrojas telescópicas para detectar daños internos.",
        "Drones para imágenes panorámicas.",
        "Diagnóstico por sistema: estructural, eléctrico, plomería, A/A, alarmas, contra incendio, fibra óptica.",
        "Mantenimiento correctivo y preventivo + recomendaciones de actualización.",
      ],
      gallery: [
        "/images/services/inspection-1.jpg",
        "/images/services/inspection-2.jpg",
      ],
    },
  ],

  sectors: {
    title: "Sectores atendidos",
    subtitle:
      "Especializados en operación y administración de inmuebles que requieren orden, trazabilidad y ejecución confiable.",
    items: ["Plazas comerciales", "Bodegas", "Propiedad Horizontal (PH)", "Hoteles"],
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
    ],
  },

  process: {
    title: "Cómo trabajamos",
    subtitle: "Tres pasos claros, desde la visita hasta la propuesta para aprobación.",
    steps: [
      {
        title: "Solicitud",
        desc: "Coordinamos visita al inmueble para entender la necesidad y el contexto.",
      },
      {
        title: "Inspección y evaluación en campo",
        desc: "Evaluación técnica en sitio para levantar hallazgos, prioridades y riesgos.",
      },
      {
        title: "Levantamiento de propuesta para aprobación",
        desc: "Presentamos la propuesta con alcance, entregables y contrato claro por servicio.",
      },
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
        a: "Coordinamos visita al inmueble, realizamos la evaluación y levantamos la propuesta para aprobación.",
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
      "Cuéntanos tu necesidad. Coordinamos visita y levantamos la propuesta para aprobación.",
    primary: "Solicitar cotización",
    secondary: "Hablar por WhatsApp",
  },

  form: {
    title: "Solicita una cotización",
    subtitle:
      "Cuéntanos lo esencial. Coordinamos visita y levantamos la propuesta para aprobación.",
    submitLabel: "Generar correo",
    successTitle: "Listo: se abrirá tu correo",
    successSubtitle:
      "Si no se abre automáticamente, copia el resumen y pégalo en un correo a grupo@inversionesmg.com.",
    roles: ["Dueño", "Administrador", "Gerente", "Otro"],
    propertyTypes: ["PH", "Plaza comercial", "Bodega", "Hotel", "Otro"],
    meetingPrefs: ["Virtual", "Presencial", "Ambas"],
    interestOptions: [
      "Servicios administrativos y legales",
      "Contabilidad y finanzas",
      "Construcción y mantenimiento",
      "Gestión de proveedores, pólizas y contratos",
      "Informes técnicos con tecnología de punta",
      "Servicio de limpieza",
    ],
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
