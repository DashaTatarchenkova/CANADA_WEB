import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";
import logo from "../images/logo.png";


function Navigation({ currentPage, onNavigate }) {
    return (
      <div className="Navigate">
        <div className="header-top">
          <div className="header-logo">
            <img src={logo} alt="Canada Logo" className="logo" />
            <span className="project-name">CANADA</span>
          </div>
          <nav className="nav">
            <button
              onClick={() => onNavigate("/")}
              className={currentPage === "/" ? "active" : ""}
            >
              Главная
            </button>
            <button
              onClick={() => onNavigate("/documentation")}
              className={currentPage === "/documentation" ? "active" : ""}
            >
              Документация
            </button>
            <button
              onClick={() => onNavigate("/login")}
              className={currentPage === "/login" ? "active" : ""}
            >
              Вход
            </button>
          </nav>
        </div>
      </div>
    );
  }
  
export default Navigation;



