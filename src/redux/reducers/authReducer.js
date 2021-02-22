import { SET_USER_DATA } from "../types";

const initialState = {
  id: null,
  email: null,
  login: null,
  IS_FETCHING: false,
  isAuth: false
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state, ...action.data, isAuth: true
      }
    default:
      return state;
  }
}

export default authReducer;

// actions
export const setUserData = (id, email, login) => ({
  type: SET_USER_DATA,
  data: {
    id,
    email,
    login
  }
});

