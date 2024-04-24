import web from "/Icons/web.svg";
import tables from "/Icons/tables.svg";
import github from "/Icons/github.svg";
import { useTranslation } from "react-i18next";
import "./MongoProject.css"

export default function MongoProject({
  icon,
  isFront,
  demo,
  code,
  img,
  title,
  description,
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
      <section className="projectContainer">
        <div className="projectImgContainer">
          <a href={demo} target="_blank">
            <img
              className="projectImg"
              src={img}
              alt={"project" + { img } + "image"}
            />
          </a>
        </div>
        <section className="projectContentContainer">
          <h3 className="projectTitle">{title}</h3>
          <p className="projectDescription">{description}</p>
          <div className="buttonContainer">
            <a target="_blank" href={code}>
              <div className="codeButton">
                <img src={github} className="codeIcon" alt="GitHub" />
                <button className="codeText">{t("project.code")}</button>
              </div>
            </a>
          </div>
        </section>
        <ul className="projectIconContainer">
          {icon.map((icon, index) => (
            <li key={index} className="projectIconList">
              <img
                src={icon.icon}
                className="projectIcon"
                alt={{ title } + "icon"}
                title={icon.title}
              />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
