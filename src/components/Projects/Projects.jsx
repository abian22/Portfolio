import bag from "../../../public/bag.svg";
import html from "../../../public/html.svg";
import css from "../../../public/css.svg";
import js from "../../../public/javascript.svg";
import php from "../../../public/php.svg";
import node from "../../../public/node.svg";
import express from "../../../public/express.svg";
import "./Projects.css";

export default function Projects() {
  const iconExample = [html, css, js, php, node, express];

  return (
    <>
      <section>
        <div className="imageContainer">
          <h2>PROYECTOS</h2>
          <img src={bag} className="imageStyle" />
        </div>

        <div
          style={{
            height: "180px",
            width: "100%",
            border: "solid",
            display: "flex",
            maxHeight: "180px",
          }}
        >
          <div
            style={{
              border: "solid",
              margin: "5px",
              width: "320px",
              height: "165px",
            }}
          ></div>
          <div style={{ width: "100%", textAlign: "center" }}>
            <h3
              style={{
                marginTop: "20px",
                marginRight: "70px",
              }}
            >
              Titulo
            </h3>
            <p style={{ padding: "8px", textAlign: "left" }}>
              Descripción Descripción Descripción Descripción Descripción
              Descripción Descripción Descripción Descripción Descripción
              Descripción Descripción Descripción Descripción Descripción
            </p>
          </div>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              marginTop: "8px",
              marginRight: "10px",
            }}
          >
            {iconExample.map((icon, index) => (
              <li key={index} style={{ marginBottom: "2px" }}>
                <img src={icon} style={{ width: "30px", maxHeight: "20px" }} />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
