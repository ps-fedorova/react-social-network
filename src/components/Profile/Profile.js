import React from 'react';
import forest from "../../images/forest.jpg";
import avatar from "../../images/avatar.jpg";
import s from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
  return (
    <div className={s.profile}>
      <img className={s.profile__imgBg} src={forest} alt="forest"/>
      <p>description</p>
      <div>
        <img className={s.profile__imgAva} src={avatar} alt={avatar}/>
      </div>
      <MyPosts/>
    </div>
  )
}

export default Profile;
