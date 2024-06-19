import { PRODUCT_URL, UPLOAD_IMAGE_URL } from "../constants";
import { Product } from "../types/product";
import { apiSlice } from "./apiSlice";

export const productSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query<Product[], void>({
      query: () => ({
        url: PRODUCT_URL,
      }),
      keepUnusedDataFor: 10,
      providesTags: [{ type: "Product", id: "LIST" }],
    }),
    getProductById: builder.query<Product, string | undefined>({
      query: (productId) => ({
        url: `${PRODUCT_URL}/${productId}`,
      }),
      providesTags: (result, error, id) => [{ type: "Product", id }],
    }),
    deleteProduct: builder.mutation<void, string>({
      query: (productId) => ({
        url: `${PRODUCT_URL}/${productId}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, id) => [{ type: "Product", id }],
    }),
    createProduct: builder.mutation<Product, void>({
      query: () => ({
        url: `${PRODUCT_URL}`,
        method: "POST",
      }),
      invalidatesTags: [{ type: "Product", id: "LIST" }],
    }),
    updateProduct: builder.mutation<
      Product,
      { id: string; changes: Partial<Product> }
    >({
      query: ({ id, changes }) => ({
        url: `${PRODUCT_URL}/${id}`,
        method: "PUT",
        body: changes,
      }),
      invalidatesTags: (result, error, { id }) => [
        { type: "Product", id },
        { type: "Product", id: "LIST" },
      ],
    }),
    uploadProductImage: builder.mutation<
      { message: string; imagePath: string },
      { formData: FormData; productId: string }
    >({
      query: ({ formData, productId }) => ({
        url: UPLOAD_IMAGE_URL + "/" + productId,
        body: formData,
        method: "POST",
      }),
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductByIdQuery,
  useDeleteProductMutation,
  useCreateProductMutation,
  useUpdateProductMutation,
  useUploadProductImageMutation,
} = productSlice;
