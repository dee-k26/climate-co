import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
// import PrivacyPolicy from './PrivacyPolicy';
// import TermsAndConditions from './TermsAndConditions'; // Add this line
import ContactUsInfo from '../ContactUs/ContactUSInfo';

const Footer = () => {
  return (
    <footer className="footer">
      
      <div className="footer__links">
      <div >
        <p className="footer__copyright">
        &copy; Climate Co {new Date().getFullYear()}
      </p>
      </div>
        <div className="footer__link-item">
          <Link to="/terms-and-conditions" className="footer__link">Terms & Conditions</Link>
        </div>
        <div className="footer__link-item">
          <Link to="/privacy-policy" className="footer__link">Privacy Policy</Link>
        </div>
        <div className="footer__link-item">
        <ContactUsInfo />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
