// ===========================================
// CONTENIDO EXTRAÍDO DE LA WEB ORIGINAL NEGROMATE
// TODO EL TEXTO DINÁMICO DE LA APLICACIÓN
// ===========================================

// Información de la empresa (extraída del sitio original)
export const companyInfo = {
  name: "NegroMate",
  tagline: "Arte Urbano Personalizado",
  description: "Creamos arte urbano personalizado que conecta con tu esencia. Desde diseño gráfico hasta murales únicos.",
  founded: "2020",
  location: "Madrid, España",
  email: "info@negromate.com",
  phone: "+34 600 123 456",
  address: {
    street: "Calle del Arte, 123",
    city: "Madrid", 
    postalCode: "28001",
    country: "España"
  },
  socialMedia: {
    instagram: "@negromate_art",
    facebook: "NegroMate Official", 
    twitter: "@negromate"
  },
  stats: {
    projectsCompleted: 500,
    averageRating: 5,
    yearsExperience: 3,
    satisfiedClients: 450
  },
  workingHours: {
    weekdays: "9:00 - 18:00",
    saturday: "10:00 - 14:00",
    sunday: "Cerrado"
  }
}

// Contenido dinámico de páginas
export const pageContent = {
  // LANDING PAGE
  landing: {
    hero: {
      title: "Arte Urbano",
      subtitle: "Personalizado", 
      description: "Transformamos tu visión en arte callejero único. Diseño gráfico, ropa personalizada y murales que hablan tu idioma.",
      primaryButton: "Explorar Servicios",
      secondaryButton: "Ver Portfolio"
    },
    services: {
      title: "Nuestros Servicios",
      subtitle: "Descubre nuestras especialidades en arte urbano y personalización",
      cta: {
        title: "¿Tienes un proyecto en mente?",
        description: "Nos encanta colaborar en proyectos únicos. Cuéntanos tu idea y la haremos realidad.",
        buttonText: "Contáctanos Ahora"
      }
    }
  },

  // ABOUT US PAGE
  about: {
    title: "Sobre Nosotros",
    subtitle: "La historia detrás del arte urbano que nos define",
    story: {
      title: "Nuestra Historia",
      paragraphs: [
        "NegroMate nació de la pasión por el arte urbano y la necesidad de expresión personal. Fundada en 2020, comenzamos como un pequeño colectivo de artistas callejeros con una visión: democratizar el arte personalizado.",
        "Lo que empezó en las paredes de la ciudad, ahora se extiende a diseños gráficos, ropa personalizada y murales que cuentan historias únicas. Cada proyecto es una oportunidad de transformar ideas en arte tangible.",
        "Nuestro equipo combina técnicas tradicionales del street art con tecnología moderna, creando piezas que respetan la esencia urbana mientras abrazan la innovación."
      ]
    },
    mission: {
      title: "Nuestra Misión",
      description: "Hacer que el arte urbano sea accesible para todos, creando diseños únicos que reflejen la personalidad y visión de cada cliente."
    },
    values: [
      {
        icon: "🚀",
        title: "Innovación", 
        description: "Combinamos técnicas tradicionales con herramientas digitales modernas"
      },
      {
        icon: "🤝",
        title: "Colaboración",
        description: "Trabajamos de cerca con nuestros clientes para entender su visión"
      },
      {
        icon: "🎯", 
        title: "Calidad",
        description: "Cada proyecto recibe atención meticulosa al detalle y acabado"
      }
    ],
    cta: {
      title: "¿Listo para crear algo único?",
      description: "Únete a más de 500 clientes satisfechos que han visto sus ideas cobrar vida",
      stats: [
        { label: "Proyectos Completados", value: "500+" },
        { label: "Calificación Promedio", value: "5★" }, 
        { label: "Años de Experiencia", value: "3" }
      ]
    }
  },

  // CONTACT PAGE
  contact: {
    title: "Contacto",
    subtitle: "Cuéntanos sobre tu proyecto y hagámoslo realidad",
    form: {
      title: "Envíanos un Mensaje",
      fields: {
        name: "Nombre Completo",
        email: "Email", 
        subject: "Asunto",
        message: "Mensaje",
        subjectOptions: [
          { value: "", label: "Selecciona un servicio" },
          { value: "graphic-design", label: "Diseño Gráfico" },
          { value: "custom-clothing", label: "Ropa Personalizada" },
          { value: "murals", label: "Murales" },
          { value: "other", label: "Otro" }
        ]
      },
      submitButton: "Enviar Mensaje",
      successMessage: "¡Mensaje Enviado! Gracias por contactarnos. Te responderemos pronto."
    },
    info: {
      title: "Información de Contacto",
      items: [
        { icon: "📧", label: "Email", value: "info@negromate.com" },
        { icon: "📱", label: "Teléfono", value: "+34 600 123 456" },
        { icon: "📍", label: "Ubicación", value: "Madrid, España" }
      ]
    },
    social: {
      title: "Síguenos",
      platforms: [
        { name: "Facebook", icon: "📘", url: "#" },
        { name: "Instagram", icon: "📷", url: "#" },
        { name: "Twitter", icon: "🐦", url: "#" }
      ]
    }
  }
}

