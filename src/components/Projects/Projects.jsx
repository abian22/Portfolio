import bag from "/Icons/bag.svg";
import html from "/Icons/html.svg";
import css from "/Icons/css.svg";
import js from "/Icons/javascript.svg";
import node from "/Icons/node.svg";
import express from "/Icons/express.svg";
import Project from "../Project/Project";
import bd from "/Images/bd.webp";
import apetit from "/Images/apetit.webp";
import piedraPapel from "/Images/PiedraPapel.webp";
import ipTracker from "/Images/ipTracker.webp";
import eShop from "/Images/eShop.webp";
import sequelize from "/Icons/sequelize.svg";
import react from "/Icons/react.svg";
import materialUi from "/Icons/materialui.svg";
import { useTranslation } from "react-i18next";

export default function Projects() {
  const [t, i18n] = useTranslation("global");


  return (
    <>
      <section id="Proyectos">
        <div className="imageContainer">
          <h2>{t("projects.projects")}</h2>
          <img src={bag} className="imageStyle" alt="bag icon"/>
        </div>

        <Project
          isFront={false}
          img={bd}
          title={t("projects.recipesBackendTitle")}
          description={t("projects.recipesBackendDescription")}
          demo="https://dbdiagram.io/d/lego-64008414296d97641d84e822"
          code="https://github.com/abian22/real-backend"
          icon={[
            {icon: js, title: "JavaScript" },
            {icon: express, title: "Express" },
            {icon: node, title: "Node.js" },
            {icon: sequelize, title: "Sequelize" },
          ]}
 
        />
        <Project
          isFront={true}
          img={apetit}
          title={t("projects.recipesFrontendTitle")}
          description={t("projects.recipesFrontendDescription")}
          demo="https://appetitcomite.netlify.app/init"
          code="https://github.com/abian22/Frontend-React-Project-Apetit-Comite"
          icon={[
            {icon: html, title: "HTML" },
            {icon: css, title: "CSS" },
            {icon: js, title: "JavaScript" },
            {icon: react, title: "React" },
          ]}          
        />
        <Project
          isFront={true}
          img={ipTracker}
          title={t("projects.ipTrackerTitle")}
          description={t("projects.ipTrackerDescription")}
          demo="https://sunny-pavlova-6136b7.netlify.app/"
          code="https://github.com/abian22/IP-address-tracker"
          icon={[
            {icon: html, title: "HTML" },
            {icon: css, title: "CSS" },
            {icon: js, title: "JavaScript" },
            {icon: react, title: "React" },
          ]}
        />
        <Project
          isFront={true}
          img={eShop}
          title={t("projects.eCommerceTitle")}
          description={t("projects.eCommerceDescription")}
          demo="https://deft-centaur-514825.netlify.app/"
          code="https://github.com/abian22/e-commerce-product-page"
          icon={[
            {icon: html, title: "HTML" },
            {icon: css, title: "CSS" },
            {icon: js, title: "JavaScript" },
            {icon: react, title: "React" },
            {icon: materialUi, title:"Material-UI"}
          ]}
        />
        <Project
          isFront={true}
          img={piedraPapel}
          title={t("projects.rockPaperTitle")}
          description={t("projects.rockPaperDescription")}
          demo="https://sweet-quokka-370530.netlify.app/initialPage"
          code="https://github.com/abian22/Rock-Paper-Scissors-game"
          icon={[
            {icon: html, title: "HTML" },
            {icon: css, title: "CSS" },
            {icon: js, title: "JavaScript" },
            {icon: react, title: "React" },
          ]}
        />
      </section>
    </>
  );
}
