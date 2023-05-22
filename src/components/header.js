import React from "react";
import logo from "../images/Logo.svg";

function Header() {
  return (
    <div>
      <header className="header">
        <img src={logo} alt="логотип" className="header__logo" />
      </header>
    </div>
  );
}

export default Header;
