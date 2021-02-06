import React from 'react';
import { Route, Switch } from "react-router-dom";
import s from "./Main.module.css"
import Profile from "./Profile/Profile";
import Dialogs from "./Dialogs/Dialogs";

const Main = (props) => {
  const { profile, dialogs } = props.state;
  const { addPost } = props;
  return (
    <div className={s.main}>
      <Switch>
        <Route exact path="/profile">
          <Profile addPost={addPost} profile={profile}/>
        </Route>
        <Route path="/dialogs">
          <Dialogs dialogs={dialogs}/>
        </Route>
      </Switch>
    </div>
  )
}

export default Main;
