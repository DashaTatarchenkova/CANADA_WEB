import React, { useState } from "react";
import "./Login.css";

const Login = ({ switchToRegister }) => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const newErrors = {};

    if (formData.username.trim().length < 3) {
      newErrors.username = "Логин должен содержать минимум 3 символа.";
    }

    if (formData.password.trim().length < 6) {
      newErrors.password = "Пароль должен содержать минимум 6 символов.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      alert("Вы успешно вошли в систему!");
      setFormData({ username: "", password: "" });
      setErrors({});
    }
  };

  const getInputClass = (name, minLength) => {
    if (formData[name].trim().length >= minLength) {
      return "input-success";  
    } else if (errors[name]) {
      return "input-error";  
    }
    return "";
  };

  return (
    <div className="login">
      <h1 className="login-title">Вход</h1>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Логин</label>
          <input
            type="text"
            id="username"
            name="username"
            className={getInputClass("username", 3)}  
            placeholder="Введите логин"
            value={formData.username}
            onChange={handleChange}
          />
          {errors.username && <span className="error-message">{errors.username}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="password">Пароль</label>
          <input
            type="password"
            id="password"
            name="password"
            className={getInputClass("password", 6)}  
            placeholder="Введите пароль"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <span className="error-message">{errors.password}</span>}
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
