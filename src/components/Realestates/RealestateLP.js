import React from 'react';
import './Realestate.css';
import Compliance from './Compliance';
import TroubleShooting from './TroubleShooting';
import { Link } from 'react-router-dom';

function RealestateLP() {
  return (
    <div className="realestate">
      <Compliance />
      <TroubleShooting />
      <a className="realestate__cta-button" href="tel:+611300513799">Call Us</a>
      </div>
  );
}

export default RealestateLP;