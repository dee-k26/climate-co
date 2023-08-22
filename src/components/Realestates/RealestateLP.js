import React from 'react';
import './Realestate.css';
import Compliance from './Compliance';
import TroubleShooting from './TroubleShooting';
import RealestateEnquireButton from './RealestateEnquireButton';
import TroubleShootingCTA from './TroubleShootingCTA';
import RealestateService from './RealestateService';
// import { Link } from 'react-router-dom';


function RealestateLP() {
  return (
    <div className="welcome">
      <div className ="realestatelp__div"> 
            <Compliance />
            <RealestateEnquireButton />
      </div>
      <div className ="realestatelp__div"> 
            <TroubleShooting />
            <TroubleShootingCTA />
      </div>
      <RealestateService />
    </div>
  );
}

export default RealestateLP;