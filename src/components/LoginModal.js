import React from "react";
import "./LoginModal.css";
import Login from "../pages/Login";
import Register from "../pages/Register";

const LoginModal = ({ isRegister, closeModal, switchToRegister, switchToLogin }) => {
  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className={`form-container ${isRegister ? "show-register" : ""}`}>
          <div className="form-login">
            <Login switchToRegister={switchToRegister} />
          </div>
          <div className="form-register">
            <Register switchToLogin={switchToLogin} />
          </div>
        </div>
        <button className="close-button" onClick={closeModal}>
          ✖
        </button>
      </div>
    </div>
  );
};

export default LoginModal;
