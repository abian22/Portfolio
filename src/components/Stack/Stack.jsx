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
