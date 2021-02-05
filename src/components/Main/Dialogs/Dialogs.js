import React from 'react';

import s from "./Dialogs.module.css"
import DialogsList from "./DialogsList/DialogsList";
import Messages from "./Messages/Messages";


const Dialogs = () => {
  return (
    <div className={s.dialogs}>
      <DialogsList/>
      <Messages/>
    </div>

  )
}

export default Dialogs;
