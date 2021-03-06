import React from 'react';
// import logo from "../../images/logoWhite.png";
import s from "./Header.module.css"
import { NavLink } from "react-router-dom";

const Header = ({ auth, login }) => {
  return (
    <header className={s.header}>
      <div className={s.header__content}>
        {/*<img className={s.header__img} src={logo} alt="logo"/>*/}
        <h1 className={s.header__title}>Social network</h1>
      </div>
      <div className={s.header__login}>
        <NavLink className="link" to={"/login"}>
          {auth ? login : "LOGIN"}
        </NavLink>
      </div>
    </header>
  )
}

export default Header;
