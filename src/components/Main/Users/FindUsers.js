import React from 'react';
import s from "../../../utils/ui-kit/UserCard/UserCard.module.css"
import UserCard from "../../../utils/ui-kit/UserCard/UserCard";
import * as axios from "axios";

const FindUsers = ({users, followed, unfollowed, setUsers}) => {

  if (users.length === 0) {

    axios.get("https://social-network.samuraijs.com/api/1.0/users")
      .then(res => {
        setUsers(res.data.items);
        console.log("юзеры пришли");
      })
      .catch(() => console.log("юзеры не пришли"));
  }

  return (
    <div className={s.findUsers}>
      <ul className="list">
        {users.map((user, index) =>
          <UserCard
            user={user}
            key={index}
            followed={followed}
            unfollowed={unfollowed}
            setUsers={setUsers}
          />)}
      </ul>
    </div>
  )
}

export default FindUsers;
