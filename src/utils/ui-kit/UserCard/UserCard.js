import React from 'react';
import { NavLink } from "react-router-dom";
import s from './UserCard.module.css'
import IconAvatar from "../IconAvatar/IconAvatar";

const UserCard = (props) => {
  const { user, isFollowingProgress, followThunkCreator, unFollowThunkCreator } = props;

  const onFollowedClick = () => {
    followThunkCreator(user.id)
  }
  const onUnfollowedClick = () => {
    unFollowThunkCreator(user.id)
  }
  return (
    <li className={`post__item ${s.userCard__item}`}>
      <div className={s.userCard__avatar}>
        <NavLink to={"/profile/" + user.id}>
          <IconAvatar profileAvatarClassName={s.userCard__IconAvatar} src={user.photos.small}/>
        </NavLink>
      </div>
      <div className={` ${s.userCard__about}`}>
        <div className={`${s.userCard__aboutItem} ${s["userCard__aboutItem_left"]}`}>
          <p className={s.userCard__data}>{user.name}</p>
          <p className={s.userCard__data}>{user.status}</p>
        </div>
        <div className={`${s.userCard__aboutItem} ${s["userCard__aboutItem_right"]}`}>
          {user.followed // если массив содержит id пользователя
            ? <button disabled={isFollowingProgress.includes(user.id)} onClick={onUnfollowedClick}
                      className={`button ${s.userCard__button} ${s["userCard__button_followed"]}`}>follow</button>
            : <button disabled={isFollowingProgress.includes(user.id)} onClick={onFollowedClick}
                      className={`button ${s.userCard__button}`}>unfollow</button>
          }
        </div>
      </div>
    </li>
  )
}

export default UserCard;
