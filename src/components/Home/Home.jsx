import ReactTyped from "react-typed";
import download from "/download.svg";
import cvpdf from "/CVFullStack.pdf"
import linkedin from "/linkedin.svg";
import Button from "../Button/Button";
import "./Home.css";
export default function AboutMe() {
  return (
    <>
      <div className="aboutMeContainer" id="Inicio">
        <div>
        <img className="borderImgStyle"/>
        </div>
        <div>
          <h1 >
            <ReactTyped
              className="typeAnimation"
              strings={[
                "Hola!. Soy Abián Camejo",
                "Soy desarrollador web Fullstack",
              ]}
              typeSpeed={50}
              backSpeed={30}
              loop
            />
          </h1>
          <section className="btnContainer">
            <a href={cvpdf} download="Abian CV">
            <Button className="cv" image={download} text={"Mi CV"} />
            </a>
            <a href="https://www.linkedin.com/in/abi%C3%A1n-camejo-d%C3%ADaz-264761229/">
            <Button
              className="linkedin"
              image={linkedin}
              text={"Mi Linkedin"}
            />
            </a>
          </section>
        </div>
      </div>
    </>
  );
}
