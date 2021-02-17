import React from 'react';
import { Route, Switch } from "react-router-dom";
import s from "./Main.module.css"
import Profile from "./Profile/Profile";
import Dialogs from "./Dialogs/Dialogs";
import FindUsers from "./FindUsers/FindUsers";
import Friends from "./Friends/Friends";

const Main = () => {
  return (
    <div className={s.main}>
      <Switch>
        <Route exact path="/profile">
          <Profile/>
        </Route>
        <Route path="/dialogs">
          <Dialogs/>
        </Route>
        <Route path="/friends">
          <Friends/>
        </Route>
        <Route path="/find-users">
          <FindUsers/>
        </Route>
      </Switch>
    </div>
  )
}

export default Main;
