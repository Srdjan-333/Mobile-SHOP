import { createReducer } from '@reduxjs/toolkit';

const wishlistInitialState = {
  wishlist: localStorage.getItem('wishlistItems')
    ? JSON.parse(localStorage.getItem('wishlistItems'))
    : [],
};

export const wishlistReducer = createReducer(
  wishlistInitialState,
  (builder) => {
    builder
      .addCase('addToWishlist', (state, action) => {
        const item = action.payload;
        const isItemExist = state.wishlist.find((i) => i.id === item.id);
        if (isItemExist) {
          // Ako je stavka već prisutna u popisu želja, ažuriraj je
          state.wishlist = state.wishlist.map((i) =>
            i.id === isItemExist.id ? item : i
          );
        } else {
          // Ako stavka nije prisutna u popisu želja, dodaj je
          state.wishlist = [...state.wishlist, item];
        }
      })
      .addCase('removeFromWishlist', (state, action) => {
        // Ukloni stavku iz popisa želja na osnovu ID-a
        state.wishlist = state.wishlist.filter((i) => i.id !== action.payload);
      });
  }
);
