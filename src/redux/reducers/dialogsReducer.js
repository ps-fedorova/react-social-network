import { ADD_MESSAGE, UPDATE_NEW_MESSAGE } from "../types";

const initialState = {
  ARR__NAME: ["Лиза", "Лена", "Света", "Даша", "Саша"],
  ARR__MESSAGES: ["Полковнику никто", "Не пишет", "Полковника никто", "Не ждёт"],
  NEW_MESSAGE_TEXT: ""
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE: {
      const newState = { ...state }
      newState.NEW_MESSAGE_TEXT = action.newText;
      return newState;
    }
    case ADD_MESSAGE: {
      const newState = {...state}
      let newMessage = newState.NEW_MESSAGE_TEXT;
      newState.ARR__MESSAGES.push(newMessage);
      newState.NEW_MESSAGE_TEXT = '';
      return newState;
    }
    default:
      return state;
  }
}

export default dialogsReducer;

export const ADD_MESSAGE_actionCreator = () => ({ type: ADD_MESSAGE });
export const UPDATE_NEW_MESSAGE_actionCreator = (text) => (
  {
    type: UPDATE_NEW_MESSAGE,
    newText: text,
  }
)
