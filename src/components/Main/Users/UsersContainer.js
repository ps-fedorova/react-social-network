import { connect } from "react-redux";
import FindUsers from "./FindUsers";
import { followedAC, setUsersAC, unfollowedAC } from "../../../redux/reducers/usersReducer";
import Friends from "./Friends";

const mapStateToProps = (state) => {
  return {
    users: state.users.USER_DATA
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

  return { followed, unfollowed, setUsers }
}

export const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends)
export const FindUsersContainer = connect(mapStateToProps, mapDispatchToProps)(FindUsers)

