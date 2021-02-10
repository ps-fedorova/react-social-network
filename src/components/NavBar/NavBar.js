import React from 'react';
import s from './NavBar.module.css'
import { NavLink } from "react-router-dom";

const NavBar = () => {

  const ARR__NAVBAR = [
    {
      key: "Profile",
      path: "/profile",
    },
    {
      key: "Messages",
      path: "/dialogs",
    },
    {
      key: "Friends",
      path: "/friends",
    },
    {
      key: "Settings",
      path: "/settings",
    },]

  return (
    <nav className={s.navBar}>
      <ul className="list">
        {ARR__NAVBAR.map((item, index) => {
          return (
            <li key={index} className={`post__item ${s.navBar__item}`}>
              <button className="button">
                <NavLink className="link" activeClassName="link_active"
                         to={item.path}>{item.key}</NavLink>
              </button>
            </li>
          )
        })
        }
      </ul>
    </nav>
  )
}

export default NavBar;

