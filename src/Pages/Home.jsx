import React from 'react'
import HomeHero from '../components/HomeHero'
import Features from '../components/features/Features';
import Faqs from '../components/faqs/Faqs';
import Footer from '../components/footer/Footer';

function Home() {
  return (
    <div className="relative">
      <HomeHero />
      <Features />
      <Faqs />
      <Footer />
    </div>
  );
}

export default Home