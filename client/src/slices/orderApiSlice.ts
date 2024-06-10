import { ORDER_URL } from "../constants";
import { apiSlice } from "./apiSlice";
import { CartState } from "./cartSlice";

const orderApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getOrders: builder.query({
      query: (data: string) => ({
        url: `${ORDER_URL}/${data}`,
      }),
      transformResponse: (response: any) => {
        // Handle specific error format if needed
        if (response.error) {
          throw new Error(response.error.message);
        }
        return response;
      },
    }),
    createOrder: builder.mutation({
      query: (data: CartState) => ({
        url: ORDER_URL,
        method: "POST",
        body: data,
      }),
      transformResponse: (response: any) => {
        // Handle specific error format if needed
        if (response.error) {
          throw new Error(response.error.message);
        }
        return response;
      },
    }),
    getOrderById: builder.query({
      query: (orderId: string) => ({
        url: `${ORDER_URL}/${orderId}`,
      }),
      transformResponse: (response: any) => {
        // Handle specific error format if needed
        if (response.error) {
          throw new Error(response.error.message);
        }
        return response;
      },
    }),
  }),
});

export const {
  useGetOrdersQuery,
  useGetOrderByIdQuery,
  useCreateOrderMutation,
} = orderApiSlice;

export default orderApiSlice.reducer;
