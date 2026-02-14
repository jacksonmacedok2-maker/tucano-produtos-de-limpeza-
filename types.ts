
export interface Product {
  id: number;
  name: string;
  category: string;
  description: string;
  image: string;
  isBestSeller?: boolean;
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
