import axios from "axios";
import { Brands, Categories, Colors, Products, QueryParams } from "../types";
import { API_ENDPOINT } from "./constants";

const api = axios.create({
  baseURL: API_ENDPOINT,
});

export const getBrandList = async () => {
  const response = await api.get<Brands>("/brands");
  return response.data;
};

export const getColorList = async () => {
  const response = await api.get<Colors>("/colors");
  return response.data;
};

export const getCategoryList = async () => {
  const response = await api.get<Categories>("/categories");
  return response.data;
};

export const getProductList = async ({
  page,
  color,
  maxPrice,
  minPrice,
  brand,
  categoryId,
}: QueryParams) => {
  const response = await api.get<Products>("/products", {
    params: {
      page,
      maxPrice,
      minPrice,
      brand,
      color,
      categoryId,
    },
  });
  return response.data;
};
