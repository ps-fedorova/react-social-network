import React from 'react';
import logo from "../../images/logoWhite.png";
import s from "./Header.module.css"

const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.header__content}>
        <img className={s.header__img} src={logo} alt="logo"/>
        <h1 className={s.header__title}>Социальная сеть</h1>
      </div>
    </header>
  )
}

export default Header;
