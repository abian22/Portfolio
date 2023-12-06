import bag from "/bag.svg";
import html from "/html.svg";
import css from "/css.svg";
import js from "/javascript.svg";
import node from "/node.svg";
import express from "/express.svg";
import Project from "../Project/Project";
import bd from "/bd.jpg";
import apetit from "/Apetit.jpg";
import ipTracker from "/ipTracker.jpg"
import eShop from "/eShop.jpg"
import sequelize from "/sequelize.svg"
import react from "/react.svg"
import materialUi from "/materialui.svg"
import piedraPapelTijeras from "/PiedraPapelTIjeras.jpg"

export default function Projects() {
  return (
    <>
      <section id="Proyectos">
        <div className="imageContainer">
          <h2>PROYECTOS</h2>
          <img src={bag} className="imageStyle" />
        </div>
        <Project
          isFront={false}
          img={bd}
          demo="https://dbdiagram.io/d/lego-64008414296d97641d84e822"
          code="https://github.com/abian22/real-backend"
          icon={[js, express, node, sequelize]}
        />
        <Project
          isFront={true}
          img={apetit}
          demo="https://appetitcomite.netlify.app/init"
          code="https://github.com/abian22/Frontend-React-Project-Apetit-Comite"
          icon={[html, css, js, react, materialUi]}
        />
        <Project
          isFront={true}
          img={ipTracker}
          demo="https://sunny-pavlova-6136b7.netlify.app/"
          code="https://github.com/abian22/IP-address-tracker"
          icon={[html, css, js, react]}
        />
            <Project
          isFront={true}
          img={eShop}
          demo="https://sunny-pavlova-6136b7.netlify.app/"
          code="https://github.com/abian22/e-commerce-product-page"
          icon={[html, css, js, react, materialUi]}
        />
            <Project
          isFront={true}
          img={piedraPapelTijeras}
          demo="https://sweet-quokka-370530.netlify.app/initialPage"
          code="https://github.com/abian22/Rock-Paper-Scissors-game"
          icon={[html, css, js, react]}
        />
      </section>
    </>
  );
}
