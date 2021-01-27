import React from 'react';
import forest from "../../images/forest.jpg";
import avatar from "../../images/avatar.jpg";
import s from "./Profile.module.css"

const Profile = () => {
  return (
    <div className={s.profile}>
      <img className={s.profile__imgBg} src={forest} alt="forest"/>
      <p>description</p>
      <div>
        <img className={s.profile__imgAva} src={avatar} alt={avatar}/>
      </div>
      <div>My posts</div>
      <ul className="list">
        <li>post 1</li>
        <li>post 2</li>
        <li>post 3</li>
      </ul>
    </div>
  )
}

export default Profile;
