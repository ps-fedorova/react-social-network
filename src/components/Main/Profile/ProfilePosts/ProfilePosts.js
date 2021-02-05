import React from 'react';
import ProfilePost from './ProfilePost/ProfilePost'
import s from './ProfilePosts.module.css'

const ARR__POSTS = [
  "Большие города",
  "Пустые поезда",
  "Ни берега, ни дна",
  "Все начинать сначала",
  "Холодная война",
  "И время как вода",
  "Он не сошел с ума",
  "Ты ничего не знала",
];


const ProfilePosts = () => {

  return (
    <>
      <h2>My posts</h2>
      <div>
        <form className={`list ${s.profilePosts__form}`}>
          <label className={`${ s.profilePosts__label }`} htmlFor="post">
            <input className={s.profilePosts__input} id="post"/>
          </label>
          <button className={`button post__item ${s.profilePosts__button}`}>add</button>
        </form>
      </div>
      <ul className="list">
        {ARR__POSTS.map((item, index) => {
          return (
            <li key={index} className="post__item">
              <ProfilePost item={item}/>
            </li>
          )
        })
        }
      </ul>
    </>
  )
}

export default ProfilePosts
