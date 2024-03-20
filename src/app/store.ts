import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from '../shared/api/apiSlice';
import filtersReducer from '../features/filters/filtersSlice';
import sortByReducer from '../features/sort-by/sortBySlice';
import cartReducer from '../features/cart/cartSlice';

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    filters: filtersReducer,
    sortBy: sortByReducer,
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
});
