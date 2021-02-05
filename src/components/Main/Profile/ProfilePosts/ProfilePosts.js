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
      <ul className="list">
        {ARR__POSTS.map((item, index) => {
          return (
            <li className="post__item">
              <ProfilePost key={index} item={item}/>
            </li>
          )
        })
        }
      </ul>
    </>
  )
}

export default ProfilePosts
