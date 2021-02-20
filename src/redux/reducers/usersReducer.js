import { FOLLOW, SET_USERS, UN_FOLLOW, SET_CURRENT_PAGE, SET_TOTAL_USER_COUNT, TOGGLE_IS_FETCHING } from "../types";

const initialState = {
  USER_DATA: [],
  PAGE_SIZE: 5, // захардкожено
  TOTAL_USER_COUNT: 0, // c сервака
  CURRENT_PAGE: 1, // c сервака
  IS_FETCHING: true,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        USER_DATA: state.USER_DATA.map((user) => {
          if (user.id === action.userId) {
            return { ...user, followed: true }
          } else return user;

        }),
      }
    case UN_FOLLOW:
      return {
        ...state,
        USER_DATA: state.USER_DATA.map((user) => {
          if (user.id === action.userId) {
            return { ...user, followed: false }
          } else return user;

        }),
      }
    case SET_USERS:
      return {
        ...state, USER_DATA: [
          // { ...state }.USER_DATA,
          ...action.users]
      }
    case SET_CURRENT_PAGE:
      return {
        ...state, CURRENT_PAGE: action.currentPage
      }
    case SET_TOTAL_USER_COUNT: {
      return { ...state, TOTAL_USER_COUNT: action.totalUserCount }
    }
    case TOGGLE_IS_FETCHING: {
      return {...state, IS_FETCHING: action.isFetching}
    }
    default:
      return state;
  }
}

export default usersReducer;


export const followedAC = (userId) => ({
  type: FOLLOW,
  userId: userId
});

export const unfollowedAC = (userId) => ({
  type: UN_FOLLOW,
  userId: userId
});

export const setUsersAC = (users) => ({
  type: SET_USERS,
  users: users
});

export const setCurrentPageAC = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage: currentPage
});

export const setTotalUserCountAC = (totalUserCount) => ({
  type: SET_TOTAL_USER_COUNT, totalUserCount
});

export const setIsFetchingAC = (isFetching) => ({
  type: TOGGLE_IS_FETCHING, isFetching
});
