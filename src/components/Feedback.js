import React, { useState } from "react";
import "./Feedback.css";

function Feedback() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    feedback: "",
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const validate = () => {
    const newErrors = {};
    
    if (formData.name.trim().length < 2) {
      newErrors.name = "Имя должно содержать минимум 2 символа.";
    }

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(formData.email.trim())) {
      newErrors.email = "Введите корректный E-mail.";
    }

    if (formData.feedback.trim().length < 10) {
      newErrors.feedback = "Отзыв должен содержать минимум 10 символов.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccessMessage("");

    if (validate()) {
      setSuccessMessage("Спасибо за ваш отзыв!");
      setFormData({ name: "", email: "", feedback: "" });
      setErrors({});
    }
  };

  return (
    <section className="feedback">
      <h3>Оставьте отзыв</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="name"
            placeholder="Ваше имя"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <span className="error__message">{errors.name}</span>}
        </div>

        <div>
          <input
            type="email"
            name="email"
            placeholder="Ваш email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span className="error__message">{errors.email}</span>}
        </div>

        <div>
          <textarea
            name="feedback"
            placeholder="Ваш отзыв"
            rows="4"
            value={formData.feedback}
            onChange={handleChange}
          ></textarea>
          {errors.feedback && <span className="error__message">{errors.feedback}</span>}
        </div>

        <button type="submit">Отправить</button>
      </form>

      {successMessage && <p className="success__message">{successMessage}</p>}
    </section>
  );
}

export default Feedback;
