import web from "/Icons/web.svg";
import tables from "/Icons/tables.svg";
import github from "/Icons/github.svg";
import "./Project.css";

export default function Project({ icon, isFront, demo, code, img, title, description }) {
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
        <p className="webText">Tables</p>
      </>
    );
  }

  return (
    <>
      <section className="projectContainer">
        <div className="projectImgContainer" >
          <a href={demo} target="_blank">
            <img className="projectImg" src={img} />
          </a>
        </div>
        <section className="projectContentContainer">
          <h3 className="projectTitle">{title}</h3>
          <p className="projectDescription">
            {description}
          </p>
          <div
          className="buttonContainer">
            <a href={demo} target="_blank">
              <button className="webButton">{button}</button>
            </a>
            <a target="_blank" href={code}>
              <div className="codeButton">
                <img src={github} className="codeIcon" alt="GitHub" />
                <button className="codeText">Código</button>
              </div>
            </a>
          </div>
        </section>
        <div>
        </div>
        <ul className="projectIconContainer">
          {icon.map((icon, index) => (
            <li key={index} className="projectIconList">
              <img src={icon} className="projectIcon" />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
