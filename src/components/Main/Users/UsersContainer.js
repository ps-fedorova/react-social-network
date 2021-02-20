import { connect } from "react-redux";
import FindUsers from "./FindUsers";
import {
  followedAC,
  setCurrentUserAC,
  setTotalUserCountAC,
  setUsersAC,
  unfollowedAC
} from "../../../redux/reducers/usersReducer";
import Friends from "./Friends";

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
export const FindUsersContainer = connect(mapStateToProps, mapDispatchToProps)(FindUsers)

