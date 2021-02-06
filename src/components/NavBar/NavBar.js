import React from 'react';
import s from './NavBar.module.css'
import { NavLink } from "react-router-dom";

const NavBar = (props) => {
  const { ARR__NAVBAR } = props.state.navBar
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

