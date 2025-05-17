import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '@/components/SectionWrapper';
import { ListChecks } from 'lucide-react';
import { movieFacts } from '@/data/movieData';

const MovieFactsSection = () => {
  return (
    <SectionWrapper id="movie-facts" title="Movie Facts & Trivia" icon={ListChecks} className="bg-neutral-950">
      <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
        {movieFacts.map((fact, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-neutral-800/50 p-6 rounded-lg shadow-lg border border-neutral-700"
          >
            <h4 className="text-xl font-semibold text-[#E0A040] mb-2">{fact.title}</h4>
            <p className="text-gray-300 text-sm leading-relaxed">{fact.content}</p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default MovieFactsSection;