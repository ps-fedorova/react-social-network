import React from 'react';

import s from "./Messages.module.css"
import Post from "../../../../utils/ui-kit/Post/Post";
import { ADD_MESSAGE_actionCreator, UPDATE_NEW_MESSAGE_actionCreator } from "../../../../redux/reducers/dialogsReducer";


const Messages = (props) => {
  const { ARR__MESSAGES, NEW_MESSAGE_TEXT, dispatch } = props;

  const onSent = (evt) => {
    evt.preventDefault()
    dispatch(ADD_MESSAGE_actionCreator())
  }

  const onChangeTextArea = (evt) => {
    const text = evt.target.value
    dispatch(UPDATE_NEW_MESSAGE_actionCreator(text));
  }

  return (
    <div className={s.messages}>
      <ul className={`list ${s.messages__list}`}>
        {ARR__MESSAGES.map((message, index) => {
          return (
            <li key={index} className={`post__item ${s.messages__item}`}>
              <Post item={message}/>
            </li>)
        })
        }
      </ul>
      <form className={s.messages__formSent}>
        <label className={`label`}>
          <textarea
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
