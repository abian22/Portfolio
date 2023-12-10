import ReactTyped from "react-typed";
import download from "/Icons/download.svg";
import cvpdf from "/CVFullStack.pdf"
import linkedin from "/Icons/linkedin.svg";
import Button from "../Button/Button";
import photo from "/Images/photo.webp"
import { useTranslation } from "react-i18next";
import "./Home.css";
export default function AboutMe() {
  const [t, i18n] = useTranslation("global");
  return (
    <>
      <div className="aboutMeContainer" id="Inicio">
        <div>
        <img src={photo} className="borderImgStyle" alt="profile photo"/>
        </div>
        <div>
          <h1 >
            <ReactTyped
              className="typeAnimation"
              strings={[
                t("home.string1"),
                t("home.string2"),
              ]}
              typeSpeed={50}
              backSpeed={30}
              loop
            />
          </h1>
          <section className="btnContainer">
            <a href={cvpdf} download="Abian CV">
            <Button  image={download} text={"CV"} />
            </a>
            <a href="https://www.linkedin.com/in/abi%C3%A1n-camejo-d%C3%ADaz-264761229/">
            <Button
              image={linkedin}
              text={"Linkedin"}
            />
            </a>
          </section>
        </div>
      </div>
    </>
  );
}