// Contenido de servicios
export const servicesContent = {
  // DISEÑO GRÁFICO
  graphicDesign: {
    title: "Diseño Gráfico",
    subtitle: "Creamos identidades visuales únicas que conectan con tu audiencia. Desde logos hasta estrategias de marca completas.",
    gallery: {
      title: "Marcas que Hemos Diseñado",
      items: [
        {
          title: "TechStart",
          description: "Identidad visual completa para startup tecnológica",
          emoji: "💻"
        },
        {
          title: "Urban Café", 
          description: "Branding para cafetería con estilo urbano",
          emoji: "☕"
        },
        {
          title: "FitLife",
          description: "Logo y diseño para gimnasio moderno", 
          emoji: "💪"
        },
        {
          title: "EcoGreen",
          description: "Identidad para empresa sostenible",
          emoji: "🌱"
        },
        {
          title: "ArtSpace",
          description: "Branding para galería de arte contemporáneo",
          emoji: "🎨"
        }
      ]
    },
    pricing: {
      title: "Paquetes de Diseño",
      subtitle: "Elige el paquete que mejor se adapte a tus necesidades"
    },
    process: {
      title: "Nuestro Proceso de Trabajo",
      subtitle: "Metodología probada para crear diseños que funcionan",
      steps: [
        {
          icon: "🎯",
          title: "1. Briefing", 
          description: "Entendemos tu visión y objetivos"
        },
        {
          icon: "✏️",
          title: "2. Conceptualización",
          description: "Desarrollamos ideas y conceptos únicos"
        },
        {
          icon: "🎨", 
          title: "3. Diseño",
          description: "Creamos propuestas visuales impactantes"
        },
        {
          icon: "🚀",
          title: "4. Entrega",
          description: "Finalizamos y entregamos todo listo para usar"
        }
      ]
    }
  },

  // ROPA PERSONALIZADA
  customClothing: {
    title: "Ropa Personalizada",
    subtitle: "Transforma tu estilo con prendas únicas. Cada pieza es una obra de arte wearable diseñada especialmente para ti.",
    gallery: {
      title: "Nuestras Creaciones",
      items: [
        {
          title: "Camiseta Street Art",
          description: "Diseño exclusivo con técnicas de spray digital",
          emoji: "👕"
        },
        {
          title: "Hoodie Personalizado",
          description: "Sudadera con capucha y diseño frontal/trasero", 
          emoji: "🧥"
        },
        {
          title: "Gorra Bordada",
          description: "Bordado de alta calidad con tu diseño",
          emoji: "🧢"
        },
        {
          title: "Tote Bag Artística",
          description: "Bolsa ecológica con arte original",
          emoji: "👜"
        },
        {
          title: "Chaqueta Bomber",
          description: "Chaqueta personalizada con parches únicos",
          emoji: "🧥"
        },
        {
          title: "Sneakers Custom",
          description: "Zapatillas personalizadas con pintura especial",
          emoji: "👟"
        }
      ]
    },
    pricing: {
      title: "Paquetes de Personalización",
      subtitle: "Desde piezas individuales hasta colecciones completas"
    },
    techniques: {
      title: "Técnicas Utilizadas",
      items: [
        {
          icon: "🖨️",
          title: "Serigrafía",
          description: "Impresión de alta durabilidad"
        },
        {
          icon: "🪡",
          title: "Bordado", 
          description: "Acabado premium y elegante"
        },
        {
          icon: "✨",
          title: "Vinilo Transfer",
          description: "Colores vibrantes y precisos"
        },
        {
          icon: "🎨",
          title: "Pintura Textil",
          description: "Arte manual exclusivo"
        }
      ]
    },
    brands: {
      title: "Marcas de Ropa que Utilizamos",
      categories: [
        {
          title: "Premium",
          description: "Gildan, Fruit of the Loom, Stanley/Stella"
        },
        {
          title: "Eco-Friendly",
          description: "Algodón orgánico certificado"
        },
        {
          title: "Deportiva", 
          description: "Poliéster reciclado, tecnología Dri-FIT"
        }
      ]
    },
    care: {
      title: "Cuidado de tu Prenda Personalizada",
      subtitle: "Sigue estos consejos para mantener tu diseño como el primer día",
      tips: [
        {
          icon: "🌡️",
          tip: "Lavar en frío (máx. 30°C)"
        },
        {
          icon: "🔄",
          tip: "Voltear al revés antes del lavado"
        },
        {
          icon: "🚫",
          tip: "No usar lejía ni suavizante"
        },
        {
          icon: "🌬️",
          tip: "Secar al aire libre"
        }
      ]
    }
  },

  // MURALES
  murals: {
    title: "Murales Artísticos",
    subtitle: "Transformamos espacios en experiencias visuales únicas. Desde pequeños rincones hasta grandes fachadas, creamos arte que inspira.",
    gallery: {
      title: "Proyectos Realizados",
      items: [
        {
          title: "Mural Corporativo Tech",
          description: "Mural de 50m² para oficinas de empresa tecnológica",
          emoji: "🏢"
        },
        {
          title: "Arte Urbano Comunitario",
          description: "Mural colaborativo en centro comunitario",
          emoji: "🏘️"
        },
        {
          title: "Pared Dormitorio Infantil",
          description: "Diseño colorido y educativo para niños",
          emoji: "🎨"
        },
        {
          title: "Restaurante Temático",
          description: "Ambiente inmersivo para restaurante mexicano",
          emoji: "🌮"
        },
        {
          title: "Gimnasio Motivacional",
          description: "Murales inspiradores para zona de entrenamiento",
          emoji: "💪"
        },
        {
          title: "Tienda de Skate",
          description: "Arte urbano auténtico para skate shop",
          emoji: "🛹"
        }
      ]
    },
    pricing: {
      title: "Paquetes de Murales",
      subtitle: "Proyectos adaptados al tamaño y complejidad de tu espacio"
    },
    process: {
      title: "Proceso de Creación",
      subtitle: "De la idea a la obra maestra en tu pared",
      steps: [
        {
          icon: "📐",
          title: "1. Medición",
          description: "Visitamos el espacio y tomamos medidas precisas"
        },
        {
          icon: "✏️",
          title: "2. Boceto",
          description: "Creamos diseños detallados adaptados al espacio"
        },
        {
          icon: "🎨",
          title: "3. Ejecución",
          description: "Pintamos con técnicas profesionales y materiales premium"
        },
        {
          icon: "✨",
          title: "4. Acabado",
          description: "Aplicamos protección final y realizamos retoques"
        }
      ]
    },
    spaces: {
      title: "Espacios que Transformamos",
      types: [
        { icon: "🏠", name: "Residencial" },
        { icon: "🏢", name: "Comercial" },
        { icon: "🏫", name: "Educativo" },
        { icon: "🎪", name: "Cultural" }
      ]
    },
    materials: {
      title: "Materiales Premium",
      items: [
        {
          icon: "🎨",
          title: "Pinturas Acrílicas",
          description: "Resistentes al agua y UV"
        },
        {
          icon: "💎",
          title: "Barniz Protector",
          description: "Protección a largo plazo"
        },
        {
          icon: "🌱",
          title: "Eco-Friendly",
          description: "Sin tóxicos, seguros para interiores"
        }
      ]
    },
    cta: {
      title: "¿Listo para Transformar tu Espacio?",
      description: "Cada mural es único y se adapta perfectamente a tu visión y espacio",
      buttons: {
        primary: "Solicitar Presupuesto",
        secondary: "Ver Más Proyectos"
      }
    }
  }
}

