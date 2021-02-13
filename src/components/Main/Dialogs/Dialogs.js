import React from 'react';
import s from "./Dialogs.module.css"
import DialogsListContainer from "./DialogsList/DialogsListContainer";
import MessagesContainer from "./Messages/MessagesContainer";

const Dialogs = (props) => {
  const { store } = props;

  return (
    <div className={s.dialogs}>
      <DialogsListContainer store={store}/>
      <MessagesContainer store={store}/>
    </div>
  )
}

export default Dialogs;
