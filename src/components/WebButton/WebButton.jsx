import { useTranslation } from "react-i18next";

export default function WebButton() {

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
    )
}