import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [videoLoading, setVideoLoading] = useState(true);
  const videoRef = useRef(null);
  const navigate = useNavigate();

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

  const handleVideoError = (e) => {
    console.error('Video failed to load:', e);
    setVideoError(true);
    setVideoLoading(false);
  };

  const handleVideoLoad = () => {
    console.log('Video loaded successfully');
    setVideoError(false);
    setVideoLoading(false);
  };

  const handleVideoLoadStart = () => {
    console.log('Video loading started');
    setVideoLoading(true);
  };

  const handleVideoCanPlay = () => {
    console.log('Video can start playing');
    setVideoLoading(false);
    if (videoRef.current) {
      videoRef.current.play().catch(console.error);
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
        {/* Loading indicator */}
        {videoLoading && !videoError && (
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-white"></div>
          </div>
        )}
        
        {!videoError ? (
          <video 
            ref={videoRef}
            className="top-0 left-0 w-full h-full object-cover" 
            autoPlay 
            loop 
            muted 
            playsInline
            preload="auto"
            onError={handleVideoError}
            onLoadedData={handleVideoLoad}
            onLoadStart={handleVideoLoadStart}
            onCanPlay={handleVideoCanPlay}
            style={{ 
              opacity: videoLoading ? 0 : 1,
              transition: 'opacity 0.5s ease-in-out'
            }}
          >
            <source src="/video.mp4" type="video/mp4" />
            {/* Fallback message */}
            Your browser does not support the video tag.
          </video>
        ) : (
          // Fallback gradient background if video fails
          <div 
            className="w-full h-full"
            style={{
              background: `linear-gradient(135deg, ${colors.background} 0%, #1a1a1a 50%, ${colors.background} 100%)`,
            }}
          />
        )}
        
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
          ArtVistas
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
            className="px-4 py-2 md:px-8 md:py-3 rounded-full font-semibold shadow-lg transition-all hover:cursor-pointer"
            style={{
              backgroundColor: colors.gold,
              color: colors.background,
              border: `2px solid ${colors.borderLight}`
            }}
            onClick={() => navigate("/virtual-museum")}
          >
            Virtual World
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2 md:px-8 md:py-3 rounded-full font-semibold transition-all hover:cursor-pointer"
            style={{
              backgroundColor: 'transparent',
              color: colors.text,
              border: `2px solid ${colors.borderMedium}`
            }}
            onClick={() => navigate("/gallery")}
          >
            Gallery
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

        {/* Debug info (remove in production) */}
        {process.env.NODE_ENV === 'development' && (
          <div className="absolute top-4 right-4 text-sm text-white bg-black bg-opacity-50 p-2 rounded">
            Video Status: {videoError ? 'Error' : videoLoading ? 'Loading' : 'Ready'}
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default HeroSection;