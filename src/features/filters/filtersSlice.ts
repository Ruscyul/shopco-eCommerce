import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../shared/types';

const initialState: RootState['filters'] = {
  price: { min: 0, max: 1000 },
  minRating: 0,
  categories: [],
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    testAction() {
      console.log('works');
    },
  },
});

export const { testAction } = filtersSlice.actions;
export default filtersSlice.reducer;

export const selectAllFilters = (state: RootState) => state.filters;
