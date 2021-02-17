import React from 'react';
import s from "./../../../utils/ui-kit/UserCard/UserCard.module.css"
import { USER_DATA } from "../UsersDATA";
import UserCard from "../../../utils/ui-kit/UserCard/UserCard";

const FindUsers = () => {

  return (
    <div className={s.findUsers}>
      <ul className="list">
        {USER_DATA.map((user, index) =>
          <UserCard user={user} key={index}/>)}
      </ul>
    </div>
  )
}

export default FindUsers;
