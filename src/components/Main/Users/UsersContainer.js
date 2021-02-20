import React from 'react';
import { connect } from "react-redux";

import {
  followed,
  setCurrentPage,
  setIsFetching,
  setTotalUserCount,
  setUsers,
  unfollowed,
} from "../../../redux/reducers/usersReducer";

import Friends from "./Friends";
import * as axios from "axios";
import Users from "./Users";
import Spinner from "../../../utils/ui-kit/Spinner/Spinner";

class UsersContainer extends React.Component {

  componentDidMount() {
    this.props.setIsFetching(true)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?`
      + `count=${this.props.pageSize}&` // размер страницы (сколько элементов будет возвращено в ответ)
      + `page=${this.props.currentPage}` // номер страницы
    )
      .then(res => {
        this.props.setUsers(res.data.items);
        this.props.setTotalUserCount(res.data.totalCount)
        console.log("юзеры пришли");
      })
      .catch(() => console.log("юзеры не пришли"))
      .finally(() => {
        this.props.setIsFetching(false);
      });
  }

  onPageChanged = (page) => {
    this.props.setCurrentPage(page);
    this.props.setIsFetching(true)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?`
      + `count=${this.props.pageSize}&` // размер страницы (сколько элементов будет возвращено в ответ)
      + `page=${page}` // номер страницы
    )
      .then(res => {
        this.props.setUsers(res.data.items);
        console.log("юзеры пришли, все хорошо");
      })
      .catch(() => console.log("что-то пошло не так"))
      .finally(() => this.props.setIsFetching(false));
  }

  render() {
    const { users, pageSize, totalUserCount, currentPage, followed, unfollowed, setUsers, isFetching } = this.props;

    return (
      <>
        {isFetching
          ? <Spinner/>
          : <Users
            users={users}
            followed={followed}
            unfollowed={unfollowed}
            setUsers={setUsers}
            currentPage={currentPage}
            pageSize={pageSize}
            totalUserCount={totalUserCount}
            onPageChanged={this.onPageChanged}
          />
        }
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users.USER_DATA,
    pageSize: state.users.PAGE_SIZE,
    totalUserCount: state.users.TOTAL_USER_COUNT,
    currentPage: state.users.CURRENT_PAGE,
    isFetching: state.users.IS_FETCHING,
  }
}
const mapDispatchToProps = {
  followed,
  setCurrentPage,
  setIsFetching,
  setTotalUserCount,
  setUsers,
  unfollowed,
}

export const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends)
export const FindUsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersContainer)
