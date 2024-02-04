import React, { useEffect } from "react";
import "./Contact.css";
import Aos from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="contact">
      <div className="contact-container">
        <h1>Contact me.</h1>
        <p>Submit the form below or shoot me an email - nmnayana62@gmail.com</p>
        <form
          data-aos="fade-up"
          className="contact-form"
          method="POST"
          action="https://getform.io/f/f8c09c74-fe6f-4434-bd9a-b610536eb333"
        >
          <input type="text" placeholder="Name" name="name" required />
          <input type="email" placeholder="Email" name="email" required />
          <textarea name="message" rows="10" placeholder="Message"></textarea>
          <button>Let's Collaborate</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
