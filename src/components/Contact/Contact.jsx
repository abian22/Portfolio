import emailjs from '@emailjs/browser';
import { useRef } from 'react';

export default function Contact () {
    const form = useRef()
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_h2oz7v9', 'template_vekq08f', form.current, '67Q-SQTle_7URTNaZ')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
      };

    return(
        <>
        <section>
            <div>
                <h2>

                </h2>
                <form ref={form} onSubmit={sendEmail}>
                    <input placeholder='Your name...' name="user_name"/>
                    <input placeholder='Your email...' name="user_email"/>
                    <input name="subject"/>
                    <textarea name="message"></textarea>
                    <button>Send</button>
                </form>
            </div>
        </section>
        </>
    )
}