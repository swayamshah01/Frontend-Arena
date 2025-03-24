import React from 'react';
import { motion } from 'framer-motion';

const VisionSection = () => {
  return (
    <section className="py-16 bg-gray-900 text-center">
      <div className="max-w-4xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold mb-6"
        >
          Our Vision
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl"
        >
          To redefine how the world experiences art—digitally, immersively, and universally.
        </motion.p>
      </div>
    </section>
  );
};

export default VisionSection;