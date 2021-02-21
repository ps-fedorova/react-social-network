import { ADD_POST, UPDATE_NEW_POST_TEXT, SET_USER_PROFILE } from "../types";

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
    // {
    //   message: "Холодная война"
    // },
    // {
    //   message: "И время как вода"
    // },
    // {
    //   message: "Он не сошел с ума"
    // },
    // {
    //   message: "Ты ничего не знала"
    // },
  ],
  NEW_POST_TEXT: "",
  PROFILE: null
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
    default:
      return state;
  }
}

export default profileReducer;

export const updateNewPostText = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});

export const addPost = () => ({ type: ADD_POST });

export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile
})
