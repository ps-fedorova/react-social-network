import React from 'react';
import UserCard from "../../../utils/ui-kit/UserCard/UserCard";
import s from "../../../utils/ui-kit/UserCard/UserCard.module.css"

const Friends = ({ users, follow, unfollow, setUsers }) => {

  if (users.length === 0) {
    setUsers([
      {
        id: 0,
        name: "Дмитрий",
        follow: true,
        location: {
          city: "Город",
          country: "Страна",
        }
      },
      {
        id: 1,
        name: "Дмитрий",
        follow: true,
        location: {
          city: "Город",
          country: "Страна",
        }
      },
      {
        id: 2,
        name: "Дмитрий",
        follow: false,
        location: {
          city: "Город",
          country: "Страна",
        }
      },
      {
        id: 3,
        name: "Дмитрий",
        follow: false,
        location: {
          city: "Город",
          country: "Страна",
        }
      },
    ])
  }

  return (
    <div className={s.findUsers}>
      <ul className="list">
        {users.filter(user => user.follow).map((user) =>
          <UserCard
            user={user}
            key={user.id}
            follow={follow}
            unfollow={unfollow}
            setUsers={setUsers}
          />
        )}
      </ul>
    </div>
  )
}
export default Friends;
