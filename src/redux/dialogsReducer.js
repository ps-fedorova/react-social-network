const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE = "UPDATE-NEW-POST-MESSAGE";

const dialogsReducer = (state, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE:
      state.NEW_MESSAGE_TEXT = action.newText;
      return state;
    case ADD_MESSAGE:
      let newMessage = state.NEW_MESSAGE_TEXT;
      state.ARR__MESSAGES.push(newMessage);
      state.NEW_MESSAGE_TEXT = '';
      return state;
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
