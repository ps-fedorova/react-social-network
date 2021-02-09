import React from 'react';

import s from "./Dialogs.module.css"
import DialogsList from "./DialogsList/DialogsList";
import Messages from "./Messages/Messages";


const Dialogs = (props) => {
  const {ARR__NAME, ARR__MESSAGES, NEW_MESSAGE_TEXT} = props.dialogs;
  const {dispatch} = props;

  return (
    <div className={s.dialogs}>
      <DialogsList ARR__NAME={ARR__NAME}/>
      <Messages
        ARR__MESSAGES={ARR__MESSAGES}
        NEW_MESSAGE_TEXT={NEW_MESSAGE_TEXT}
        dispatch={dispatch}
      />
    </div>
  )
}

export default Dialogs;
