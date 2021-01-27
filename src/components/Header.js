import React from 'react';
import logo from "../images/logoWhite.png";

const Header = () => {
  return (
    <header className="header">
      <img className="headerImg" src={logo} alt="logo"/>
    </header>
  )
}

export default Header;
