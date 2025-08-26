import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import PropertyManager from "./components/Admin/PropertyManager";
import PropertyList from "./components/Pages/PropertyList";
import Home from "./components/Pages/Home";
import PrivacyPolicy from "./components/Pages/PrivacyPolicy";
import TermsOfUse from "./components/Pages/TermsOfUse";
import Login from "./components/Admin/Login";
import Footer from "./components/Footer/Footer";
import About from "./components/Pages/About";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/properties" element={<PropertyList />} />
        <Route path="/manager" element={<PropertyManager />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfUse />} />
        <Route path="/About" element={<About />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
