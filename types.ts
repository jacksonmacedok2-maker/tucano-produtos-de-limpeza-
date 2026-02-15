
// Adicionado import do React para resolver o erro de namespace na linha 24
import React from 'react';

export interface Product {
  id: number;
  name: string;
  category: string;
  description: string;
  image: string;
  isBestSeller?: boolean;
  attributes?: string[];
  volume?: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  avatar: string;
}

export interface Benefit {
  id: number;
  title: string;
  icon: React.ReactNode;
}