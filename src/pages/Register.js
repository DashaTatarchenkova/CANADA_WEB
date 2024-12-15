import React, { useState } from "react";
import "./Register.css";

const Register = ({ switchToLogin }) => {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [isConfirmed, setIsConfirmed] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.email.includes("@")) {
      newErrors.email = "Введите корректный email.";
    }

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
      setIsConfirmed(true); 
    }
  };

  const handleEdit = () => {
    setIsConfirmed(false); 
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
    <div className="register">
      <h1 className="register-title">Регистрация</h1>
      {isConfirmed ? (
        <div className="confirmation">
          <h2>Подтверждение</h2>
          <p><strong>Email:</strong> {formData.email}</p>
          <p><strong>Логин:</strong> {formData.username}</p>
          <p><strong>Пароль:</strong> {formData.password}</p>
          <button onClick={handleEdit} className="form-button">Изменить</button>
          <button onClick={() => alert("Регистрация завершена!")} className="form-button">Завершить регистрацию</button>
        </div>
      ) : (
        <form className="register-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className={errors.email ? "input-error" : formData.email ? "input-success" : ""}
              placeholder="Введите email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <span className="error-message">{errors.email}</span>}
          </div>
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
          <button type="submit" className="form-button">Зарегистрироваться</button>
        </form>
      )}
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
