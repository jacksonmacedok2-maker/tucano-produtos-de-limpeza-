import React from 'react';
import { Product, Testimonial, Benefit } from './types';
import { 
  Sparkles, 
  Wind, 
  ShieldCheck, 
  TrendingDown, 
  Clock, 
  Award, 
  Zap, 
  Droplets,
  Heart,
  Leaf,
  ShieldAlert,
  HandCoins
} from 'lucide-react';

export const LOGO_URL = "https://lh3.googleusercontent.com/d/1K7Ub3ZOe3_8YPuQXCLRU5PFbEvckASZO";
export const WA_ICON_URL = "https://lh3.googleusercontent.com/d/1ZbR2A36mB5bMceX6V3wNrN2vzQhhPTot";
export const INSTA_ICON_URL = "https://lh3.googleusercontent.com/d/137PFkOlpVR1I4MfpqTN5aS7bPx9Px6rx";

export const CONTACT_INFO = {
  whatsapp: "557588078221",
  whatsappDisplay: "(75) 8807-8221",
  instagram: "https://www.instagram.com/produtostucano/",
  instagramDisplay: "@produtostucano",
  waMessage: "Olá! Quero saber mais sobre os produtos Tucano.",
  email: "jacksonmacedok2@gmail.com",
  formspreeId: "mojndzbp" 
};

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Sabão em Pó Tucano Ativo",
    category: "Sabão em pó",
    description: "Tecnologia de limpeza profunda que remove manchas difíceis sem agredir as fibras do tecido.",
    image: "https://lh3.googleusercontent.com/d/1L_z9f_Uv-qQp5A-k6_N9u-GvXp-vG8zR",
    isBestSeller: true,
    volume: "800g",
    attributes: ["Perfume ativo", "Brancura total"]
  },
  {
    id: 2,
    name: "Detergente Neutro Premium",
    category: "Detergentes",
    description: "Máximo poder desengordurante com toque suave para as mãos. Brilho impecável em cada louça.",
    image: "https://images.unsplash.com/photo-1584622781564-1d9876a13d00?auto=format&fit=crop&q=80&w=400",
    isBestSeller: false,
    volume: "500ml",
    attributes: ["Alta espuma", "Dermatológico"]
  },
  {
    id: 3,
    name: "Amaciante Flores Silvestres",
    category: "Amaciantes",
    description: "Fragrância de longa duração com tecnologia de microcápsulas que liberam perfume ao toque.",
    image: "https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&q=80&w=400",
    isBestSeller: true,
    volume: "2L",
    attributes: ["Rende 40 lavagens", "Maciez extrema"]
  },
  {
    id: 4,
    name: "Multiuso Brilho Ativo",
    category: "Limpadores",
    description: "Limpeza prática e rápida para todas as superfícies. Secagem ultra rápida sem manchas.",
    image: "https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&q=80&w=400",
    isBestSeller: false,
    volume: "500ml",
    attributes: ["Ação 3 em 1", "Brilho natural"]
  },
  {
    id: 5,
    name: "Lava Roupas Líquido Coco",
    category: "Sabão Líquido",
    description: "Cuidado delicado para roupas íntimas, de bebê e tecidos finos. Limpeza eficiente com suavidade.",
    image: "https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?auto=format&fit=crop&q=80&w=400",
    isBestSeller: false,
    volume: "1L",
    attributes: ["Toque de coco", "pH Neutro"]
  },
  {
    id: 6,
    name: "Desinfetante Lavanda Pure",
    category: "Limpadores",
    description: "Poder bactericida comprovado que deixa um aroma relaxante e duradouro em toda a casa.",
    image: "https://images.unsplash.com/photo-1528740561666-dc2479da08ad?auto=format&fit=crop&q=80&w=400",
    isBestSeller: true,
    volume: "2L",
    attributes: ["Mata 99,9% dos germes", "Perfumação 24h"]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Mariana Silva",
    role: "Consumidora fiel",
    content: "O amaciante Tucano superou marcas internacionais que eu usava. O cheirinho nas roupas dura a semana toda!",
    avatar: "https://i.pravatar.cc/150?u=mariana"
  },
  {
    id: 2,
    name: "Ricardo Oliveira",
    role: "Lojista",
    content: "Tucano é o produto que mais tem giro na minha mercearia. O custo-benefício para o cliente é imbatível.",
    avatar: "https://i.pravatar.cc/150?u=ricardo"
  },
  {
    id: 3,
    name: "Ana Beatriz",
    role: "Organização Doméstica",
    content: "Como personal organizer, sempre indico o detergente e o multiuso Tucano pela eficácia e brilho que entregam.",
    avatar: "https://i.pravatar.cc/150?u=ana"
  }
];

export const BENEFITS: Benefit[] = [
  { id: 1, title: "Perfume Intenso", icon: <Wind className="w-8 h-8" /> },
  { id: 2, title: "Limpeza Pesada", icon: <Sparkles className="w-8 h-8" /> },
  { id: 3, title: "Economia Inteligente", icon: <TrendingDown className="w-8 h-8" /> },
  { id: 4, title: "Rendimento Superior", icon: <Zap className="w-8 h-8" /> },
  { id: 5, title: "Proteção das Fibras", icon: <ShieldCheck className="w-8 h-8" /> }
];

export const DIFFERENTIALS = [
  { 
    title: "Alta Tecnologia", 
    desc: "Laboratórios próprios focados em criar fórmulas que limpam mais com menos produto.",
    icon: <Droplets className="text-tucano-blue w-10 h-10" />
  },
  { 
    title: "Eco-Friendly", 
    desc: "Comprometimento com o meio ambiente através de ativos biodegradáveis e embalagens recicláveis.",
    icon: <Heart className="text-tucano-blue w-10 h-10" />
  },
  { 
    title: "Perfume Ativo", 
    desc: "Cápsulas que liberam fragrância conforme as roupas são utilizadas, mantendo o frescor por dias.",
    icon: <Wind className="text-tucano-blue w-10 h-10" />
  },
  { 
    title: "Tradição Brasileira", 
    desc: "Entendemos o gosto e a necessidade do brasileiro, entregando qualidade que cabe no bolso.",
    icon: <Award className="text-tucano-blue w-10 h-10" />
  }
];

export const FAQS = [
  {
    question: "Onde encontro os produtos Tucano?",
    answer: "Estamos presentes nos principais supermercados e atacados regionais. Você também pode solicitar via WhatsApp para encontrar o ponto de venda mais próximo de você."
  },
  {
    question: "Os produtos são testados em animais?",
    answer: "Não. A Tucano assume um compromisso ético e ambiental, sendo 100% livre de testes em animais em todos os processos de desenvolvimento."
  },
  {
    question: "Como posso me tornar um revendedor?",
    answer: "Temos condições especiais para lojistas e distribuidores. Basta entrar em contato através do nosso formulário ou diretamente pelo WhatsApp comercial."
  },
  {
    question: "A linha é segura para casas com pets e crianças?",
    answer: "Sim! Nossas fórmulas são dermatologicamente testadas e desenvolvidas para serem seguras quando utilizadas conforme as instruções do rótulo."
  }
];

export const TRUST_SEALS = [
  { icon: <Leaf className="w-5 h-5" />, label: "Biodegradável" },
  { icon: <ShieldAlert className="w-5 h-5" />, label: "Hipoalergênico" },
  { icon: <HandCoins className="w-5 h-5" />, label: "Economia Real" },
  { icon: <Award className="w-5 h-5" />, label: "Qualidade Premium" }
];