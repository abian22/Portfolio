import emailjs from "@emailjs/browser";
import { useRef } from "react";
import contact from "/Icons/contact.svg";
import email from "/Icons/email.svg";
import phone from "/Icons/phone.svg";
import { useTranslation } from "react-i18next";
import "./Contact.css";

export default function Contact() {
  const [t, i18n] = useTranslation("global");
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
        <h2>{t("contact.contact")}</h2>
        <img src={contact} alt="contact icon" className="imageStyle" />
      </div>
      <form onSubmit={sendEmail}>
        <input
          placeholder={t("contact.yourName")}
          name="user_name"
          className="input-field"
        />
        <input
          placeholder={t("contact.yourMessage")}
          name="user_email"
          className="input-field"
        />
        <textarea name="message" className="textarea-field" />
        <div className="button-container">
          <button className="submit-button">{t("contact.sendMessage")}</button>
        </div>
      </form>
      <footer className="footerContainer">
        <div className="emailContent">
          <img className="emailImg" src={email} alt="email icon" />
          <p>abian.camejo@gmail.com</p>
        </div>

        <div className="phoneContent">
          <img className="phoneImg" src={phone} alt="phone icon" />
          <p>692 48 04 21</p>
        </div>
      </footer>
    </section>
  );
}
