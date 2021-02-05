import React from 'react';
import s from './Post.module.css'
import IconAvatar from "../IconAvatar/IconAvatar";

const Post = () => {
  return (
    <div className={s.post__item}>
      <IconAvatar/>
      <p className={s.post__text}>qwerty</p>
    </div>
  )
}

export default Post;
