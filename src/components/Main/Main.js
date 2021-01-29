import React from 'react';

import s from "./Main.module.css"
import Profile from "./Profile/Profile";
import Dialogs from "./Dialogs/Dialogs";


const Main = () => {
  return (
    <div className={s.main}>
      {/*<Profile/>*/}
      <Dialogs/>
    </div>
  )
}

export default Main;
