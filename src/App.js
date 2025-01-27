import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Menus from "./components/Menus";
import FindUs from "./components/FindUs";
import OurStory from "./components/OurStory";
import Community from "./components/Community";
import Footer from "./components/Footer";
import PrivacyPolicy from "./components/PrivacyPolicy"; 
import TermsOfService from "./components/TermsOfService"; 
import ReservationForm from "./components/ReservationForm";
import ContactPage from "./components/ContactPage";


const App = () => {
  return (
    <Router>
      <Navbar />
      <div style={{ minHeight: "80vh" }}>
      <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/menus" element={<Menus />} />
  <Route path="/find-us" element={<FindUs />} />
  <Route path="/our-story" element={<OurStory />} />
  <Route path="/community" element={<Community />} />
  <Route path="/contact" element={<ContactPage />} /> 
  <Route path="/privacy" element={<PrivacyPolicy />} />
  <Route path="/terms" element={<TermsOfService />} />
  <Route path="/reservation" element={<ReservationForm />} />
</Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
