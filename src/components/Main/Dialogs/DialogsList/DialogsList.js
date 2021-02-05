import React from 'react';
import s from "./DialogsList.module.css"

import Post from "../../../../utils/ui-kit/Post/Post";
import { NavLink } from "react-router-dom";

const nameArray = ["Лиза", "Лена", "Света", "Даша", "Саша"]

const DialogsList = () => {

  return (
    <ul className={`list ${s.dialogsList}`}>
      {nameArray.map((nameContact, index) => {
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
