export type Lang = "en" | "es";

const en = {
  nav: [
    { name: "Why Niro", href: "#why-niro" },
    { name: "Live Map", href: "#live-map" },
    { name: "Promotions", href: "#promotions" },
    { name: "For People", href: "#for-people" },
    { name: "For Business", href: "#for-business" },
    { name: "Mobile Business", href: "#mobile-business" },
  ],
  languages: [
    { code: "en" as const, label: "English", short: "EN" },
    { code: "es" as const, label: "Spanish", short: "ES" },
  ],
  hero: {
    badge: "Live Hyperlocal Map",
    line1: "See What’s Happening",
    line2: "Around You Right Now.",
  },
  map: {
    line1: "A Map That Changes With What’s",
    line2: "Happening Around You.",
    muted: "Other maps show people where a business is.",
    highlight: "NIRO Shows You What’s Happening There Right Now.",
    slides: [
      {
        tag: "New Promotion?",
        title: "Update Niro.",
        description: "Launch instantaneous flash promos without running costly ads.",
      },
      {
        tag: "Live Activity?",
        title: "See Crowd Levels.",
        description: "Real-time foot traffic and vibes at your favorite local spots.",
      },
      {
        tag: "Exclusive Deals?",
        title: "Instant Rewards.",
        description: "Unlock nearby flash discounts right as you step into the neighborhood.",
      },
      {
        tag: "For Business?",
        title: "Hyperlocal Reach.",
        description: "Connect directly with customers already in walking distance.",
      },
      {
        tag: "Mobile Business?",
        title: "Live Location Broadcast.",
        description: "Broadcast your pop-up or food truck to nearby customers in real-time.",
      },
    ],
  },
  updates: {
    lines: [
      "What’s Happening Around",
      "You Is Always Changing.",
      "Your Map Should Change Too.",
    ],
    subheading: "Businesses Can Make Updates",
    subtext:
      "When a merchant makes an update, that update can become visible immediately.",
    pills: [
      "Current Promotions",
      "Current Offers",
      "Business Information",
      "Changing Locations",
      "Time-Sensitive Activity",
      "What's Available Now",
    ],
    calloutLead: "CHANGE IT. PUBLISH IT.",
    calloutLive: "IT’S LIVE.",
    calloutBody:
      "No waiting for another ad campaign. No depending on someone seeing yesterday’s post.",
    footer:
      "Niro lets businesses communicate with people who are physically positioned to act.",
  },
  offer: {
    line1: "Change Your Offer.",
    line2: "Change Your Map Presence.",
    p1: "Businesses don’t operate on a fixed schedule. Inventory changes. Traffic changes. Demand changes. Sometimes a business wants to create activity right now.",
    p2: "A merchant should be able to change a promotion or offer, publish it, and have that updated promotion appear LIVE on the Niro map.",
    cards: [
      { tag: "Slow Afternoon?", title: "Create an Offer" },
      { tag: "Extra Inventory?", title: "Promote It" },
      { tag: "Lunch Rush Starting?", title: "Update Your Promotion" },
      { tag: "Last-minute Opening?", title: "Let Nearby Consumers Know" },
      { tag: "Special Event Tonight?", title: "Put It on the Map" },
    ],
    closing:
      "Your promotion doesn’t have to wait for tomorrow. It can be live while the opportunity still matters.",
    button: "Promote Your Business on Niro",
  },
  people: {
    lines: [
      "Don’t Just Search for",
      "Businesses.",
      "See What’s Happening",
      "Around You.",
    ],
    intro:
      "Niro gives people ready to shop a visual way to explore nearby businesses, products, promotions and current activity through a Live Map.",
    instead: "Instead of only asking:",
    insteadQuote: "“What’s near me?”",
    niro: "Niro helps answer:",
    niroQuote: "“What’s happening near me right now?”",
    items: [
      "Explore Nearby Businesses",
      "See Current Promotions",
      "Discover Products and Offers",
      "Find Places You Didn't Know Were There",
      "See When Businesses Update What They are Offering",
    ],
    closing: "Niro turns the city around you into something you can explore and act on.",
    button: "Explore Niro",
  },
  business: {
    line1: "Don’t Just Get Listed.",
    line2: "Go LIVE on the Map.",
    intro:
      "Traditional listings tell customers that your business exists. Niro lets businesses actively control what nearby consumers see.",
    items: [
      "Update Your Business",
      "Change a Promotion",
      "Highlight an Offer",
      "Move Locations",
      "Publish the Change",
    ],
    closing:
      "Your Niro presence can immediately reflect what is happening with your business.",
    button: "Promote Your Business on Niro",
  },
  truck: {
    line1: "New Location?",
    line2: "Go LIVE on the Map Again.",
    p1: "Food trucks are one of the best examples of why Niro is different. A food truck might serve lunch downtown, move to a brewery later, then move again for an evening event.",
    p2: "When the business changes locations, it should be able to update its location in Niro and make that new location LIVE on the map immediately.",
    steps: ["Move", "Update", "Go Live", "Get Discovered"],
    boxTitle: "A Food Truck Can Also Update",
    left: ["Today's special", "Current menu promotion", "Current location"],
    right: ["Limited-time offers", "Operating hours", "Next stop timing"],
    closing:
      "Your address changed. Your customers shouldn’t have to guess where you went. New location. New nearby audience. Same Niro presence.",
    button: "Promote Your Business on Niro",
  },
  how: {
    title: "Niro is a Live Map.",
    subtitle1: "Other maps show you where. Niro shows you what’s happening now.",
    subtitle2: "Join consumers and merchants experiencing the city in real time.",
    cards: [
      "Business Changes",
      "Merchant Updates Niro",
      "The Update Goes LIVE\non the Map",
      "Nearby Consumers\nDiscover It",
    ],
    taglineLead: "CHANGE IT. PUBLISH IT.",
    taglineLive: "IT’S LIVE.",
  },
  inquiry: {
    title: "Promote your business on Niro",
    subtitle: "Share a few details and the NIRO team will follow up about getting your business on the platform.",
    businessName: "Business name",
    contactName: "Contact name",
    email: "Email",
    phone: "Phone number",
    category: "Business category",
    city: "City / location",
    message: "Short message or interest in joining NIRO",
    optional: "Optional",
    submit: "Submit",
    sending: "Sending...",
    close: "Close",
    success:
      "Thank you. The NIRO team will contact you about getting your business on the platform.",
    errors: {
      businessName: "Enter your business name.",
      contactName: "Enter a contact name.",
      email: "Enter a valid email address.",
      phone: "Enter a valid phone number.",
      send: "We couldn’t send this right now. Please try again.",
    },
  },
  footer: {
    address: "18th Street NewYork, USA",
    copyright: "© Copyright 2026 Niro. All Rights Reserved.",
    terms: "Terms & Conditions",
    privacy: "Privacy Policy",
  },
};

