import bag from "/bag.svg";
import html from "/html.svg";
import css from "/css.svg";
import js from "/javascript.svg";
import node from "/node.svg";
import express from "/express.svg";
import Project from "../Project/Project";
import bd from "/bd.jpg";
import apetit from "/apetit.jpg";
import piedraPapel from "/PiedraPapel.jpg";
import ipTracker from "/ipTracker.jpg";
import eShop from "/eShop.jpg";
import sequelize from "/sequelize.svg";
import react from "/react.svg";
import materialUi from "/materialui.svg";

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
          title="Backend página de recetas"
          description="Implementación del backend para una plataforma de recetas en la cual organizar tus dietas semanales"
          demo="https://dbdiagram.io/d/lego-64008414296d97641d84e822"
          code="https://github.com/abian22/real-backend"
          icon={[js, express, node, sequelize]}
        />
        <Project
          isFront={true}
          img={apetit}
          title="Frontend página de recetas"
          description="Desarrollo del frontend para una página de recetas. Presentamos las recetas de una manera atractiva y fácil de seguir,para que el usuario no pierda mucho tiempo eligiendo recetas"
          demo="https://appetitcomite.netlify.app/init"
          code="https://github.com/abian22/Frontend-React-Project-Apetit-Comite"
          icon={[html, css, js, react, materialUi]}
        />
        <Project
          isFront={true}
          img={ipTracker}
          title="IpTracker: frontendmentor reto intermedio"
          description="Este proyecto implica la creación de una interfaz de usuario interactiva que permite rastrear la ubicación de una dirección IP"
          demo="https://sunny-pavlova-6136b7.netlify.app/"
          code="https://github.com/abian22/IP-address-tracker"
          icon={[html, css, js, react]}
        />
        <Project
          isFront={true}
          img={eShop}
          title="E-Commerce: frontendmentor reto intermedio"
          description="Construcción de una parte de un comercio electrónico, se puede ver las diferentes fotos del productos y añadir o quitar productos al carrito"
          demo="https://sunny-pavlova-6136b7.netlify.app/"
          code="https://github.com/abian22/e-commerce-product-page"
          icon={[html, css, js, react, materialUi]}
        />
        <Project
          isFront={true}
          img={piedraPapel}
          title="Piedra papel tijeras: frontendmentor reto avanzado"
          description="Juego interactivo de piedra papel o tijeras que puedes jugar contra el cpu"
          demo="https://sweet-quokka-370530.netlify.app/initialPage"
          code="https://github.com/abian22/Rock-Paper-Scissors-game"
          icon={[html, css, js, react]}
        />
      </section>
    </>
  );
}
