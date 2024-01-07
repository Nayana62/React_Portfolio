import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-container">
        <h1>Contact me.</h1>
        <p>Submit the form below or shoot me an email - nmnayana62@gmail.com</p>
        <form
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
