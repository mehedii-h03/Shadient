import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "bseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://shadient-server.vercel.app" }),
  tagTypes: ["supplies"],
  endpoints: (builder) => ({
    getSupplies: builder.query({
      query: () => "/supplies",
      providesTags: ["supplies"],
    }),
    getGallery: builder.query({
      query: () => "/gallery",
    }),
    getSupply: builder.query({
      query: (id) => `/supplies/${id}`,
    }),
    updateSupply: builder.mutation({
      query: (options) => ({
        url: `/supplies/${options.id}`,
        method: "PUT",
        body: options.data,
      }),
      invalidatesTags: ["supplies"],
    }),
    deleteSupply: builder.mutation({
      query: (id) => ({
        url: `/delete/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["supplies"],
    }),
    addSupply: builder.mutation({
      query: (supplyInfo) => ({
        url: "/create-supply",
        method: "POST",
        body: supplyInfo,
      }),
      invalidatesTags: ["supplies"],
    }),
  }),
});

export const {
  useGetSuppliesQuery,
  useGetSupplyQuery,
  useUpdateSupplyMutation,
  useDeleteSupplyMutation,
  useAddSupplyMutation,
  useGetGalleryQuery,
} = baseApi;
