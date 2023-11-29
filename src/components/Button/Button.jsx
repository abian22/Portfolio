import "./Button.css";

export default function Button({ image, text }) {
  const backgroundColor = text === "Mi CV" ? "white" : "#0077B5";
  return (
    <button
      className="btn"
      style={{
        backgroundColor: backgroundColor,
      }}
    >
      <img src={image} />
      <text className="text">{text}</text>
    </button>
  );
}
