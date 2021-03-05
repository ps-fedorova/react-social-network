import { ADD_POST, SET_USER_PROFILE, SET_STATUS } from "../types";
import { profileAPI } from "../../API/API";

const initialState = {
  ARR_POSTS: [
    {
      message: "Большие города"
    },
    {
      message: "Пустые поезда"
    },
    {
      message: "Ни берега, ни дна"
    },
    {
      message: "Все начинать сначала"
    },
  ],
  PROFILE: null,
  STATUS: "",
};

// Первый экшин диспачится при загрузке страницы (это логика из коробки redux).
// Если state не определен, то редьюсер profileReducer возвращает undefined во время инициализации, а это ошибка

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state, ARR_POSTS: [{ message: action.postMessage }, ...state.ARR_POSTS],
      }
    case SET_USER_PROFILE:
      return { ...state, PROFILE: action.profile }
    case SET_STATUS:
      return { ...state, STATUS: action.status }
    default:
      return state;
  }
}

export default profileReducer;

// actions

export const addPost = (postMessage) => ({ type: ADD_POST, postMessage });

const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
const setUserStatus = (status) => ({ type: SET_STATUS, status });


// thunks
export const getProfileThunkCreator = (id) => {
  return (dispatch) => {
    profileAPI.getProfile(id).then(data => {
      dispatch(setUserProfile(data));
      console.log("юзер!");
    }).catch(() => console.log("юзер не пришел =(("))
  }
}

export const getUserStatus = (id) => {
  return (dispatch) => {
    profileAPI.getStatus(id).then(data => {
      dispatch(setUserStatus(data));
      console.log("статус!");
    }).catch(() => console.log("статус не пришел =(("))
  }
}

export const putUserStatus = (status) => {
  return (dispatch) => {
    profileAPI.updateStatus(status).then(() => {
      dispatch(setUserStatus(status));
      console.log("статус обновился!");
    }).catch(() => console.log("статус не обновился =(("))
  }
}
