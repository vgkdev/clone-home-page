import React from "react";
import "./Header.scss";

const Header = () => {
  return (
    <div>
      <div className="header">
        <a href="#default" className="logo">
          bikcraft
        </a>
        <div className="header-right">
          <a className="active" href="#home">
            Bicycles
          </a>
          <a href="#contact">Insurance</a>
          <a href="#about">Contact</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
