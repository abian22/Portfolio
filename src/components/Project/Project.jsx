import web from "../../../public/web.svg";
import tables from "../../../public/tables.svg";
import github from "../../../public/github.svg";
import "./Project.css";

export default function Project({ icon, isFront, demo, code, img }) {
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
      <div className="projectContainer">
        <div className="projectImgContainer">
          <a href={demo} target="_blank">
            <img className="projectImg" src={img} />
          </a>
        </div>
        <div className="projectContentContainer">
          <h3 className="projectTitle">Titulo</h3>

          <p className="projectDescription">
            Descripción Descripción Descripción Descripción Descripc
            Descripción Descripción Descripción Descripción Descripc
            Descripción Descripción Descripción Descripción Descripcds
           
          </p>
          <section
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              marginBottom: "5px",
            }}
          >
            <a href={demo} target="_blank">
              <div className="webButton">{button}</div>
            </a>
            <a target="_blank" href={code}>
              <div className="codeButton">
                <img src={github} className="codeIcon" alt="GitHub" />
                <p className="codeText">Código</p>
              </div>
            </a>
          </section>
        </div>
        <ul className="projectIconContainer">
          {icon.map((icon, index) => (
            <li key={index} className="projectIconList">
              <img src={icon} className="projectIcon" />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
