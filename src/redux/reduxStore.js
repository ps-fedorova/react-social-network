import { combineReducers, createStore } from "redux";

import profileReducer from "./reducers/profileReducer";
import dialogsReducer from "./reducers/dialogsReducer";
import sideBarReducer from "./reducers/sideBarReducer";

const reducers = combineReducers({
  profile: profileReducer,
  dialogs: dialogsReducer,
  sideBar: sideBarReducer

}); // склеим редьюсеры

const store = createStore(reducers);

export default store
