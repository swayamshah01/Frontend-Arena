import React from 'react'
import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'
import VisionSection from '../components/VisionSection'
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div className='min-h-screen w-full flex justify-center items-center flex-nowrap flex-col'>
      <HeroSection />
      <AboutSection />
      <VisionSection />
      <Footer />
    </div>
  )
}

export default HomePage
