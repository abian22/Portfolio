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
          <ul>
            {headerOptions.map((option, index) => {
              return <li key={index}>{option}</li>;
            })}
          </ul>
        </div>
      </header>
    </>
  );
}
