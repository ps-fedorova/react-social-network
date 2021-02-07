import React from 'react';

import s from "./Messages.module.css"
import Post from "../../../../utils/ui-kit/Post/Post";


const Messages = (props) => {
  const { ARR__MESSAGES, NEW_MESSAGE_TEXT, updateNewPostMessage, addMessage } = props;

  const refTextarea = React.createRef();

  const onSent = (evt) => {
    evt.preventDefault()
    addMessage();
  }

  const onChangeTextArea = () =>  {
    const text = refTextarea.current.value
    updateNewPostMessage(text);
  }

  return (
    <div className={s.messages}>
      <ul className={`list ${s.messages__list}`}>
        {ARR__MESSAGES.map((message, index) => {
          return (
            <li key={index} className="post__item">
              <Post item={message}/>
            </li>)
        })
        }
      </ul>
      <form className={s.messages__formSent}>
        <label className={`label`}>
          <textarea
            ref={refTextarea}
            className={`textarea ${s.messages__textarea}`}
            rows="5"
            value={NEW_MESSAGE_TEXT}
            onChange={onChangeTextArea}
          />
        </label>
        <div className={s.messages__ButtonsPosition}>
          <button className={`button ${s.messages__ButtonFormSent}`} onClick={onSent}>sent</button>
        </div>
      </form>
    </div>


  )
}

export default Messages;
