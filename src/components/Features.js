import React from "react";
import "./Features.css";
import fileSystemImg from "../images/FS.png";
import diskInfoImg from "../images/info.png";
import diskImageImg from "../images/harddisk.png";

function Features () {
  const features = [
    {
      title: "Поддержка различных файловых систем",
      img: fileSystemImg,
    },
    {
      title: "Просмотр информации о конкретном диске",
      img: diskInfoImg,
    },
    {
      title: "Создание образов диска разных форматов",
      img: diskImageImg,
    },
  ];

  return (
    <section className="features">
      <h2>CANADA Project</h2>
      <h3>Основные возможности</h3>
      <div className="features-list">
        {features.map((feature, index) => (
          <div key={index} className="feature-item">
            <img src={feature.img} alt={feature.title} className="feature-image" />
            <p>{feature.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
