import React from 'react';
import './Welcome.css';
import { Link } from 'react-router-dom';

function Welcome() {
  return (
    <div className="welcome">
      <h1>Welcome to Climate Co</h1>
      <p>Your Trusted Heating and Cooling Experts</p>
      <Link to= "/step-one">
      <button className="welcome__cta-button">Get Started</button>
      </Link>
    </div>
  );
}

export default Welcome;