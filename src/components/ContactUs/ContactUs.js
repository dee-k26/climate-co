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
    </section>
  );
};

export default ContactUs;
