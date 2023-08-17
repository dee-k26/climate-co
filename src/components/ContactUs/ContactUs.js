import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
  return (
    <section id="contact-us" className="contact-us">
      <h2 className="contact-us__title">Contact Us</h2>
      <form className="contact-us__form">
        <div className="contact-us__form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="contact-us__form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="contact-us__form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" required />
        </div>
        <button type="submit">Submit</button>
      </form>
      <div className="contact-us__info">
        <p>
          Lara, VIC 3212
        </p>
        <p>
          Phone: <a className="contact-us__link-item" href="tel:+611300513799">1300 513 799</a>
          <br />
          Email: info@climateco.au
        </p>
      </div>
    </section>
  );
};

export default ContactUs;
