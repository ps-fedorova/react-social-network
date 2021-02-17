import React from 'react';
import { USER_DATA } from "../UsersDATA";
import UserCard from "../../../utils/ui-kit/UserCard/UserCard";
import s from "./../../../utils/ui-kit/UserCard/UserCard.module.css"

const Friends = () => {
  return (
    <div className={s.findUsers}>
      <ul className="list">
        {USER_DATA.filter(user => user.follow).map((user, index) =>
          <UserCard user={user} key={index}/>)}
      </ul>
    </div>
  )
}
export default Friends;
