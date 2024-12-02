import React from "react";
//import "./Login.css";

const Login = () => {
  return (
    <div className="login">
      <h1>Вход</h1>
      <form className="login-form">
        <label>
          Логин:
          <input type="text" name="username" />
        </label>
        <label>
          Пароль:
          <input type="password" name="password" />
        </label>
        <button type="submit">Войти</button>
      </form>
    </div>
  );
};

export default Login;
