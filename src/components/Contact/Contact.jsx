import emailjs from "@emailjs/browser";
import { useRef } from "react";
import contact from "/contact.svg";
import email from "/email.svg";
import phone from "/phone.svg";
import "./Contact.css";

export default function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_h2oz7v9",
        "template_vekq08f",
        form.current,
        "67Q-SQTle_7URTNaZ"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <section
      id="Contacto"
      style={{
        display: "flex",
        flexDirection: "column",
        marginTop: "30px",
        alignItems: "center",
      }}
    >
      <div className="imageContainer">
        <h2>CONTACTO</h2>
        <img src={contact} className="imageStyle" />
      </div>
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
        }}
      >
        <form
          onSubmit={sendEmail}
          style={{
            flexDirection: "column",
            marginTop: "20px",
            marginBottom: "20px",
          }}
        >
          <input
            placeholder="Tu nombre..."
            name="user_name"
            className="input-field"
          />
          <input
            placeholder="Tu email..."
            name="user_email"
            className="input-field"
          />
          <textarea name="message" className="textarea-field"></textarea>
          <div className="button-container">
            <button className="submit-button">Enviar mensaje</button>
          </div>
        </form>
      </div>

      <div className="footer">
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src={email}
            style={{
              marginRight: "10px",
              alignSelf: "flex-start",
              height: "30px",
              marginTop: "6px",
            }}
          />
          <p>abian.camejo@gmail.com</p>
        </div>

        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src={phone}
            style={{
              marginRight: "10px",
              alignSelf: "flex-start",
              height: "30px",
              marginTop: "6px",
            }}
          />
          <p>692 48 04 21</p>
        </div>
      </div>
    </section>
  );
}
