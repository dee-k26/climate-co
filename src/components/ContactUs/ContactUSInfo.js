import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
  return (
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
  );
};

export default ContactUs;