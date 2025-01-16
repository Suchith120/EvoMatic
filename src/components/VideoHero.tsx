import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const VideoHero = () => {
  return (
    <div className="relative h-screen overflow-hidden">
      <video 
        autoPlay 
        loop 
        muted 
        className="absolute w-full h-full object-cover"
        playsInline
      >
        <source src="https://cdn.coverr.co/videos/coverr-driving-an-electric-car-5714/1080p.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/30" />
      
      <div className="relative h-full flex flex-col items-center justify-center text-white">
        <motion.h1 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, type: "spring" }}
          className="text-7xl md:text-9xl font-bold mb-4"
        >
          EVOMATIC
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-2xl md:text-3xl mb-8"
        >
          Evolution of Electric Luxury
        </motion.p>
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-black px-10 py-4 rounded-full text-lg hover:bg-gray-200 transition-colors"
        >
          Discover More
        </motion.button>
      </div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
      >
        <ChevronDown className="h-8 w-8 animate-bounce" />
      </motion.div>
    </div>
  );
};

export default VideoHero;