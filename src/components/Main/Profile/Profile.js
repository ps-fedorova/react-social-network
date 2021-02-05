import React from 'react';
import forest from "../../../images/forest.jpg";
import s from "./Profile.module.css"
import ProfilePosts from "./ProfilePosts/ProfilePosts";
import IconAvatar from "../../../utils/ui-kit/IconAvatar/IconAvatar";

const Profile = () => {
  return (
    <div>
      <img className={s.profile__imgBg} src={forest} alt="forest"/>
      <div className={s.profile__content}>
        <p>description</p>
        <IconAvatar/>
        <ProfilePosts/>
      </div>
    </div>
  )
}

export default Profile;
