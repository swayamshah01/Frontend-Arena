import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function MuseumLandingPage2() {
  const videoRef = useRef(null);
  const [theme, setTheme] = useState('dark');
  const { scrollY } = useScroll();
  
  // Transform values for scroll animations
  const headerOpacity = useTransform(scrollY, [0, 100], [1, 0.8]);
  const titleY = useTransform(scrollY, [0, 300], [0, -50]);
  const videoScale = useTransform(scrollY, [0, 300], [1, 1.05]); // Reduced scale effect
  
  // Multiple sections with their own intersection observers
  const [heroRef, heroInView] = useInView({ threshold: 0.3, triggerOnce: false });
  const [exhibitRef, exhibitInView] = useInView({ threshold: 0.2, triggerOnce: false });
  const [scrollIndicatorRef, scrollIndicatorInView] = useInView({ threshold: 0.1, triggerOnce: false });

  useEffect(() => {
    // Enhanced video quality settings
    if (videoRef.current) {
      // Set playback quality to highest
      videoRef.current.playbackQuality = 'high';
      videoRef.current.playbackRate = 1.0;
      
      // Force the highest possible quality and preload
      videoRef.current.preload = "auto";
      videoRef.current.addEventListener('loadedmetadata', () => {
        if (videoRef.current) {
          // Request highest possible quality
          videoRef.current.currentTime = 0.1; // Trick to force quality upgrade
          
          // Set the largest possible buffer size for smoother playback
          videoRef.current.bufferSize = 60; // increased buffer size
        }
      });
    }
  }, []);

  // Scroll-triggered animations
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8, 
        ease: [0.22, 1, 0.36, 1] 
      }
    }
  };

  return (
    <div className={`relative min-h-screen flex flex-col ${theme === 'dark' ? 'bg-[#121212]' : 'bg-[#F8F4E3]'}`}>
      {/* Theme Toggle with enhanced animation */}
      <motion.button
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        className="absolute top-6 right-6 z-50 rounded-full p-2 backdrop-blur-md"
        whileHover={{ scale: 1.1, boxShadow: "0px 5px 15px rgba(0,0,0,0.1)" }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5, type: "spring" }}
        style={{
          backgroundColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
          border: theme === 'dark' ? '1px solid rgba(255, 255, 255, 0.2)' : '1px solid rgba(0, 0, 0, 0.2)'
        }}
      >
        <span className={`${theme === 'dark' ? 'text-white' : 'text-[#333333]'} text-sm font-medium`}>
          {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
        </span>
      </motion.button>

      {/* Background Video with enhanced quality and visibility */}
      <motion.div 
        className="absolute inset-0 w-full h-full overflow-hidden z-0"
        style={{ scale: videoScale }}
      >
        <motion.video 
          ref={videoRef}
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute min-w-full min-h-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }} // Increased opacity for better visibility
          transition={{ duration: 1 }}
          style={{ 
            filter: theme === 'dark' 
              ? "contrast(1.2) brightness(1.1) saturate(1.4)" // Enhanced contrast and brightness
              : "contrast(1.1) brightness(1.2) saturate(1.1)",
            willChange: "transform"
          }}
        >
          {/* Use your video from assets */}
          <source src="/src/assets/Untitled video - Made with Clipchamp (1).mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </motion.video>
        
        {/* Gradient overlay with reduced opacity for better video visibility */}
        <motion.div 
          className="absolute inset-0"
          animate={{ 
            background: theme === 'dark' 
              ? 'linear-gradient(to right, rgba(18, 18, 18, 0.6), rgba(18, 18, 18, 0.4), rgba(18, 18, 18, 0.6))' // Reduced opacity
              : 'linear-gradient(to right, rgba(248, 244, 227, 0.6), rgba(248, 244, 227, 0.4), rgba(248, 244, 227, 0.6))'
          }}
          transition={{ duration: 0.8 }}
        ></motion.div>
      </motion.div>

      {/* Header Navigation with scroll opacity effect */}
      <motion.header
        className="relative z-20 py-6 px-8"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        style={{ opacity: headerOpacity }}
      >
        <div className="container mx-auto flex justify-between items-center">
          <motion.div 
            className="flex items-center gap-3"
            whileHover={{ scale: 1.02 }}
          >
            <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${theme === 'dark' ? 'from-[#D4AF37] to-[#B87333]' : 'from-[#CC5500] to-[#8B4513]'} flex items-center justify-center shadow-lg`}>
              <span className={`text-xl font-serif ${theme === 'dark' ? 'text-[#121212]' : 'text-[#F8F4E3]'} font-bold`}>A</span>
            </div>
            <h2 className={`text-2xl font-serif font-bold ${theme === 'dark' ? 'text-[#F5F5F5]' : 'text-[#333333]'}`}>ArtVistas</h2>
          </motion.div>
          
          <nav>
            <ul className="flex gap-8">
              {['Exhibitions', 'Collections', 'Artists', 'Virtual Tour'].map((item, i) => (
                <motion.li 
                  key={item}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * i }}
                  whileHover={{ y: -3 }}
                >
                  <a 
                    href={`#${item.toLowerCase().replace(' ', '-')}`} 
                    className={`${theme === 'dark' ? 'text-[#F5F5F5] hover:text-[#D4AF37]' : 'text-[#333333] hover:text-[#CC5500]'} transition-colors duration-300 text-base font-medium`}
                  >
                    <span className="relative">
                      {item}
                      <motion.span 
                        className={`absolute -bottom-1 left-0 h-0.5 w-0 ${theme === 'dark' ? 'bg-[#D4AF37]' : 'bg-[#CC5500]'}`}
                        whileHover={{ width: '100%' }}
                        transition={{ duration: 0.3 }}
                      />
                    </span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </nav>
        </div>
      </motion.header>

      {/* Semi-transparent background for better text readability over video */}
      <motion.div
        className={`absolute z-5 top-1/4 left-1/2 transform -translate-x-1/2 w-full max-w-5xl h-64 rounded-3xl ${theme === 'dark' ? 'bg-black/20' : 'bg-white/20'} backdrop-blur-sm`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      />

      {/* Main Content with scroll-triggered animations */}
      <motion.div 
        className="relative z-10 flex-1 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        ref={heroRef}
        style={{ y: titleY }}
      >
        <div className="container mx-auto px-6 py-12 max-w-5xl">
          <motion.div 
            className="text-center space-y-8"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.15
                }
              }
            }}
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
          >
            {/* Logo/Brand with enhanced spring animation */}
            <motion.div
              className="w-24 h-24 mx-auto mb-4"
              variants={{
                hidden: { scale: 0, rotate: -20 },
                visible: { 
                  scale: 1, 
                  rotate: 0,
                  transition: { 
                    type: "spring", 
                    stiffness: 260, 
                    damping: 20
                  } 
                }
              }}
            >
              <div className={`rounded-full ${theme === 'dark' ? 'bg-white/20' : 'bg-black/20'} backdrop-blur-sm p-4 border ${theme === 'dark' ? 'border-white/30' : 'border-black/30'}`}>
                <div className={`w-full h-full rounded-full shadow-lg ${theme === 'dark' 
                  ? 'bg-gradient-to-br from-[#D4AF37] to-[#B87333] shadow-[#D4AF37]/30' 
                  : 'bg-gradient-to-br from-[#CC5500] to-[#8B4513] shadow-[#CC5500]/30'}`}
                ></div>
              </div>
            </motion.div>

            {/* Title with enhanced text animations and readability */}
            <motion.h1 
              variants={fadeInUp}
              className={`text-5xl md:text-6xl font-serif font-bold tracking-tight leading-tight ${theme === 'dark'
                ? 'text-[#F5F5F5] text-shadow-sm' // Text shadow for better readability
                : 'text-[#333333] text-shadow-sm'}`}
              style={{ 
                textShadow: theme === 'dark' 
                  ? '0 2px 10px rgba(0,0,0,0.6)' 
                  : '0 2px 10px rgba(255,255,255,0.6)'
              }}
            >
              Experience Art Without Boundaries
            </motion.h1>
            
            {/* Description with staggered animation and enhanced readability */}
            <motion.p 
              variants={fadeInUp}
              className={`text-xl md:text-2xl ${theme === 'dark' ? 'text-gray-200' : 'text-gray-800'} max-w-2xl mx-auto leading-relaxed font-light`}
              style={{ 
                textShadow: theme === 'dark' 
                  ? '0 1px 3px rgba(0,0,0,0.8)' 
                  : '0 1px 3px rgba(255,255,255,0.8)'
              }}
            >
              Immerse yourself in our curated digital exhibitions featuring renowned masterpieces 
              and emerging talent from around the world.
            </motion.p>
            
            {/* CTA Buttons with enhanced hover effects */}
            <motion.div 
              variants={fadeInUp}
              className="pt-8 flex flex-col sm:flex-row gap-6 justify-center"
            >
              <motion.a 
                href="#virtual-tour" 
                className={`px-8 py-4 rounded-full font-medium text-lg shadow-lg transition-all duration-300 ${theme === 'dark'
                  ? 'bg-gradient-to-r from-[#D4AF37] to-[#B87333] text-[#121212]'
                  : 'bg-gradient-to-r from-[#CC5500] to-[#8B4513] text-[#F8F4E3]'}`}
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: theme === 'dark' 
                    ? "0 0 20px rgba(212, 175, 55, 0.4)" 
                    : "0 0 20px rgba(204, 85, 0, 0.4)" 
                }}
                whileTap={{ scale: 0.95 }}
              >
                Start Virtual Tour
              </motion.a>
              <motion.a 
                href="#exhibitions" 
                className={`px-8 py-4 bg-transparent border-2 rounded-full font-medium text-lg backdrop-blur-sm transition-all duration-300 ${theme === 'dark'
                  ? 'border-[#D4AF37]/80 text-[#F5F5F5] hover:bg-[#D4AF37]/10'
                  : 'border-[#CC5500]/80 text-[#333333] hover:bg-[#CC5500]/10'}`}
                whileHover={{ 
                  scale: 1.05, 
                  backgroundColor: theme === 'dark'
                    ? 'rgba(212, 175, 55, 0.15)'
                    : 'rgba(204, 85, 0, 0.15)'
                }}
                whileTap={{ scale: 0.95 }}
              >
                Browse Exhibitions
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Exhibition feature teaser with scroll animations */}
      <motion.div
        className="relative z-10 mt-12 mb-24 px-6"
        ref={exhibitRef}
      >
        <div className="container mx-auto">
          <motion.h3 
            className={`text-center text-2xl font-medium mb-12 ${theme === 'dark' ? 'text-[#D4AF37]' : 'text-[#CC5500]'}`}
            variants={fadeInUp}
            initial="hidden"
            animate={exhibitInView ? "visible" : "hidden"}
            style={{ 
              textShadow: theme === 'dark' 
                ? '0 1px 3px rgba(0,0,0,0.5)' 
                : '0 1px 3px rgba(255,255,255,0.5)'
            }}
          >
            Featured Exhibitions
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Renaissance Masters", description: "Classic works reimagined" },
              { title: "Modern Expressions", description: "Bold visions of today's artists" },
              { title: "Digital Frontier", description: "Art meets technology" },
            ].map((exhibit, i) => (
              <motion.div
                key={exhibit.title}
                className={`group relative rounded-lg overflow-hidden h-72 ${theme === 'dark' ? 'bg-black/40' : 'bg-black/20'} backdrop-blur-sm`}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    transition: {
                      duration: 0.6,
                      delay: i * 0.15,
                      ease: [0.25, 1, 0.5, 1]
                    }
                  }
                }}
                initial="hidden"
                animate={exhibitInView ? "visible" : "hidden"}
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.3 }
                }}
              >
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-all duration-500"></div>
                <div className={`absolute inset-0 ${theme === 'dark' 
                  ? 'border border-[#D4AF37]/30' 
                  : 'border border-[#CC5500]/30'} rounded-lg group-hover:border-opacity-70 transition-all duration-300`}></div>
                
                <motion.div 
                  className="absolute bottom-0 left-0 p-6 w-full"
                  initial={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -5 }}
                >
                  <h4 className="text-white text-xl font-serif">{exhibit.title}</h4>
                  <div className={`w-12 h-0.5 mt-2 ${theme === 'dark' ? 'bg-[#D4AF37]' : 'bg-[#CC5500]'}`}></div>
                  <motion.p 
                    className="text-white/70 mt-2 text-sm"
                    initial={{ opacity: 0, height: 0 }}
                    whileHover={{ opacity: 1, height: 'auto' }}
                    transition={{ duration: 0.3 }}
                  >
                    {exhibit.description}
                  </motion.p>
                </motion.div>

                {/* Hover effect overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"
                  initial={{ opacity: 0.7 }}
                  whileHover={{ opacity: 0.4 }}
                  transition={{ duration: 0.5 }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Enhanced scroll indicator with animated pulse */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        ref={scrollIndicatorRef}
      >
        <motion.span 
          className={`${theme === 'dark' ? 'text-white/70' : 'text-black/70'} text-sm mb-2 tracking-wide`}
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        >
          Scroll to explore
        </motion.span>
        <motion.div
          className={`w-px h-8 ${theme === 'dark' ? 'bg-white/50' : 'bg-black/50'}`}
          animate={{ 
            scaleY: [1, 1.8, 1],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{ 
            duration: 1.5, 
            repeat: Infinity,
            ease: "easeInOut" 
          }}
        />
        
        {/* Added subtle mouse scroll icon */}
        <motion.div 
          className={`mt-2 w-5 h-8 rounded-full border ${theme === 'dark' ? 'border-white/40' : 'border-black/40'} flex justify-center p-1`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.5 }}
        >
          <motion.div 
            className={`w-1 h-1 rounded-full ${theme === 'dark' ? 'bg-white/60' : 'bg-black/60'}`}
            animate={{ y: [0, 4, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut"
            }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
}