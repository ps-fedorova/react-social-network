import { FOLLOW, SET_USERS, UNFOLLOW } from "../types";

const initialState = {
  USER_DATA: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        USER_DATA: state.USER_DATA.map((user) => {
          if (user.id === action.userId) {
            return {
              ...user,
              follow: true
            }
          } else {
            return user;
          }
        }),
      }
    case UNFOLLOW: {
      return {
        ...state,
        USER_DATA: state.USER_DATA.map((user) => {
          if (user.id === action.userId) {
            return {
              ...user,
              follow: false
            }
          } else {
            return user;
          }
        }),
      }
    }
    case SET_USERS: {
      return {
        ...state, USER_DATA: [
          // { ...state }.USER_DATA,
          ...action.users]
      }
    }
    default:
      return state;
  }
}

export default usersReducer;


export const followAC = (userId) => ({
  type: FOLLOW,
  userId: userId
});

export const unFollowAC = (userId) => ({
  type: UNFOLLOW,
  userId: userId
});

export const setUsersAC = (users) => ({
  type: SET_USERS,
  users: users
});
