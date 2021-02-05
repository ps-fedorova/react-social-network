import React from 'react';
import { Route, Switch } from "react-router-dom";
import s from "./Main.module.css"
import Profile from "./Profile/Profile";
import Dialogs from "./Dialogs/Dialogs";

const Main = (props) => {
  const {ARR__POSTS, ARR__NAME} = props;
  return (
    <div className={s.main}>
      <Switch>
        <Route exact path="/profile">
          <Profile ARR__POSTS={ARR__POSTS}/>
        </Route>
        <Route path="/dialogs">
          <Dialogs ARR__NAME={ARR__NAME}/>
        </Route>
      </Switch>
    </div>
  )
}

export default Main;
