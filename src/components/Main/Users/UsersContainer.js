import React from 'react';
import { connect } from "react-redux";

import {
  followThunkCreator,
  unFollowThunkCreator,
  getUsersThunkCreator,
} from "../../../redux/reducers/usersReducer";

import Friends from "./Friends";
import Users from "./Users";
import Spinner from "../../../utils/ui-kit/Spinner/Spinner";

class UsersContainer extends React.Component {

  componentDidMount() {
    this.props.getUsersThunkCreator(this.props.pageSize, this.props.currentPage);
  }

  onPageChanged = (page) => {
    this.props.getUsersThunkCreator(this.props.pageSize, page);
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
  // actionsCreator

  // thunksCreator
  getUsersThunkCreator,
  followThunkCreator,
  unFollowThunkCreator
}

export const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends)
export const FindUsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersContainer)
