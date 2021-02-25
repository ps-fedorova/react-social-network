import { SET_USER_DATA } from "../types";
import { authAPI } from "../../API/API";

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
const setUserData = (id, email, login) => ({
  type: SET_USER_DATA,
  data: {
    id,
    email,
    login
  }
});

// thunks
export const getAuthTankCreator = () => (dispatch) => {
  return authAPI.getAuth()
    .then(data => {
        if (data.resultCode === 0) {
          const { id, email, login } = data.data
          dispatch(setUserData(id, email, login))
          console.log("authAPI работает")
        } else {
          console.log("authAPI не работает")
        }
      }
    )
    .catch(() => console.log("что-то пошло не так"))
}
