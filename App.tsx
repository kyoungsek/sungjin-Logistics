
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import Services from './components/Services';
import UseCases from './components/UseCases';
import CompanyStats from './components/CompanyStats';
import InquiryForm from './components/InquiryForm';
import Footer from './components/Footer';
import AIChatAssistant from './components/AIChatAssistant';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar scrolled={scrolled} />
      
      <main className="flex-grow">
        <Hero />
        <SocialProof />
        <Services />
        <UseCases />
        <CompanyStats />
        <InquiryForm />
      </main>

      <Footer />
      <AIChatAssistant />
    </div>
  );
};

export default App;
