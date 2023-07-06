import { configureStore } from '@reduxjs/toolkit';
import { cartReducer } from './reducers/cart';
import { wishlistReducer } from './reducers/wishlist';
import { orderReducer } from './reducers/order';
import { userReducer } from './reducers/user';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    wishlist: wishlistReducer,
    order: orderReducer,
    user: userReducer,
  },
});

export default store;
