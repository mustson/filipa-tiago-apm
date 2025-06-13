export const design = {
  colors: {
    // primary: 'orange-500',  // Cor anterior (laranja)
    // primary: 'teal-400',    // Cor anterior (azul turquesa claro)
    primary: 'cyan-700',      // Azul mais escuro para melhor contraste
    primaryHover: 'cyan-800', // Azul mais escuro no hover
    secondary: 'slate-800',
    secondaryHover: 'slate-900',
    text: 'slate-800',
    textLight: 'slate-600',
    background: '[#EAEAEA]',
    cardBackground: 'white',
    accent: 'teal-400',
    highlight: 'cyan-700',    // Cor para destaques e links
    headingColor: '#111827',
  },
  fonts: {
    title: 'Inter, sans-serif',
    body: 'Inter, sans-serif',
  },
  headings: {
    fontFamily: 'Inter, sans-serif',
    // Tamanhos responsivos para mobile first
    fontSize: {
      base: '2.5rem',    // 40px no mobile
      sm: '3rem',       // 48px em telas pequenas
      md: '4rem',       // 64px em telas médias
      lg: '5rem',       // 80px em telas grandes
      xl: '6rem',       // 96px em telas extra grandes
      '2xl': '7rem'     // 112px em telas 2xl
    },
    lineHeight: '1',
    fontWeight: '300',
    letterSpacing: '-0.05em',
    color: '#111827',
    // Classes prontas para uso direto nos componentes
    classes: {
      // Título principal (Hero)
      hero: 'text-6xl md:text-7xl font-light tracking-tighter',
      // Headings padrão
      h1: 'text-7xl md:text-9xl font-light tracking-tighter',
      h2: 'text-7xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-light tracking-tighter',
      h3: 'text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-light tracking-tight'
    }
  },
  buttons: {
    primary: {
      text: "Saber mais via WhatsApp",
      bg: 'bg-cyan-700',
      hover: 'hover:bg-cyan-800',
      textColor: 'text-white',
      fontWeight: 'font-normal'  // Removendo negrito
    },
    secondary: {
      text: "Enviar um Email",
      bg: 'bg-slate-800',
      hover: 'hover:bg-slate-900',
      textColor: 'text-white'
    },
    whatsapp: {
      text: "Iniciar no WhatsApp",
      bg: 'bg-cyan-700',
      hover: 'hover:bg-cyan-800',
      textColor: 'text-white',
      fontWeight: 'font-normal'  // Removendo negrito
    }
  }
};

export const siteConfig = {
  name: "NomadWise",
  tagline: "by Hugo Ramos",
  fullTitle: "NomadWise by Hugo Ramos",
  description: "Viagens personalizadas e autênticas, desenhadas por Hugo Ramos, o seu especialista em destinos.",
  keywords: "viagens personalizadas, roteiros autênticos, Hugo Ramos, NomadWise, travel designer",
  sections: {
    hero: {
      title: "Roteiros autênticos,",
      subtitle: "criados por quem vive para viajar.",
      description: "Fuja do óbvio com viagens personalizadas que transformam. O seu próximo destino começa aqui."
    },
    about: {
      title: "Um parceiro nas suas viagens",
      description: "Trabalhamos com os seus sonhos, não em vez deles."
    },
    packages: {
      title: "Viagens Desenhadas para Si",
      description: "Cada itinerário é uma promessa de autenticidade e conforto. Explore as nossas coleções e encontre a sua próxima grande história."
    },
    contact: {
      title: "Vamos Planear a Sua Próxima Aventura",
      description: "Estou aqui para transformar as suas ideias em realidade. Entre em contacto para começarmos a desenhar uma experiência de viagem inesquecível."
    }
  }
};

export const agentConfig = {
  firstName: "Hugo",
  fullName: "Hugo Ramos",
  email: "hugo@nomadwise.com",
  whatsapp: "+351912345678",
  consultationFormUrl: "https://www.icligo.com/forms/contact-us/become-a-consultant?utm_source=pRs2kAaQ&utm_campaign=registration",
  twitterHandle: "@nomadwise",
  instagramHandle: "@hugoramos_nomadwise/",
  facebookHandle: "/nomadwise.travel",
  linkedinHandle: "/company/nomadwise",
  heroImageUrl: "https://plus.unsplash.com/premium_photo-1707030602987-8ca280726bdb?q=80&w=3271&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
};
