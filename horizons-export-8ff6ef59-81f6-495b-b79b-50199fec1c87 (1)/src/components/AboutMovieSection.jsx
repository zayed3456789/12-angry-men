import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '@/components/SectionWrapper';
import { Info } from 'lucide-react';
import { aboutMovieContent } from '@/data/movieData';

const AboutMovieSection = () => {
  const { title, paragraphs, tagline } = aboutMovieContent;

  return (
    <SectionWrapper id="about-movie" title="About The Movie" icon={Info} className="bg-neutral-950">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto text-gray-300 text-lg leading-relaxed"
      >
        <h3 className="text-3xl font-semibold text-[#E0A040] mb-6 text-center">{title}</h3>
        {paragraphs.map((paragraph, index) => (
          <p key={index} className="mb-6 text-justify">
            {paragraph}
          </p>
        ))}
        <p className="text-xl font-semibold text-center text-gray-400 mt-8 italic">
          "{tagline}"
        </p>
      </motion.div>
    </SectionWrapper>
  );
};

export default AboutMovieSection;