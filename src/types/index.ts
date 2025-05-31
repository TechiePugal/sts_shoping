export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  imageUrl: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  company?: string;
  inquiryType: string;
  message: string;
}