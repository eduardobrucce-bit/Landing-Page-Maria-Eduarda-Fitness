export const SITE_CONFIG = {
  specialistName: 'Maria Eduarda',
  whatsappUrl: 'https://wa.me/5519993858834?text=Ol%C3%A1%20Maria%20Eduarda%2C%20quero%20conhecer%20a%20consultoria.',
  ebookUrl: 'https://wa.me/5519993858834?text=Ol%C3%A1%20Maria%20Eduarda%2C%20quero%20pedir%20o%20e-book%20de%20receitas%20f%C3%A1ceis%20e%20saud%C3%A1veis.',
  instagramUrl: 'https://www.instagram.com/dudecaaaa/',
  students: '120',
  experience: '04',
  photos: {
    hero: '/maria-eduarda-hero.jpg',
    about: '/maria-eduarda-flex.jpg',
    ebook: '/ebook-cover.jpg',
  },
  brandLogo: '/giga-kitty-wordmark.png',
  plans: [
    {
      name: 'Bronze',
      price: 'R$ 49,90',
      image: '/plano-bronze.jpg',
      color: 'bronze',
      summary: 'Para começar com direção e constância.',
      features: ['Ficha de treinos', 'Acesso ao aplicativo', 'Renovação da ficha a cada 2 meses', 'Acesso aos grupos Bronze e Prata'],
    },
    {
      name: 'Prata',
      price: 'R$ 99,90',
      image: '/plano-prata.jpg',
      color: 'silver',
      summary: 'Mais personalização para acelerar sua evolução.',
      features: ['Ficha de treinos personalizada', 'Acompanhamento pessoal a cada 15 dias', 'Dicas personalizadas', 'Acesso ao aplicativo', 'Renovação da ficha a cada 2 meses', 'Acesso aos grupos Bronze e Prata'],
    },
    {
      name: 'Ouro',
      price: 'R$ 149,90',
      image: '/plano-ouro.jpg',
      color: 'gold',
      summary: 'A experiência completa para quem quer acompanhamento próximo.',
      features: ['Ficha de treino personalizada', 'Acesso ao aplicativo', 'Renovação da ficha a cada 2 meses', 'Acesso ao grupo Ouro', 'Acompanhamento pessoal diário', 'Desafios e premiações mensais', 'E-book de receitas fitness'],
    },
  ],
  results: [
    { image: '/result-01.jpg', label: 'Evolução de uma cliente', alt: 'Montagem com fotos de evolução corporal de uma cliente' },
    { image: '/result-02.jpg', label: 'Evolução · vista lateral', alt: 'Foto lateral de evolução corporal de uma cliente' },
    { image: '/result-03.jpg', label: 'Evolução · mesma cliente', alt: 'Segunda foto lateral de evolução corporal da mesma cliente' },
    { image: '/result-04.jpg', label: 'Evolução e confiança', alt: 'Montagem com fotos de uma cliente antes e depois da consultoria' },
  ],
  testimonials: [
    { name: 'Marina', text: 'Eu precisava de uma direção que coubesse na minha rotina. O acompanhamento deixou tudo mais claro e possível de manter.', image: '/testimonial-01.jpeg' },
    { name: 'Camila', text: 'O suporte fez muita diferença para eu não desistir no caminho. Me senti acompanhada e mais confiante a cada etapa.', image: '/testimonial-02.jpeg' },
    { name: 'Larissa', text: 'Aprendi a organizar meus treinos sem complicar. Hoje tenho mais constância e consigo entender melhor o meu processo.', image: '/testimonial-03.jpeg' },
    { name: 'Cliente 04', text: '[Relato adicional autorizado sobre a experiência na consultoria.]', image: '/testimonial-01.jpeg' },
    { name: 'Cliente 05', text: '[Relato adicional autorizado sobre a experiência na consultoria.]', image: '/testimonial-02.jpeg' },
    { name: 'Cliente 06', text: '[Relato adicional autorizado sobre a experiência na consultoria.]', image: '/testimonial-03.jpeg' },
  ],
} as const;

export const benefits = [
  'Atendimento personalizado', 'Orientação individual', 'Acompanhamento pelo WhatsApp',
  'Estratégia de treino', 'Direcionamento para sua rotina', 'Acompanhamento da evolução',
  'Ajustes quando necessário', 'Suporte durante o processo',
];