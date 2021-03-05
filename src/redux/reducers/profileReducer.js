import { ADD_POST, UPDATE_NEW_POST_TEXT, SET_USER_PROFILE, SET_STATUS } from "../types";
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
  NEW_POST_TEXT: "",
  PROFILE: null,
  STATUS: "",
};

// Первый экшин диспачится при загрузке страницы (это логика из коробки redux).
// Если state не определен, то редьюсер profileReducer возвращает undefined во время инициализации, а это ошибка

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_POST_TEXT:
      return {
        ...state,
        NEW_POST_TEXT: action.newText
      }
    case ADD_POST:
      return {
        ...state,
        // ARR_POSTS: [...state.ARR_POSTS, { message: state.NEW_POST_TEXT }],
        ARR_POSTS: [...state.ARR_POSTS, { message: { ...state }.NEW_POST_TEXT }],
        NEW_POST_TEXT: "",
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
export const updateNewPostText = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text, });

export const addPost = () => ({ type: ADD_POST });

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
