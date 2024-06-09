import { apiSlice } from "./apiSlice";
import { USER_URL } from "../constants";


interface LoginData{
  email:string,
  password:string
} 
interface RegisterData extends LoginData{
  name:string
} 

const userApiSLice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data:LoginData) => ({
        url: `${USER_URL}/login`,
        method: "POST",
        body: data,
      }),
    }),
    logout: builder.mutation({
      query: (arg:void) => ({ url: `${USER_URL}/logout` }),
    }),
    register: builder.mutation({
      query: (data:RegisterData) => ({
        url: `${USER_URL}/register`,
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation, useLogoutMutation } =
  userApiSLice;
