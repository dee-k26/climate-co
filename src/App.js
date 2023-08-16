// import React from 'react';
// import { Routes, Route } from 'react-router-dom';
// import LoadingPage from './components/LoadingPage/LoadingPage';
// import Header from './components/Header/Header';
// import AboutUs from './components/AboutUs/AboutUs';
// import Services from './components/Services/Services';
// import ContactUs from './components/ContactUs/ContactUs';
// import Footer from './components/Footer/Footer';
// import PrivacyPolicy from './components/Footer/PrivacyPolicy';
// import TermsAndConditions from './components/Footer/TermsAndConditions';




// function App() {
//   return (
 
//     <LoadingPage>
//       <div className="App">
//         <Header />
//         <AboutUs />
//         <Services />
//         <ContactUs />
//         <Footer />3
//       <Routes>
//         <Route path= "/Footer/PrivacyPolicy" element={<PrivacyPolicy />}/>
//         <Route path= "/Footer/TermsAndConditions" element={<TermsAndConditions />}/>
//       </Routes>
//       </div>
    
//     </LoadingPage>

//   );
// }

// export default App;
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoadingPage from './components/LoadingPage/LoadingPage';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import AboutUs from './components/AboutUs/AboutUs';
import Services from './components/Services/Services';
import ContactUs from './components/ContactUs/ContactUs';
import Footer from './components/Footer/Footer';
import PrivacyPolicy from './components/Footer/PrivacyPolicy';
import TermsAndConditions from './components/Footer/TermsAndConditions';

function App() {
  return (
    <LoadingPage>
      {/* <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        </Routes>
        <Footer />
      </div> */}
    </LoadingPage>
  );
}

export default App;

