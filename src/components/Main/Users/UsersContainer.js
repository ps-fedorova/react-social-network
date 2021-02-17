import { connect } from "react-redux";
import FindUsers from "./FindUsers";
import { followAC, setUsersAC, unFollowAC } from "../../../redux/reducers/usersReducer";
import Friends from "./Friends";

const mapStateToProps = (state) => {
  return {
    users: state.users.USER_DATA
  }
}

const mapDispatchToProps = (dispatch) => {
  const follow = (userId) => {
    const action = followAC(userId)
    dispatch(action);
  };
  const unfollow = (userId) => {
    const action = unFollowAC(userId)
    dispatch(action)
  }
  const setUsers = (users) => {
    const action = setUsersAC(users)
    dispatch(action)
  }

  return { follow, unfollow, setUsers }
}

export const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends)
export const FindUsersContainer = connect(mapStateToProps, mapDispatchToProps)(FindUsers)

