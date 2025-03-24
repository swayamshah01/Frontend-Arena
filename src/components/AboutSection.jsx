import React from 'react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <section className="py-16 bg-gray-800">
      <div className="max-w-4xl mx-auto text-center px-4">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold mb-6"
        >
          About ArtVistas
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl"
        >
          ArtVistas is a new-age virtual museum and art gallery designed to make art and culture accessible to a global audience. Through an immersive online experience, we aim to connect people with the beauty of creativity, no matter where they are.
        </motion.p>
      </div>
    </section>
  );
};

export default AboutSection;