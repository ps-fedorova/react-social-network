import React from 'react';
import s from './IconAvatar.module.css'
import avatar from "../../../images/avatar.jpg";

const IconAvatar = (props) => {
  const { profileAvatarClassName } = props;
  return <img className={s.iconAvatar + " " + profileAvatarClassName} src={avatar} alt={avatar}/>
}

export default IconAvatar;
