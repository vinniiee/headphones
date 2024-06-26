export interface Product {
  _id: string;
  name: string;
  image: string;
  description: string;
  brand: string;
  category: string;
  price: number;
  countInStock: number;
  rating: number;
  numReviews: number;
  reviews:Review[]
}
export interface Review {
  _id?: string;
  name: string;
  rating: number;
  comment: string;
  createdAt:Date;
}
