import React from 'react';
import { motion } from 'framer-motion';
import { FaTwitter, FaInstagram, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="py-8 bg-gray-800 text-center">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex justify-center gap-6 mb-4">
          <FaTwitter className="text-2xl hover:text-gray-400" />
          <FaInstagram className="text-2xl hover:text-gray-400" />
          <FaFacebook className="text-2xl hover:text-gray-400" />
        </div>
        <p>&copy; 2025 ArtVistas. All rights reserved.</p>
      </motion.div>
    </footer>
  );
};

export default Footer;