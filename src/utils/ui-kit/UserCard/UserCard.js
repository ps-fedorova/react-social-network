import React from 'react';
import s from './UserCard.module.css'
import IconAvatar from "../IconAvatar/IconAvatar";
import { NavLink } from "react-router-dom";
import { followAPI } from "../../../API/API";

const UserCard = (props) => {
  const { user, followed, unfollowed } = props;

  const onFollowedClick = () => {
    followAPI.postFollow(user.id)
      .then(data => {
        if (data.resultCode === 0) {
          followed(user.id)
          console.log("подписались");
        }
      })
      .catch(() => console.log("подписаться не получилось"))
  }
  const onUnfollowedClick = () => {
    followAPI.deleteFollow(user.id)
      .then(data => {
        if (data.resultCode === 0) {
          unfollowed(user.id)
          console.log("отписались");
        }
      })
      .catch(() => console.log("отписаться не получилось"))
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
          {user.followed
            ? <button onClick={onUnfollowedClick}
                      className={`button ${s.userCard__button} ${s["userCard__button_followed"]}`}>followed</button>
            : <button onClick={onFollowedClick} className={`button ${s.userCard__button}`}>Unfollowed</button>
          }
        </div>
      </div>
    </li>
  )
}

export default UserCard;
