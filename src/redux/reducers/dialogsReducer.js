import { ADD_MESSAGE } from "../types";

const initialState = {
  ARR__NAME: ["Лиза", "Лена", "Света", "Даша", "Саша"],
  ARR__MESSAGES: ["Полковнику никто", "Не пишет", "Полковника никто", "Не ждёт"],
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE: {
      return {
        ...state,
        ARR__MESSAGES: [...state.ARR__MESSAGES, action.newMessage],
      }
    }
    default:
      return state;
  }
}

export default dialogsReducer;
export const sent = (newMessage) => ({ type: ADD_MESSAGE, newMessage });
