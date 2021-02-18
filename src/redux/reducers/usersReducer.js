import { followed, SET_USERS, UNfollowed } from "../types";

const initialState = {
  USER_DATA: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case followed:
      return {
        ...state,
        USER_DATA: state.USER_DATA.map((user) => {
          if (user.id === action.userId) {
            return {
              ...user,
              followed: true
            }
          } else {
            return user;
          }
        }),
      }
    case UNfollowed: {
      return {
        ...state,
        USER_DATA: state.USER_DATA.map((user) => {
          if (user.id === action.userId) {
            return {
              ...user,
              followed: false
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


export const followedAC = (userId) => ({
  type: followed,
  userId: userId
});

export const unfollowedAC = (userId) => ({
  type: UNfollowed,
  userId: userId
});

export const setUsersAC = (users) => ({
  type: SET_USERS,
  users: users
});
