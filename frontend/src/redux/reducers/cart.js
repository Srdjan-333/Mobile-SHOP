import { createReducer } from '@reduxjs/toolkit';

// Početno stanje za korpu
const initialState = {
  cart: localStorage.getItem('cartItems')
    ? JSON.parse(localStorage.getItem('cartItems'))
    : [], // Ako postoje podaci u lokalnom skladištu, koristimo ih kao početnu vrednost, inače postavljamo prazan niz
};

// Reducer za upravljanje akcijama
export const cartReducer = createReducer(initialState, (builder) => {
  builder
    // Dodajte stavku u korpu
    .addCase('addToCart', (state, action) => {
      const item = action.payload;
      const isItemExist = state.cart.find((i) => i.id === item.id);
      if (isItemExist) {
        state.cart = state.cart.map((i) =>
          i.id === isItemExist.id ? item : i
        );
      } else {
        state.cart = [...state.cart, item];
      }
    })
    // Uklonite stavku iz korpe
    .addCase('removeFromCart', (state, action) => {
      state.cart = state.cart.filter((i) => i.id !== action.payload);
    });
});
