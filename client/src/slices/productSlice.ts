import { PRODUCT_URL } from "../constants";
import { Product } from "../types/product";
import { apiSlice } from "./apiSlice";

export const productSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query<Product[], void>({
      query: () => ({
        url: PRODUCT_URL,
      }),
      keepUnusedDataFor: 10,
    }),
    getProductById: builder.query<Product, string|undefined>({
      query: (productId) => {
        return { url: `${PRODUCT_URL}/${productId}` };
      },
    }),
  }),
});

export const { useGetProductsQuery,useGetProductByIdQuery } = productSlice;
