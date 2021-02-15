import React from 'react';
// import forest from "../../../images/forest.jpg";
import s from "./Profile.module.css"
import ProfilePostsContainer from "./ProfilePosts/ProfilePostsContainer";
import IconAvatar from "../../../utils/ui-kit/IconAvatar/IconAvatar";

const Profile = () => {

  return (
    <div>
      {/*<img className={s.profile__imgBg} src={forest} alt="forest"/>*/}
      <div className={s.profile__content}>
        <div className={s.profile__info}>
          <IconAvatar profileAvatarClassName={s.profile__IconAvatar} profile={true}/>
          <p>Полина</p>
        </div>
        <ProfilePostsContainer/>
      </div>
    </div>
  )
}

export default Profile;
