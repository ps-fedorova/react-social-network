import React from "react"
import s from "../../../utils/ui-kit/UserCard/UserCard.module.css";
import UserCard from "../../../utils/ui-kit/UserCard/UserCard";
import Pagination from "react-js-pagination";

const Users = (props) => {

  const {
    users,
    setUsers,
    currentPage,
    pageSize,
    totalUserCount,
    onPageChanged,
    isFollowingProgress,
    followThunkCreator,
    unFollowThunkCreator,
  } = props;

  const pagesCount = Math.ceil(totalUserCount / pageSize);
  const pages = [];

  for (let i = 0; i <= pagesCount; i = i + 1) {
    pages.push(i);
  }

  return (
    <div className={s.findUsers}>
      <ul className={`list ${s.userCard__list}`}>
        {users.map((user, index) =>
          <UserCard
            followThunkCreator={followThunkCreator}
            unFollowThunkCreator={unFollowThunkCreator}
            user={user}
            key={index}
            setUsers={setUsers}
            isFollowingProgress={isFollowingProgress}
          />)}
      </ul>
      <div>
        <Pagination
          activePage={currentPage}
          itemsCountPerPage={pageSize}
          totalItemsCount={totalUserCount}
          pageRangeDisplayed={5}
          onChange={onPageChanged}
          innerClass={`list ${s.findUsers__paginationList}`}
          itemClass={`button ${s.userCard__button} ${s["userCard__button_pagination"]}`}
          linkClass='link'
          activeClass={`link_active ${s["findUsers__page_selected"]}`}
        />
      </div>
    </div>
  )
}

export default Users;
