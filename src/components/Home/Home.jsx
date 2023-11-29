import ReactTyped from "react-typed";
import cv from "../../../public/cv.svg";
import linkedin from "../../../public/linkedin.svg";
import Button from "../Button/Button";
import "./Home.css";
export default function AboutMe() {
  return (
    <>
      <div className="aboutMeContainer">
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
            <Button className="cv" image={cv} text={"Mi CV"} />
            <Button
              className="linkedin"
              image={linkedin}
              text={"Mi Linkedin"}
            />
          </section>
        </div>
      </div>
    </>
  );
}
