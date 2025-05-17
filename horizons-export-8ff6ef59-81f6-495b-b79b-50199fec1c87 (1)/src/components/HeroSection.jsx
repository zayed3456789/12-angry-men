import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { PlayCircle } from 'lucide-react';

const HeroSection = ({ trailerUrl }) => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-black text-white relative grainy-texture" style={{ backgroundImage: "url('https://storage.googleapis.com/hostinger-horizons-assets-prod/8ff6ef59-81f6-495b-b79b-50199fec1c87/f33fe573fd708561628631f1e7204d06.png')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundBlendMode: 'multiply', backgroundColor: 'rgba(0,0,0,0.6)' }}>
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/70"></div>
      <motion.div 
        className="text-center z-10 p-8"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h1 
          className="text-6xl sm:text-7xl md:text-9xl font-extrabold text-[#E0A040] mb-4"
          style={{ textShadow: '3px 3px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000' }}
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          12 ANGRY MEN
        </motion.h1>
        <motion.p 
          className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto"
          style={{ textShadow: '1px 1px 0 #000' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Life is in their hands. Death is on their minds.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Button 
            variant="outline" 
            size="lg" 
            className="bg-[#E0A040] text-black hover:bg-[#D49030] border-[#E0A040] hover:border-[#D49030] text-lg px-8 py-6 font-semibold"
            onClick={() => document.getElementById('trailer')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <PlayCircle className="mr-2 h-6 w-6" /> Watch Trailer
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;