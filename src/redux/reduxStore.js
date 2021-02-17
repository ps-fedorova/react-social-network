import { combineReducers, createStore } from "redux";

import profileReducer from "./reducers/profileReducer";
import dialogsReducer from "./reducers/dialogsReducer";
import sideBarReducer from "./reducers/sideBarReducer";
import usersReducer from "./reducers/usersReducer";

const reducers = combineReducers({ // связка редьюсеров - воспринимать как стейт
  profile: profileReducer,
  dialogs: dialogsReducer,
  sideBar: sideBarReducer,
  users: usersReducer
}); // склеим редьюсеры

const store = createStore(reducers);
window.store = store;

export default store
