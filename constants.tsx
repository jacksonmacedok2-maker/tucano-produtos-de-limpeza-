
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
  Heart
} from 'lucide-react';

// Formato lh3.googleusercontent.com/d/ID é mais estável para incorporação direta
export const LOGO_URL = "https://lh3.googleusercontent.com/d/1K7Ub3ZOe3_8YPuQXCLRU5PFbEvckASZO";
export const WA_ICON_URL = "https://lh3.googleusercontent.com/d/1ZbR2A36mB5bMceX6V3wNrN2vzQhhPTot";
export const INSTA_ICON_URL = "https://lh3.googleusercontent.com/d/137PFkOlpVR1I4MfpqTN5aS7bPx9Px6rx";

export const CONTACT_INFO = {
  whatsapp: "557588078221",
  whatsappDisplay: "(75) 8807-8221",
  instagram: "https://www.instagram.com/produtostucano/",
  instagramDisplay: "@produtostucano",
  waMessage: "Olá! Quero saber mais sobre os produtos Tucano.",
  email: "contato@tucanolimpeza.com.br"
};

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Sabão em Pó Tucano Ativo",
    category: "Sabão em pó",
    description: "Limpeza profunda e perfume duradouro para todas as suas roupas brancas e coloridas.",
    image: "https://lh3.googleusercontent.com/d/1L_z9f_Uv-qQp5A-k6_N9u-GvXp-vG8zR", // Placeholder real se disponível, senão o componente trata
    isBestSeller: true,
    volume: "800g",
    attributes: ["Perfume ativo", "Brancura total"]
  },
  {
    id: 2,
    name: "Detergente Neutro Plus",
    category: "Detergentes",
    description: "Máximo poder desengordurante com proteção para as mãos e brilho instantâneo.",
    image: "",
    isBestSeller: false,
    volume: "500ml",
    attributes: ["Desengordurante", "Glicerinado"]
  },
  {
    id: 3,
    name: "Amaciante Flores do Campo",
    category: "Amaciantes",
    description: "Roupas macias e perfumadas por muito mais tempo com fragrância premium exclusiva.",
    image: "",
    isBestSeller: true,
    volume: "2L",
    attributes: ["Perfume Premium", "Fácil passar"]
  },
  {
    id: 4,
    name: "Multiuso Brilho Instantâneo",
    category: "Limpadores",
    description: "Limpeza rápida e eficaz para todas as superfícies da sua casa sem esforço.",
    image: "",
    isBestSeller: false,
    volume: "500ml",
    attributes: ["Ação rápida", "Multisuperfície"]
  },
  {
    id: 5,
    name: "Lava Roupas Líquido Coco",
    category: "Sabão Líquido",
    description: "Cuidado delicado e proteção das fibras para roupas sensíveis e de bebê.",
    image: "",
    isBestSeller: false,
    volume: "1L",
    attributes: ["Toque de coco", "Hipoalergênico"]
  },
  {
    id: 6,
    name: "Desinfetante Lavanda",
    category: "Limpadores",
    description: "Elimina 99.9% dos germes e bactérias deixando um aroma refrescante de lavanda.",
    image: "",
    isBestSeller: true,
    volume: "2L",
    attributes: ["Mata germes", "Fragrância 24h"]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Mariana Silva",
    role: "Dona de Casa",
    content: "O perfume do amaciante Tucano dura dias no armário! Nunca vi nada igual, e o preço é maravilhoso.",
    avatar: "https://i.pravatar.cc/150?u=mariana"
  },
  {
    id: 2,
    name: "Ricardo Oliveira",
    role: "Pai de Família",
    content: "O sabão em pó realmente tira as manchas mais difíceis das roupas das crianças. Economia real para o mês.",
    avatar: "https://i.pravatar.cc/150?u=ricardo"
  },
  {
    id: 3,
    name: "Ana Beatriz",
    role: "Empresária",
    content: "Troquei as marcas famosas pela Tucano e não me arrependo. Qualidade superior e custo-benefício imbatível.",
    avatar: "https://i.pravatar.cc/150?u=ana"
  }
];

export const BENEFITS: Benefit[] = [
  { id: 1, title: "Perfume Duradouro", icon: <Wind className="w-8 h-8" /> },
  { id: 2, title: "Alto Poder de Limpeza", icon: <Sparkles className="w-8 h-8" /> },
  { id: 3, title: "Economia Real", icon: <TrendingDown className="w-8 h-8" /> },
  { id: 4, title: "Rende Muito Mais", icon: <Zap className="w-8 h-8" /> },
  { id: 5, title: "Seguro para as Cores", icon: <ShieldCheck className="w-8 h-8" /> }
];

export const DIFFERENTIALS = [
  { 
    title: "Tecnologia Avançada", 
    desc: "Fórmulas desenvolvidas com tecnologia de ponta para resultados profissionais.",
    icon: <Droplets className="text-tucano-blue w-10 h-10" />
  },
  { 
    title: "Perfume Ativo", 
    desc: "Cápsulas de perfume que se ativam com o movemento, prolongando o frescor.",
    icon: <Wind className="text-tucano-blue w-10 h-10" />
  },
  { 
    title: "Sustentabilidade", 
    desc: "Produtos biodegradáveis que respeitam o meio ambiente e sua família.",
    icon: <Heart className="text-tucano-blue w-10 h-10" />
  },
  { 
    title: "Qualidade Nacional", 
    desc: "Produzido com orgulho no Brasil, gerando empregos e valor para o país.",
    icon: <Award className="text-tucano-blue w-10 h-10" />
  }
];
