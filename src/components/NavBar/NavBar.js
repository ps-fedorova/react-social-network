import React from 'react';
import s from './NavBar.module.css'
import { NavLink } from "react-router-dom";

const NavBar = () => {

  const ARR__NAVBAR = [
    {
      sign: "fa fa-home fa-fw",
      key: " Profile",
      path: "/profile",
    },
    {
      sign: "fa fa-comments-o fa-fw",
      key: " Messages",
      path: "/dialogs",
    },
    {
      sign: "fa fa-child fa-fw",
      key: " Friends",
      path: "/friends",
    },
    {
      sign: "fa fa-search fa-fw",
      key: " Find users",
      path: "/find-users",
    },
    {
      sign: "fa fa-gear fa-fw",
      key: " Settings",
      path: "/settings",
    },
  ]

  return (
    <nav className={s.navBar}>
      <ul className="list">
        {ARR__NAVBAR.map((item, index) => {
          return (
            <li key={index} className={`post__item ${s.navBar__item}`}>
              <button className="button">
                <NavLink className="link" activeClassName="link_active" to={item.path}>
                  <span className={item.sign}/>
                  <span>{item.key}</span>
                </NavLink>
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

