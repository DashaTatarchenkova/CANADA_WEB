import React from "react";
import "./Register.css";

const Register = ({ switchToLogin }) => {
  return (
    <div className="register">
      <h1 className="register-title">Регистрация</h1>
      <form className="register-form">
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Введите email" />
        </div>
        <div className="form-group">
          <label htmlFor="username">Логин</label>
          <input type="text" id="username" name="username" placeholder="Введите логин" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Пароль</label>
          <input type="password" id="password" name="password" placeholder="Введите пароль" />
        </div>
        <button type="submit" className="form-button">Зарегистрироваться</button>
      </form>
      <p className="switch-text">
        Уже есть аккаунт?{" "}
        <span className="switch-link" onClick={switchToLogin}>
          Войти
        </span>
      </p>
    </div>
  );
};

export default Register;
