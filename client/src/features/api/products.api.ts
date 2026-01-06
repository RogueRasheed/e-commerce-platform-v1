// api/products.api.ts
import { API_BASE_URL } from "../../config";
import { Product } from "../products/products.types";

export const fetchProducts = async (): Promise<Product[]> => {
  const res = await fetch(`${API_BASE_URL}/products`);
  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }
  return res.json();
};
