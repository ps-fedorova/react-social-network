import React from 'react';
import s from "./DialogsList.module.css"

import Post from "../../../../utils/ui-kit/Post/Post";


const DialogsList = () => {
  return (
    <ul className={`list ${s.dialogsList}`}>
      <li className="post__item">
        <Post/>
      </li>
      <li className="post__item">
        <Post/>
      </li>
      <li className="post__item">
        <Post/>
      </li>
      <li className="post__item">
        <Post/>
      </li>
    </ul>
  )
}

export default DialogsList;
