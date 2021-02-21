import React from "react";
import IconAvatar from "../../../utils/ui-kit/IconAvatar/IconAvatar";
import ProfilePostsContainer from "./ProfilePosts/ProfilePostsContainer";
// import forest from "../../../images/forest.jpg";
import s from "./Profile.module.css";

const Profile = ({profile}) => {
  return (
    <div>
      {/*<img className={s.profile__imgBg} src={forest} alt="forest"/>*/}
      <div className={s.profile__content}>
        <div className={s.profile__info}>
          <IconAvatar profileAvatarClassName={s.profile__IconAvatar} profile={profile}/>
          <p>Полина</p>
        </div>
        <ProfilePostsContainer/>
      </div>
    </div>
  )
}

export default Profile
