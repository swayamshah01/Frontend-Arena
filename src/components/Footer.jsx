import React from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  MapPin, 
  Phone, 
  Facebook, 
  Instagram, 
  Twitter, 
  Calendar, 
  CreditCard,
  HeartHandshake,
  Send
} from 'lucide-react';

const Footer = () => {
  const footerSections = [
    {
      title: 'Explore',
      icon: <MapPin size={20} className="text-[#D4AF37] mr-2" />,
      links: [
        { label: 'Exhibitions', href: '#exhibitions' },
        { label: 'Current Shows', href: '#current-shows' },
        { label: 'Upcoming Events', href: '#events' },
        { label: 'Museum Guide', href: '#guide' }
      ]
    },
    {
      title: 'Support',
      icon: <HeartHandshake size={20} className="text-[#D4AF37] mr-2" />,
      links: [
        { label: 'Membership', href: '#membership' },
        { label: 'Donate', href: '#donate' },
        { label: 'Corporate Sponsors', href: '#sponsorship' },
        { label: 'Volunteer', href: '#volunteer' }
      ]
    },
    {
      title: 'Visit',
      icon: <Send size={20} className="text-[#D4AF37] mr-2" />,
      links: [
        { label: 'Plan Your Visit', href: '#plan-visit' },
        { label: 'Tickets', href: '#tickets' },
        { label: 'Hours & Admission', href: '#hours' },
        { label: 'Accessibility', href: '#accessibility' }
      ]
    }
  ];

  return (
    <footer 
      className="bg-[#2A2A2A] text-white py-16 px-8"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-8">
        {/* Logo and Description - Spans 4 columns */}
        <div className="col-span-12 md:col-span-4 lg:col-span-4">
          <h2 className="text-3xl font-bold mb-4 text-[#D4AF37]" style={{ letterSpacing: '0.05em' }}>
            ArtVistas Museum
          </h2>
          <p className="text-[#FFFFFF99] mb-6 pr-4">
            A cutting-edge cultural institution dedicated to exploring the intersection of art, technology, and human creativity through immersive digital experiences.
          </p>
          
          {/* Contact Info */}
          <div className="space-y-3 mb-6">
            <div className="flex items-center">
              <Phone size={20} className="text-[#D4AF37] mr-3" />
              <span className="text-[#FFFFFF99]">(555) 123-4567</span>
            </div>
            <div className="flex items-center">
              <Mail size={20} className="text-[#D4AF37] mr-3" />
              <span className="text-[#FFFFFF99]">contact@artvistas.museum</span>
            </div>
            <div className="flex items-center">
              <MapPin size={20} className="text-[#D4AF37] mr-3" />
              <span className="text-[#FFFFFF99]">123 Cultural Avenue, New York, NY</span>
            </div>
          </div>

          {/* Social Media */}
          <div className="flex space-x-4">
            {[
              { Icon: Facebook, href: '#facebook' },
              { Icon: Instagram, href: '#instagram' },
              { Icon: Twitter, href: '#twitter' }
            ].map(({ Icon, href }, index) => (
              <motion.a 
                key={index}
                href={href} 
                whileHover={{ scale: 1.1 }}
                className="text-[#FFFFFF99] hover:text-[#D4AF37]"
              >
                <Icon size={24} />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Footer Links - Spans 8 columns */}
        <div className="col-span-12 md:col-span-8 lg:col-span-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {footerSections.map((section, index) => (
              <div key={index} className="space-y-4">
                <div className="flex items-center border-b border-[#FFFFFF22] pb-2">
                  {section.icon}
                  <h3 className="text-white font-semibold text-xl">{section.title}</h3>
                </div>
                <ul className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <motion.li 
                      key={linkIndex}
                      whileHover={{ translateX: 5 }}
                      className="transition-transform"
                    >
                      <a 
                        href={link.href} 
                        className="text-[#FFFFFF99] hover:text-[#D4AF37] transition-colors"
                      >
                        {link.label}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Newsletter - Final Column */}
            <div className="space-y-4">
              <div className="flex items-center border-b border-[#FFFFFF22] pb-2">
                <Calendar size={20} className="text-[#D4AF37] mr-2" />
                <h3 className="text-white font-semibold text-xl">Newsletter</h3>
              </div>
              <div className="bg-[#FFFFFF11] rounded-xl p-4 border w-160 border-[#FFFFFF22]">
                <form className="space-y-3">
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="  w-full bg-[#FFFFFF22] text-white p-2  rounded-md focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                  />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    className="w-full bg-[#D4AF37] text-[#2A2A2A] p-2 rounded-md font-semibold"
                  >
                    Subscribe
                  </motion.button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Section - Full Width */}
        <div className="col-span-12 border-t border-[#FFFFFF22] mt-8 pt-6 text-center">
          <p className="text-[#FFFFFF99] mb-2">
            © 2024 ArtVistas Museum. All Rights Reserved.
          </p>
          <div className="space-x-4 text-[#FFFFFF99]">
            <a href="#" className="hover:text-[#D4AF37] transition-colors text-sm">Terms of Service</a>
            <a href="#" className="hover:text-[#D4AF37] transition-colors text-sm">Privacy Policy</a>
            <a href="#" className="hover:text-[#D4AF37] transition-colors text-sm">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;