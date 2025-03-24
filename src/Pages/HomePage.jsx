import React from 'react'
import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div className='h-screen w-full flex justify-center items-center flex-nowrap flex-col'>
      <HeroSection />
      <AboutSection />
      <Footer />
    </div>
  )
}

export default HomePage
