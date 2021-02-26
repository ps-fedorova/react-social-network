import React from 'react';
import { NavLink, Redirect } from "react-router-dom";
import s from "./DialogsList.module.css"
import Post from "../../../../utils/ui-kit/Post/Post";

const DialogsList = (props) => {
  const { dialogs, auth } = props;

  if (!auth) return <Redirect to={"/login"}/>

  return (
    <ul className={`list ${s.dialogsList}`}>
      {dialogs.ARR__NAME.map((nameContact, index) => {
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
