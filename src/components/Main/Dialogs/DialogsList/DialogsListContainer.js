import React from 'react';
import DialogsList from "./DialogsList";
import { StoreContext } from "../../../../StoreContext";

const DialogsListContainer = () => {
  const store = React.useContext(StoreContext)
  const state = store.getState()

  return <DialogsList dialogs={state.dialogs}/>
}

export default DialogsListContainer;
