import {
  FOLLOW,
  SET_USERS,
  UN_FOLLOW,
  SET_CURRENT_PAGE,
  SET_TOTAL_USER_COUNT,
  TOGGLE_IS_FETCHING,
  TOGGLE_IS_FOLLOWING_PROGRESS
} from "../types";
import { usersAPI } from "../../API/API";

const initialState = {
  USER_DATA: [],
  PAGE_SIZE: 5, // захардкожено
  TOTAL_USER_COUNT: 0, // c сервака
  CURRENT_PAGE: 1, // c сервака
  IS_FETCHING: true,
  FOLLOWING_IN_PROGRESS: []
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
      return { ...state, IS_FETCHING: action.isFetching }
    }
    case TOGGLE_IS_FOLLOWING_PROGRESS:
      return {
        ...state, FOLLOWING_IN_PROGRESS: action.isFollowingProgress
          ? [...state.FOLLOWING_IN_PROGRESS, action.userId]
          : state.FOLLOWING_IN_PROGRESS.filter(id => id !== action.userId)
      }
    default:
      return state;
  }
}

export default usersReducer;

// actions
const followed = (userId) => ({
  type: FOLLOW,
  userId: userId
});

const unfollowed = (userId) => ({
  type: UN_FOLLOW,
  userId: userId
});

const setUsers = (users) => ({
  type: SET_USERS,
  users: users
});

const setCurrentPage = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage: currentPage
});

const setTotalUserCount = (totalUserCount) => ({
  type: SET_TOTAL_USER_COUNT, totalUserCount
});

const setIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING, isFetching
});

const setIsFollowingProgress = (isFollowingProgress, userId) => ({
  type: TOGGLE_IS_FOLLOWING_PROGRESS, isFollowingProgress, userId
});

// thunks
export const getUsersThunkCreator = (pageSize, currentPage) => {
  return (dispatch) => {
    dispatch(setIsFetching(true));
    dispatch(setCurrentPage(currentPage));
    usersAPI.getUsers(pageSize, currentPage)
      .then(data => {
        dispatch(setUsers(data.items));
        dispatch(setTotalUserCount(data.totalCount));
        console.log("юзеры пришли");
      })
      .catch(() => console.log("юзеры не пришли"))
      .finally(() => {
        dispatch(setIsFetching(false));
      });
  }
}

export const followThunkCreator = (userId) => {
  return (dispatch) => {
    dispatch(setIsFollowingProgress(true, userId));
    usersAPI.postFollow(userId)
      .then(data => {
        if (data.resultCode === 0) {
          dispatch(followed(userId))
          console.log("подписались");
        }
      })
      .catch(() => console.log("подписаться не получилось"))
      .finally(() => dispatch(setIsFollowingProgress(false, userId)))
  }
}

export const unFollowThunkCreator = (userId) => {
  return (dispatch) => {
    dispatch(setIsFollowingProgress(true, userId));
    usersAPI.deleteFollow(userId)
      .then(data => {
        if (data.resultCode === 0) {
          dispatch(unfollowed(userId))
          console.log("отписались");
        }
      })
      .catch(() => console.log("отписаться не получилось"))
      .finally(() => dispatch(setIsFollowingProgress(false, userId)));
  }
}
