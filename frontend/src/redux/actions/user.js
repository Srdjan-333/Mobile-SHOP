import axios from 'axios';

// Učitavanje korisnika
export const loadUser = () => async (dispatch) => {
  try {
    dispatch({
      type: 'LoadUserRequest',
    });
    const { data } = await axios.get(
      'https://zavrsni-rad-mobile-shop-backend.onrender.com/api/v2/user/getuser',
      {
        withCredentials: true,
      }
    );
    dispatch({
      type: 'LoadUserSuccess',
      payload: data.user,
    });
  } catch (error) {
    dispatch({
      type: 'LoadUserFail',
      payload: error.response.data.message,
    });
  }
};
