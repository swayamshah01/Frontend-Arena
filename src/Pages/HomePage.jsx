import React from 'react'
import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'
import Footer from '../components/Footer';
import EducationalResources from '../components/EducationalResources';
import MuseumCarousel from '../components/MuseumCarousel';

const HomePage = () => {
  return (
    <div >
      <HeroSection />
      <AboutSection />
      <EducationalResources />
      <MuseumCarousel />
      <Footer />
    </div>
  )
}

export default HomePage
