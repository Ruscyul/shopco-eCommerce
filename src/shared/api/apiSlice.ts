import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ProductType } from '../types';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fakestoreapi.com',
  }),
  endpoints: (builder) => ({
    getProducts: builder.query<ProductType[], void>({
      query: () => '/products',
      transformResponse: (data: ProductType[]) => {
        return data.filter((item) => item.category !== 'electronics');
      },
    }),
    getProductsByCategory: builder.query({
      query: (category) => `/products/category/${category}`,
    }),
    getProductById: builder.query({
      query: (id) => `/products/${id}`,
    }),
  }),
});

export const { useGetProductsQuery, useGetProductsByCategoryQuery, useGetProductByIdQuery } = apiSlice;
