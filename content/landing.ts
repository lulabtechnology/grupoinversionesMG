export const landing = {
  brand: {
    name: "Grupo MG",
    tagline:
      "Soluciones operativas y administrativas con bases tecnológicas para bodegas, PH y centros comerciales.",
    scope: "Panamá, Centroamérica y el Caribe.",
    logo: "/images/brand/logo.svg",
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
        // (Cambio solicitado) Eliminado: “Constitución de personería jurídica...” por ser redundante
        // (Cambio solicitado) Frase reemplazada:
        "Reglamentos de uso para PH, bodegas, centros comerciales y hoteles.",
      ],
      image: "/images/services/legal.jpg",
      gallery: [
        "/images/services/admin-legal-1.jpg",
        "/images/services/admin-legal-2.jpg",
        "/images/services/admin-legal-3.jpg",
      ],
    },

    {
      key: "finance",
      title: "Contabilidad y finanzas",
      desc: "Control financiero, reportes y planificación para decisiones seguras.",
      bullets: [
        // (Cambio solicitado)
        "Ciclo contable.",
        "Informes mensuales, trimestrales y anuales.",
        "Auditoría y fiscalización.",
        "Sistema de facturación y presupuesto anual.",
        "Comparativo de proveedores.",
        "Supervisión de trabajos para pagos y garantías.",
        "Cronogramas y costos de mantenimiento.",
        "Asesoría de nuevas inversiones basada en el mercado.",
      ],
      image: "/images/services/accounting.jpg",
      gallery: [
        "/images/services/accounting-1.jpg",
        "/images/services/accounting-2.jpg",
        "/images/services/accounting-3.jpg",
        "/images/services/accounting-4.jpg",
      ],
    },

    // (Cambio solicitado) NUEVO SERVICIO
    {
      key: "cleaning",
      title: "Limpieza y mantenimiento operativo",
      desc: "Servicio de limpieza con alcance definido por contrato y enfoque en operación diaria.",
      bullets: [
        "Limpieza de áreas comunes y operativas.",
        "Plan de frecuencias y alcance por zonas (según contrato).",
        "Supervisión y control de ejecución.",
      ],
      image: "/images/services/cleaning.jpg",
      gallery: [
        "/images/services/cleaning-1.jpg",
        "/images/services/cleaning-2.jpg",
        "/images/services/cleaning-3.jpg",
      ],
    },

    {
      key: "maintenance",
      title: "Construcción y mantenimiento",
      desc: "Ejecución con personal idóneo (arquitectos e ingenieros) y enfoque preventivo/correctivo.",
      bullets: [
        "Diseños de construcción.",
        // (Cambio solicitado) Eliminado: “Diseño y construcción de anexos”
        "Mantenimiento de estructura (techo, paredes, pisos, cimientos y estacionamientos).",
        "Áreas verdes y mantenimiento de exteriores.",
        "Impermeabilización.",
        "Pintura.",
        "Seguridad: portones eléctricos y cámaras.",
        "Cuarto de bombas y cuartos eléctricos.",
        // (Cambio solicitado) Alta/media/baja tensión
        "Sistema eléctrico de alta, media y baja tensión.",
        "Aire acondicionado.",
        "Voz y data.",
        "Tanques de reserva.",
        "Sistema de alarmas.",
        "Sistema contra incendio y sistema húmedo.",
      ],
      image: "/images/services/construction.jpg",
      gallery: [
        "/images/services/greens-1.jpg",
        "/images/services/greens-2.jpg",
        "/images/services/waterproofing-1.jpg",
        "/images/services/painting-1.jpg",
        "/images/services/security-1.jpg",
        "/images/services/electrical-1.jpg",
        "/images/services/construction-1.jpg",
      ],
    },

    {
      key: "contracts",
      // (Cambio solicitado)
      title: "Gestión de proveedores, pólizas y contratos",
      desc: "Comparación, formalización y cobertura por proyecto para reducir riesgos.",
      bullets: [
        "Proveedores/contratistas certificados: 3 opciones por proyecto + comparativo para decisión.",
        "Gestión de créditos en materiales y mano de obra (según evaluación).",
        "Contratos específicos por tareas o proyectos.",
        "Gestión de pólizas y seguros de daños a terceros.",
        "Fianzas de cumplimiento y reclamo por incumplimiento (según aplique).",
      ],
      image: "/images/services/contracts.jpg",
      gallery: [
        "/images/services/contracts-1.jpg",
        "/images/services/contracts-2.jpg",
        "/images/services/contracts-3.jpg",
      ],
    },

    {
      key: "inspection",
      title: "Informes técnicos y diagnóstico con tecnología",
      desc: "Levantamiento detallado por sistema, con herramientas de inspección avanzadas.",
      bullets: [
        "Peritajes, certificados e informes técnicos (según requerimiento).",
        "Cámaras térmicas infrarrojas telescópicas para detectar daños internos.",
        "Drones para imágenes panorámicas.",
        "Diagnóstico por sistema: estructural, eléctrico, plomería, A/A, alarmas, contra incendio, fibra óptica.",
        "Mantenimiento correctivo y preventivo + recomendaciones de actualización.",
        // (Cambio solicitado) Eliminado: “Cámaras fotográficas de alta definición.”
      ],
      image: "/images/services/inspection.jpg",
      gallery: [
        "/images/tech/thermal.jpg",
        "/images/tech/drone.jpg",
        "/images/services/inspection-1.jpg",
      ],
    },
  ],

  sectors: {
    title: "Sectores atendidos",
    subtitle:
      "Especializados en operación y administración de inmuebles que requieren orden, trazabilidad y ejecución confiable.",
    items: [
      "Plazas comerciales",
      "Bodegas",
      "Propiedad Horizontal (PH)",
      // (Cambio solicitado)
      "Hoteles",
    ],
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
      // (Cambio solicitado) Eliminado el bloque de “Registro fotográfico HD”
    ],
  },

  process: {
    title: "Cómo trabajamos",
    subtitle:
      "Un flujo claro, con pasos definidos y entregables alineados al contrato por servicio.",
    // (Cambio solicitado) Solo 3 pasos
    steps: [
      {
        title: "Solicitud",
        // (Cambio solicitado) “Solo visita”
        desc: "Coordinamos visita al inmueble para levantar tus necesidades.",
      },
      {
        title: "Inspección y evaluación en campo",
        desc: "Revisamos condiciones, prioridades y riesgos para definir el alcance.",
      },
      {
        title: "Levantamiento de propuesta para aprobación",
        desc: "Presentamos propuesta con alcance y entregables definidos por contrato.",
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
        a: "Coordinamos visita al inmueble para levantar información y presentar propuesta para aprobación.",
      },
      {
        q: "¿Incluyen garantías?",
        a: "La garantía y condiciones aplican según el contrato de servicio acordado.",
      },
      {
        q: "¿Manejan comparativos de proveedores?",
        a: "Sí. Presentamos comparativos para facilitar la decisión del cliente y asegurar trazabilidad del proceso.",
      },
    ],
  },

  finalCta: {
    title: "Listos para optimizar la operación de tu inmueble.",
    subtitle:
      "Cuéntanos tu necesidad. Coordinamos visita al inmueble para levantar información y preparar propuesta.",
    primary: "Solicitar cotización",
    secondary: "Hablar por WhatsApp",
  },

  form: {
    title: "Solicita una cotización",
    subtitle:
      "Cuéntanos lo esencial. Coordinamos visita al inmueble y preparamos propuesta para aprobación.",
    submitLabel: "Generar correo",
    successTitle: "Listo: se abrirá tu correo",
    successSubtitle:
      "Si no se abre automáticamente, copia el resumen y pégalo en un correo a grupo@inversionesmg.com.",
    roles: ["Dueño", "Administrador", "Gerente", "Otro"],
    // (Cambio solicitado) Agregar Hotel
    propertyTypes: ["PH", "Plaza comercial", "Bodega", "Hotel", "Otro"],
    meetingPrefs: ["Virtual", "Presencial", "Ambas"],
    // (Cambio solicitado) Agregar Limpieza + ajustar nombres
    interestOptions: [
      "Servicios administrativos y legales",
      "Contabilidad y finanzas",
      "Limpieza y mantenimiento operativo",
      "Construcción y mantenimiento",
      "Gestión de proveedores, pólizas y contratos",
      "Informes técnicos y diagnóstico con tecnología",
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
