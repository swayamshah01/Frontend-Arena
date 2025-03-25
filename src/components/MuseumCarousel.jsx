import React, { useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";

const museumImages = [
    "https://img.freepik.com/free-photo/woman-watching-statues_413556-3.jpg?t=st=1742846974~exp=1742850574~hmac=34f722c64a2bdb860d44a9b75f6dca15136623ca43702417b511480714ab76a3&w=1380",
    "https://img.freepik.com/free-photo/interior-national-art-museum-bucharest-romania-golden-details-marble-painting_1268-19833.jpg?t=st=1742846883~exp=1742850483~hmac=c9dc62faea25098920ecd30c0c9ea1ba1e80698cb67e008a6db77ef50d3de10f&w=1380",
    "https://images.unsplash.com/photo-1565288704362-2dbccb3167c6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bXVzdWVtfGVufDB8fDB8fHww",
    "https://media.istockphoto.com/id/1432867519/photo/woman-examining-modern-art-at-gallery.webp?a=1&b=1&s=612x612&w=0&k=20&c=wfQJT5FQqTm53FW8ICvEqYpCQOm86n8CIcuEMBY96nc=",
    "https://media.istockphoto.com/id/1456200802/photo/visitor-and-ancient-pottery.webp?a=1&b=1&s=612x612&w=0&k=20&c=fH6qtmVa2e5QvxymjK1lno-hVz-4UphNlmRedactuHA=",
    "https://images.unsplash.com/photo-1564399580075-5dfe19c205f3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1570794155462-374865de09b3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
];

const museumFacts = [
  "Discover over 50,000 historical artifacts spanning centuries of human creativity and innovation.",
  "Architectural marvel inspired by classical Greek temples, blending historical elegance with modern design.",
  "A global collection representing 5 continents and 10,000 years of human history and cultural heritage.",
  "Experience our iconic 60-foot-high glass dome, a testament to architectural brilliance and light.",
  "Empowering education through 300+ annual programs connecting communities with historical knowledge.",
  "Rare manuscript collection featuring delicate documents that whisper stories from the 15th century.",
  "Cutting-edge conservation techniques preserving humanity's most precious historical treasures."
];

const ONE_SECOND = 1000;
const AUTO_DELAY = ONE_SECOND * 10;
const DRAG_BUFFER = 50;
const SPRING_OPTIONS = {
  type: "spring",
  mass: 3,
  stiffness: 400,
  damping: 50,
};

export const MuseumCarousel = () => {
  const [imgIndex, setImgIndex] = useState(0);
  const dragX = useMotionValue(0);

  useEffect(() => {
    const intervalRef = setInterval(() => {
      const x = dragX.get();
      if (x === 0) {
        setImgIndex((pv) => {
          if (pv === museumImages.length - 1) {
            return 0;
          }
          return pv + 1;
        });
      }
    }, AUTO_DELAY);
    return () => clearInterval(intervalRef);
  }, []);

  const onDragEnd = () => {
    const x = dragX.get();
    if (x <= -DRAG_BUFFER && imgIndex < museumImages.length - 1) {
      setImgIndex((pv) => pv + 1);
    } else if (x >= DRAG_BUFFER && imgIndex > 0) {
      setImgIndex((pv) => pv - 1);
    }
  };

  return (
    <div 
      className="relative w-full h-[calc(100vh-4rem)] overflow-hidden"
      style={{ 
        backgroundColor: "#2A2A2A", 
        fontFamily: "'Inter', sans-serif" 
      }}
    >
      <div className="relative w-full h-full">
        <motion.div 
          drag="x" 
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={onDragEnd}
          animate={{ translateX: `-${imgIndex * 100}%` }}
          transition={SPRING_OPTIONS}
          className="absolute top-0 left-0 flex h-full w-full"
        >
          {museumImages.map((imgSrc, idx) => (
            <div 
              key={idx} 
              className="relative w-full h-full flex-shrink-0"
            >
              <div 
                className="absolute inset-0 bg-black opacity-50"
                style={{ 
                  background: 'linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.8) 100%)'
                }}
              />
              <img 
                src={imgSrc} 
                alt={`Museum view ${idx + 1}`}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div 
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center max-w-2xl px-6"
                style={{ 
                  fontFamily: "'Oswald', sans-serif",
                  color: "#FFFFFF"
                }}
              >
                <div 
                  className="p-6 rounded-xl"
                  style={{ 
                    background: 'linear-gradient(to right, rgba(42,42,42,0.7) 0%, rgba(42,42,42,0.5) 100%)',
                    backdropFilter: 'blur(10px)',
                    borderLeft: '4px solid #D4AF37',
                    letterSpacing: '0.05em',
                    boxShadow: '0 10px 25px rgba(0,0,0,0.2)'
                  }}
                >
                  <p className="text-2xl md:text-5xl font-bold opacity-100 text-white">
                    {museumFacts[idx]}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
        
        <Dots imgIndex={imgIndex} setImgIndex={setImgIndex} />
        <ProgressBar imgIndex={imgIndex} total={museumImages.length} />
      </div>
    </div>
  );
};

const Dots = ({ imgIndex, setImgIndex }) => {
  return (
    <div 
      className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20"
    >
      {museumImages.map((_, idx) => (
        <button
          key={idx}
          onClick={() => setImgIndex(idx)}
          className={`h-3 w-3 rounded-full transition-all duration-300 ${
            idx === imgIndex 
              ? "bg-white w-6" 
              : "bg-white bg-opacity-50 hover:bg-opacity-70"
          }`}
        />
      ))}
    </div>
  );
};

const ProgressBar = ({ imgIndex, total }) => {
  const progress = ((imgIndex + 1) / total) * 100;
  
  return (
    <div 
      className="absolute bottom-0 left-0 w-full h-1 z-20"
      style={{ backgroundColor: "#FFFFFF55" }}
    >
      <div 
        className="h-full transition-all duration-300"
        style={{ 
          width: `${progress}%`, 
          backgroundColor: "#D4AF37" 
        }}
      />
    </div>
  );
};

export default MuseumCarousel;