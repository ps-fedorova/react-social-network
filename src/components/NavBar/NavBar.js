import React from 'react';
import s from './NavBar.module.css'

const NavBar = () => {
  return(
    <nav className={s.nav}>
      <ul className="list">
        <li>
          <a className="link">Profile</a>
        </li>
        <li>
          <a className="link">Messages</a>
        </li>
        <li>
          <a className="link">News</a>
        </li>
        <li>
          <a className="link">Music</a>
        </li>
        <li>
          <a className="link">Settings</a>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar;

