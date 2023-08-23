import React from 'react';
import './Home.css';
import Welcome from '../Welcome/Welcome';
import ContactUs from '../ContactUs/ContactUs';
import AboutUs from '../AboutUs/AboutUs';
import Services from '../Services/Services';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
    <Welcome />
    <ContactUs />
    <AboutUs />
    <Services />
    <div className ='home'>
    <Link to="/realestates" className="home__cta-button">Realestates</Link>
    </div>
    </>

  );
}

export default Home;
