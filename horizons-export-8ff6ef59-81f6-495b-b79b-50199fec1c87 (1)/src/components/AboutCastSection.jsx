import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '@/components/SectionWrapper';
import { UserSquare2 } from 'lucide-react';

const AboutCastSection = ({ castMembers }) => {
  return (
    <SectionWrapper id="about-cast" title="About The Cast" icon={UserSquare2} className="bg-neutral-950">
      <div className="space-y-12">
        {castMembers.map((member, index) => (
          <motion.div
            key={member.name}
            id={`actor-${member.name.replace(/\s+/g, '-').toLowerCase()}`}
            className="md:flex bg-neutral-800/70 rounded-xl shadow-2xl overflow-hidden transition-all duration-500 ease-out"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <img 
              src={member.img} 
              alt={member.name} 
              className="w-full md:w-1/3 h-80 md:h-auto object-cover object-top"
            />
            <div className="p-6 md:p-8 flex flex-col justify-center md:w-2/3">
              <h3 className="text-3xl font-bold text-[#E0A040] mb-2">{member.name}</h3>
              <p className="text-lg text-gray-400 mb-4 font-medium">As {member.role}</p>
              <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                {member.bio || "Detailed biography not available."}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default AboutCastSection;