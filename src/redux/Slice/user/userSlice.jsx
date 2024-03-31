import { baseUrl } from "../../../BaseURl/BaseUrl";

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RegisterUserApi } from "../../../components/SignUP/api/RegisterUserApi";
import { LoginUserApi } from "../../../components/Login/api/LoginUserApi";

const baseQuery = fetchBaseQuery({ baseUrl: baseUrl });

export const userSlice = createApi({
  reducerPath: "userApi",
  baseQuery,
  tagTypes: ["User"],
  endpoints: (builder) => ({
    RegisterUser: builder.mutation({
      query: RegisterUserApi,
      invalidatesTags: ["User"],
    }),
    LoginUser: builder.mutation({
      query: LoginUserApi,
      invalidatesTags: ["User"],
    }),
    // Add more endpoints as needed
  }),
});

export const { useRegisterUserMutation, useLoginUserMutation } = userSlice;
