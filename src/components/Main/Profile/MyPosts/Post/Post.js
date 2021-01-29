import React from 'react';
import s from './Post.module.css';
import avatar from '../../../../../images/avatar.jpg'

const Post = (props) => {
  const { item } = props;

  return (
    <li className={s.post__item}>
      <img className={s.post__avatar} src={avatar} alt="avatar"/>
      <p className={s.post__text}>{item}</p>
      <button className={`button ${s.post__like}`}>&#10084;</button>
    </li>
  )
}

export default Post
