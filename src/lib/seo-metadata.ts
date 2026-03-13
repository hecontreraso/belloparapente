export const SEO_METADATA = {
  "title": "Parapente en Medellín | Bello Parapente - Vuelos desde San Félix",
  "description": "Bello Parapente ofrece vuelos en parapente sobre Medellín desde el famoso despegue de San Félix, uno de los mejores lugares para volar en Colombia. Disfruta vistas espectaculares desde $220.000 COP. Reserva tu aventura ahora.",
  "keywords": "paragliding Medellin, paragliding San Felix, parapente Medellin, vuelos parapente, San Felix parapente, turismo aventura Medellin, parapente tandem Colombia",
  "url": "https://belloparapente.com",
  "image": "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/4c588455-6d57-4ca9-92ac-a7b40b22e8bc/id-preview-ce0f4048--ac08aee3-2a6b-4e12-81aa-9f988cdc9519.lovable.app-1773356703229.png",
  "businessInfo": {
    "name": "Bello Parapente",
    "phone": "+573203293577",
    "location": "San Félix, Bello, Antioquia, Colombia",
    "hours": "8:00 AM - 6:00 PM",
    "priceRange": "$220.000 - $400.000 COP"
  }
};

export const SECTIONS_DATA = [
  {
    "id": "hero",
    "title": "Vuela en Parapente Sobre Medellín",
    "content": "Experimenta la adrenalina de volar sobre una de las ciudades más hermosas de Colombia. Desde San Félix, disfruta vistas espectaculares del Valle de Aburrá."
  },
  {
    "id": "precios",
    "title": "Nuestros Vuelos",
    "content": "Ofrecemos dos opciones de vuelo: Vuelo Básico de 15 minutos por $220.000 COP y Vuelo Premium de 20 minutos con fotos y acrobacias por $400.000 COP."
  },
  {
    "id": "como-funciona",
    "title": "¿Cómo Funciona?",
    "content": "1. Reserva por WhatsApp, 2. Nos encontramos en San Félix, 3. Briefing de seguridad, 4. ¡Volamos!"
  },
  {
    "id": "ubicacion",
    "title": "Ubicación - San Félix",
    "content": "Volamos desde el famoso despegue de San Félix en Bello, Antioquia. Uno de los mejores sitios de vuelo en Colombia con condiciones ideales todo el año."
  }
];

export const generateMetaTags = (pageTitle?: string, pageDescription?: string) => {
  return {
    title: pageTitle || SEO_METADATA.title,
    description: pageDescription || SEO_METADATA.description,
    canonical: SEO_METADATA.url,
    openGraph: {
      title: pageTitle || SEO_METADATA.title,
      description: pageDescription || SEO_METADATA.description,
      url: SEO_METADATA.url,
      image: SEO_METADATA.image,
      type: 'website',
      siteName: SEO_METADATA.businessInfo.name,
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle || SEO_METADATA.title,
      description: pageDescription || SEO_METADATA.description,
      image: SEO_METADATA.image,
    }
  };
};
