import html from "/Icons/html.svg";
import css from "/Icons/css.svg";
import js from "/Icons/javascript.svg";
import php from "/Icons/php.svg";
import node from "/Icons/node.svg";
import express from "/Icons/express.svg";
import laravel from "/Icons/laravel.svg";
import mongodb from "/Icons/mongodb.svg";
import mysql from "/Icons/mysql.svg";
import sequelize from "/Icons/sequelize.svg";
import react from "/Icons/react.svg";
import materialui from "/Icons/materialui.svg";
import tailwind from "/Icons/tailwind.svg";
import scss from "/Icons/scss.svg"
import "./Stack.css"
export default function Stack() {
  const icons = [
    { icon: html, title: "HTML" },
    { icon: css, title: "CSS" },
    { icon: js, title: "JavaScript" },
    { icon: php, title: "PHP" },
    { icon: node, title: "Node.js" },
    { icon: express, title: "Express" },
    { icon: laravel, title: "Laravel" },
    { icon: mongodb, title: "MongoDB" },
    { icon: mysql, title: "MySQL" },
    { icon: sequelize, title: "Sequelize" },
    { icon: react, title: "React" },
    { icon: materialui, title: "Material-UI" },
    { icon: tailwind, title: "Tailwind CSS" },
    { icon: scss, title: "Scss" },
  ];
  return (
    <section className="stack" style={{ marginTop: "-40px", }}>
      <h3 className="subTitle">Stack</h3>
      {icons.map((icon, index) => {
        return (
          <img
          className="iconStyle"
            src={icon.icon}
            key={index}
            alt={`${icon.title} icon`}
            title={icon.title}
          />
        );
      })}
    </section>
  );
}
