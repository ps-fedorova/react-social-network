import React from 'react';
import s from './IconAvatar.module.css'
import avatar from "../../../images/avatar.jpg";

const IconAvatar = (props) => {
  const { profileAvatarClassName, src } = props;
  return (
    <img
      className={s.iconAvatar + " " + profileAvatarClassName}
      src={src === null || src === undefined ? avatar : src}
      alt="avatar"
    />
  )
}

export default IconAvatar;
