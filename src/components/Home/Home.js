import React from 'react';
import './Home.css';
import Welcome from '../Welcome/Welcome';
import ContactUs from '../ContactUs/ContactUs';
import AboutUs from '../AboutUs/AboutUs';
import Services from '../Services/Services';
import Realestates from '../Realestates/RealestateLP';

function Home() {
  return (
    <>
    <Welcome />
    <ContactUs />
    <AboutUs />
    <Services />
    <Realestates />
    </>

  );
}

export default Home;
