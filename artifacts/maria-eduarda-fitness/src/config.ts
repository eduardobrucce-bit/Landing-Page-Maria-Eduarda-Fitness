export const SITE_CONFIG = {
  specialistName: 'Maria Eduarda',
  whatsappUrl: 'https://wa.me/5500000000000?text=Ol%C3%A1%20Maria%20Eduarda%2C%20quero%20conhecer%20a%20consultoria.',
  ebookUrl: 'https://seu-link-do-ebook-aqui.com',
  instagramUrl: 'https://instagram.com/seu-instagram-aqui',
  ebookPrice: 'R$ 27,90',
  ebookOldPrice: 'R$ 47,90',
  students: '120',
  experience: '06',
  photos: {
    hero: '/maria-hero.png',
    about: '/maria-hero.png',
    ebook: '/ebook-food.png',
  },
  brandLogo: '/giga-kitty-logo.png',
  results: [
    { image: '/result-01.jpg', label: 'Evolução de uma cliente', alt: 'Montagem com fotos de evolução corporal de uma cliente' },
    { image: '/result-02.jpg', label: 'Evolução · vista lateral', alt: 'Foto lateral de evolução corporal de uma cliente' },
    { image: '/result-03.jpg', label: 'Evolução · mesma cliente', alt: 'Segunda foto lateral de evolução corporal da mesma cliente' },
    { image: '/result-04.jpg', label: 'Evolução e confiança', alt: 'Montagem com fotos de uma cliente antes e depois da consultoria' },
  ],
  testimonials: [
    { name: 'Marina', text: '[Relato real autorizado da Marina sobre a experiência na consultoria.]', image: '/result-01.jpg' },
    { name: 'Camila', text: '[Relato real autorizado da Camila sobre a experiência na consultoria.]', image: '/result-02.jpg' },
    { name: 'Juliana', text: '[Relato real autorizado da Juliana sobre a experiência na consultoria.]', image: '/result-04.jpg' },
    { name: 'Cliente 04', text: '[Relato real autorizado sobre a experiência na consultoria.]', image: '/result-03.jpg' },
    { name: 'Cliente 05', text: '[Relato real autorizado sobre a experiência na consultoria.]', image: '/result-01.jpg' },
    { name: 'Cliente 06', text: '[Relato real autorizado sobre a experiência na consultoria.]', image: '/result-04.jpg' },
  ],
} as const;

export const benefits = [
  'Atendimento personalizado', 'Orientação individual', 'Acompanhamento pelo WhatsApp',
  'Estratégia de treino', 'Direcionamento para sua rotina', 'Acompanhamento da evolução',
  'Ajustes quando necessário', 'Suporte durante o processo',
];