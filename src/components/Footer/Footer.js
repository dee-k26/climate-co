import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
// import PrivacyPolicy from './PrivacyPolicy';


const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer__copyright">
        &copy; Climate Co {new Date().getFullYear()}
      </p>
      <div className="footer__links">
        <Link to="/TermsAndConditions" className="footer__link">Terms & Conditions</Link>
        <Link to="/PrivacyPolicy" className="footer__link">Privacy Policy</Link>
      </div>
    </footer>
  );
};

export default Footer;