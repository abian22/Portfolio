import Formation from "../Formation/Formation";
import Stack from "../Stack/Stack";
import pencil from "/Icons/pencil.svg";
import "./AboutMe.css";

export default function AboutMe() {
  return (
    <>
      <section id="Sobre mí">
        <div className="imageContainer">
          <h2>SOBRE MÍ</h2>
          <img src={pencil} alt="pencil icon" className="imageStyle" />
        </div>
        <h3 className="subTitle">Formación</h3>
        <div className="formationContainer">
          <Formation
            formation={"Bootcamp FullStack"}
            center={"Reboot Academy"}
            year={"2022-2023"}
          />
          <Formation
            formation={"JavaScript Algorithms and Data Structure"}
            center={"FreeCodeCamp"}
            year={"2022-2023"}
          />
          <Formation
            formation={"Responsive Web Design"}
            center={"FreeCodeCamp"}
            year={"2023"}
          />
          <Formation
            formation={
              "React - The Complete Guide 2023 (incl. React Router & Redux)"
            }
            center={"Udemy"}
            year={"En curso"}
          />
        </div>
        <Stack />
      </section>
    </>
  );
}
