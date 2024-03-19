import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../shared/types';

export const sortingOptions = {
  popularityDesc: { name: 'popularityDesc', text: 'Most Popular' },
  popularityAsc: { name: 'popularityAsc', text: 'Least Popular' },
  priceDesc: { name: 'priceDesc', text: 'Most Expensive' },
  priceAsc: { name: 'priceAsc', text: 'Least Expensive' },
};

const initialState = {
  currentSorting: sortingOptions.popularityDesc.name,
};

const sortBySlice = createSlice({
  name: 'sortBy',
  initialState,
  reducers: {
    changeSorting(state, action) {
      state.currentSorting = action.payload;
    },
  },
});

export const { changeSorting } = sortBySlice.actions;
export default sortBySlice.reducer;

export const selectCurrentSorting = (state: RootState) => state.sortBy.currentSorting;
