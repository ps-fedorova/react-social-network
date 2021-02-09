import React from 'react';
import { Route, Switch } from "react-router-dom";
import s from "./Main.module.css"
import Profile from "./Profile/Profile";
import Dialogs from "./Dialogs/Dialogs";

const Main = (props) => {
  const { profile, dialogs, dispatch} = props;

  return (
    <div className={s.main}>
      <Switch>
        <Route exact path="/profile">
          <Profile
            profile={profile}
            dispatch={dispatch}
          />
        </Route>
        <Route path="/dialogs">
          <Dialogs
            dialogs={dialogs}
            dispatch={dispatch}
          />
        </Route>
      </Switch>
    </div>
  )
}

export default Main;
