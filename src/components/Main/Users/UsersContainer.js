import React from 'react';
import { connect } from "react-redux";

import {
  followedAC,
  setCurrentUserAC,
  setTotalUserCountAC,
  setUsersAC,
  unfollowedAC
} from "../../../redux/reducers/usersReducer";
import Friends from "./Friends";
import * as axios from "axios";
import Users from "./Users";

class UsersContainer extends React.Component {

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

    return (
      <Users
        users={users}
        followed={followed}
        unfollowed={unfollowed}
        setUsers={setUsers}
        currentPage={currentPage}
        pageSize={pageSize}
        totalUserCount={totalUserCount}
        onPageChanged={this.onPageChanged}
      />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users.USER_DATA,
    pageSize: state.users.PAGE_SIZE,
    totalUserCount: state.users.TOTAL_USER_COUNT,
    currentPage: state.users.CURRENT_PAGE
  }
}
const mapDispatchToProps = (dispatch) => {
  const followed = (userId) => {
    const action = followedAC(userId)
    dispatch(action);
  };
  const unfollowed = (userId) => {
    const action = unfollowedAC(userId)
    dispatch(action)
  }
  const setUsers = (users) => {
    const action = setUsersAC(users)
    dispatch(action)
  }
  const setCurrentPage = (currentPage) => {
    const action = setCurrentUserAC(currentPage)
    dispatch(action)
  }
  const setTotalUserCount = (totalUserCount) => {
    const action = setTotalUserCountAC(totalUserCount)
    dispatch(action)
  }
  return { followed, unfollowed, setUsers, setCurrentPage, setTotalUserCount }
}

export const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends)
export const FindUsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersContainer)

