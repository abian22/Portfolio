import "./Header.css";
import { Link } from "react-scroll";
import { useTranslation } from "react-i18next";
import uk from "/Icons/ukflag.svg"
import spain from "/Icons/spainflag.svg"
import React, { useState } from "react";

export default function Header() {
  const [t, i18n] = useTranslation("global");
  const [selectedLanguage, setSelectedLanguage] = useState("es");

  function changeLanguage(language) {
    i18n.changeLanguage(language);
    setSelectedLanguage(language);
  }
  const headerOptions = [
    t("header.home"),
    t("header.aboutMe"),
    t("header.projects"),
    t("header.contact"),
  ];
  return (
    <>
      <header className="header">
        <div>
          <ul className="ulHeader">
            {headerOptions.map((option, index) => {
              return (
                <li className="headerli" key={index}>
                  <Link
                    to={option}
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                  >
                    {option}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          <img src={spain}  style={{height:"20px", marginRight:"20px"}} alt="spain flag"/>
          <button
            onClick={() => changeLanguage("es")}
            style={{
              fontFamily:"Nunito",
              fontWeight: selectedLanguage === "es" ? "bold" : "normal",
              color: selectedLanguage === "es" ? "rgb(5, 241, 255)":""

            }}
          >
            ES
          </button>
          <div
            style={{
              width: "1px",
              height: "20px",
              background: "#ccc",
              margin: "0 10px",
            }}
          ></div>
          <button
            onClick={() => changeLanguage("en")}
            style={{
              fontFamily:"Nunito",
              fontWeight: selectedLanguage === "en" ? "bold" : "normal",
              color: selectedLanguage === "en" ? "rgb(5, 241, 255)":""
            }}
          >
            EN
          </button>
          <img src={uk} style={{height:"20px", marginLeft:"20px"}} alt="UK flag"/>
        </div>
      </header>
    </>
  );
}
