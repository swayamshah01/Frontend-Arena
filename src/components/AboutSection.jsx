import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Linkedin, 
  Twitter
} from 'lucide-react';

const TeamMember = ({ name, role, description, expertise, achievements, imageUrl }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div 
      className="bg-[#FFFFFF11] rounded-2xl overflow-hidden shadow-2xl border border-[#FFFFFF22] hover:border-[#D4AF37] transition-all duration-300 transform hover:scale-105"
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Image and Basic Info */}
      <div className="relative h-80">
        <img 
          src={imageUrl} 
          alt={name} 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#2A2A2A] to-transparent opacity-75"></div>
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <h3 className="text-3xl font-bold mb-2">{name}</h3>
          <p className="text-xl text-[#D4AF37]">{role}</p>
        </div>
      </div>

      {/* Detailed Content */}
      <div className="p-8">
        <div className="flex justify-between items-center mb-6">
          <div className="flex space-x-4">
            <motion.a 
              href="#" 
              whileHover={{ scale: 1.2 }}
              className="text-[#FFFFFF99] hover:text-[#D4AF37]"
            >
              <Linkedin size={28} />
            </motion.a>
            <motion.a 
              href="#" 
              whileHover={{ scale: 1.2 }}
              className="text-[#FFFFFF99] hover:text-[#D4AF37]"
            >
              <Twitter size={28} />
            </motion.a>
          </div>
          <motion.button
            onClick={() => setIsExpanded(!isExpanded)}
            whileHover={{ scale: 1.1 }}
            className="bg-[#D4AF37] text-black px-4 py-2 rounded-full font-semibold"
          >
            {isExpanded ? 'Collapse' : 'Learn More'}
          </motion.button>
        </div>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden"
            >
              <p className="text-[#FFFFFF99] mb-6 leading-relaxed">{description}</p>
              
              <div className="mb-6">
                <h4 className="text-xl font-semibold text-[#D4AF37] mb-3">Key Expertise</h4>
                <div className="flex flex-wrap gap-2">
                  {expertise.map((skill, index) => (
                    <span 
                      key={index} 
                      className="bg-[#FFFFFF22] px-3 py-1 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-[#D4AF37] mb-3">Notable Achievements</h4>
                <ul className="list-disc list-inside text-[#FFFFFF99] space-y-2">
                  {achievements.map((achievement, index) => (
                    <li key={index}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

const AboutSection = () => {
  const teamMembers = [
    {
      name: "Elena Rodriguez",
      role: "Chief Curator",
      description: "A visionary art historian with an extensive background in digital museum curation, Elena has transformed the way we experience art in the digital age. Her innovative approach bridges traditional art scholarship with cutting-edge technological storytelling.",
      expertise: [
        "Digital Curation",
        "Contemporary Art",
        "Cultural Preservation",
        "Museum Technology"
      ],
      achievements: [
        "Awarded 'Digital Museum Innovator of the Year' by Global Art Institute",
        "Published groundbreaking research on digital art preservation",
        "Curated over 50 international digital exhibitions",
        "Developed ArtVistas' unique immersive art experience platform"
      ],
      imageUrl: "https://imgs.search.brave.com/WJrs_-eS-4qOSxwZoqWQD3GCfN9hSa9SenYAlVs_hjc/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9jaGVlcmZ1bC1z/ZW5pb3Itd29tYW4t/c3R1ZGlvLXNob290/XzUzODc2LTEzNDc1/My5qcGc_c2VtdD1h/aXNfaHlicmlk"
    },
    {
      name: "Marcus Chen",
      role: "Creative Director",
      description: "A pioneering digital experience designer who reimagines the intersection of technology and art. Marcus brings a unique blend of creative vision and technological expertise to transform how we interact with and understand art in the digital realm.",
      expertise: [
        "UX Design",
        "Digital Art",
        "Interactive Experiences",
        "Creative Technology"
      ],
      achievements: [
        "Led design innovation at top tech and art institutions",
        "Created award-winning interactive art platforms",
        "Keynote speaker on art and technology integration",
        "Developed ArtVistas' revolutionary virtual exhibition technology"
      ],
      imageUrl: "https://imgs.search.brave.com/VqyMYw0NyHqRjpOTgKVXzcBqKCj6tldOAXmWN1DQLtM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWdj/ZG4uc3RhYmxlZGlm/ZnVzaW9ud2ViLmNv/bS8yMDI0LzExLzQv/YWM1MzhhM2UtNTdk/Ny00NjUwLTk4ZTAt/ZjYzYzc4M2UzNjQ0/LmpwZw"
    },
    {
      name: "Sophia Nkosi",
      role: "Global Outreach Coordinator",
      description: "A passionate advocate for global art accessibility, Sophia connects ArtVistas with artists and communities worldwide. Her multicultural background and extensive network have been instrumental in creating a truly global, inclusive art platform.",
      expertise: [
        "Cultural Diplomacy",
        "Global Art Networks",
        "Community Engagement",
        "Multicultural Curation"
      ],
      achievements: [
        "Established partnerships with art communities in 50+ countries",
        "Developed ArtVistas' global artist support program",
        "Recognized for promoting diversity in digital art spaces",
        "Created innovative cross-cultural art exchange initiatives"
      ],
      imageUrl: "https://imgs.search.brave.com/nEYkRE6YbI65c_ilbVby-kKWA4bbm_N2H6hQk7cCttA/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9z/bWlsZXktZWxkZXIt/d29tYW4tc3RhbmRp/bmcta2l0Y2hlbl8y/My0yMTQ4MzczODg0/LmpwZz9zZW10PWFp/c19oeWJyaWQ"
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
        {/* Team Section */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold text-center mb-12 text-white">
            Our <span className="text-[#D4AF37]">Visionary Team</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <TeamMember 
                key={index}
                name={member.name}
                role={member.role}
                description={member.description}
                expertise={member.expertise}
                achievements={member.achievements}
                imageUrl={member.imageUrl}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AboutSection;