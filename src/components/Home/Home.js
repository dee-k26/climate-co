import React from 'react';
import './Home.css';
import Welcome from '../Welcome/Welcome';
import ContactUs from '../ContactUs/ContactUs';
import AboutUs from '../AboutUs/AboutUs';
import Services from '../Services/Services';

function Home() {
  return (
    <>
    <Welcome />
    <ContactUs />
    <AboutUs />
    <Services />
    </>

  );
}

export default Home;
