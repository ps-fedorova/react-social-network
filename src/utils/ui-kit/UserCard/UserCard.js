import React from 'react';
import s from './UserCard.module.css'
import IconAvatar from "../IconAvatar/IconAvatar";

const UserCard = (props) => {
  const { user } = props;

  return (
    <li className={`post__item ${s.userCard__item}`}>
      <div className={s.userCard__avatar}>
        <IconAvatar profileAvatarClassName={s.userCard__IconAvatar}/>
      </div>
      <div className={` ${s.userCard__about}`}>
        <div className={`${s.userCard__aboutItem} ${s["userCard__aboutItem_left"]}`}>
          <p className={s.userCard__data}>{user.name}</p>
          <p className={s.userCard__data}>{`${user.country}, ${user.city}`}</p>
        </div>
        <div className={`${s.userCard__aboutItem} ${s["userCard__aboutItem_right"]}`}>
          {user.follow
            ? <button
              className={`button ${s.userCard__button} ${s["userCard__button_follow"]}`}>Follow</button>
            : <button className={`button ${s.userCard__button}`}>Unfollow</button>
          }
        </div>
      </div>
    </li>
  )
}

export default UserCard;
