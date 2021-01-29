import React from 'react';
import { Route } from "react-router-dom";
import s from "./Main.module.css"
import Profile from "./Profile/Profile";
import Messages from "./Messages/Messages";


const Main = () => {
  return (
    <div className={s.main}>
      <Route exact path="/">
        <Profile/>
      </Route>
      <Route  path="/messages">
        <Messages/>
      </Route>
    </div>
  )
}

export default Main;
