// app/types.ts
export interface Product {
    id: string;
    name: string;
    price: number;
    description: string;
    image: string;
    discount?: string;
  }