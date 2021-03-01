import React from 'react';
import { Redirect, Route, Switch } from "react-router-dom";
import s from "./Main.module.css"
import ProfileContainer from "./Profile/ProfileContainer";
import DialogsContainer from "./Dialogs/DialogsContainer";
import {
  FindUsersContainer,
  // FriendsContainer
} from "./Users/UsersContainer";
import Login from "../Login/Login";

const Main = () => {
  return (
    <div className={s.main}>
      <Switch>
        <Route exact path="/">
          <Redirect to="/profile"/>
        </Route>
        <Route path="/profile/:userId?">
          <ProfileContainer/>
        </Route>
        <Route path="/dialogs">
          <DialogsContainer/>
        </Route>
        <Route path="/friends">
          {/*<FriendsContainer/>*/}
        </Route>
        <Route path="/find-users">
          <FindUsersContainer/>
        </Route>
        <Route path="/login">
          <Login/>
        </Route>
      </Switch>
    </div>
  )
}

export default Main;
