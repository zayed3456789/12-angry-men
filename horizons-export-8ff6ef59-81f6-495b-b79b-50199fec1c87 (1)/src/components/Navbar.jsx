import React from 'react';
import { motion } from 'framer-motion';

const Navbar = ({ navItems }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-black/80 backdrop-blur-md shadow-lg p-4 z-50">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        <motion.h1 
          className="text-2xl md:text-3xl font-bold text-[#E0A040] tracking-wider mb-2 sm:mb-0"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          12 ANGRY MEN
        </motion.h1>
        <div className="flex flex-wrap justify-center space-x-2 sm:space-x-4">
          {navItems.map((item) => (
            <motion.a
              key={item.id}
              href={`#${item.id}`}
              className="text-gray-300 hover:text-white transition-colors duration-300 px-2 py-1 sm:px-3 sm:py-2 rounded-md text-xs sm:text-sm font-medium border border-transparent hover:border-gray-500"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 + navItems.indexOf(item) * 0.05 }}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              {item.label}
            </motion.a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;