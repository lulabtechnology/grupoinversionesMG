export const landing = {
  site: {
    name: "Grupo MG",
    description:
      "Soluciones operativas y administrativas con bases tecnológicas para bodegas, PH y centros comerciales.",
    region: "Panamá y Centroamérica, Caribe",
  },

  nav: [
    { label: "Servicios", href: "#servicios" },
    { label: "Tecnología", href: "#tecnologia" },
    { label: "Proceso", href: "#proceso" },
    { label: "Contacto", href: "#contacto" },
  ],

  images: {
    logo: "/images/brand/logo.svg",
    hero: "/images/hero/hero.jpg",
    services: {
      legal: "/images/services/legal.jpg",
      accounting: "/images/services/accounting.jpg",
      construction: "/images/services/construction.jpg",
    },
    tech: {
      drone: "/images/tech/drone.jpg",
      thermal: "/images/tech/thermal.jpg",
    },
  },

  hero: {
    kicker: "Operación y administración para inmuebles",
    title: "Eficiencia con tecnología y criterio humano.",
    subtitle:
      "Servicios consolidados operativos y administrativos para bodegas, PH y plazas comerciales. Trabajamos con contratos claros por servicios: alcance definido, entregables y seguimiento.",
    bullets: [
      "Contratos claros por servicios",
      "Ejecución puntual por necesidad específica",
      "Diagnóstico técnico con tecnología de punta",
    ],
    primaryCta: "Solicitar cotización",
    secondaryCta: "WhatsApp",
  },

  services: {
    title: "Servicios (sin redundancias, con alcance claro)",
    subtitle:
      "Vista corta por defecto. Si necesitas el detalle completo, expande cada bloque sin perder el sentido.",
    items: [
      {
        id: "legal",
        title: "Administrativos y legales",
        summary:
          "Estructura legal y normativa para operar y administrar inmuebles con orden.",
        short: [
          "Constitución e inscripciones",
          "Personería jurídica para PH/bienes inmuebles",
          "Reglamentos internos por tipo de inmueble",
        ],
        full: [
          "Manejo legal para la constitución de empresas e inscripción en entidades gubernamentales.",
          "Constitución de personería jurídica para administración de PH o bienes inmuebles.",
          "Confección de reglamentos internos de convivencia y uso para PH, bodegas, plazas comerciales, hoteles, parques recreativos e industrias de manufactura en general.",
        ],
        image: "/images/services/legal.jpg",
      },
      {
        id: "finance",
        title: "Contabilidad y finanzas",
        summary:
          "Control financiero y administrativo con reportes y disciplina de ejecución.",
        short: [
          "Contabilidad completa + reportes",
          "Presupuesto anual + control",
          "Comparativo de proveedores",
        ],
        full: [
          "Servicios de contabilidad completo.",
          "Informes mensuales, trimestrales y anuales.",
          "Auditoría / fiscalización.",
          "Creación de sistema de facturación.",
          "Presupuesto anual.",
          "Contratación y comparativo de proveedores.",
          "Supervisión de trabajos contratados para pagos y garantías.",
          "Cronograma de trabajos y costos de mantenimiento.",
          "Gestión de mercadeo y ventas.",
          "Asesoría de nuevas inversiones basado en el mercado.",
        ],
        image: "/images/services/accounting.jpg",
      },
      {
        id: "maintenance",
        title: "Construcción y mantenimiento (arquitectos e ingenieros)",
        summary:
          "Mantenimiento correctivo y preventivo por sistema, con criterio técnico.",
        short: [
          "Estructura: techo, paredes, pisos, cimientos",
          "Sistemas: eléctrico, bombas, A/C, voz y data",
          "Contra incendio y sistema húmedo",
        ],
        full: [
          "Diseños de construcción.",
          "Mantenimiento de estructura: techo, paredes, pisos, cimientos y estacionamiento.",
          "Cuarto de bombas y cuartos eléctricos.",
          "Aire acondicionado.",
          "Voz y data.",
          "Tanques de reserva.",
          "Sistema de alarmas.",
          "Sistema contra incendio y sistema húmedo.",
        ],
        image: "/images/services/construction.jpg",
      },
      {
        id: "contracts",
        title: "Gestión de contratistas, contratos y seguros",
        summary:
          "Comparativos, contratación por tarea y cobertura para mitigar riesgos.",
        short: [
          "3 opciones por proyecto + comparativo",
          "Contratos por tareas/proyectos",
          "Seguros y fianzas según aplique",
        ],
        full: [
          "Trabajamos con contratistas certificados recomendando tres opciones por proyecto y hacemos un comparativo para decisión del cliente.",
          "Gestionamos créditos en materiales y mano de obra.",
          "Creamos contratos específicos por tareas o proyectos.",
          "Gestionamos seguros de daños a terceros.",
          "Fianzas de cumplimiento, fianzas y de abono y reclamo por incumplimiento de contrato.",
        ],
      },
      {
        id: "diagnostics",
        title: "Informes técnicos y diagnóstico con tecnología",
        summary:
          "Informe claro por sistema con hallazgos, riesgos y recomendaciones.",
        short: [
          "Peritaje, certificados e informes",
          "Diagnóstico por sistemas (estructural, eléctrico, plomería, A/C)",
          "Recomendaciones de actualización",
        ],
        full: [
          "Levantamiento de informes con tecnología de punta.",
          "Peritaje, certificados.",
          "Cámaras térmicas infrarrojas telescópicas para detectar daños internos.",
          "Drones para imágenes panorámicas.",
          "Cámaras fotográficas de alta definición.",
          "Diagnóstico de bienes inmuebles detallados por sistema: estructural (piso, paredes, techo), eléctrico, plomería, aire acondicionado, alarmas, sistema contra incendio, fibra óptica.",
          "Mantenimientos correctivos y preventivos + recomendaciones para actualización de sistemas.",
        ],
      },
    ],
  },

  technology: {
    title: "Tecnología aplicada (solo lo esencial)",
    subtitle:
      "Usamos tecnología para ver mejor, decidir mejor y ejecutar con menos incertidumbre.",
    bullets: [
      "Drones para imágenes panorámicas y acceso seguro",
      "Cámaras térmicas para daños internos no visibles",
      "Registro fotográfico HD para evidencia y control",
      "Diagnóstico por sistema con recomendaciones claras",
    ],
    detailsTitle: "Ver alcance técnico completo",
    details: [
      "Diagnóstico estructural: piso, paredes, techo.",
      "Diagnóstico eléctrico, plomería y aire acondicionado.",
      "Alarmas, sistema contra incendio, fibra óptica.",
      "Mantenimientos correctivos y preventivos con recomendaciones de actualización.",
    ],
    images: [
      { src: "/images/tech/drone.jpg", alt: "Inspección con drones" },
      { src: "/images/tech/thermal.jpg", alt: "Cámara térmica para diagnóstico" },
    ],
  },

  process: {
    title: "Proceso (simple, directo)",
    steps: [
      {
        title: "Solicitud",
        text: "Nos compartes el inmueble y el servicio requerido. Definimos prioridad y contexto.",
      },
      {
        title: "Reunión y visita",
        text: "Coordinamos reunión virtual o física y, si aplica, visita del inmueble.",
      },
      {
        title: "Propuesta y contrato por servicio",
        text: "Entregamos alcance, entregables y garantía según contrato. Ejecución y seguimiento.",
      },
    ],
  },

  faq: {
    title: "Preguntas frecuentes",
    items: [
      {
        q: "¿Trabajan por contrato mensual o por servicio puntual?",
        a: "Ambos. El diferencial es que cada necesidad puede resolverse con un contrato claro por servicio (alcance y entregables definidos).",
      },
      {
        q: "¿Qué pasa después del formulario?",
        a: "Coordinamos una reunión (virtual o física) y, si corresponde, una visita al inmueble para validar el alcance.",
      },
      {
        q: "¿Incluyen garantía?",
        a: "Sí. La garantía se establece según contrato, según el tipo de servicio y entregables.",
      },
    ],
  },

  finalCta: {
    title: "Listos para operar con eficiencia.",
    subtitle:
      "Solicita una cotización y coordinamos la siguiente acción: reunión y, si aplica, visita del inmueble.",
    primary: "Solicitar cotización",
    secondary: "WhatsApp",
  },

  contact: {
    title: "Contacto",
    subtitle:
      "Cuéntanos lo esencial. Coordinamos reunión y, si aplica, visita del inmueble.",
    email: "grupo@inversionesmg.com",
    phone: "6983-3111",
    whatsapp: "6983-3111",
    address: "Tumba Muerto, Dos Mares, PH Elite 500, ofic. 27C",
  },

  mailto: {
    to: "grupo@inversionesmg.com",
    subject: "Solicitud de cotización — Grupo MG",
  },

  form: {
    title: "Solicitar cotización",
    subtitle:
      "Vista corta para no saturar. Con esto es suficiente para coordinar la reunión.",
    submitLabel: "Generar correo",
    successTitle: "Listo: se abrirá tu correo",
    successSubtitle:
      "Si no se abre automáticamente, copia el resumen y pégalo en un correo a grupo@inversionesmg.com.",
    roles: ["Dueño", "Administrador", "Gerente", "Otro"],
    propertyTypes: ["PH", "Plaza comercial", "Bodega", "Otro"],
    meetingPrefs: ["Virtual", "Presencial", "Ambas"],
    interestOptions: [
      "Administrativos y legales",
      "Contabilidad y finanzas",
      "Construcción y mantenimiento",
      "Contratistas, contratos y seguros",
      "Informes técnicos y diagnóstico",
    ],
  },
} as const;
