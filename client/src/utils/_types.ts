export interface ProductType {
  _id: string;
  p_id: string;
  p_name: string;
  p_category: string;
  p_description: {
    short: string;
    health_benefits: string;
    storage_tips: string;
  };
  p_image: string;
  p_price: number;
  quantity: number;
  priceId:string;
  rating: number;
  reviews: number;
}
