import React from 'react';
import forest from "../../../images/forest.jpg";
import ProfilePosts from "./ProfilePosts/ProfilePosts";
import IconAvatar from "../../../utils/ui-kit/IconAvatar/IconAvatar";
import s from "./Profile.module.css"

const Profile = (props) => {
  const { ARR__POSTS } = props.profile;
  const { addPost } = props;
  return (
    <div>
      {/*<img className={s.profile__imgBg} src={forest} alt="forest"/>*/}
      <div className={s.profile__content}>
        <div className={s.profile__info}>
          <IconAvatar profileAvatarClassName={s.profile__IconAvatar} profile={true}/>
          <p>Полина</p>
        </div>
        <ProfilePosts ARR__POSTS={ARR__POSTS} addPost={addPost}/>
      </div>
    </div>
  )
}

export default Profile;
