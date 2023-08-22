import React from 'react';
import './Realestate.css';
import { Link } from 'react-router-dom';

function TroubleShootingCTA() {
  return (
    <div className="welcome">
      <Link to="/troubleshoot" className="welcome__cta-button">Troubleshoot!</Link>
      </div>
  );
}

export default TroubleShootingCTA;


