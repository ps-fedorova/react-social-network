import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from 'redux-thunk';

import profileReducer from "./reducers/profileReducer";
import dialogsReducer from "./reducers/dialogsReducer";
import sideBarReducer from "./reducers/sideBarReducer";
import usersReducer from "./reducers/usersReducer";
import setUserData from "./reducers/authReducer";


const reducers = combineReducers({ // связка редьюсеров - воспринимать как стейт
  profile: profileReducer,
  dialogs: dialogsReducer,
  sideBar: sideBarReducer,
  users: usersReducer,
  auth: setUserData,
}); // склеим редьюсеры

const store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;

export default store;
