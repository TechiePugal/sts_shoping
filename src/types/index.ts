export interface Product {
  id?: string;
  name: string;
  category: string;
  description: string;
  features: string[];
  image: string;
}

export interface Service {
  id?: string;
  title: string;
  description: string;
  image: string;
}

export interface FAQ {
  id?: string;
  question: string;
  answer: string;
}

export interface ContactForm {
  name: string;
  email: string;
  phone: string;
  company?: string;
  message: string;
}

export interface SeoProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
}