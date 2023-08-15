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
import { BrowserRouter as Route , Routes } from 'react-router-dom';
import LoadingPage from './components/LoadingPage/LoadingPage';
import Header from './components/Header/Header';
import AboutUs from './components/AboutUs/AboutUs';
import Services from './components/Services/Services';
import ContactUs from './components/ContactUs/ContactUs';
import Footer from './components/Footer/Footer';
import PrivacyPolicy from './components/Footer/PrivacyPolicy';
import TermsAndConditions from './components/Footer/TermsAndConditions';

function App() {
  return (
    <LoadingPage>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" component={<AboutUs />} />
          <Route path="/about" component={<AboutUs />} />
          <Route path="/services" component={<Services />} />
          <Route path="/contact" component={<ContactUs />} />
          <Route path="/privacy-policy" component={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" component={<TermsAndConditions />} />
        </Routes >
        <Footer />
      </div>
    </LoadingPage>
  );
}

export default App;
