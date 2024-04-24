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
import tailwind from "/Icons/tailwind.svg";
import mongodb from "/Icons/mongodb.svg";
import bootstrap from "/Icons/bootstrap.svg";
import { useTranslation } from "react-i18next";
import OtherProjects from "../OtherProjects/OtherProjects";
import fedfodback from "/Images/fedfodback.PNG?url";
import fedfodfront from "/Images/fedfodfront.PNG?url";
import MongoProject from "../MongoProject/MongoProject";
import stripe from "/Icons/stripe.svg";
import oauth from "/Icons/oauth.svg";
import scss from "/Icons/scss.svg";
import i18next from "/Icons/i18next.svg";
import "./Projects.css";

export default function Projects() {
  const [t, i18n] = useTranslation("global");

  return (
    <>
      <section id="Proyectos">
        <div className="imageContainer">
          <h2>{t("projects.projects")}</h2>
          <img src={bag} className="imageStyle" alt="bag icon" />
        </div>

        <Project
          isFront={true}
          img={fedfodfront}
          title="FedFod front"
          description={t("projects.fedfodFrontDescription")}
          demo="https://fedfod.netlify.app/"
          code="https://github.com/abian22/FedFodFront"
          icon={[
            { icon: html, title: "HTML" },
            { icon: scss, title: "scss" },
            { icon: js, title: "JavaScript" },
            { icon: react, title: "React" },
            { icon: i18next, title: "i18next" },
          ]}
        />
        <MongoProject
          isFront={false}
          img={fedfodback}
          title="FedFod Backend"
          description={t("projects.fedfodBackDescription")}
          demo="https://github.com/abian22/FedFodBack"
          code="https://github.com/abian22/FedFodBack"
          icon={[
            { icon: js, title: "JavaScript" },
            { icon: express, title: "Express" },
            { icon: node, title: "Node.js" },
            { icon: mongodb, title: "MongoDB" },
            { icon: stripe, title: "Stripe" },
            { icon: oauth, title: "Oauth" },
          ]}
        />
        <Project
          isFront={false}
          img={bd}
          title={t("projects.recipesBackendTitle")}
          description={t("projects.recipesBackendDescription")}
          demo="https://dbdiagram.io/d/lego-64008414296d97641d84e822"
          code="https://github.com/abian22/real-backend"
          icon={[
            { icon: js, title: "JavaScript" },
            { icon: express, title: "Express" },
            { icon: node, title: "Node.js" },
            { icon: sequelize, title: "Sequelize" },
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
            { icon: html, title: "HTML" },
            { icon: css, title: "CSS" },
            { icon: js, title: "JavaScript" },
            { icon: react, title: "React" },
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
            { icon: html, title: "HTML" },
            { icon: css, title: "CSS" },
            { icon: js, title: "JavaScript" },
            { icon: react, title: "React" },
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
            { icon: html, title: "HTML" },
            { icon: css, title: "CSS" },
            { icon: js, title: "JavaScript" },
            { icon: react, title: "React" },
            { icon: materialUi, title: "Material-UI" },
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
            { icon: html, title: "HTML" },
            { icon: css, title: "CSS" },
            { icon: js, title: "JavaScript" },
            { icon: react, title: "React" },
          ]}
        />
        <section className="otherProjectsContainer">
          <OtherProjects
            isFront={true}
            title={t("projects.RatingComponentTitle")}
            description={t("projects.RatingComponentDescription")}
            demo="https://peppy-platypus-f6ea80.netlify.app/"
            code="https://github.com/abian22/Intractive-rating-component"
            icons={[
              { icon: html, title: "HTML" },
              { icon: css, title: "CSS" },
              { icon: js, title: "JavaScript" },
              { icon: react, title: "React" },
              { icon: materialUi, title: "Material-UI" },
            ]}
          />
          <OtherProjects
            isFront={true}
            title={t("projects.AgeCalculatorTitle")}
            description={t("projects.AgeCalculatorDescription")}
            demo="https://jazzy-sable-1f02d2.netlify.app/"
            code="https://github.com/abian22/Age-calculator"
            icons={[
              { icon: html, title: "HTML" },
              { icon: css, title: "CSS" },
              { icon: js, title: "JavaScript" },
              { icon: react, title: "React" },
              { icon: tailwind, title: "Tailwind" },
            ]}
          />
        </section>
        <section className="otherProjectsContainer">
          <OtherProjects
            isFront={true}
            title={t("projects.TipCalculatorTitle")}
            description={t("projects.TipCalculatorDescription")}
            demo="https://elegant-cat-79bbc4.netlify.app/"
            code="https://github.com/abian22/tip-calculator"
            icons={[
              { icon: html, title: "HTML" },
              { icon: css, title: "CSS" },
              { icon: js, title: "JavaScript" },
              { icon: react, title: "React" },
              { icon: tailwind, title: "Tailwind" },
            ]}
          />
          <OtherProjects
            isFront={true}
            title={t("projects.NotificationsPageTitle")}
            description={t("projects.NotificationsPageDescription")}
            demo="https://lustrous-taiyaki-f96d10.netlify.app/"
            code="https://github.com/abian22/Notification-page-frontend-mentor"
            icons={[
              { icon: html, title: "HTML" },
              { icon: css, title: "CSS" },
              { icon: js, title: "JavaScript" },
              { icon: react, title: "React" },
              { icon: bootstrap, title: "Bootstrap" },
            ]}
          />
        </section>
        <section className="otherProjectsContainer">
          <OtherProjects
            isFront={true}
            title={t("projects.CommentsSectionTitle")}
            description={t("projects.CommentsSectionDescription")}
            demo="https://visionary-pony-68063e.netlify.app/"
            code="https://github.com/abian22/interactive-comment-section"
            icons={[
              { icon: html, title: "HTML" },
              { icon: css, title: "CSS" },
              { icon: js, title: "JavaScript" },
              { icon: react, title: "React" },
              { icon: materialUi, title: "Material-UI" },
            ]}
          />
          <OtherProjects
            isFront={true}
            title={t("projects.CountdownTitle")}
            description={t("projects.CountdownDescription")}
            demo="https://soft-bubblegum-202fb6.netlify.app/"
            code="https://github.com/abian22/Launch-countdown-timer"
            icons={[
              { icon: html, title: "HTML" },
              { icon: css, title: "CSS" },
              { icon: js, title: "JavaScript" },
              { icon: react, title: "React" },
            ]}
          />
        </section>
      </section>
    </>
  );
}
