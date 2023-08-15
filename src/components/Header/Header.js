import React from 'react';
import './Header.css';
import logo from './Logo.png';

function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <img src={logo} alt="Logo" />
      </div>
      <h1 className="header__title">Climate Co</h1>
      <nav className="header__navigation">
      <a className="header__navigation-item" href="tel:+611300513799">Call Us</a>
        <a className="header__navigation-item" href="#">About Us</a>
        <a className="header__navigation-item" href="#">Services</a>
        <a className="header__navigation-item" href="#">Contact Us</a>
      </nav>
    </header>
  );
}

export default Header;
// import React from 'react';
// import logo from './Logo.png';

// function Header() {
//   return (
//     <header className="header">
//       <nav className="header__navigation">
//         <a className="header__navigation-item" href="#">About Us</a>
//         <a className="header__navigation-item" href="#">Services</a>
//         <a className="header__navigation-item" href="#">Contact Us</a>
//       </nav>
//       <div className="header__logo">
//         <img src={logo} alt="Logo" />
//       </div>
//       <h1 className="header__title">Climate Co</h1>
//     </header>
//   );
// }

// export default Header;