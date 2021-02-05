import React from 'react';
import s from "./DialogsList.module.css"

import Post from "../../../../utils/ui-kit/Post/Post";
import { NavLink } from "react-router-dom";

const DialogsList = (props) => {
const {ARR__NAME} = props;
  return (
    <ul className={`list ${s.dialogsList}`}>
      {ARR__NAME.map((nameContact, index) => {
        return (
          <li key={index} className="post__item">
            <NavLink to={`/dialogs/${index}`} className="link" activeClassName="link_active">
              <Post item={nameContact}/>
            </NavLink>
          </li>
        )
      })
      }
    </ul>
  )
}

export default DialogsList;
