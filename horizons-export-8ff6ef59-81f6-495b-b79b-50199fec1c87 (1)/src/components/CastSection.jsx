import React from 'react';
import { motion } from 'framer-motion';
import { Users } from 'lucide-react';
import SectionWrapper from '@/components/SectionWrapper';

const CastSection = ({ castMembers }) => {
  const handleActorClick = (actorName) => {
    const aboutCastSection = document.getElementById('about-cast');
    if (aboutCastSection) {
      aboutCastSection.scrollIntoView({ behavior: 'smooth' });
      
      setTimeout(() => {
        const actorCard = document.getElementById(`actor-${actorName.replace(/\s+/g, '-').toLowerCase()}`);
        if (actorCard) {
          actorCard.classList.add('ring-4', 'ring-[#E0A040]', 'scale-105');
          setTimeout(() => {
            actorCard.classList.remove('ring-4', 'ring-[#E0A040]', 'scale-105');
          }, 2000);
        }
      }, 700); 
    }
  };

  return (
    <SectionWrapper id="cast" title="The Cast" icon={Users}>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 md:gap-8">
        {castMembers.map((member, index) => (
          <motion.div
            key={member.name}
            className="bg-neutral-800 rounded-lg shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-105 group cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            onClick={() => handleActorClick(member.name)}
          >
            <img src={member.img} alt={member.name} className="w-full h-60 sm:h-72 object-cover object-top group-hover:opacity-80 transition-opacity duration-300" />
            <div className="p-3 md:p-4">
              <h3 className="text-md sm:text-lg md:text-xl font-semibold text-white group-hover:text-[#E0A040] transition-colors duration-300 truncate">{member.name}</h3>
              <p className="text-xs sm:text-sm text-gray-400">{member.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default CastSection;