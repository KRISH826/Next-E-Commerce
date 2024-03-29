/** @format */

export interface simplifiedProduct {
  _id: string;
  image: string;
  price: number;
  slug: string;
  shortdescription: string;
  category: string;
  name: string;
}

export interface fullProduct {
  _id: string;
  images: any;
  price: number;
  slug: string;
  categoryName: string;
  name: string;
  description: string;
  price_id: string;
}

export interface categoryProduct {
  _id: string;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  slug: string;
  categoryName: string;
}
