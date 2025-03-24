import React, { useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";

const museumImages = [
  "/imgs/museum/museum-exterior.jpg",
  "/imgs/museum/artifact-hall.jpg", 
  "/imgs/museum/sculpture-gallery.jpg",
  "/imgs/museum/historic-exhibit.jpg",
  "/imgs/museum/modern-wing.jpg",
  "/imgs/museum/special-exhibition.jpg",
  "/imgs/museum/architectural-detail.jpg"
];

const museumFacts = [
  "Founded in 1876, this museum houses over 50,000 historical artifacts.",
  "The museum's architectural design was inspired by classical Greek temples.",
  "Our collection spans 5 continents and 10,000 years of human history.",
  "The central hall features a 60-foot-high glass dome designed by renowned architect.",
  "We host over 300 educational programs annually for schools and community groups.",
  "The museum's rare manuscript collection includes documents from the 15th century.",
  "Our conservation team uses cutting-edge technology to preserve delicate artifacts."
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
      className="relative overflow-hidden w-full max-w-4xl mx-auto"
      style={{ backgroundColor: "#2A2A2A", fontFamily: "'Inter', sans-serif" }}
    >
      <div className="relative w-full aspect-video overflow-hidden">
        <Images imgIndex={imgIndex} />
        <GradientEdges />
        <motion.div 
          drag="x" 
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={onDragEnd}
          animate={{ translateX: `-${imgIndex * 100}%` }}
          transition={SPRING_OPTIONS}
          className="absolute top-0 left-0 flex h-full"
        >
          {museumImages.map((imgSrc, idx) => (
            <div 
              key={idx} 
              className="relative w-full h-full flex-shrink-0"
              style={{ backgroundColor: "#2A2A2A" }}
            >
              <img 
                src={imgSrc} 
                alt={`Museum view ${idx + 1}`}
                className="w-full h-full object-cover"
              />
              <div 
                className="absolute bottom-0 left-0 right-0 p-4 text-center"
                style={{ 
                  backgroundColor: "rgba(42, 42, 42, 0.7)", 
                  color: "#FFFFFF",
                  fontFamily: "'Oswald', sans-serif"
                }}
              >
                {museumFacts[idx]}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
      <Dots imgIndex={imgIndex} setImgIndex={setImgIndex} />
    </div>
  );
};

const Dots = ({ imgIndex, setImgIndex }) => {
  return (
    <div className="flex justify-center py-4 space-x-2">
      {museumImages.map((_, idx) => (
        <button
          key={idx}
          onClick={() => setImgIndex(idx)}
          className={`h-3 w-3 rounded-full transition-colors ${
            idx === imgIndex ? "bg-neutral-50" : "bg-neutral-500"
          }`}
        />
      ))}
    </div>
  );
};

const GradientEdges = () => {
  return (
    <>
      <div 
        className="absolute top-0 left-0 h-full w-16 z-10"
        style={{
          background: "linear-gradient(to right, rgba(42, 42, 42, 0.8), transparent)"
        }}
      />
      <div 
        className="absolute top-0 right-0 h-full w-16 z-10"
        style={{
          background: "linear-gradient(to left, rgba(42, 42, 42, 0.8), transparent)"
        }}
      />
    </>
  );
};

export default MuseumCarousel;