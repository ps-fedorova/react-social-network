import React from 'react';
import s from "../../../utils/ui-kit/UserCard/UserCard.module.css"
import UserCard from "../../../utils/ui-kit/UserCard/UserCard";
import * as axios from "axios";
import Pagination from "react-js-pagination";

class FindUsers extends React.Component {

  componentDidMount() {
    // if (this.props.users.length === 0) { // конструктор вызывается итак и раз
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?`
      + `count=${this.props.pageSize}&` // размер страницы (сколько элементов будет возвращено в ответ)
      + `page=${this.props.currentPage}` // номер страницы
    )
      .then(res => {
        this.props.setUsers(res.data.items);
        this.props.setTotalUserCount(res.data.totalCount)
        console.log("юзеры пришли");
      })
      .catch(() => console.log("юзеры не пришли"));
  }

  onPageChanged = (page) => {
    this.props.setCurrentPage(page);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?`
      + `count=${this.props.pageSize}&` // размер страницы (сколько элементов будет возвращено в ответ)
      + `page=${page}` // номер страницы
    )
      .then(res => {
        this.props.setUsers(res.data.items);
        console.log("юзеры пришли, все хорошо");
      })
      .catch(() => console.log("что-то пошло не так"));
  }

  render() {
    const { users, pageSize, totalUserCount, currentPage, followed, unfollowed, setUsers } = this.props;
    const pagesCount = Math.ceil(totalUserCount / pageSize);
    const pages = [];

    for (let i = 0; i <= pagesCount; i = i + 1) {
      pages.push(i);
    }

    console.log()
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
            onChange={this.onPageChanged}
            innerClass={`list ${s.findUsers__paginationList}`}
            itemClass={`button ${s.userCard__button} ${s["userCard__button_pagination"]}`}
            linkClass='link'
            activeClass={`link_active ${s["findUsers__page_selected"]}`}
          />
        </div>
      </div>
    )
  }
}

export default FindUsers;
