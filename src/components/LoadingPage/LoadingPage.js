import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import logo from './Logo.png';
import './LoadingPage.css';
import Header from '../Header/Header';
import AboutUs from '../AboutUs/AboutUs';
import Services from '../Services/Services';
import ContactUs from '../ContactUs/ContactUs';
import Home from '../Home/Home';
import PrivacyPolicy from '../Footer/PrivacyPolicy';
import TermsAndConditions from '../Footer/TermsAndConditions';
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
    <div className="App">
    <Header />
    <Home />
    <Routes>
      <Route path="/" element={<Home />} /> 
      <Route path="/about" element={<AboutUs />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
    </Routes>
    <Footer />
    </div>
  );
  
}

export default LoadingPage;