const es: typeof en = {
  nav: [
    { name: "Por qué Niro", href: "#why-niro" },
    { name: "Mapa en vivo", href: "#live-map" },
    { name: "Promociones", href: "#promotions" },
    { name: "Para personas", href: "#for-people" },
    { name: "Para negocios", href: "#for-business" },
    { name: "Negocio móvil", href: "#mobile-business" },
  ],
  languages: [
    { code: "en", label: "English", short: "EN" },
    { code: "es", label: "Spanish", short: "ES" },
  ],
  hero: {
    badge: "Mapa hiperlocal en vivo",
    line1: "Mira lo que está pasando",
    line2: "a tu alrededor ahora mismo.",
  },
  map: {
    line1: "Un mapa que cambia con lo que",
    line2: "está pasando a tu alrededor.",
    muted: "Otros mapas muestran dónde está un negocio.",
    highlight: "NIRO te muestra lo que está pasando allí ahora mismo.",
    slides: [
      {
        tag: "¿Nueva promoción?",
        title: "Actualiza Niro.",
        description: "Lanza promociones instantáneas sin pagar anuncios costosos.",
      },
      {
        tag: "¿Actividad en vivo?",
        title: "Mira el nivel de gente.",
        description: "Tráfico y ambiente en tiempo real en tus lugares locales favoritos.",
      },
      {
        tag: "¿Ofertas exclusivas?",
        title: "Recompensas al instante.",
        description: "Desbloquea descuentos cercanos justo cuando entras al barrio.",
      },
      {
        tag: "¿Para negocios?",
        title: "Alcance hiperlocal.",
        description: "Conecta con clientes que ya están a poca distancia.",
      },
      {
        tag: "¿Negocio móvil?",
        title: "Ubicación en vivo.",
        description: "Anuncia tu puesto o food truck a los clientes cercanos al momento.",
      },
    ],
  },
  updates: {
    lines: [
      "Lo que pasa a tu alrededor",
      "siempre está cambiando.",
      "Tu mapa también debería cambiar.",
    ],
    subheading: "Los negocios pueden actualizar",
    subtext:
      "Cuando un comercio hace un cambio, esa actualización puede verse de inmediato.",
    pills: [
      "Promociones actuales",
      "Ofertas actuales",
      "Datos del negocio",
      "Cambio de ubicación",
      "Actividad por tiempo",
      "Disponible ahora",
    ],
    calloutLead: "CÁMBIALO. PUBLÍCALO.",
    calloutLive: "ESTÁ EN VIVO.",
    calloutBody:
      "Sin esperar otra campaña. Sin depender de que alguien vea la publicación de ayer.",
    footer:
      "Niro permite que los negocios hablen con personas que están cerca y listas para actuar.",
  },
  offer: {
    line1: "Cambia tu oferta.",
    line2: "Cambia tu presencia en el mapa.",
    p1: "Los negocios no funcionan con un horario fijo. Cambia el inventario. Cambia el tráfico. Cambia la demanda. A veces un negocio quiere generar actividad ahora mismo.",
    p2: "Un comercio debe poder cambiar una promoción u oferta, publicarla y ver esa promoción actualizada EN VIVO en el mapa de Niro.",
    cards: [
      { tag: "¿Tarde lenta?", title: "Crea una oferta" },
      { tag: "¿Inventario extra?", title: "Promociónalo" },
      { tag: "¿Empieza la hora pico?", title: "Actualiza tu promoción" },
      { tag: "¿Cupo de último minuto?", title: "Avísale a quien está cerca" },
      { tag: "¿Evento especial esta noche?", title: "Ponlo en el mapa" },
    ],
    closing:
      "Tu promoción no tiene que esperar hasta mañana. Puede estar en vivo mientras la oportunidad todavía importa.",
    button: "Promociona tu negocio en Niro",
  },
  people: {
    lines: [
      "No solo busques",
      "negocios.",
      "Mira lo que está pasando",
      "a tu alrededor.",
    ],
    intro:
      "Niro ofrece a quien quiere comprar una forma visual de explorar negocios, productos, promociones y actividad actual cercana en un mapa en vivo.",
    instead: "En lugar de preguntar solo:",
    insteadQuote: "“¿Qué hay cerca de mí?”",
    niro: "Niro ayuda a responder:",
    niroQuote: "“¿Qué está pasando cerca de mí ahora mismo?”",
    items: [
      "Explora negocios cercanos",
      "Mira promociones actuales",
      "Descubre productos y ofertas",
      "Encuentra lugares que no sabías que estaban ahí",
      "Ve cuándo los negocios actualizan lo que ofrecen",
    ],
    closing: "Niro convierte la ciudad a tu alrededor en algo que puedes explorar y usar.",
    button: "Explorar Niro",
  },
  business: {
    line1: "No te limites a aparecer.",
    line2: "Ponte EN VIVO en el mapa.",
    intro:
      "Los listados tradicionales dicen que tu negocio existe. Niro permite que los negocios controlen lo que ven los consumidores cercanos.",
    items: [
      "Actualiza tu negocio",
      "Cambia una promoción",
      "Destaca una oferta",
      "Cambia de ubicación",
      "Publica el cambio",
    ],
    closing:
      "Tu presencia en Niro puede reflejar de inmediato lo que está pasando en tu negocio.",
    button: "Promociona tu negocio en Niro",
  },
  truck: {
    line1: "¿Nueva ubicación?",
    line2: "Vuelve a ponerte EN VIVO en el mapa.",
    p1: "Los food trucks son uno de los mejores ejemplos de por qué Niro es diferente. Un food truck puede servir el almuerzo en el centro, ir después a una cervecería y moverse otra vez para un evento nocturno.",
    p2: "Cuando el negocio cambia de lugar, debe poder actualizar su ubicación en Niro y hacer que esa nueva ubicación esté EN VIVO en el mapa de inmediato.",
    steps: ["Mover", "Actualizar", "En vivo", "Ser descubierto"],
    boxTitle: "Un food truck también puede actualizar",
    left: ["El especial de hoy", "La promoción del menú", "La ubicación actual"],
    right: ["Ofertas por tiempo limitado", "Horario de atención", "La hora de la próxima parada"],
    closing:
      "Tu dirección cambió. Tus clientes no deberían adivinar a dónde fuiste. Nueva ubicación. Nuevo público cercano. La misma presencia en Niro.",
    button: "Promociona tu negocio en Niro",
  },
  how: {
    title: "Niro es un mapa en vivo.",
    subtitle1: "Otros mapas muestran dónde. Niro muestra lo que está pasando ahora.",
    subtitle2: "Únete a consumidores y comercios que viven la ciudad en tiempo real.",
    cards: [
      "El negocio cambia",
      "El comercio actualiza Niro",
      "La actualización queda EN VIVO\nen el mapa",
      "Los consumidores cercanos\nla descubren",
    ],
    taglineLead: "CÁMBIALO. PUBLÍCALO.",
    taglineLive: "ESTÁ EN VIVO.",
  },
  inquiry: {
    title: "Promociona tu negocio en Niro",
    subtitle: "Comparte algunos datos y el equipo de NIRO te contactará para sumar tu negocio a la plataforma.",
    businessName: "Nombre del negocio",
    contactName: "Nombre de contacto",
    email: "Correo",
    phone: "Teléfono",
    category: "Categoría del negocio",
    city: "Ciudad / ubicación",
    message: "Mensaje breve o interés en unirte a NIRO",
    optional: "Opcional",
    submit: "Enviar",
    sending: "Enviando...",
    close: "Cerrar",
    success:
      "Gracias. El equipo de NIRO te contactará para sumar tu negocio a la plataforma.",
    errors: {
      businessName: "Escribe el nombre del negocio.",
      contactName: "Escribe un nombre de contacto.",
      email: "Escribe un correo válido.",
      phone: "Escribe un teléfono válido.",
      send: "No pudimos enviar esto ahora. Inténtalo de nuevo.",
    },
  },
  footer: {
    address: "18th Street, Nueva York, EE. UU.",
    copyright: "© Copyright 2026 Niro. Todos los derechos reservados.",
    terms: "Términos y condiciones",
    privacy: "Política de privacidad",
  },
};

export const messages = { en, es };
