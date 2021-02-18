import React from 'react';
import UserCard from "../../../utils/ui-kit/UserCard/UserCard";
import s from "../../../utils/ui-kit/UserCard/UserCard.module.css"
import * as axios from "axios";

const Friends = ({ users, followed, unfollowed, setUsers }) => {

  if (users.length === 0) {
    axios.get("https://social-network.samuraijs.com/api/1.0/users")
      .then(res => {
        setUsers(res.data.items);
        console.log("юзеры пришли");
      })
      .catch(() => console.log("юзеры не пришли"));
    // setUsers([
    //   {
    //     id: 0,
    //     name: "Дмитрий",
    //     followed: true,
    //     location: {
    //       city: "Город",
    //       country: "Страна",
    //     }
    //   },
    //   {
    //     id: 1,
    //     name: "Дмитрий",
    //     followed: true,
    //     location: {
    //       city: "Город",
    //       country: "Страна",
    //     }
    //   },
    //   {
    //     id: 2,
    //     name: "Дмитрий",
    //     followed: false,
    //     location: {
    //       city: "Город",
    //       country: "Страна",
    //     }
    //   },
    //   {
    //     id: 3,
    //     name: "Дмитрий",
    //     followed: false,
    //     location: {
    //       city: "Город",
    //       country: "Страна",
    //     }
    //   },
    // ])
  }

  return (
    <div className={s.findUsers}>
      <ul className="list">
        {users.filter(user => user.followed).map((user) =>
          <UserCard
            user={user}
            key={user.id}
            followed={followed}
            unfollowed={unfollowed}
            setUsers={setUsers}
          />
        )}
      </ul>
    </div>
  )
}
export default Friends;
