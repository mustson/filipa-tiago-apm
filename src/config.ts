export const design = {
  colors: {
    // primary: 'orange-500',  // Cor anterior (laranja)
    // primary: 'teal-400',    // Cor anterior (azul turquesa claro)
    // primary: 'cyan-700',    // Cor anterior (azul escuro)
    primary: 'red-600',      // Vermelho como solicitado
    primaryHover: 'red-700', // Vermelho mais escuro no hover
    secondary: 'blue-600',   // Azul como solicitado
    secondaryHover: 'blue-700',
    text: 'slate-800',
    textLight: 'slate-600',
    background: '[#EAEAEA]',
    cardBackground: 'white',
    accent: 'yellow-500',    // Amarelo como solicitado
    highlight: 'blue-600',   // Azul para destaques e links
    headingColor: '#111827',
  },
  heroGradients: {
    mobile: 'from-red-600/0 via-blue-600/40 to-red-600/0',
    desktop: 'from-red-600/0 via-blue-600/40 to-transparent',
  },
  logo: {
    desktop: {
      height: 'h-20',
    },
    mobile: {
      height: 'h-16', // 60% of h-28 (approximately)
    }
  },
  fonts: {
    title: '"Playfair Display", serif',
    heading: '"Playfair Display", serif',
    body: 'Inter, sans-serif',
  },
  headings: {
    fontFamily: 'Inter, sans-serif',
    // Tamanhos responsivos para mobile first
    fontSize: {
      base: '2.5rem',    // 40px no mobile
      sm: '3rem',       // 48px em telas pequenas
      md: '3.5rem',     // 56px em telas médias
      lg: '3.5rem',     // 56px em telas grandes
      xl: '3.8rem',     // 60px em telas extra grandes
      '2xl': '4rem'     // 64px em telas 2xl
    },
    lineHeight: '1',
    fontWeight: '300',
    letterSpacing: '-0.05em',
    color: '#111827',
    // Classes prontas para uso direto nos componentes
    classes: {
      // Título principal (Hero)
      hero: 'text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-light tracking-tighter',
      // Headings padrão
      //h1: 'text-5xl md:text-5xl lg:text-6xl font-light tracking-tighter',
      //h2: 'text-4xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-6xl font-light tracking-tighter',
      //h3: 'text-2xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-5xl font-light tracking-tight',

      h1: 'text-7xl md:text-9xl font-light tracking-tighter',
      h2: 'text-6xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-8xl font-light tracking-tighter',
      h3: 'text-6xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-8xl font-light tracking-tight'
    }
  },
  buttons: {
    primary: {
      text: "Saber mais via WhatsApp",
      bg: 'bg-red-600',
      hover: 'hover:bg-red-700',
      textColor: 'text-white',
      fontWeight: 'font-normal'  // Removendo negrito
    },
    secondary: {
      text: "Enviar um Email",
      bg: 'bg-blue-600',
      hover: 'hover:bg-blue-700',
      textColor: 'text-white'
    },
    whatsapp: {
      text: "Iniciar no WhatsApp",
      bg: 'bg-red-600',
      hover: 'hover:bg-red-700',
      textColor: 'text-white',
      fontWeight: 'font-normal'  // Removendo negrito
    }
  }
};

export const siteConfig = {
  name: "Viagens em Família",
  tagline: "by Filipa & Tiago",
  fullTitle: "Viagens em Família by Filipa & Tiago",
  description: "Viagens personalizadas e autênticas, desenhadas por Filipa & Tiago, os seus especialistas em destinos.",
  keywords: "viagens personalizadas, roteiros autênticos, Filipa & Tiago, Viagens em Família, travel designers",
  author: "Filipa & Tiago",
  meta: {
    title: "Viagens em Família by Filipa & Tiago | Roteiros Autênticos",
    description: "Viagens personalizadas e autênticas, desenhadas por Filipa & Tiago, os seus especialistas em destinos.",
    twitterHandle: "@filipaetiago",
    twitterCard: "summary_large_image",
    ogType: "website",
    ogImage: "/branding/riviera_maia.avif"
  },
  sections: {
    hero: {
      titleStart: "Viagens ",
      titleHighlight: "personalizadas e autênticas",
      titleEnd: " criadas por quem vive para viajar.",
      description: "Fuja do óbvio com viagens personalizadas que transformam. O seu próximo destino começa aqui."
    },
    about: {
      title: "Parceiros nas suas viagens",
      description: "Trabalhamos com os seus sonhos, não em vez deles."
    },
    packages: {
      title: "Viagens Desenhadas para Si",
      description: "Cada itinerário é uma promessa de autenticidade e conforto. Explore as nossas coleções e encontre a sua próxima grande história."
    },
    contact: {
      title: "Vamos Planear a Sua Próxima Aventura",
      description: "Estamos aqui para transformar as suas ideias em realidade. Entre em contacto para começarmos a desenhar uma experiência de viagem inesquecível."
    }
  }
};

export const agentConfig = {
  firstName: "Filipa & Tiago",
  fullName: "Filipa & Tiago",
  email: "filipa.tiago@viagensemfamilia.com",
  whatsapp: "+351912345678",
  consultationFormUrl: "https://www.icligo.com/forms/contact-us/become-a-consultant?utm_source=pRs2kAaQ&utm_campaign=registration",
  twitterHandle: "@viagensemfamilia",
  instagramHandle: "@filipa_tiago_apm",
  facebookHandle: "/filipa.tiago.viagensemfamilia",
  linkedinHandle: "/company/viagensemfamilia",
  heroImageUrl: "https://plus.unsplash.com/premium_photo-1707030602987-8ca280726bdb?q=80&w=3271&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
};
