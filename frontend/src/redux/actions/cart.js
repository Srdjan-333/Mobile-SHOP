// Dodaj u korpu
export const addToCart = (data) => async (dispatch, getState) => {
  dispatch({
    type: 'addToCart',
    payload: data,
  });

  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cart));
  return data;
};

// Ukloniti iz korpe
export const removeFromCart = (data) => async (dispatch, getState) => {
  dispatch({
    type: 'removeFromCart',
    payload: data.id,
  });
  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cart));
  return data;
};
