import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { PlayCircle, PauseCircle, Volume2, VolumeX, Maximize, Minimize } from 'lucide-react'; // Changed Film to PauseCircle for clarity

const VideoPlayer = ({ src, title, poster }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const playerRef = useRef(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  const handleProgress = () => {
    if (videoRef.current) {
      setProgress((videoRef.current.currentTime / videoRef.current.duration) * 100);
    }
  };
  
  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  };

  const handleSeek = (event) => {
    if (videoRef.current) {
      const seekTime = (event.target.value / 100) * videoRef.current.duration;
      videoRef.current.currentTime = seekTime;
    }
  };
  
  const toggleFullScreen = () => {
    if (!playerRef.current) return;
    if (!document.fullscreenElement) {
      playerRef.current.requestFullscreen().catch(err => {
        alert(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
      });
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.addEventListener('timeupdate', handleProgress);
      video.addEventListener('loadedmetadata', handleLoadedMetadata);
      video.addEventListener('play', () => setIsPlaying(true));
      video.addEventListener('pause', () => setIsPlaying(false));
      video.addEventListener('ended', () => setIsPlaying(false));
      video.addEventListener('volumechange', () => setIsMuted(video.muted));
    }

    const handleFullScreenChange = () => {
      setIsFullScreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullScreenChange);

    return () => {
      if (video) {
        video.removeEventListener('timeupdate', handleProgress);
        video.removeEventListener('loadedmetadata', handleLoadedMetadata);
        video.removeEventListener('play', () => setIsPlaying(true));
        video.removeEventListener('pause', () => setIsPlaying(false));
        video.removeEventListener('ended', () => setIsPlaying(false));
        video.removeEventListener('volumechange', () => setIsMuted(video.muted));
      }
      document.removeEventListener('fullscreenchange', handleFullScreenChange);
    };
  }, []);

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
  }

  return (
    <motion.div 
      ref={playerRef}
      className="w-full max-w-4xl mx-auto my-12 bg-black rounded-lg shadow-2xl overflow-hidden relative group"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <video
        ref={videoRef}
        className="w-full aspect-video"
        src={src}
        poster={poster}
        onClick={togglePlay}
      />
      <div className="absolute bottom-0 left-0 right-0 p-2 md:p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center space-x-2 md:space-x-4">
        <Button onClick={togglePlay} variant="ghost" size="icon" className="text-white hover:text-[#E0A040]">
          {isPlaying ? <PauseCircle className="h-5 w-5 md:h-6 md:w-6" /> : <PlayCircle className="h-5 w-5 md:h-6 md:w-6" />}
        </Button>
        <div className="text-white text-xs md:text-sm">
          {formatTime(videoRef.current?.currentTime || 0)} / {formatTime(duration)}
        </div>
        <input 
          type="range" 
          min="0" 
          max="100" 
          value={progress} 
          onChange={handleSeek}
          className="w-full h-1 md:h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-[#E0A040]"
        />
        <Button onClick={toggleMute} variant="ghost" size="icon" className="text-white hover:text-[#E0A040]">
          {isMuted ? <VolumeX className="h-5 w-5 md:h-6 md:w-6" /> : <Volume2 className="h-5 w-5 md:h-6 md:w-6" />}
        </Button>
        <Button onClick={toggleFullScreen} variant="ghost" size="icon" className="text-white hover:text-[#E0A040]">
          {isFullScreen ? <Minimize className="h-5 w-5 md:h-6 md:w-6" /> : <Maximize className="h-5 w-5 md:h-6 md:w-6" />}
        </Button>
      </div>
    </motion.div>
  );
};

export default VideoPlayer;