import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Product } from '../types';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fakestoreapi.com',
  }),
  endpoints: (builder) => ({
    getProducts: builder.query<Product[], void>({
      query: () => '/products',
    }),
    getProductsByCategory: builder.query({
      query: (category) => `/products/category/${category}`,
    }),
  }),
});

export const { useGetProductsQuery, useGetProductsByCategoryQuery } = apiSlice;
