import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-10 md:py-12 text-center grainy-texture">
      <div className="container mx-auto px-4">
        <p className="text-sm mb-1">&copy; {new Date().getFullYear()} 12 Angry Men Fan Page. All rights reserved.</p>
        <p className="text-xs">This is a fan-made website for educational and entertainment purposes. Inspired by classic cinema.</p>
        <div className="mt-4">
          <a href="#hero" className="text-gray-400 hover:text-[#E0A040] transition-colors px-2">Back to Top</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;