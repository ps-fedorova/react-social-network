import React from "react"
import s from "../../../utils/ui-kit/UserCard/UserCard.module.css";
import UserCard from "../../../utils/ui-kit/UserCard/UserCard";
import Pagination from "react-js-pagination";

const Users = ({users, followed, unfollowed, setUsers, currentPage, pageSize, totalUserCount, onPageChanged}) => {

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
            user={user}
            key={index}
            followed={followed}
            unfollowed={unfollowed}
            setUsers={setUsers}
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