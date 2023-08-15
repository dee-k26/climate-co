import React, { useState, useEffect } from 'react';
import logo from './Logo.png';
import './LoadingPage.css';
import Header from '../Header/Header';
import AboutUs from '../AboutUs/AboutUs';
import Services from '../Services/Services';
import ContactUs from '../ContactUs/ContactUs';
import Footer from '../Footer/Footer';


function LoadingPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  if (loading) {
    return (
      <div className="loading-page">
        <img src={logo} className="loading-page__logo" alt="Logo" />
      </div>
    );
  }

  return (
    <div className="app">
      <Header />
      <AboutUs />
      <Services />
      <ContactUs />
      <Footer />
    </div>
  );
  
}

export default LoadingPage;
