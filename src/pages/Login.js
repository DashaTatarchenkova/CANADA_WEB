import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="login">
      <h1>Вход</h1>
      <form className="login-form">
        <label>Логин </label>
          <input type="text" name="username" placeholder="user name" />
        <label>Пароль</label>
          <input type="password" name="password" placeholder="password" />
        <button type="submit">Войти</button>
      </form>
    </div>
  );
};

export default Login;
