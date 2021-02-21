import React from 'react';
import s from './IconAvatar.module.css'
import avatar from "../../../images/avatar.jpg";

const IconAvatar = ({ profileAvatarClassName, src, profile }) => {
  return (
    <>
      {profile ?
        <img
          className={s.iconAvatar + " " + profileAvatarClassName}
          src={profile.photos.large}
          alt="avatar"
        />
        : src ?
          <img
            className={s.iconAvatar + " " + profileAvatarClassName}
            src={src}
            alt="avatar"
          />
          : <img
            className={s.iconAvatar + " " + profileAvatarClassName}
            src={avatar}
            alt="avatar"
          />
      }
    </>
  )
}

export default IconAvatar;
