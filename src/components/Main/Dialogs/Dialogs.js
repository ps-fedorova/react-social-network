import React from 'react';
import s from "./Dialogs.module.css"
import DialogsListContainer from "./DialogsList/DialogsListContainer";
import MessagesContainer from "./Messages/MessagesContainer";

const Dialogs = () => {

  return (
    <div className={s.dialogs}>
      <DialogsListContainer />
      <MessagesContainer />
    </div>
  )
}

export default Dialogs;
