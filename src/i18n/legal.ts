export type LegalClause = { title: string; body: string };
export type LegalSection = { id: string; title: string; clauses: LegalClause[] };
export type LegalCopy = {
  kicker: string;
  title: string;
  intro: string;
  tocLabel: string;
  sections: LegalSection[];
};

export const termsCopy: { en: LegalCopy; es: LegalCopy } = {
  en: {
    kicker: "Legal",
    title: "Terms & Conditions",
    tocLabel: "Terms sections",
    intro:
      "Welcome to the Terms and Conditions for Niro, a location-based discovery platform. These comprehensive terms govern your access and use of the Niro service, whether you are a consumer user seeking local deals or a subscribing merchant listing promotions. By accessing, browsing, or using any part of the Niro platform, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions in their entirety.",
    sections: [
      {
        id: "nature-of-service",
        title: "Nature of Service",
        clauses: [
          {
            title: "Discovery Platform Definition",
            body: "Niro functions exclusively as a GPS-driven, location-based discovery platform. Its sole purpose is to facilitate meaningful engagement by connecting consumer users directly with local merchants through the sharing of location-relevant promotions and offers. The platform utilizes real-time location data, with user consent, to provide the most relevant local information.",
          },
          {
            title: "Limitation of Transactional Liability",
            body: "The Niro platform is strictly designed as an engagement and informational tool. At no point does Niro process or facilitate any financial transactions, including, but not limited to, payments, bookings, reservations, or checkouts. Niro is not a party to any agreement or transaction entered into between a user and a merchant.",
          },
          {
            title: "Offline Redemption Requirement",
            body: "All promotions, discounts, and offers listed on the Niro platform must be redeemed exclusively offline at the merchant’s physical location or via the merchant’s own separate, external transactional systems. Merchants are responsible for verifying and honoring all valid promotions presented by users.",
          },
        ],
      },
      {
        id: "user-accounts",
        title: "User Accounts & Access",
        clauses: [
          {
            title: "Registration and Credentials",
            body: "To utilize the core features of the Niro platform, users must complete a registration process which requires providing a valid, verifiable email address and a secure, unique password. Users are solely responsible for maintaining the confidentiality of their account credentials.",
          },
          {
            title: "Account Verification Process",
            body: "Account activation is mandatory and is completed through a two-factor verification method, either a One-Time Password (OTP) sent to the registered email or a unique verification link. Failure to complete verification will result in limited or prohibited access to the platform’s full functionality.",
          },
          {
            title: "Location Permissions and Data Usage",
            body: "Core discovery features, including the display and updating of localized promotions, are dependent upon the user granting continuous GPS permission. Promotions are dynamically updated and filtered based on the user’s real-time location within an established 30-mile operational radius. User location data is used solely for service delivery and according to the Privacy Policy.",
          },
          {
            title: "Permanent Account Deletion",
            body: "Users have the right to request and execute the permanent deletion of their account through the provided platform mechanism. Once initiated and confirmed, this process is final, irreversible, and results in the removal of all associated user data, subject to data retention policies for legal compliance.",
          },
        ],
      },
      {
        id: "merchant-terms",
        title: "Merchant & Subscription Terms",
        clauses: [
          {
            title: "Subscription Plan Requirements",
            body: "Merchants wishing to list and promote offers on the Niro platform must subscribe to an active, paid plan. Two tiers are available: the Basic Plan ($10/month) and the Premium Plan ($29/month). Each plan offers different levels of access and feature sets, as detailed in the separate Merchant Agreement.",
          },
          {
            title: "Promotion Content Accuracy and Responsibility",
            body: "Merchants bear full and exclusive responsibility for the accuracy, truthfulness, and validity of all promotion content, including all specified terms and conditions, start and end dates, and inventory availability. Niro is not responsible for any disputes arising from inaccurate or misrepresented merchant promotions.",
          },
          {
            title: "Pay-Per-Engagement (PPE) Boosting",
            body: "Merchants may opt-in to Pay-Per-Engagement (PPE) boosting services. This paid feature provides priority placement for their listed promotions, ensuring higher visibility in general search results and inclusion in automated email digests sent to relevant consumer users. PPE costs are calculated based on user interaction metrics.",
          },
        ],
      },
      {
        id: "ratings-reviews",
        title: "Ratings, Reviews & Moderation",
        clauses: [
          {
            title: "User Feedback Mechanism",
            body: "Niro provides users with the ability to offer feedback on merchants and promotions through a standard ratings system (1 to 5 stars) and descriptive written reviews. All feedback must be genuine and based on the user’s actual experience.",
          },
          {
            title: "Moderation Rights and Policies",
            body: "The Super Admin Panel retains the unqualified right to review, flag, and remove any content deemed inappropriate, offensive, misleading, or in violation of these Terms or community guidelines. This includes the removal of inappropriate promotions or flagged user reviews at the sole discretion of the platform administrator.",
          },
          {
            title: "Reporting Violations",
            body: "Users are encouraged to utilize the reporting function for promotions that are perceived as spam, misleading in their terms, inappropriate in content, or expired beyond their stated end date. All reports are investigated by the Moderation team.",
          },
        ],
      },
      {
        id: "external-links",
        title: "External Links & Communications",
        clauses: [
          {
            title: "Third-Party Link Disclaimer",
            body: "Merchant profiles may contain hyperlinks that direct users to external, third-party websites (e.g., merchant’s official website, booking page). Niro explicitly disclaims all responsibility and liability for the content, security, privacy practices, or accuracy of any information presented on external sites. Accessing third-party links is done at the user’s own risk.",
          },
          {
            title: "User Notification Options",
            body: "Users have the option to actively opt into various notification types. These include alerts for new, relevant promotions in their area, ‘watcher-only’ alerts related to specific promotions they are tracking, and essential admin announcements regarding platform service changes or updates. Users can manage these preferences within their account settings.",
          },
        ],
      },
    ],
  },
  es: {
    kicker: "Legal",
    title: "Términos y condiciones",
    tocLabel: "Secciones de los términos",
    intro:
      "Bienvenido a los Términos y condiciones de Niro, una plataforma de descubrimiento basada en la ubicación. Estos términos regulan tu acceso y uso del servicio de Niro, tanto si eres un usuario que busca ofertas locales como si eres un comercio suscrito que publica promociones. Al acceder, navegar o usar cualquier parte de la plataforma Niro, reconoces que has leído, entendido y aceptas quedar vinculado por estos Términos y condiciones en su totalidad.",
    sections: [
      {
        id: "nature-of-service",
        title: "Naturaleza del servicio",
        clauses: [
          {
            title: "Definición de la plataforma de descubrimiento",
            body: "Niro funciona exclusivamente como una plataforma de descubrimiento basada en la ubicación y guiada por GPS. Su único propósito es facilitar un contacto útil al conectar a los usuarios consumidores directamente con comercios locales mediante promociones y ofertas relevantes para su ubicación. La plataforma utiliza datos de ubicación en tiempo real, con el consentimiento del usuario, para ofrecer la información local más pertinente.",
          },
          {
            title: "Limitación de responsabilidad transaccional",
            body: "La plataforma Niro está diseñada estrictamente como una herramienta de información y de contacto. En ningún momento Niro procesa ni facilita transacciones financieras, incluidos, entre otros, pagos, reservas, reservaciones o cobros. Niro no es parte de ningún acuerdo o transacción celebrado entre un usuario y un comercio.",
          },
          {
            title: "Canje fuera de la plataforma",
            body: "Todas las promociones, descuentos y ofertas publicados en Niro deben canjearse exclusivamente fuera de la plataforma, en la ubicación física del comercio o a través de los sistemas transaccionales externos del propio comercio. Los comercios son responsables de verificar y honrar las promociones válidas que presenten los usuarios.",
          },
        ],
      },
      {
        id: "user-accounts",
        title: "Cuentas de usuario y acceso",
        clauses: [
          {
            title: "Registro y credenciales",
            body: "Para usar las funciones principales de Niro, los usuarios deben completar un registro que exige un correo electrónico válido y verificable y una contraseña segura y única. Los usuarios son los únicos responsables de mantener la confidencialidad de las credenciales de su cuenta.",
          },
          {
            title: "Proceso de verificación de la cuenta",
            body: "La activación de la cuenta es obligatoria y se completa mediante un método de verificación en dos pasos: una contraseña de un solo uso (OTP) enviada al correo registrado o un enlace de verificación único. Si no se completa la verificación, el acceso a todas las funciones de la plataforma quedará limitado o bloqueado.",
          },
          {
            title: "Permisos de ubicación y uso de datos",
            body: "Las funciones principales de descubrimiento, incluida la visualización y actualización de promociones locales, dependen de que el usuario conceda permiso continuo de GPS. Las promociones se actualizan y filtran según la ubicación en tiempo real del usuario dentro de un radio operativo de 30 millas. Los datos de ubicación se usan solo para prestar el servicio y conforme a la Política de privacidad.",
          },
          {
            title: "Eliminación permanente de la cuenta",
            body: "Los usuarios tienen derecho a solicitar y ejecutar la eliminación permanente de su cuenta mediante el mecanismo de la plataforma. Una vez iniciada y confirmada, esta acción es definitiva e irreversible y supone la eliminación de los datos asociados del usuario, sujeta a las políticas de conservación exigidas por la ley.",
          },
        ],
      },
      {
        id: "merchant-terms",
        title: "Términos para comercios y suscripciones",
        clauses: [
          {
            title: "Requisitos del plan de suscripción",
            body: "Los comercios que deseen publicar y promocionar ofertas en Niro deben suscribirse a un plan de pago activo. Hay dos niveles: el Plan Básico (10 USD al mes) y el Plan Premium (29 USD al mes). Cada plan ofrece distintos niveles de acceso y funciones, según se detalla en el Acuerdo para comercios.",
          },
          {
            title: "Exactitud y responsabilidad del contenido promocional",
            body: "Los comercios asumen la responsabilidad plena y exclusiva de la exactitud, veracidad y validez de todo el contenido promocional, incluidas las condiciones, las fechas de inicio y fin y la disponibilidad de inventario. Niro no es responsable de las disputas que surjan por promociones inexactas o presentadas de forma engañosa.",
          },
          {
            title: "Impulso de pago por interacción (PPE)",
            body: "Los comercios pueden activar el impulso de pago por interacción (PPE). Esta función de pago da prioridad a sus promociones, con mayor visibilidad en los resultados generales e inclusión en resúmenes automáticos por correo enviados a usuarios relevantes. El coste del PPE se calcula según las métricas de interacción.",
          },
        ],
      },
      {
        id: "ratings-reviews",
        title: "Valoraciones, reseñas y moderación",
        clauses: [
          {
            title: "Mecanismo de comentarios de los usuarios",
            body: "Niro permite a los usuarios opinar sobre comercios y promociones mediante un sistema de valoración de 1 a 5 estrellas y reseñas escritas. Todos los comentarios deben ser auténticos y basarse en la experiencia real del usuario.",
          },
          {
            title: "Derechos y políticas de moderación",
            body: "El panel de Super Admin conserva el derecho de revisar, marcar y eliminar cualquier contenido considerado inapropiado, ofensivo, engañoso o contrario a estos Términos o a las normas de la comunidad. Esto incluye retirar promociones inadecuadas o reseñas marcadas, a exclusiva discreción del administrador de la plataforma.",
          },
          {
            title: "Denuncia de infracciones",
            body: "Se anima a los usuarios a usar la función de denuncia cuando una promoción parezca spam, tenga condiciones engañosas, un contenido inapropiado o haya caducado después de su fecha de fin. El equipo de moderación investiga todas las denuncias.",
          },
        ],
      },
      {
        id: "external-links",
        title: "Enlaces externos y comunicaciones",
        clauses: [
          {
            title: "Aviso sobre enlaces de terceros",
            body: "Los perfiles de los comercios pueden incluir enlaces a sitios externos de terceros (por ejemplo, el sitio oficial del comercio o una página de reservas). Niro declina toda responsabilidad por el contenido, la seguridad, las prácticas de privacidad o la exactitud de la información de esos sitios. El acceso a enlaces de terceros es bajo el propio riesgo del usuario.",
          },
          {
            title: "Opciones de notificación",
            body: "Los usuarios pueden activar distintos tipos de avisos: alertas de promociones nuevas y relevantes en su zona, alertas solo de seguimiento de promociones concretas y avisos esenciales del administrador sobre cambios del servicio. Estas preferencias se gestionan en la configuración de la cuenta.",
          },
        ],
      },
    ],
  },
};

