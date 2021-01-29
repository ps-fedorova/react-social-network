import React from 'react';
import { Route, Switch } from "react-router-dom";
import s from "./Main.module.css"
import Profile from "./Profile/Profile";
import Messages from "./Messages/Messages";


const Main = () => {
  return (
    <div className={s.main}>
      <Switch>
        <Route exact path="/">
          <Profile/>
        </Route>
        <Route path="/messages">
          <Messages/>
        </Route>
      </Switch>
    </div>
  )
}

export default Main;
