import React from 'react';
import { motion } from 'framer-motion';

const SectionWrapper = ({ id, title, children, icon: IconComponent, className = "" }) => (
  <section id={id} className={`py-16 md:py-24 bg-neutral-900 grainy-texture ${className}`}>
    <div className="container mx-auto px-4">
      <motion.div 
        className="flex items-center mb-8 md:mb-12"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {IconComponent && <IconComponent className="h-8 w-8 md:h-10 md:w-10 text-[#E0A040] mr-3 md:mr-4" />}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#E0A040]">{title}</h2>
      </motion.div>
      {children}
    </div>
  </section>
);

export default SectionWrapper;