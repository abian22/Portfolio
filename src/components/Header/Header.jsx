import "./Header.css";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle"
import { Link } from "react-scroll";

export default function Header() {
  const headerOptions = ["Inicio", "Sobre mí", "Proyectos", "Contacto"];
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
            <DarkModeToggle/>
          </ul>
        </div>
      </header>
    </>
  );
}
