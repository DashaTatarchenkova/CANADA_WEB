import React from "react";
import "./Feedback.css";

const Feedback = () => {
  return (
    <section className="feedback">
      <h3>Оставьте отзыв</h3>
      <form>
        <input type="text" placeholder="Ваше имя" required />
        <input type="email" placeholder="Ваш email" required />
        <textarea placeholder="Ваш отзыв" rows="4" required></textarea>
        <button type="submit">Отправить</button>
      </form>
    </section>
  );
};

export default Feedback;
