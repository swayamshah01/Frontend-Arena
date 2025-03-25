import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import visit from "../assets/visitnew.png"
import multi from "../assets/multinew.png"
import story from "../assets/story.jpg"

export const VirtualGalleryShowcase = () => {
  return (
    <div className="bg-[#2A2A2A] text-white">
      <TextParallaxContent
        imgUrl={visit}
        subheading="Immersive Experiences"
        heading="Virtual Gallery Walkthrough"
        buttonText="Explore 360° Exhibits"
      />
      <TextParallaxContent
        imgUrl={multi}
        subheading="Multi-Platform Access"
        heading="Art on Any Screen"
        buttonText="Access Galleries Now"
      />
      <TextParallaxContent
        imgUrl={story}
        subheading="Interactive Storytelling"
        heading="Art Beyond Boundaries"
        buttonText="Discover Narratives"
      />
    </div>
  );
};

const IMG_PADDING = 12;

const TextParallaxContent = ({ 
  imgUrl, 
  subheading, 
  heading, 
  buttonText 
}) => {
  return (
    <div
      style={{
        paddingLeft: IMG_PADDING,
        paddingRight: IMG_PADDING,
      }}
    >
      <div className="relative h-[150vh]">
        <StickyImage imgUrl={imgUrl} buttonText={buttonText} />
        <OverlayCopy heading={heading} subheading={subheading} />
      </div>
    </div>
  );
};

const StickyImage = ({ imgUrl, buttonText }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: `calc(100vh - ${IMG_PADDING * 2}px)`,
        top: IMG_PADDING,
        scale,
      }}
      ref={targetRef}
      className="sticky z-0 overflow-hidden rounded-3xl relative"
    >
      <motion.div
        className="absolute inset-0 bg-neutral-950/70"
        style={{
          opacity,
        }}
      />
      <motion.button 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.3 }}
        className="absolute bottom-20 left-1/2 transform -translate-x-1/2 rounded bg-[#D4AF37] px-9 py-4 text-xl text-[#2A2A2A] font-semibold transition-colors hover:opacity-90"
      >
        {buttonText} <FiArrowUpRight className="inline ml-2" />
      </motion.button>
    </motion.div>
  );
};

const OverlayCopy = ({ subheading, heading }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

  return (
    <motion.div
      style={{
        y,
        opacity,
      }}
      ref={targetRef}
      className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white"
    >
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-2 text-center text-xl md:mb-4 md:text-3xl text-[#D4AF37]"
      >
        {subheading}
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-center text-4xl font-bold md:text-7xl"
      >
        {heading}
      </motion.p>
    </motion.div>
  );
};

export default VirtualGalleryShowcase;