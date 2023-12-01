import "./Header.css";

export default function Header() {
  const headerOptions = [
    "Inicio",
    "Sobre mí",
    "Proyectos",
    "Contacto",
  ];
  return (
    <>
      <header className="header">
        <div>
          <ul className="ulHeader">
            {headerOptions.map((option, index) => {
              return <li className="headerli" key={index}>{option}</li>;
            })}
          </ul>
        </div>
      </header>
    </>
  );
}
