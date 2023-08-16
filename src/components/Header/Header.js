// import React from 'react';
// import { Link } from 'react-router-dom';
// import logo from './Logo.png'; // Make sure to provide the correct path to your logo
// import './Header.css'
// function Header() {
//   return (
//     <header className="header">
//       <div className="header__logo">
//         <img src={logo} alt="Logo" />
//       </div>
//       <h1 className="header__title">Climate Co</h1>
//       <nav className="header__navigation">
//         <a className="header__navigation-item" href="tel:+611300513799">Call Us</a>
//         <Link to="/" className="header__navigation-item">Home</Link> {/* Link to home page */}
//         <Link to="/about" className="header__navigation-item">About Us</Link>
//         <Link to="/services" className="header__navigation-item">Services</Link>
//         <Link to="/contact" className="header__navigation-item">Contact Us</Link>
//       </nav>
//     </header>
//   );
// }

// export default Header;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './Logo.png';
import './Header.css'; // Import the main header CSS
import './MobileHeader.css'; // Import the mobile header CSS

function Header() {
  const [mobileNavActive, setMobileNavActive] = useState(false);

  const toggleMobileNav = () => {
    setMobileNavActive(!mobileNavActive);
  };

  return (
    <header className="header">
      <div className="header__logo">
        <img src={logo} alt="Logo" />
      </div>
      <h1 className="header__title">Climate Co</h1>
      <nav className="header__navigation">
        <a className="header__navigation-item" href="tel:+611300513799">Call Us</a>
        <Link to="/about" className="header__navigation-item">About Us</Link>
        <Link to="/services" className="header__navigation-item">Services</Link>
        <Link to="/contact" className="header__navigation-item">Contact Us</Link>
      </nav>

      {/* Mobile menu toggle button */}
      <div className="mobile-menu-toggle" onClick={toggleMobileNav}>
        Menu
      </div>

      {/* Mobile navigation menu */}
      <div className={`mobile-nav ${mobileNavActive ? 'active' : ''}`}>
        <div className="mobile-nav__item">
          <a href="tel:+611300513799">Call Us</a>
        </div>
        <div className="mobile-nav__item">
          <Link to="/about">About Us</Link>
        </div>
        <div className="mobile-nav__item">
          <Link to="/services">Services</Link>
        </div>
        <div className="mobile-nav__item">
          <Link to="/contact">Contact Us</Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