export const privacyCopy: { en: LegalCopy; es: LegalCopy } = {
  en: {
    kicker: "Legal",
    title: "Privacy Policy",
    tocLabel: "Privacy sections",
    intro:
      "This Privacy Policy describes how Niro (“we,” “us,” or “our”) collects, uses, shares, and protects information in connection with your use of the Niro mobile application and services. We are committed to protecting your privacy and ensuring you have a positive experience on our platform.",
    sections: [
      {
        id: "information-collection",
        title: "Information Collection",
        clauses: [
          {
            title: "Personal Data",
            body: "We collect essential personal identifiers, specifically email addresses and securely hashed passwords, which are required to establish and maintain a user account for both customer and merchant registration. This data is the foundation for platform access and service personalization.",
          },
          {
            title: "Social Login",
            body: "Users have the option to register or log in using third-party social services (e.g., Google or Apple). If you choose this convenience, Niro may collect data necessary to authenticate your identity from these services, adhering to their respective terms and privacy policies.",
          },
          {
            title: "Location Data",
            body: "To fulfill the core functionality of connecting users with nearby promotions and merchants, Niro requires and collects real-time GPS data. This data is essential for service delivery, including merchant ranking and displaying location-based services.",
          },
          {
            title: "Business Information",
            body: "For our merchant partners, we collect detailed business-specific data including registered business names, commercial categories, official contact details, physical store addresses, and brand logos. This information is utilized to create and verify merchant profiles on the Niro platform.",
          },
        ],
      },
      {
        id: "use-of-information",
        title: "Use of Information",
        clauses: [
          {
            title: "Service Delivery",
            body: "The primary use of collected location data is to personalize the user experience by accurately ranking merchants and displaying targeted, relevant promotions that are physically nearby the user’s current location.",
          },
          {
            title: "Watcher System and Loyalty Notifications",
            body: "When a user actively chooses to “Watch” a specific business, their engagement data is utilized by our system. This data is processed to trigger automated, loyalty-based notifications, alerting the user to new or relevant promotions from the watched business.",
          },
          {
            title: "Analytics and Performance Metrics",
            body: "We collect non-personal engagement data, including views, clicks, saves, and shares of promotions. This aggregated data is used to generate performance metrics, which are provided to merchants to help them optimize their campaigns and to platform administrators for system-wide service improvement.",
          },
        ],
      },
      {
        id: "information-sharing",
        title: "Information Sharing & Disclosure",
        clauses: [
          {
            title: "Merchant Analytics",
            body: "We share aggregated and anonymized analytical data with merchants. This includes metrics such as total number of watchers, user growth trends for their business, and general engagement metrics related to their promotions. This sharing is strictly limited to non-personally identifiable information.",
          },
          {
            title: "Protection of Personal Data",
            body: "Merchants specifically do not have access to user personal email addresses, passwords, or specific location history. We are committed to protecting user identity from merchant access.",
          },
          {
            title: "Admin Access for Support and Management",
            body: "Our authorized Super Admins are granted full access to platform-wide statistics for operational oversight and system management. They also have access to user support tickets, which may contain necessary personal or transaction details, exclusively for the purpose of resolving support and service issues.",
          },
        ],
      },
      {
        id: "user-controls",
        title: "User Controls & Preferences",
        clauses: [
          {
            title: "Customization of Preferences",
            body: "Users are provided with granular control over their experience. They can customize their profile to reflect preferred business categories, select specific promotion types they wish to see, and set their notification frequency (Immediate, Daily, Weekly, or Off) to manage the volume of communications received.",
          },
          {
            title: "Management of Saved Content",
            body: "Users maintain full control over their saved promotions. A dedicated section within the app allows users to manage, view, and organize their list of saved content at any time.",
          },
          {
            title: "Data Updates and Account Deletion",
            body: "Users can easily update their registration details, such as their email or password, within the application settings. Crucially, a permanent account deletion request is honored, which initiates the irreversible removal of all associated personal user data from the Niro platform.",
          },
        ],
      },
      {
        id: "security",
        title: "Security",
        clauses: [
          {
            title: "Robust Verification Procedures",
            body: "To ensure the integrity of our user base, we utilize One-Time Password (OTP) verification for both new customer sign-ups and merchant registration processes, adding an essential layer of identity confirmation.",
          },
          {
            title: "Super Admin Panel Security",
            body: "Access to the Super Admin Panel is secured with mandatory Two-Factor Authentication (2FA) and strictly enforced role-based access control (RBAC). These measures ensure that only authorized personnel can access sensitive platform data and functionality, minimizing the risk of unauthorized access.",
          },
        ],
      },
    ],
  },
  es: {
    kicker: "Legal",
    title: "Política de privacidad",
    tocLabel: "Secciones de privacidad",
    intro:
      "Esta Política de privacidad describe cómo Niro (“nosotros”) recopila, usa, comparte y protege la información relacionada con el uso de la aplicación móvil y los servicios de Niro. Nos comprometemos a proteger tu privacidad y a que tengas una experiencia positiva en la plataforma.",
    sections: [
      {
        id: "information-collection",
        title: "Recopilación de información",
        clauses: [
          {
            title: "Datos personales",
            body: "Recopilamos identificadores personales esenciales, en concreto direcciones de correo y contraseñas almacenadas de forma segura mediante hash, necesarios para crear y mantener una cuenta de cliente o de comercio. Estos datos son la base del acceso a la plataforma y de la personalización del servicio.",
          },
          {
            title: "Inicio de sesión social",
            body: "Los usuarios pueden registrarse o iniciar sesión con servicios sociales de terceros (por ejemplo, Google o Apple). Si eliges esta opción, Niro puede recibir de esos servicios los datos necesarios para autenticar tu identidad, conforme a sus propios términos y políticas de privacidad.",
          },
          {
            title: "Datos de ubicación",
            body: "Para conectar a los usuarios con promociones y comercios cercanos, Niro necesita y recopila datos de GPS en tiempo real. Esos datos son esenciales para prestar el servicio, incluido el orden de los comercios y la visualización de servicios según la ubicación.",
          },
          {
            title: "Información del negocio",
            body: "De nuestros comercios asociados recopilamos datos del negocio, como el nombre registrado, la categoría comercial, los datos de contacto oficiales, la dirección física y el logotipo. Esa información se usa para crear y verificar los perfiles de comercio en Niro.",
          },
        ],
      },
      {
        id: "use-of-information",
        title: "Uso de la información",
        clauses: [
          {
            title: "Prestación del servicio",
            body: "El uso principal de los datos de ubicación es personalizar la experiencia: ordenar con precisión los comercios y mostrar promociones relevantes que estén físicamente cerca de la ubicación actual del usuario.",
          },
          {
            title: "Sistema de seguimiento y avisos de fidelidad",
            body: "Cuando un usuario elige “Seguir” un negocio, el sistema utiliza sus datos de interacción para enviar avisos automáticos de fidelidad sobre promociones nuevas o relevantes de ese negocio.",
          },
          {
            title: "Analítica y métricas de rendimiento",
            body: "Recopilamos datos de interacción no personales, como vistas, clics, guardados y compartidos de promociones. Esos datos agregados generan métricas de rendimiento para que los comercios optimicen sus campañas y para mejorar el servicio en toda la plataforma.",
          },
        ],
      },
      {
        id: "information-sharing",
        title: "Intercambio y divulgación de información",
        clauses: [
          {
            title: "Analítica para comercios",
            body: "Compartimos con los comercios datos analíticos agregados y anonimizados, como el número total de seguidores, las tendencias de crecimiento y las métricas generales de interacción de sus promociones. Este intercambio se limita estrictamente a información que no identifica a una persona.",
          },
          {
            title: "Protección de los datos personales",
            body: "Los comercios no tienen acceso al correo personal, a las contraseñas ni al historial de ubicación concreto de los usuarios. Protegemos la identidad del usuario frente al acceso de los comercios.",
          },
          {
            title: "Acceso de administración para soporte y gestión",
            body: "Los Super Admin autorizados tienen acceso a las estadísticas de la plataforma para la supervisión operativa y la gestión del sistema. También pueden ver los tickets de soporte, que pueden incluir datos personales necesarios, únicamente para resolver incidencias del servicio.",
          },
        ],
      },
      {
        id: "user-controls",
        title: "Controles y preferencias del usuario",
        clauses: [
          {
            title: "Personalización de preferencias",
            body: "Los usuarios controlan su experiencia: pueden indicar categorías de negocio preferidas, elegir tipos de promoción y definir la frecuencia de avisos (inmediata, diaria, semanal o desactivada) para gestionar el volumen de comunicaciones.",
          },
          {
            title: "Gestión del contenido guardado",
            body: "Los usuarios mantienen el control de sus promociones guardadas. Una sección de la aplicación permite ver, organizar y gestionar esa lista en cualquier momento.",
          },
          {
            title: "Actualización de datos y eliminación de la cuenta",
            body: "Los usuarios pueden actualizar sus datos de registro, como el correo o la contraseña, en los ajustes. Una solicitud de eliminación permanente de la cuenta se atiende e inicia la eliminación irreversible de los datos personales asociados en Niro.",
          },
        ],
      },
      {
        id: "security",
        title: "Seguridad",
        clauses: [
          {
            title: "Procedimientos de verificación",
            body: "Para proteger la integridad de la base de usuarios, usamos verificación por contraseña de un solo uso (OTP) en el alta de clientes y en el registro de comercios, como capa adicional de confirmación de identidad.",
          },
          {
            title: "Seguridad del panel de Super Admin",
            body: "El acceso al panel de Super Admin exige autenticación de dos factores (2FA) y un control de acceso basado en roles (RBAC). Así solo el personal autorizado puede ver datos y funciones sensibles, y se reduce el riesgo de acceso no autorizado.",
          },
        ],
      },
    ],
  },
};
