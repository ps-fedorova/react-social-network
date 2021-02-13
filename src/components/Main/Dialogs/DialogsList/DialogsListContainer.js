import React from 'react';
import DialogsList from "./DialogsList";

const DialogsListContainer = (props) => {
  const { store } = props;
  const state = store.getState()

  return <DialogsList dialogs={state.dialogs}/>
}

export default DialogsListContainer;
