import web from "/Icons/web.svg";
import tables from "/Icons/tables.svg";
import github from "/Icons/github.svg";
import { useTranslation } from "react-i18next";

import "./OtherProjects.css";

export default function OtherProjects({
  title,
  description,
  icons,
  isFront,
  demo,
  code,
}) {
  const [t, i18n] = useTranslation("global");

  let button;

  if (isFront === true) {
    button = (
      <>
        <img src={web} className="webIcon" alt="Web" />
        <p className="webText">Web</p>
      </>
    );
  } else if (isFront === false) {
    button = (
      <>
        <img src={tables} className="webIcon" alt="Tables" />
        <p className="webText">{t("project.tables")}</p>
      </>
    );
  }
  return (
    <>
      <div className="container">
        <ul className="list">
          <li>
            <div className="item">
              <h2 className="title">{title}</h2>
              <p className="description">{description}</p>
              <div className="buttonContainer">
                <a href={demo} target="_blank">
                  <button className="webButton">{button}</button>
                </a>
                <a target="_blank" href={code}>
                  <div className="codeButton">
                    <img src={github} className="codeIcon" alt="GitHub" />
                    <button className="codeText">{t("project.code")}</button>
                  </div>
                </a>
              </div>

              <ul className="otherProjectsIcons">
                {icons.map((icon, index) => (
                  <li
                    key={index}
                    style={{ flexDirection: "row", marginTop: "5px" }}
                  >
                    <img
                      src={icon.icon}
                      className="projectIcon"
                      alt={{ title } + "icon"}
                      title={icon.title}
                      style={{ marginTop: "10px" }}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}
