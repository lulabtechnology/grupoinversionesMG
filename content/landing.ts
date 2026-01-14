export const landing = {
  brand: {
    name: "Grupo MG",
    tagline:
      "Soluciones operativas y administrativas con bases tecnológicas para bodegas, PH y centros comerciales.",
  },
  locales: ["es"] as const,

  hero: {
    headline: "Eficiencia operativa y contratos claros por servicios.",
    subheadline:
      "Administramos, diagnosticamos y ejecutamos soluciones para bienes inmuebles con tecnología de punta y un equipo profesional, humano y orientado a resultados.",
    primaryCta: "Solicitar cotización",
    secondaryCta: "Hablar por WhatsApp",
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
      desc: "Diagnóstico y seguimiento apoyados por herramientas técnicas, con comunicación directa y criterio experto.",
    },
  ],

  services: [
    {
      key: "legal",
      title: "Servicios administrativos y legales",
      desc: "Estructuración y soporte legal para operación y administración de bienes inmuebles.",
      bullets: [
        "Manejo legal para constitución de empresas e inscripción en entidades gubernamentales.",
        "Constitución de personería jurídica para administración de PH o bienes inmuebles.",
        "Reglamentos internos de convivencia y uso (PH, bodegas, plazas comerciales, hoteles, parques e industria).",
      ],
      image: "/images/services/legal.jpg",
    },
    {
      key: "finance",
      title: "Contabilidad y finanzas",
      desc: "Control financiero, reportes y planificación para decisiones seguras.",
      bullets: [
        "Servicios de contabilidad completo.",
        "Informes mensuales, trimestrales y anuales.",
        "Auditoría y fiscalización.",
        "Creación de sistema de facturación y presupuesto anual.",
        "Contratación y comparativo de proveedores.",
        "Supervisión de trabajos contratados para pagos y garantías.",
        "Cronograma de trabajos y costos de mantenimiento.",
        "Gestión de mercadeo y ventas (según necesidad del inmueble).",
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
        "Mantenimiento de estructura (techo, paredes, pisos, cimientos y estacionamientos).",
        "Cuartos de bombas y cuartos eléctricos.",
        "Aire acondicionado.",
        "Voz y data / fibra óptica (según alcance).",
        "Tanques de reserva.",
        "Sistemas de alarmas.",
        "Sistema contra incendio y sistema húmedo.",
      ],
      image: "/images/services/construction.jpg",
    },
    {
      key: "contracts",
      title: "Gestión de contratistas, contratos y seguros",
      desc: "Selección, comparación y formalización por proyecto para reducir riesgos.",
      bullets: [
        "Contratistas certificados: 3 opciones por proyecto + comparativo para decisión del cliente.",
        "Gestión de créditos en materiales y mano de obra (según evaluación).",
        "Contratos específicos por tareas o proyectos.",
        "Seguros de daños a terceros.",
        "Fianzas de cumplimiento, abono y reclamo por incumplimiento (según aplique).",
      ],
      image: "/images/services/contracts.jpg",
    },
    {
      key: "tech",
      title: "Informes técnicos y diagnóstico con tecnología",
      desc: "Levantamiento técnico detallado por sistema, con herramientas de inspección avanzadas.",
      bullets: [
        "Informes y peritajes con tecnología de punta (según requerimiento).",
        "Cámaras térmicas infrarrojas telescópicas para detectar daños internos.",
        "Drones para imágenes panorámicas.",
        "Cámaras fotográficas de alta definición.",
        "Diagnóstico por sistema: estructural, eléctrico, plomería, aire acondicionado, alarmas, contra incendio, fibra óptica.",
        "Mantenimiento correctivo y preventivo + recomendaciones para actualización de sistemas.",
      ],
      image: "/images/services/inspection.jpg",
    },
  ],

  sectors: {
    title: "Sectores atendidos",
    items: [
      "Plazas comerciales",
      "Bodegas",
      "Propiedad Horizontal (PH)",
    ],
    scope: "Panamá, Centroamérica y el Caribe.",
  },

  process: {
    title: "Cómo trabajamos",
    steps: [
      {
        title: "Solicitud",
        desc: "Recibimos tu necesidad y el contexto del inmueble.",
      },
      {
        title: "Reunión",
        desc: "Coordinamos reunión virtual o física para entender alcance y prioridades.",
      },
      {
        title: "Visita del inmueble",
        desc: "Cuando aplica, realizamos visita técnica para validar condiciones y riesgos.",
      },
      {
        title: "Propuesta y contrato por servicio",
        desc: "Presentamos alcance, entregables y condiciones: contratos claros por servicios.",
      },
      {
        title: "Ejecución y seguimiento",
        desc: "Implementación, reportes y recomendaciones según el contrato.",
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
        a: "El alcance se define por sistema/tarea/proyecto y se formaliza en un contrato con entregables y responsabilidades.",
      },
      {
        q: "¿Ofrecen visitas y diagnósticos técnicos?",
        a: "Sí. Coordinamos reunión y, cuando aplica, visita del inmueble para levantar información técnica y recomendaciones.",
      },
      {
        q: "¿Manejan proveedores y comparativos?",
        a: "Sí. Recomendamos opciones certificadas y preparamos comparativos para facilitar la toma de decisión.",
      },
      {
        q: "¿Incluyen garantías?",
        a: "La garantía y condiciones aplican según el contrato de servicio acordado.",
      },
      {
        q: "¿En qué zonas trabajan?",
        a: "Panamá principalmente, con alcance a Centroamérica y Caribe según el proyecto.",
      },
      {
        q: "¿Pueden ayudar con reglamentos de PH y personería jurídica?",
        a: "Sí. Contemplamos soporte legal-administrativo para PH y bienes inmuebles, incluyendo reglamentos y trámites relacionados.",
      },
      {
        q: "¿Qué pasa después del formulario?",
        a: "Coordinamos reunión virtual o física y, de ser necesario, programamos visita del inmueble.",
      },
    ],
  },

  contact: {
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
