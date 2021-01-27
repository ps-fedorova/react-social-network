import React from 'react';
import forest from "../images/forest.jpg";
import avatar from "../images/avatar.jpg";

const Profile = () => {
  return (
    <div className="content">
      <img className="contentImgBg" src={forest} alt="rain"/>
      <p>description</p>
      <div>
        <img className="contentImgAva" src={avatar} alt={avatar}/>
      </div>
      <div>My posts</div>
      <ul>
        <li>
          <p>post 1</p>
        </li>
        <li>
          <p>post 2</p>
        </li>
        <li>
          <p>post 3</p>
        </li>
      </ul>
    </div>
  )
}

export default Profile;
