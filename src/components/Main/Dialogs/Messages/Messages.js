import React from 'react';
import s from "./Messages.module.css"
import Post from "../../../../utils/ui-kit/Post/Post";
import { AddMessageForm } from "./addMessageForm";

const Messages = (props) => {
  const { dialogs, sent } = props;

  const onSent = (value) => {
    sent(value.newMessageBody);
  }

  return (
    <div className={s.messages}>
      <ul className={`list ${s.messages__list}`}>
        {dialogs.ARR__MESSAGES.map((message, index) => {
          return (
            <li key={index} className={`post__item ${s.messages__item}`}>
              <Post item={message}/>
            </li>)
        })
        }
      </ul>
      <AddMessageForm dialogs={dialogs} onSent={onSent}/>
    </div>
  )
}


export default Messages;
