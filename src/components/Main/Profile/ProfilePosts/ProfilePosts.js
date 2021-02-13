import React from 'react';
import ProfilePost from './ProfilePost/ProfilePost'
import s from './ProfilePosts.module.css'

const ProfilePosts = (props) => {
  const { profile, updateNewPostText, addPost } = props;

  const newPostElement = React.createRef();

  const onChangeNewPostText = () => {
    const text = newPostElement.current.value;
    updateNewPostText(text)
  }

  const onAddPost = (evt) => {
    evt.preventDefault();
    addPost();
  }

  return (
    <>
      <h2>My posts</h2>
      <div>
        <form className={`list ${s.profilePosts__form}`}>
          <label className={`label ${s.profilePosts__label}`} htmlFor="post">
            <input ref={newPostElement} className={`input ${s.profilePosts__input}`} id="post"
                   value={profile.NEW_POST_TEXT}
                   onChange={onChangeNewPostText}/>
          </label>
          <button onClick={onAddPost} className={`button post__item ${s.profilePosts__button}`}>add</button>
        </form>
      </div>
      <ul className="list">
        {profile.ARR_POSTS.map((item, index) => {
          return (
            <li key={index} className="post__item">
              <ProfilePost item={item.message}/>
            </li>
          )
        })
        }
      </ul>
    </>
  )
}

export default ProfilePosts
