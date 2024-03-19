import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from '../shared/api/apiSlice';
import filtersReducer from '../features/filters/filtersSlice';
import sortByReducer from '../features/sort-by/sortBySlice';

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    filters: filtersReducer,
    sortBy: sortByReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
});
