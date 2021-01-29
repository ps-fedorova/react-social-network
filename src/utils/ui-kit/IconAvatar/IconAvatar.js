import React from 'react';
import s from './IconAvatar.module.css'
import avatar from "../../../images/avatar.jpg";

const IconAvatar = () => {
  return <img className={s.iconAvatar} src={avatar} alt={avatar}/>
}

export default IconAvatar;
