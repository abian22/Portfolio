import html from "/html.svg";
import css from "/css.svg";
import js from "/javascript.svg";
import php from "/php.svg";
import node from "/node.svg";
import express from "/express.svg";
import laravel from "/laravel.svg";
import mongodb from "/mongodb.svg";
import mysql from "/mysql.svg";
import sequelize from "/sequelize.svg";
import react from "/react.svg";
import materialui from "/materialui.svg";
import tailwind from "/tailwind.svg";
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
