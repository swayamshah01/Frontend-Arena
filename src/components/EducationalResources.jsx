import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Book, 
  Video, 
  Clock, 
  GraduationCap, 
  Play, 
  Download,
  Calendar,
  Users
} from 'lucide-react';

const WorkshopCard = ({ title, instructor, duration, level, description, price, type }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div 
      className="bg-[#FFFFFF11] rounded-2xl overflow-hidden border border-[#FFFFFF22] hover:border-[#D4AF37] transition-all duration-300"
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center space-x-4">
            {type === 'workshop' ? <Book className="text-[#D4AF37]" size={32} /> : 
             type === 'webinar' ? <Video className="text-[#D4AF37]" size={32} /> : 
             <GraduationCap className="text-[#D4AF37]" size={32} />}
            <div>
              <h3 className="text-2xl font-bold text-white">{title}</h3>
              <p className="text-[#FFFFFF99]">{instructor}</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Clock className="text-[#FFFFFF99]" size={20} />
            <span className="text-[#FFFFFF99]">{duration}</span>
          </div>
        </div>

        <div className="flex justify-between items-center mb-4">
          <span className="bg-[#FFFFFF22] px-3 py-1 rounded-full text-sm">
            {level} Level
          </span>
          <span className="text-[#D4AF37] font-semibold">{price === 0 ? 'Free' : `$${price}`}</span>
        </div>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mb-4"
            >
              <p className="text-[#FFFFFF99] leading-relaxed mb-4">{description}</p>
              <div className="flex space-x-3">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  className="bg-[#D4AF37] text-black px-4 py-2 rounded-full flex items-center space-x-2"
                >
                  <Play size={20} />
                  <span>Start Course</span>
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  className="border border-[#FFFFFF55] text-[#FFFFFF99] px-4 py-2 rounded-full flex items-center space-x-2"
                >
                  <Download size={20} />
                  <span>Download Syllabus</span>
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          onClick={() => setIsExpanded(!isExpanded)}
          whileHover={{ scale: 1.05 }}
          className="w-full bg-[#FFFFFF22] text-[#FFFFFF99] py-2 rounded-full mt-4 hover:bg-[#D4AF37] hover:text-black transition-colors"
        >
          {isExpanded ? 'Collapse Details' : 'Explore Course'}
        </motion.button>
      </div>
    </motion.div>
  );
};

const EducationalResources = () => {
  const workshops = [
    {
      title: "Digital Art Fundamentals",
      instructor: "Elena Rodriguez",
      duration: "6 weeks",
      level: "Beginner",
      description: "A comprehensive introduction to digital art creation, covering fundamental techniques, digital tools, and creative processes. Perfect for aspiring digital artists looking to build a strong foundation.",
      price: 149,
      type: 'workshop'
    },
    {
      title: "Art in the Age of AI",
      instructor: "Marcus Chen",
      duration: "4 weeks",
      level: "Intermediate",
      description: "Explore the intersection of artificial intelligence and artistic creation. Learn how AI is transforming the art world, from generative art to computational creativity and ethical considerations.",
      price: 199,
      type: 'course'
    },
    {
      title: "Global Art Trends Webinar",
      instructor: "Sophia Nkosi",
      duration: "2 hours",
      level: "All",
      description: "A live, interactive webinar discussing current global art trends, emerging artists, and the future of art in a digital, interconnected world. Includes Q&A session with our global outreach team.",
      price: 0,
      type: 'webinar'
    }
  ];

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen bg-[#2A2A2A] text-white py-16 px-4"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6 text-white">
            Educational <span className="text-[#D4AF37]">Resources</span>
          </h2>
          <p className="text-xl max-w-4xl mx-auto text-[#FFFFFF99]">
            Unlock your artistic potential with ArtVistas' comprehensive learning programs. 
            From beginner workshops to advanced masterclasses, we're committed to nurturing 
            creativity and innovation.
          </p>
        </motion.div>

        {/* Programs Overview */}
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div 
            className="bg-[#FFFFFF11] p-6 rounded-2xl flex items-center space-x-6"
            whileHover={{ scale: 1.05 }}
          >
            <Users className="text-[#D4AF37]" size={48} />
            <div>
              <h3 className="text-2xl font-semibold">Student Programs</h3>
              <p className="text-[#FFFFFF99]">Tailored learning paths for aspiring artists</p>
            </div>
          </motion.div>

          <motion.div 
            className="bg-[#FFFFFF11] p-6 rounded-2xl flex items-center space-x-6"
            whileHover={{ scale: 1.05 }}
          >
            <GraduationCap className="text-[#D4AF37]" size={48} />
            <div>
              <h3 className="text-2xl font-semibold">Educator Resources</h3>
              <p className="text-[#FFFFFF99]">Tools and support for art educators</p>
            </div>
          </motion.div>

          <motion.div 
            className="bg-[#FFFFFF11] p-6 rounded-2xl flex items-center space-x-6"
            whileHover={{ scale: 1.05 }}
          >
            <Calendar className="text-[#D4AF37]" size={48} />
            <div>
              <h3 className="text-2xl font-semibold">Upcoming Events</h3>
              <p className="text-[#FFFFFF99]">Live webinars and interactive workshops</p>
            </div>
          </motion.div>
        </div>

        {/* Workshops Section */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16"
        >
          <h3 className="text-3xl font-bold mb-8 text-center">
            Explore Our <span className="text-[#D4AF37]">Learning Paths</span>
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {workshops.map((workshop, index) => (
              <WorkshopCard 
                key={index}
                {...workshop}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default EducationalResources;