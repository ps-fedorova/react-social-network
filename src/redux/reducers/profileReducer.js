import { ADD_POST, UPDATE_NEW_POST_TEXT } from "../types";

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
  NEW_POST_TEXT: ""
};

// Первый экшин диспачится при загрузке страницы (это логика из коробки redux).
// Если state не определен, то редьюсер profileReducer возвращает undefined во время инициализации, а это ошибка

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_POST_TEXT:
      state.NEW_POST_TEXT = action.newText;
      return state;
    case ADD_POST:
      const newPost = { message: state.NEW_POST_TEXT }
      state.ARR_POSTS.push(newPost);
      state.NEW_POST_TEXT = '';
      return state;
    default:
      return state;
  }
}

export default profileReducer;


export const UPDATE_NEW_POST_actionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});
export const ADD_POST_actionCreator = () => ({ type: ADD_POST });
