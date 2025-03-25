import React from 'react'
import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'
import Footer from '../components/Footer';
import EducationalResources from '../components/EducationalResources';
import MuseumCarousel from '../components/MuseumCarousel';
import MuseumLocation from '../components/MuseumLocation';
import VirtualGalleryShowcase from '../components/VirtualGalleryShowcase';

const HomePage = () => {
  return (
    <div >
      <HeroSection />
      <AboutSection />
      <VirtualGalleryShowcase />
      <EducationalResources />
      <MuseumCarousel />
      <MuseumLocation />
      <Footer/>
    </div>
  )
}

export default HomePage
