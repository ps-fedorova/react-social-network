import React from 'react';
import { Route, Switch } from "react-router-dom";
import s from "./Main.module.css"
import Profile from "./Profile/Profile";
import Dialogs from "./Dialogs/Dialogs";

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
      </Switch>
    </div>
  )
}

export default Main;
