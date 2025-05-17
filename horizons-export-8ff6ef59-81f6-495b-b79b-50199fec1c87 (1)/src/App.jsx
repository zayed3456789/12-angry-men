import React from 'react';
import { Toaster } from '@/components/ui/toaster';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import VideoPlayer from '@/components/VideoPlayer';
import SectionWrapper from '@/components/SectionWrapper';
import CastSection from '@/components/CastSection';
import GallerySection from '@/components/GallerySection';
import AboutMovieSection from '@/components/AboutMovieSection';
import MovieFactsSection from '@/components/MovieFactsSection';
import AboutCastSection from '@/components/AboutCastSection';
import Footer from '@/components/Footer';
import { PlayCircle, Film, Users, Image as ImageIcon, Info, ListChecks } from 'lucide-react';
import { castMembers, galleryImages } from '@/data/movieData';

function App() {
  const movieUrl = "https://dn721900.ca.archive.org/0/items/video-100/video-100.mp4";
  const trailerUrl = "https://ia601206.us.archive.org/24/items/12-angry-men-1957-trailer/12%20Angry%20Men%20%281957%29%20Trailer.mp4";

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about-movie', label: 'About Movie' },
    { id: 'trailer', label: 'Trailer' },
    { id: 'movie', label: 'Watch Movie' },
    { id: 'cast', label: 'Cast' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'movie-facts', label: 'Facts' },
  ];

  return (
    <div className="bg-neutral-950 min-h-screen">
      <Toaster />
      <Navbar navItems={navItems} />
      <main>
        <HeroSection trailerUrl={trailerUrl} />
        
        <AboutMovieSection />
        
        <SectionWrapper id="trailer" title="Official Trailer" icon={PlayCircle}>
           <VideoPlayer src={trailerUrl} title="12 Angry Men (1957) Trailer" poster="https://storage.googleapis.com/hostinger-horizons-assets-prod/8ff6ef59-81f6-495b-b79b-50199fec1c87/ff8cbe9521fc6afeb661e580eadd62b6.jpg" />
        </SectionWrapper>

        <SectionWrapper id="movie" title="Watch The Full Movie" icon={Film}>
          <VideoPlayer src={movieUrl} title="12 Angry Men (1957) Full Movie" poster="https://storage.googleapis.com/hostinger-horizons-assets-prod/8ff6ef59-81f6-495b-b79b-50199fec1c87/f33fe573fd708561628631f1e7204d06.png"/>
        </SectionWrapper>
        
        <CastSection castMembers={castMembers} />
        <AboutCastSection castMembers={castMembers} />
        <GallerySection galleryImages={galleryImages} />
        <MovieFactsSection />

      </main>
      <Footer />
    </div>
  );
}

export default App;