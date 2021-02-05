import React from 'react';

import s from "./Dialogs.module.css"
import DialogsList from "./DialogsList/DialogsList";
import Messages from "./Messages/Messages";


const Dialogs = (props) => {
  const {ARR__NAME} = props;
  return (
    <div className={s.dialogs}>
      <DialogsList ARR__NAME={ARR__NAME}/>
      <Messages/>
    </div>

  )
}

export default Dialogs;
