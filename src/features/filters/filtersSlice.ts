import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../shared/types';
import { CATEGORIES } from '../../shared/const';

const initialState: RootState['filters'] = {
  price: { min: 0, max: 700 },
  minRating: 1,
  categories: [CATEGORIES.jewelery, CATEGORIES.menClothing, CATEGORIES.womenClothing],
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    updateFilters(state, action) {
      return { ...state, ...action.payload };
    },
    resetFilters() {
      return initialState;
    },
  },
});

export const { updateFilters, resetFilters } = filtersSlice.actions;
export default filtersSlice.reducer;

export const selectAllFilters = (state: RootState) => state.filters;
