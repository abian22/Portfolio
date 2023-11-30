import "./Formation.css";

export default function Formation({ formation, center, year }) {
  return (
    <>
      <ul>
        <span className="pointList">&#8226;</span>
        <li className="liFormation">
          <h4>{formation}</h4>
          <p>{center}</p>
          <p> {year}</p>
        </li>
      </ul>
    </>
  );
}
