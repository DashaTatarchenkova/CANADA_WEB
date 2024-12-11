import React from "react";
import "./Login.css";

const Login = ({ switchToRegister }) => {
  return (
    <div className="login">
      <h1 className="login-title">Вход</h1>
      <form className="login-form">
        <div className="form-group">
          <label htmlFor="username">Логин</label>
          <input type="text" id="username" name="username" placeholder="Введите логин" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Пароль</label>
          <input type="password" id="password" name="password" placeholder="Введите пароль" />
        </div>
        <button type="submit" className="form-button">Войти</button>
      </form>
      <p className="switch-text">
        Нет аккаунта?{" "}
        <span className="switch-link" onClick={switchToRegister}>
          Зарегистрироваться
        </span>
      </p>
    </div>
  );
};

export default Login;
