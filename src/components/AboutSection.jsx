import React from 'react';
import { motion } from 'framer-motion';
import { 
  Globe, 
  Trophy, 
  Museum, 
  Users, 
  BookOpen, 
  Star 
} from 'lucide-react';

const AchievementCard = ({ icon: Icon, title, description }) => (
  <motion.div 
    className="bg-[#FFFFFF11] p-6 rounded-xl border border-[#FFFFFF22] hover:border-[#D4AF37] transition-all duration-300"
    whileHover={{ scale: 1.05 }}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
  >
    <div className="flex items-center mb-4">
      <Icon className="text-[#D4AF37] mr-4" size={40} />
      <h3 className="text-xl font-semibold text-white">{title}</h3>
    </div>
    <p className="text-[#FFFFFF99]">{description}</p>
  </motion.div>
);

const AboutSection = () => {
  const achievements = [
    {
      icon: Globe,
      title: "Global Reach",
      description: "Connecting art lovers across 127 countries, breaking geographical barriers."
    },
    {
      icon: Users,
      title: "Community Impact",
      description: "Over 2.5 million virtual visitors since our launch in 2023."
    },
    {
      icon: Trophy,
      title: "Innovation Award",
      description: "Named 'Most Innovative Digital Museum' by Global Culture Institute."
    },
    {
      icon: Museum,
      title: "Extensive Collection",
      description: "Curating over 10,000 artworks from 500+ renowned artists worldwide."
    }
  ];

  return (
    <section className="py-16 bg-[#2A2A2A] text-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl font-bold mb-6 text-white">
            About <span className="text-[#D4AF37]">ArtVistas</span>
          </h2>
          <p className="text-xl max-w-3xl mx-auto text-[#FFFFFF99]">
            ArtVistas is a revolutionary digital platform transforming how the world experiences art. 
            We bridge the gap between artists, art enthusiasts, and cultural heritage through immersive 
            digital exhibitions and innovative technological storytelling.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ staggerChildren: 0.2 }}
          className="grid md:grid-cols-2 gap-6"
        >
          {achievements.map((achievement, index) => (
            <AchievementCard 
              key={index} 
              icon={achievement.icon}
              title={achievement.title}
              description={achievement.description}
            />
          ))}
        </motion.div>

        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="inline-flex items-center bg-[#FFFFFF11] px-6 py-3 rounded-full">
            <Star className="text-[#D4AF37] mr-3" size={24} />
            <span className="text-lg font-medium">Our Mission: Art Without Boundaries</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;