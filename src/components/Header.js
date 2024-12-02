import React from "react";
import "./Header.css";
import logo from "../images/logo.png"; 
import comp from "../images/comp.png"; 

const Header = () => {
  return (
    <header className="header">
      <div className="header-top">
        <div className="header-logo">
          <img src={logo} alt="Canada Logo" className="logo" />
          <span className="project-name">CANADA</span>
        </div>
        <nav className="nav">
          <a href="#documentation">Документация</a>
          <a href="#login">Вход</a>
        </nav>
      </div>
      <div className="header-content">
        <p className="description">
          Мы обеспечиваем пользователей по всему миру наиболее эффективным, надежным и экономичным
          решением из доступных на рынке программного обеспечения.
        </p>
        <img src={comp} alt="Computer" className="comp" />
      </div>
      <div className="platforms">
        <span>Windows</span>
        <span>Linux</span>
      </div>
    </header>
  );
};

export default Header;
