import { apiSlice } from "./apiSlice";
import { USER_URL } from "../constants";
import { User } from "../types/user";

interface LoginData {
  email: string;
  password: string;
}
interface RegisterData extends LoginData {
  name: string;
}

const userApiSLice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data: LoginData) => ({
        url: `${USER_URL}/login`,
        method: "POST",
        body: data,
      }),
    }),
    logout: builder.mutation({
      query: (arg: void) => ({ url: `${USER_URL}/logout` }),
    }),
    register: builder.mutation({
      query: (data: RegisterData) => ({
        url: `${USER_URL}/register`,
        method: "POST",
        body: data,
      }),
    }),
    profile: builder.mutation<User, Partial<User>>({
      query: (data) => ({
        url: `${USER_URL}/profile`,
        method: "PUT",
        body: data,
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useLogoutMutation,
  useProfileMutation,
} = userApiSLice;
