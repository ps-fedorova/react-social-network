import React from 'react';
import { Route, Switch } from "react-router-dom";
import s from "./Main.module.css"
import ProfileContainer from "./Profile/ProfileContainer";
import Dialogs from "./Dialogs/Dialogs";
import { FindUsersContainer, FriendsContainer } from "./Users/UsersContainer";

const Main = () => {
  return (
    <div className={s.main}>
      <Switch>
        <Route path="/profile">
          <ProfileContainer/>
        </Route>
        <Route path="/dialogs">
          <Dialogs/>
        </Route>
        <Route path="/friends">
          {/*<FriendsContainer/>*/}
        </Route>
        <Route path="/find-users">
          <FindUsersContainer/>
        </Route>
      </Switch>
    </div>
  )
}

export default Main;
