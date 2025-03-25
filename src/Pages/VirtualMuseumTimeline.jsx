import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Library, 
  Palette, 
  Users, 
  Frame,
  Sparkles,
  MessageCircle,
  HelpCircle
} from 'lucide-react';
import no1 from "../assets/timeline.jpg"
import no2 from "../assets/timeline bg.jpg"
import no3 from "../assets/Virtual_Reception_Lounge.jpg"
import no4 from "../assets/bgbg.webp"
import { useNavigate } from 'react-router-dom';

const GuideComment = ({ comment, triggerRef }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      <motion.div 
        ref={triggerRef}
        className="absolute top-0 right-0 z-40"
        onHoverStart={() => setIsVisible(true)}
        onHoverEnd={() => setIsVisible(false)}
      >
        <HelpCircle 
          className="text-[#D4AF37] cursor-pointer" 
          size={24} 
        />
      </motion.div>

      <AnimatePresence>
        {isVisible && (
          <motion.div 
            className="fixed bottom-10 right-10 
            bg-[#D4AF37]/20 backdrop-blur-md border border-[#D4AF37]/30 
            rounded-xl p-4 max-w-sm z-50 shadow-lg"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
          >
            <div className="flex items-center mb-2">
              <MessageCircle className="mr-2 text-[#D4AF37]" />
              <span className="text-white font-semibold">Museum Guide</span>
            </div>
            <p className="text-white/80 text-sm">{comment}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const TimelineItem = ({ 
  room, 
  title, 
  description, 
  imagePlaceholder, 
  icon: Icon, 
  route,
  guideComment
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const handleImageClick = () => {
    navigate(route);
    console.log(`Navigating to ${route}`);
  };

  return (
    <div className="relative">
      <motion.div 
        className="grid grid-cols-12 gap-4 py-12 relative group"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Room Number */}
        <div className="col-span-2 flex justify-end items-center pr-6">
          <motion.div 
            className="text-[#D4AF37] text-6xl font-bold opacity-50"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 0.5 }}
            transition={{ delay: 0.2 }}
          >
            {room}
          </motion.div>
        </div>

        {/* Timeline Marker with Pulsating Effect */}
        <div className="col-span-1 flex justify-center relative">
          <div className="w-1 bg-white/30 absolute top-0 bottom-0"></div>
          <motion.div 
            className="w-6 h-6 bg-[#D4AF37] rounded-full z-10 border-4 border-white/30 
            relative overflow-hidden"
            initial={{ scale: 0 }}
            animate={{ 
              scale: 1.1, 
              boxShadow: [
                "0 0 0 0 rgba(212, 175, 55, 0.4)",
                "0 0 0 10px rgba(212, 175, 55, 0)",
              ]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity,
              type: "tween",
              ease: "easeInOut"
            }}
          >
            <motion.div 
              className="absolute inset-0 bg-[#D4AF37]/30 rounded-full animate-ping"
            />
          </motion.div>
        </div>

        {/* Content */}
        <motion.div 
          className="col-span-9 bg-[#2A2A2A] p-6 rounded-xl border border-white/10 
          transition-all duration-300 group-hover:border-[#D4AF37]/50 relative"
          whileHover={{ 
            scale: 1.02, 
            boxShadow: "0 10px 20px rgba(212, 175, 55, 0.2)" 
          }}
        >
          {/* Guide Comment for this specific room */}
          <GuideComment comment={guideComment} />

          <div className="flex items-center mb-4">
            {Icon && <Icon className="mr-4 text-[#D4AF37]" size={32} />}
            <h3 className="text-3xl font-semibold text-white flex items-center">
              {title}
              <Sparkles className="ml-2 text-[#D4AF37]" size={24} />
            </h3>
          </div>
          
          <p className="text-white/60 mb-6">{description}</p>
          
          <motion.div 
            className="relative overflow-hidden rounded-lg cursor-pointer"
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            onClick={handleImageClick}
          >
            <img 
              src={imagePlaceholder} 
              alt={title} 
              className="w-full h-64 object-cover transition-transform duration-500 
              group-hover:scale-110"
            />
            
            <AnimatePresence>
              {isHovered && (
                <motion.div 
                  className="absolute inset-0 bg-black/50 flex items-center justify-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="text-white text-xl font-bold">
                    Explore Room
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

const VirtualMuseumTimeline = () => {
  const timelineData = [
    {
      room: "01",
      title: "Permanent Digital Gallery",
      description: "Curated collection of timeless artworks from renowned international artists.",
      icon: Frame,
      imagePlaceholder: no2,
      route: "/gallery",
      guideComment: "Welcome to our Permanent Digital Gallery! Here, you'll discover a carefully curated collection that spans artistic traditions from around the world."
    },
    {
      room: "02", 
      title: "Contemporary Exhibition Hall",
      description: "Cutting-edge digital exhibitions featuring global contemporary artists.",
      icon: Palette,
      imagePlaceholder: no1,
      route: "/exhibition",
      guideComment: "Step into our Contemporary Exhibition Hall, where innovative artists push the boundaries of digital art and challenge traditional perceptions."
    },
    {
      room: "03",
      title: "Virtual Reception Lounge", 
      description: "Connect with curators, artists, and fellow art enthusiasts in our digital gathering space.",
      icon: Users,
      imagePlaceholder: no3,
      route: "/rooms/reception",
      guideComment: "Our Virtual Reception Lounge is more than just a space—it's a vibrant community where art lovers from around the globe can connect, share, and inspire each other."
    },
    {
      room: "04",
      title: "Educational Resources Center",
      description: "Interactive learning platforms, artist biographies, and comprehensive art history modules.",
      icon: Library,
      imagePlaceholder: no4,
      route: "/rooms/education",
      guideComment: "Dive deep into our Educational Resources Center, where interactive modules and rich artist biographies bring the world of art to life in unprecedented ways."
    }
  ];

  return (
    <div className="min-h-screen bg-[#2A2A2A] text-white py-16 relative">
      <motion.div 
        className="container mx-auto px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1 
          className="text-6xl font-bold text-center mb-16 text-transparent bg-clip-text 
          bg-gradient-to-r from-[#D4AF37] to-white"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          Virtual Museum Journey
        </motion.h1>

        <motion.p 
          className="text-center text-white/70 max-w-2xl mx-auto mb-16 text-xl"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          Embark on an immersive digital expedition through our virtual museum spaces. 
          Explore, learn, and experience art like never before.
        </motion.p>

        <div className="relative">
          {timelineData.map((item, index) => (
            <TimelineItem key={index} {...item} />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default VirtualMuseumTimeline;