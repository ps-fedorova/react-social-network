import { ADD_POST_actionCreator, UPDATE_NEW_POST_actionCreator } from "../../../../redux/reducers/profileReducer";
import ProfilePosts from "./ProfilePosts";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    profile: state.profile,
  }
}

const mapDispatchToProps = (dispatch) => {
  const updateNewPostText = (text) => {
    const action = UPDATE_NEW_POST_actionCreator(text)
    dispatch(action);
  }
  const addPost = () => {
    const action = ADD_POST_actionCreator()
    dispatch(action);
  }
  return {
    updateNewPostText: updateNewPostText,
    addPost: addPost
  }
}

const ProfilePostsContainer = connect(mapStateToProps, mapDispatchToProps)(ProfilePosts);
export default ProfilePostsContainer;
