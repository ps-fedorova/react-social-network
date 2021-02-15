import React from 'react';
import { ADD_POST_actionCreator, UPDATE_NEW_POST_actionCreator } from "../../../../redux/reducers/profileReducer";
import ProfilePosts from "./ProfilePosts";
import { StoreContext } from "../../../../StoreContext";

const ProfilePostsContainer = () => {

  const store = React.useContext(StoreContext)

  const state = store.getState()

  const
  updateNewPostText = (text) => {
    const action = UPDATE_NEW_POST_actionCreator(text)
    store.dispatch(action); // знание о сторе мы вынесли в контейнерную компоненту
  }

  const addPost = () => {
    const action = ADD_POST_actionCreator()
    store.dispatch(action);
  }

  return <ProfilePosts
    updateNewPostText={updateNewPostText}
    addPost={addPost}
    profile={state.profile}
  />
}

export default ProfilePostsContainer
