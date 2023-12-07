import html from "/public/Icons/html.svg";
import css from "/public/Icons/css.svg";
import js from "/public/Icons/javascript.svg";
import php from "/public/Icons/php.svg";
import node from "/public/Icons/node.svg";
import express from "/public/Icons/express.svg";
import laravel from "/public/Icons/laravel.svg";
import mongodb from "/public/Icons/mongodb.svg";
import mysql from "/public/Icons/mysql.svg";
import sequelize from "/public/Icons/sequelize.svg";
import react from "/public/Icons/react.svg";
import materialui from "/public/Icons/materialui.svg";
import tailwind from "/public/Icons/tailwind.svg";
import "./Stack.css"
export default function Stack() {
  const icons = [
    html,
    css,
    js,
    php,
    node,
    express,
    laravel,
    mongodb,
    mysql,
    sequelize,
    react,
    materialui,
    tailwind,
  ];
  return (
    <section className="stack" style={{ marginTop: "-40px", }}>
      <h3 className="subTitle">Stack</h3>
      {icons.map((icon, index) => {
        return (
          <img
          className="iconStyle"
            src={icon}
            key={index}
          />
        );
      })}
    </section>
  );
}
