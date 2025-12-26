import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import ResourcesPage from './pages/ResourcesPage';
import IndustriesPage from './pages/IndustriesPage';
import ConsultationPage from './pages/ConsultationPage';
import ReferralPage from './pages/ReferralPage';
import CPAOutsourcingPage from './pages/CPAOutsourcingPage';
import FundAccountingPage from './pages/FundAccountingPage';

function App() {
  const location = useLocation();
  
  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/resources" element={<ResourcesPage />} />
        <Route path="/industries" element={<IndustriesPage />} />
        <Route path="/consultation" element={<ConsultationPage />} />
        <Route path="/referral" element={<ReferralPage />} />
        <Route path="/cpa-outsourcing" element={<CPAOutsourcingPage />} />
        <Route path="/fund-accounting" element={<FundAccountingPage />} />
      </Route>
    </Routes>
  );
}

export default App;