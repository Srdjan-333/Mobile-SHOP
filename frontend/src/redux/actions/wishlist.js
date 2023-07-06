// Dodaj u listu želja
export const addToWishlist = (data) => async (dispatch, getState) => {
  dispatch({
    type: 'addToWishlist',
    payload: data,
  });

  localStorage.setItem(
    'wishlistItems',
    JSON.stringify(getState().wishlist.wishlist)
  );
  return data;
};

// Ukloni sa liste želja
export const removeFromWishlist = (data) => async (dispatch, getState) => {
  dispatch({
    type: 'removeFromWishlist',
    payload: data.id,
  });
  localStorage.setItem(
    'wishlistItems',
    JSON.stringify(getState().wishlist.wishlist)
  );
  return data;
};
