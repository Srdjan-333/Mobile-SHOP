import { createReducer } from '@reduxjs/toolkit';

const orderInitialState = {
  isLoading: true,
};

export const orderReducer = createReducer(orderInitialState, (builder) => {
  builder
    // Dobijanje svih porudžbina od prodavnice
    .addCase('getAllOrdersShopRequest', (state) => {
      state.isLoading = true;
    })
    .addCase('getAllOrdersShopSuccess', (state, action) => {
      state.isLoading = false;
      state.orders = action.payload;
    })
    .addCase('getAllOrdersShopFailed', (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
});
