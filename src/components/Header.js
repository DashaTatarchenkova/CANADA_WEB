import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import comp from "../images/comp.png";

const Header = ({ currentPage, onNavigate }) => {
  return (
    <header className="header">
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



