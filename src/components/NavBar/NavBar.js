import React from 'react';
import s from './NavBar.module.css'

const NavBar = () => {
  const NavBarItem = ["Profile", "Messages", "News", "Music", "Settings"]

  return (
    <nav className={s.navBar}>
      <ul className="list">
        {NavBarItem.map((item, index) => {
          return (
            <li key={index} className={s.navBar__item}>
              <a className="link">{item}</a>
            </li>
          )
        })
        }
      </ul>
    </nav>
  )
}

export default NavBar;

