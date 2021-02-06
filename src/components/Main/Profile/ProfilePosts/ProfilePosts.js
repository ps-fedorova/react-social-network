import React from 'react';
import ProfilePost from './ProfilePost/ProfilePost'
import s from './ProfilePosts.module.css'

const ProfilePosts = (props) => {
  const { ARR__POSTS, addPost } = props;

  const newPostElement = React.createRef();

  const addPostLocal = (evt) => {
    evt.preventDefault();
    addPost(newPostElement.current.value);
    newPostElement.current.value = '';
  }

  return (
    <>
      <h2>My posts</h2>
      <div>
        <form className={`list ${s.profilePosts__form}`}>
          <label className={`${s.profilePosts__label}`} htmlFor="post">
            <input ref={newPostElement} className={s.profilePosts__input} id="post"/>
          </label>
          <button onClick={addPostLocal} className={`button post__item ${s.profilePosts__button}`}>add</button>
        </form>
      </div>
      <ul className="list">
        {ARR__POSTS.map((item, index) => {
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
