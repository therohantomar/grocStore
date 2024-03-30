import { useEffect, useState } from "react";
import { ProductType } from "../_types";

export const useGetProducts = () => {
  const [Products, setProducts] = useState<ProductType[]>([]);
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://groc-store.vercel.app/products");
        const data = (await response.json()) as ProductType[];
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setError(true);
      }
    };
    fetchProducts();
  }, []);

  return { loading, error, Products };
};
