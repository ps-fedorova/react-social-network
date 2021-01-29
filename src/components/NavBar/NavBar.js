import React from 'react';
import s from './NavBar.module.css'

const NavBar = () => {
  const NavBarItem = [
    {
      key: "Profile",
      path: "/"
    },
    {
      key: "Messages",
      path: "/messages"
    },
    {
      key: "Settings",
      path: "/settings"
    },
  ]

  return (
    <nav className={s.navBar}>
      <ul className="list">
        {NavBarItem.map((item, index) => {
          return (
            <li key={index} className={s.navBar__item}>
              <button className="button">
                <a className="link" href={item.path}>{item.key}</a>
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

