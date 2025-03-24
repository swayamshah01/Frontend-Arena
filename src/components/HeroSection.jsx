import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Add Google Fonts
    const link = document.createElement('link');
    link.href = "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Oswald:wght@500&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    // Simulate content load
    const timer = setTimeout(() => setIsLoaded(true), 500);
    return () => clearTimeout(timer);
  }, []);

  // Color Palette
  const colors = {
    background: '#2A2A2A',
    text: '#FFFFFF',
    gold: '#D4AF37',
    borderLight: '#FFFFFF55',
    borderMedium: '#FFFFFF99'
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100
      }
    }
  };

  return (
    <div 
      className="relative h-screen w-full overflow-hidden"
      style={{ 
        fontFamily: "'Inter', sans-serif",
        backgroundColor: colors.background 
      }}
    >
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <iframe
          src="https://www.youtube.com/embed/WBwNw4WjV7g?si=opmlvRJ4poDo7OiO&autoplay=1&mute=1&loop=1&controls=0&playlist=WBwNw4WjV7g"
          title="Background Atmosphere"
          className="w-full h-full object-cover"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
        {/* Dark Overlay */}
        <div 
          className="absolute inset-0"
          style={{ 
            backgroundColor: colors.background, 
            opacity: 0.6 
          }}
        ></div>
      </div>

      {/* Content Container */}
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="relative z-10 flex flex-col justify-center items-center h-full text-center px-4"
      >
        {/* Decorative Gold Line */}
        <motion.div
          variants={itemVariants}
          className="absolute top-20 left-0 right-0 flex justify-center"
        >
          <div 
            className="w-24 h-1"
            style={{ backgroundColor: colors.gold }}
          ></div>
        </motion.div>

        {/* Main Title */}
        <motion.h1 
          variants={itemVariants}
          className="text-6xl md:text-8xl font-bold tracking-tight mb-6"
          style={{ 
            fontFamily: "'Oswald', sans-serif",
            color: colors.text,
            textShadow: `0 0 20px ${colors.gold}40`
          }}
        >
          CREATIVE
        </motion.h1>

        {/* Subtitle */}
        <motion.h2 
          variants={itemVariants}
          className="text-2xl md:text-4xl font-medium mb-8 max-w-3xl mx-auto"
          style={{ color: colors.text }}
        >
          Unleashing Visual Storytelling Through Innovative Design
        </motion.h2>

        {/* Call to Action Buttons */}
        <motion.div 
          variants={itemVariants}
          className="flex space-x-4"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 rounded-full font-semibold shadow-lg transition-all"
            style={{
              backgroundColor: colors.gold,
              color: colors.background,
              border: `2px solid ${colors.borderLight}`
            }}
          >
            Explore
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 rounded-full font-semibold transition-all"
            style={{
              backgroundColor: 'transparent',
              color: colors.text,
              border: `2px solid ${colors.borderMedium}`
            }}
          >
            Learn More
          </motion.button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: 1, 
            y: [20, 0, 20],
            transition: {
              delay: 1,
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div 
            className="w-8 h-12 rounded-full flex items-center justify-center"
            style={{ 
              border: `2px solid ${colors.borderLight}`,
            }}
          >
            <div 
              className="w-1 h-3 rounded-full animate-bounce"
              style={{ backgroundColor: colors.text }}
            ></div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroSection;