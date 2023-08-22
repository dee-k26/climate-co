import React from 'react';
import '../TroubleShootingFlow.css';
import { Link } from 'react-router-dom';

function HWS() {
  return (
    <div className="flow">
      <Link to="/HWS" className="flow__button">Hot Water Service Not Working!</Link>
      <Link to="/HWS" className="flow__button">Hot Water Service Not Working!</Link>
      <Link to="/HWS" className="flow__button">Hot Water Service Not Working!</Link>
      <Link to="/HWS" className="flow__button">Hot Water Service Not Working!</Link>
      <Link to="/HWS" className="flow__button">Hot Water Service Not Working!</Link>
    </div>
  );
}

export default HWS;