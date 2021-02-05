import React from 'react';

import s from "./Messages.module.css"
import Post from "../../../../utils/ui-kit/Post/Post";


const Messages = (props) => {
  const { ARR__MESSAGES } = props;
  return (
    <ul className={`list ${s.dialogsList}`}>
      {ARR__MESSAGES.map((message, index) => {
        return (
          <li key={index} className="post__item">
            <Post item={message}/>
          </li>)
      })
      }
    </ul>
  )
}

export default Messages;
