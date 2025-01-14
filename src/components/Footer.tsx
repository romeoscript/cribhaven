import logo from '../assets/properties/logo-white.svg';
import find from '../assets/properties/find.jpeg';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const CTAandFooter = () => {
  return (
    <>
      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="relative w-full max-w-6xl mx-auto px-4 py-8"
      >
        <div className="relative rounded-2xl overflow-hidden">
          <div className="absolute inset-0 bg-black/40 z-10" />
          <img
            src={find}
            alt="Students"
            className="w-full h-[400px] object-cover"
          />
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Find Your Perfect Home?
            </h2>
            <p className="text-xl mb-6">Start Now!!!</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-green-500 text-white px-8 py-3 rounded-full font-medium"
            >
              Get Started
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Footer */}
      <footer className="bg-[#1A1730] text-white mt-16 px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            {/* Logo and Description */}
            <div className="col-span-1 md:col-span-1">
              <img src={logo} alt="CribHaven Logo" className="mb-4" />
              <p className="text-sm text-gray-300 mb-4">
                We connect you with hundreds of agents so you can pick the best prices
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-white hover:text-green-500">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="text-white hover:text-green-500">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="text-white hover:text-green-500">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-white hover:text-green-500">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white">Home</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Features</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">How it Works</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Why Choose Us</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">FAQs</a></li>
              </ul>
            </div>

            {/* Contact Us */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-300">
                  <span>📧</span>
                  <a href="mailto:support@cribhaven.com" className="ml-2 hover:text-white">
                    support@cribhaven.com.ng
                  </a>
                </li>
                <li className="flex items-center text-gray-300">
                  <span>📞</span>
                  <a href="tel:+2348025892569" className="ml-2 hover:text-white">
                  0811 914 5027
                  </a>
                </li>
                <li className="flex items-center text-gray-300">
                  <span>📍</span>
                  <span className="ml-2">Abuja</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="pt-8 border-t border-gray-700 text-center text-sm text-gray-400">
            <p>© Copyright 2025. All Rights Reserved by CribHaven</p>
            <div className="flex justify-center space-x-4 mt-2">
              <a href="#" className="hover:text-white">Privacy policy</a>
              <a href="#" className="hover:text-white">Terms of Service</a>
              <a href="#" className="hover:text-white">Contact Us</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default CTAandFooter;