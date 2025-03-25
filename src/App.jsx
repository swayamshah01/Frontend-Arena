import React from 'react';
import { Routes,Route } from 'react-router-dom'
import Gallery from './Pages/Gallery';
import HomePage from './Pages/HomePage';
import VirtualMuseumTimeline from './Pages/VirtualMuseumTimeline';
import ContemporaryExhibitionAccordion from './components/ContemporaryExhibitionAccordion';

const App = () => {
  return (
    <div className='min-h-screen max-w-screen m-0 p-0 overflow-x-hidden overflow-y-auto relative transition-all scroll-smooth'>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/virtual-museum" element={<VirtualMuseumTimeline />} />
        <Route path="/exhibition" element={<ContemporaryExhibitionAccordion/>} />
      </Routes>
    </div>
  )
}

export default App
