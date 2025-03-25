import React, { useState, useEffect } from 'react';
import { 
  FiGlobe, 
  FiTrello, 
  FiMonitor, 
  FiPaperclip 
} from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";

// Custom hook for window size
export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    
    window.addEventListener("resize", handleResize);
    handleResize();
    
    return () => window.removeEventListener("resize", handleResize);
  }, []); 

  return windowSize;
};

const ContemporaryExhibitionAccordion = () => {
  const [open, setOpen] = useState(exhibitionItems[0].id);

  return (
    <section className="p-4 bg-[#2A2A2A]">
      <div className="flex flex-col lg:flex-row h-fit lg:h-[550px] w-full max-w-6xl mx-auto shadow-2xl overflow-hidden rounded-xl">
        {exhibitionItems.map((item) => (
          <ExhibitionPanel
            key={item.id}
            open={open}
            setOpen={setOpen}
            id={item.id}
            Icon={item.Icon}
            title={item.title}
            imgSrc={item.imgSrc}
            description={item.description}
            details={item.details}
          />
        ))}
      </div>
    </section>
  );
};

const ExhibitionPanel = ({ 
  open, 
  setOpen, 
  id, 
  Icon, 
  title, 
  imgSrc, 
  description,
  details 
}) => {
  const { width } = useWindowSize();
  const isOpen = open === id;

  return (
    <>
      <button
        className="bg-[#2A2A2A] hover:bg-[#3A3A3A] text-white transition-colors p-3 
        border-r-[1px] border-b-[1px] border-[#FFFFFF55] flex flex-row-reverse lg:flex-col 
        justify-end items-center gap-4 relative group"
        onClick={() => setOpen(id)}
      >
        <span
          style={{
            writingMode: "vertical-lr",
          }}
          className="hidden lg:block text-xl font-light rotate-180 text-[#D4AF37]"
        >
          {title}
        </span>
        <span className="block lg:hidden text-xl font-light text-[#D4AF37]">{title}</span>
        <div className="w-6 lg:w-full aspect-square bg-[#D4AF37] text-white grid place-items-center">
          <Icon />
        </div>
        <span className="w-4 h-4 bg-[#2A2A2A] group-hover:bg-[#3A3A3A] transition-colors 
        border-r-[1px] border-b-[1px] lg:border-b-0 lg:border-t-[1px] border-[#FFFFFF55] 
        rotate-45 absolute bottom-0 lg:bottom-[50%] right-[50%] lg:right-0 
        translate-y-[50%] translate-x-[50%] z-20" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key={`panel-${id}`}
            variants={width && width > 1024 ? panelVariants : panelVariantsSm}
            initial="closed"
            animate="open"
            exit="closed"
            style={{
              backgroundImage: `url(${imgSrc})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
            className="w-full h-full overflow-hidden relative bg-black flex items-end"
          >
            <motion.div
              variants={descriptionVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="p-6 bg-black/60 backdrop-blur-sm text-white"
            >
              <h3 className="text-2xl font-bold text-[#D4AF37] mb-3">{title}</h3>
              <p className="mb-4 text-[#FFFFFF]">{description}</p>
              <ul className="space-y-2 text-sm">
                {details.map((detail, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-2 text-[#D4AF37]">●</span>
                    <span className="text-[#FFFFFF]">{detail}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const panelVariants = {
  open: {
    width: "100%",
    height: "100%",
  },
  closed: {
    width: "0%",
    height: "100%",
  },
};

const panelVariantsSm = {
  open: {
    width: "100%",
    height: "300px",
  },
  closed: {
    width: "100%",
    height: "0px",
  },
};

const descriptionVariants = {
  open: {
    opacity: 1,
    y: "0%",
    transition: {
      delay: 0.125,
    },
  },
  closed: { opacity: 0, y: "100%" },
};

const exhibitionItems = [
  {
    id: 1,
    title: "Digital Innovations",
    Icon: FiGlobe,
    imgSrc: "/api/placeholder/1200/800",
    description: "Exploring the cutting-edge intersection of technology and artistic expression in contemporary digital art.",
    details: [
      "Showcasing groundbreaking digital art techniques",
      "Interactive installations that blur lines between viewer and artwork",
      "Collaborative projects demonstrating global artistic connections",
      "Emerging technologies like AI and generative art"
    ]
  },
  {
    id: 2,
    title: "Algorithmic Creativity",
    Icon: FiTrello,
    imgSrc: "/api/placeholder/1200/800",
    description: "Diving into the world of computational creativity and how algorithms are revolutionizing artistic creation.",
    details: [
      "Machine learning-generated artworks",
      "Real-time generative art experiences",
      "Exploration of code as a creative medium",
      "Interactive algorithmic installations"
    ]
  },
  {
    id: 3,
    title: "Immersive Experiences",
    Icon: FiMonitor,
    imgSrc: "/api/placeholder/1200/800",
    description: "Transformative digital experiences that challenge perceptions and create new realms of artistic interaction.",
    details: [
      "Virtual reality art installations",
      "Augmented reality artistic interventions",
      "360-degree immersive digital environments",
      "Sensory-responsive art experiences"
    ]
  },
  {
    id: 4,
    title: "Global Perspectives",
    Icon: FiPaperclip,
    imgSrc: "/api/placeholder/1200/800",
    description: "A curated collection highlighting diverse voices and innovative approaches in contemporary digital art.",
    details: [
      "International artist collaborations",
      "Cross-cultural digital art projects",
      "Emerging artist showcase",
      "Dialogues on digital art's global impact"
    ]
  }
];

export default ContemporaryExhibitionAccordion;