import React from 'react';
import './Realestate.css';
import { Link } from 'react-router-dom';

function RealestateEnquireButton() {
  return (
    <div className="welcome">
      <Link to="/enquire" className="welcome__cta-button">Enquire!</Link>
    
      </div>
  );
}

export default RealestateEnquireButton;


