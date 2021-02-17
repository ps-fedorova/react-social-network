import React from 'react';
import s from './UserCard.module.css'
import IconAvatar from "../IconAvatar/IconAvatar";

const UserCard = (props) => {
  const { user, follow, unfollow } = props;

  const onFollowClick = () => {
    follow(user.id)
  }
  const onUnfollowClick = () => {
    unfollow(user.id)
  }
  
  return (
    <li className={`post__item ${s.userCard__item}`}>
      <div className={s.userCard__avatar}>
        <IconAvatar profileAvatarClassName={s.userCard__IconAvatar}/>
      </div>
      <div className={` ${s.userCard__about}`}>
        <div className={`${s.userCard__aboutItem} ${s["userCard__aboutItem_left"]}`}>
          <p className={s.userCard__data}>{user.name}</p>
          <p className={s.userCard__data}>{`${user.location.country}, ${user.location.city}`}</p>
        </div>
        <div className={`${s.userCard__aboutItem} ${s["userCard__aboutItem_right"]}`}>
          {user.follow
            ? <button onClick={onUnfollowClick}
                      className={`button ${s.userCard__button} ${s["userCard__button_follow"]}`}>Follow</button>
            : <button onClick={onFollowClick} className={`button ${s.userCard__button}`}>Unfollow</button>
          }
        </div>
      </div>
    </li>
  )
}

export default UserCard;
