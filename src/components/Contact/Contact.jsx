import emailjs from "@emailjs/browser";
import { useRef } from "react";
import contact from "/public/Icons/contact.svg";
import email from "/public/Icons/email.svg";
import phone from "/public/Icons/phone.svg";
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
    <section id="Contacto">
      <div className="imageContainer">
        <h2>CONTACTO</h2>
        <img src={contact} className="imageStyle" />
      </div>
      <form onSubmit={sendEmail}>
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
        <textarea name="message" className="textarea-field" />
        <div className="button-container">
          <button className="submit-button">Enviar mensaje</button>
        </div>
      </form>
      <section className="footerContainer">
        <div className="emailContent">
          <img className="emailImg" src={email} />
          <p>abian.camejo@gmail.com</p>
        </div>

        <div className="phoneContent">
          <img className="phoneImg" src={phone} />
          <p>692 48 04 21</p>
        </div>
      </section>
    </section>
  );
}
