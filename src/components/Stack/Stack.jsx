import html from "../../../public/html.svg";
import css from "../../../public/css.svg";
import js from "../../../public/javascript.svg";
import php from "../../../public/php.svg";
import node from "../../../public/node.svg";
import express from "../../../public/express.svg";
import laravel from "../../../public/laravel.svg";
import mongodb from "../../../public//mongodb.svg";
import mysql from "../../../public/mysql.svg";
import sequelize from "../../../public/sequelize.svg";
import react from "../../../public/react.svg";
import materialui from "../../../public/materialui.svg";
import tailwind from "../../../public/tailwind.svg";
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
    <section style={{ marginTop: "-40px" }}>
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