// Productos con precios (para carrito de compras)
export const mockProducts = [
  // Diseño Gráfico
  {
    id: "basic-design",
    name: "Paquete Básico",
    category: "graphic-design",
    price: 250,
    description: "Diseño gráfico básico para tu marca",
    features: [
      "Logo principal + 2 variaciones",
      "Paleta de colores", 
      "Tipografía personalizada",
      "3 rondas de revisiones",
      "Archivos en alta resolución"
    ],
    image: "🎨",
    inStock: true
  },
  {
    id: "premium-design",
    name: "Paquete Premium",
    category: "graphic-design",
    price: 500,
    description: "Diseño gráfico completo con identidad corporativa",
    features: [
      "Todo del paquete básico",
      "Manual de identidad corporativa",
      "Papelería básica (tarjetas, papel membretado)",
      "Mockups profesionales",
      "5 rondas de revisiones",
      "Iconografía personalizada"
    ],
    image: "🎨",
    inStock: true
  },
  {
    id: "enterprise-design",
    name: "Paquete Empresarial",
    category: "graphic-design",
    price: 750,
    description: "Estrategia de marca completa para empresas",
    features: [
      "Todo del paquete premium",
      "Estrategia de marca completa",
      "Aplicaciones digitales y físicas",
      "Campaña de lanzamiento",
      "Revisiones ilimitadas",
      "Soporte post-entrega (3 meses)",
      "Consultoría estratégica"
    ],
    image: "🎨",
    inStock: true
  },

  // Ropa Personalizada
  {
    id: "basic-clothing",
    name: "Paquete Básico",
    category: "custom-clothing",
    price: 50,
    description: "Personalización básica de prendas",
    features: [
      "1 prenda personalizada",
      "Diseño simple (1-2 colores)",
      "Impresión/bordado básico",
      "Prenda de calidad estándar",
      "1 revisión de diseño"
    ],
    image: "👕",
    inStock: true
  },
  {
    id: "premium-clothing",
    name: "Paquete Premium",
    category: "custom-clothing",
    price: 100,
    description: "Personalización avanzada con múltiples técnicas",
    features: [
      "2 prendas personalizadas",
      "Diseño complejo (multicolor)",
      "Técnicas mixtas (impresión + bordado)",
      "Prendas de calidad premium",
      "3 revisiones de diseño",
      "Packaging especial"
    ],
    image: "👕",
    inStock: true
  },
  {
    id: "collection-clothing",
    name: "Colección Completa",
    category: "custom-clothing",
    price: 150,
    description: "Colección completa de prendas personalizadas",
    features: [
      "4 prendas personalizadas",
      "Línea de diseño coherente",
      "Técnicas especiales (foil, glow)",
      "Prendas de marca reconocida",
      "Revisiones ilimitadas",
      "Photoshoot del resultado",
      "Certificado de autenticidad"
    ],
    image: "👕",
    inStock: true
  },

  // Murales
  {
    id: "small-mural",
    name: "Mural Pequeño",
    category: "murals",
    price: 600,
    description: "Mural artístico para espacios pequeños",
    features: [
      "Hasta 10m² de superficie",
      "Diseño personalizado",
      "Pinturas de alta calidad",
      "Preparación de superficie",
      "Protección final UV",
      "2 revisiones de boceto"
    ],
    image: "🖼️",
    inStock: true
  },
  {
    id: "medium-mural",
    name: "Mural Mediano",
    category: "murals",
    price: 850,
    description: "Mural complejo para espacios medianos",
    features: [
      "Hasta 25m² de superficie",
      "Diseño complejo multicolor",
      "Técnicas mixtas (spray + pincel)",
      "Preparación profesional",
      "Garantía de 5 años",
      "Documentación fotográfica",
      "3 revisiones de boceto"
    ],
    image: "🖼️",
    inStock: true
  },
  {
    id: "large-mural",
    name: "Mural Grande",
    category: "murals",
    price: 1200,
    description: "Mural artístico de gran formato",
    features: [
      "Más de 25m² de superficie",
      "Diseño artístico completo",
      "Efectos especiales (3D, glow)",
      "Equipo especializado",
      "Garantía de 10 años",
      "Time-lapse del proceso",
      "Revisiones ilimitadas",
      "Mantenimiento incluido (1 año)"
    ],
    image: "🖼️",
    inStock: true
  }
]

// Usuarios mock para desarrollo
export const mockUsers = [
  {
    name: "Admin User",
    email: "admin@negromate.com",
    password: "admin123",
    role: "admin"
  },
  {
    name: "Cliente Demo",
    email: "cliente@demo.com",
    password: "demo123",
    role: "user"
  }
]

// Órdenes mock
export const mockOrders = [
  {
    userId: "user_id_placeholder",
    items: [
      {
        productId: "basic-design",
        quantity: 1,
        price: 250
      }
    ],
    totalAmount: 250,
    status: "pending",
    orderDate: new Date(),
    shippingAddress: {
      street: "Calle Ejemplo 123",
      city: "Madrid",
      postalCode: "28001",
      country: "España"
    }
  }
]