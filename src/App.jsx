import React from 'react';
import { Routes,Route } from 'react-router-dom'
import Gallery from './Pages/Gallery';
import Header from './Header';
import Footer from './Footer';
import NotFound from './Pages/NotFound';
import HomePage from './Pages/HomePage';

const App = () => {
  return (
    <div className='min-h-screen max-w-screen m-0 p-0 overflow-x-hidden overflow-y-auto relative transition-all scroll-smooth'>
      <Header />
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/gallery" element={<Gallery />} />
  
        <Route path="*" element={<NotFound />} />
      </Routes>
      
      <Footer />
    </div>
  )
}

export default App
