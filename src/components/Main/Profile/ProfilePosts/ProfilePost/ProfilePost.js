import React from 'react';
import s from './ProfilePost.module.css';

import Like from "../../../../../utils/ui-kit/Like/Like";
import Post from "../../../../../utils/ui-kit/Post/Post";

const ProfilePost = (props) => {
  const { item } = props;
  return (
    <div className={s.profilePost}>
      <Post item={item}/>
      <Like/>
    </div>
  )
}

export default ProfilePost
