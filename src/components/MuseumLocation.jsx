import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MapPin, 
  Clock, 
  Phone, 
  Mail, 
  Building, 
  Calendar, 
  Globe, 
  Info,
  Ticket,
  Navigation,
  Star,
  Award,
  Users
} from 'lucide-react';

const MuseumLocation = () => {
  const [activeLayer, setActiveLayer] = useState('museum');

  const mapLayers = [
    {
      id: 'museum',
      icon: <Building size={24} />,
      label: 'Museum',
      content: (
        <div className="space-y-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-[#FFFFFF11] rounded-xl p-6 border border-[#FFFFFF22]"
          >
            <h3 className="text-[#D4AF37] text-2xl font-bold mb-4" style={{ letterSpacing: '0.05em' }}>
              ArtVistas Museum
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-[#FFFFFF99] mb-2">
                  <span className="font-semibold text-white">Location:</span> 
                  Cultural District, New York
                </p>
                <p className="text-[#FFFFFF99] mb-2">
                  <span className="font-semibold text-white">Established:</span> 
                  2020
                </p>
                <p className="text-[#FFFFFF99] mb-2">
                  <span className="font-semibold text-white">Size:</span> 
                  45,000 sq ft
                </p>
                <p className="text-[#FFFFFF99]">
                  <span className="font-semibold text-white">Exhibitions:</span> 
                  Digital & Contemporary
                </p>
              </div>
              <div>
                <div className="flex items-center mb-2">
                  <Award className="text-[#D4AF37] mr-2" size={20} />
                  <span className="text-white font-semibold">Awards & Recognition</span>
                </div>
                <ul className="text-[#FFFFFF99] space-y-1 pl-6 list-disc">
                  <li>Best New Museum 2021</li>
                  <li>Innovation in Art Curation, 2022</li>
                  <li>Cultural Diversity Excellence Award</li>
                </ul>
              </div>
            </div>
            <div className="mt-6">
              <div className="flex items-center mb-3">
                <Info className="text-[#D4AF37] mr-2" size={20} />
                <span className="text-white font-semibold">About ArtVistas</span>
              </div>
              <p className="text-[#FFFFFF99] leading-relaxed">
                ArtVistas Museum is a cutting-edge cultural institution dedicated to showcasing contemporary digital art and immersive experiences. Our mission is to bridge the gap between traditional art forms and emerging digital technologies, providing a unique platform for artists and art enthusiasts.
              </p>
            </div>
          </motion.div>
        </div>
      )
    },
    {
      id: 'hours',
      icon: <Clock size={24} />,
      label: 'Hours',
      content: (
        <div className="space-y-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-[#FFFFFF11] rounded-xl p-6 border border-[#FFFFFF22]"
          >
            <h3 className="text-[#D4AF37] text-2xl font-bold mb-4" style={{ letterSpacing: '0.05em' }}>
              Museum Hours
            </h3>
            <div className="space-y-2">
              {[
                { day: 'Monday - Wednesday', time: '10:00 AM - 6:00 PM', note: 'Regular Hours' },
                { day: 'Thursday - Friday', time: '10:00 AM - 8:00 PM', note: 'Extended Evening Hours' },
                { day: 'Saturday', time: '11:00 AM - 7:00 PM', note: 'Weekend Special Hours' },
                { day: 'Sunday', time: '12:00 PM - 5:00 PM', note: 'Relaxed Weekend Viewing' }
              ].map((schedule, index) => (
                <div 
                  key={index} 
                  className="flex justify-between text-[#FFFFFF99] border-b border-[#FFFFFF22] pb-2"
                >
                  <div>
                    <span className="font-semibold">{schedule.day}</span>
                    <p className="text-xs text-[#FFFFFF66]">{schedule.note}</p>
                  </div>
                  <span>{schedule.time}</span>
                </div>
              ))}
              <div className="text-[#D4AF37] font-semibold mt-2 text-center">
                Closed on Major Holidays
              </div>
              <div className="mt-4">
                <div className="flex items-center mb-2">
                  <Ticket className="text-[#D4AF37] mr-2" size={20} />
                  <span className="text-white font-semibold">Ticket Information</span>
                </div>
                <div className="text-[#FFFFFF99] space-y-1">
                  <p>General Admission: $20</p>
                  <p>Students & Seniors: $12</p>
                  <p>Children Under 12: Free</p>
                  <p>First Thursday of Each Month: Free Admission</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )
    },
    {
      id: 'contact',
      icon: <Phone size={24} />,
      label: 'Contact',
      content: (
        <div className="space-y-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-[#FFFFFF11] rounded-xl p-6 border border-[#FFFFFF22]"
          >
            <h3 className="text-[#D4AF37] text-2xl font-bold mb-4" style={{ letterSpacing: '0.05em' }}>
              Contact Information
            </h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <MapPin className="text-[#D4AF37] mr-3" size={24} />
                <div>
                  <span className="text-[#FFFFFF99] block">123 Cultural Avenue, New York, NY 10001</span>
                  <span className="text-[#FFFFFF66] text-xs">In the heart of the Cultural District</span>
                </div>
              </div>
              <div className="flex items-center">
                <Mail className="text-[#D4AF37] mr-3" size={24} />
                <div>
                  <span className="text-[#FFFFFF99]">contact@artvistas.museum</span>
                  <span className="text-[#FFFFFF66] text-xs block">General Inquiries & Booking</span>
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="text-[#D4AF37] mr-3" size={24} />
                <div>
                  <span className="text-[#FFFFFF99]">(555) 123-4567</span>
                  <span className="text-[#FFFFFF66] text-xs block">Museum Information Hotline</span>
                </div>
              </div>
              <div className="flex items-center">
                <Users className="text-[#D4AF37] mr-3" size={24} />
                <div>
                  <span className="text-[#FFFFFF99]">Group Bookings & Private Events</span>
                  <span className="text-[#FFFFFF66] text-xs block">groups@artvistas.museum</span>
                </div>
              </div>
              <div className="mt-4">
                <div className="flex items-center mb-2">
                  <Globe className="text-[#D4AF37] mr-2" size={20} />
                  <span className="text-white font-semibold">Social Media & Web</span>
                </div>
                <div className="text-[#FFFFFF99] space-y-1">
                  <p>Website: www.artvistas.museum</p>
                  <p>Instagram: @ArtVistaMuseum</p>
                  <p>Twitter: @ArtVistas</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )
    }
  ];

  return (
    <div 
      className="min-h-screen bg-[#2A2A2A] flex items-center justify-center p-4"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-6xl bg-[#FFFFFF11] rounded-3xl overflow-hidden shadow-2xl border border-[#FFFFFF22] grid md:grid-cols-3"
      >
        {/* Sidebar Navigation */}
        <div className="bg-[#2A2A2A] p-8 border-r border-[#FFFFFF22]">
          <div className="sticky top-8">
            <h2 
              className="text-white text-4xl font-bold mb-12"
              style={{ letterSpacing: '0.06em' }}
            >
              ArtVistas <br />Museum
            </h2>
            
            <div className="space-y-4">
              {mapLayers.map((layer) => (
                <motion.button
                  key={layer.id}
                  onClick={() => setActiveLayer(layer.id)}
                  whileHover={{ scale: 1.05 }}
                  className={`w-full flex items-center p-4 rounded-lg transition-all duration-300 ${
                    activeLayer === layer.id 
                      ? 'bg-[#D4AF37] text-[#2A2A2A]' 
                      : 'text-[#FFFFFF99] hover:bg-[#FFFFFF22]'
                  }`}
                >
                  {layer.icon}
                  <span className="ml-3 font-medium">{layer.label}</span>
                </motion.button>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-12 bg-[#FFFFFF11] rounded-xl p-4 border border-[#FFFFFF22]"
            >
              <div className="flex items-center mb-3">
                <Navigation className="text-[#D4AF37] mr-3" size={24} />
                <h4 className="text-white font-semibold">Directions</h4>
              </div>
              <div className="space-y-2">
                <p className="text-[#FFFFFF99] text-sm">
                  Nearest Subway: Cultural Center Station (Lines 1, 2, 3)
                </p>
                <p className="text-[#FFFFFF99] text-sm">
                  Parking Available: Underground Garage
                </p>
                <p className="text-[#FFFFFF99] text-sm">
                  Accessibility: Wheelchair Accessible
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Content Area */}
        <div className="col-span-2 p-12 bg-[#2A2A2A]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeLayer}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
            >
              {mapLayers.find(layer => layer.id === activeLayer)?.content}
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
};

export default MuseumLocation;