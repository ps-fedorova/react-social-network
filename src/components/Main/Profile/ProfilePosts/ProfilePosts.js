import React from 'react';
import ProfilePost from './ProfilePost/ProfilePost'
import { ProfilePostForm } from "./ProfilePost/ProfilePostForm";

const ProfilePosts = (props) => {
  const { profile, addPost } = props;

  const onAddPost = (value) => addPost(value.newPostBody);

  return (
    <>
      <h2>My posts</h2>
      <div>
        <ProfilePostForm onAddPost={onAddPost}/>
      </div>
      <ul className="list">
        {profile.ARR_POSTS.map((item, index) => {
          return (
            <li key={index} className="post__item">
              <ProfilePost item={item.message}/>
            </li>
          )
        })
        }
      </ul>
    </>
  )
}

export default ProfilePosts
