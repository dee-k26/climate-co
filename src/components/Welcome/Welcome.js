import React from 'react';
import './Welcome.css';
import Compliance from './Compliance';
import Introduction from './Introduction';
import { Link } from 'react-router-dom';

function Welcome() {
  return (
    <div className="welcome">
      <Introduction />
      <Compliance />
      <a className="welcome__cta-button" href="tel:+611300513799">Call Us</a>
      </div>
  );
}

export default Welcome;