import React from 'react';
import { connect } from "react-redux";

import {
  followed,
  setCurrentPage,
  setIsFetching,
  setIsFollowingProgress,
  setTotalUserCount,
  setUsers,
  unfollowed,
} from "../../../redux/reducers/usersReducer";

import Friends from "./Friends";
import Users from "./Users";
import Spinner from "../../../utils/ui-kit/Spinner/Spinner";
import { usersAPI } from "../../../API/API";

class UsersContainer extends React.Component {

  componentDidMount() {
    this.props.setIsFetching(true);
    usersAPI.getUsers(this.props.pageSize, this.props.currentPage)
      .then(data => {
        this.props.setUsers(data.items);
        this.props.setTotalUserCount(data.totalCount)
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
    usersAPI.getUsers(this.props.pageSize, page)
      .then(data => {
        this.props.setUsers(data.items);
        console.log("юзеры пришли, все хорошо");
      })
      .catch(() => console.log("что-то пошло не так"))
      .finally(() => this.props.setIsFetching(false));
  }

  render() {

    return (
      <>
        {this.props.isFetching
          ? <Spinner/>
          : <Users
            {...this.props}
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
    isFollowingProgress: state.users.FOLLOWING_IN_PROGRESS,
  }
}
const mapDispatchToProps = {
  followed,
  unfollowed,
  setCurrentPage,
  setIsFetching,
  setTotalUserCount,
  setUsers,
  setIsFollowingProgress,
}

export const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends)
export const FindUsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersContainer)
