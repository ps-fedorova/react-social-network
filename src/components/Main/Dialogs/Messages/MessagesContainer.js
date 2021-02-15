import React from 'react';

import { ADD_MESSAGE_actionCreator, UPDATE_NEW_MESSAGE_actionCreator } from "../../../../redux/reducers/dialogsReducer";
import Messages from "./Messages";
import { StoreContext } from "../../../../StoreContext";


const MessagesContainer = () => {
  const store = React.useContext(StoreContext)

  const state = store.getState()
  const sent = () => store.dispatch(ADD_MESSAGE_actionCreator());
  const changeTextArea = (text) => store.dispatch(UPDATE_NEW_MESSAGE_actionCreator(text));

  return <Messages
    dialogs={state.dialogs}
    sent={sent}
    changeTextArea={changeTextArea}
  />
}

export default MessagesContainer;
