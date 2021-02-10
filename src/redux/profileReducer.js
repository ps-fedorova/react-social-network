const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const profileReducer = (state, action) => {
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
