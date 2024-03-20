import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../shared/types';

const initialState = {
  productList: [
    { id: 1, count: 1 },
    { id: 2, count: 2 },
  ],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const { id } = action.payload;
      const existingProductIndex = state.productList.findIndex((product) => product.id === id);
      if (existingProductIndex !== -1) {
        state.productList[existingProductIndex].count++;
      } else {
        state.productList.push({ id, count: 1 });
      }
    },
    deleteFromCart(state, action) {
      const { id } = action.payload;
      state.productList = state.productList.filter((product) => product.id !== id);
    },
    incrementCount(state, action) {
      const { id } = action.payload;
      const index = state.productList.findIndex((product) => product.id === id);
      if (state.productList[index].count >= 0) {
        state.productList[index].count++;
      }
    },
    decrementCount(state, action) {
      const { id } = action.payload;
      const index = state.productList.findIndex((product) => product.id === id);
      if (state.productList[index].count > 0) {
        state.productList[index].count--;
      }
    },
  },
});

export const { addToCart, deleteFromCart, incrementCount, decrementCount } = cartSlice.actions;
export default cartSlice.reducer;

export const selectCartProductsId = (state: RootState) => state.cart.productList;
