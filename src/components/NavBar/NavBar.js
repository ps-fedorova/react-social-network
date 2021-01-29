import React from 'react';
import s from './NavBar.module.css'
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const NavBarItem = [
    {
      key: "Profile",
      path: "/",
    },
    {
      key: "Messages",
      path: "/messages",
    },
    {
      key: "Settings",
      path: "/settings",
    },
  ]

  return (
    <nav className={s.navBar}>
      <ul className="list">
        {NavBarItem.map((item, index) => {
          return (
            <li key={index} className={s.navBar__item}>
              <button className="button">
                <NavLink exact className="link" activeClassName="link_active"
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

