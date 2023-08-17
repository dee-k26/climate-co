import React from 'react';
import { Link } from 'react-router-dom';
import logo from './Logo.png';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header__logo">
      <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
      </div>
      <h1 className="header__title">Climate Co</h1>
      <nav className="header__navigation">
        {/* <a className="header__navigation-item" href="tel:+611300513799">Call Us</a>
        <Link to="/about" className="header__navigation-item">About Us</Link>
        <Link to="/services" className="header__navigation-item">Services</Link>
        <Link to="/contact" className="header__navigation-item">Contact Us</Link> */}
      </nav>
    </header>
  );
}

export default Header;
