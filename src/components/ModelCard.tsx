import React from 'react';
import { motion } from 'framer-motion';

interface ModelCardProps {
  name: string;
  specs: {
    range: string;
    acceleration: string;
    topSpeed: string;
    power: string;
  };
  imageUrl: string;
  price: string;
}

const ModelCard: React.FC<ModelCardProps> = ({ name, specs, imageUrl, price }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-black/90 rounded-lg overflow-hidden"
    >
      <motion.div 
        whileHover={{ scale: 1.05 }}
        className="relative h-64 overflow-hidden"
      >
        <img src={imageUrl} alt={name} className="w-full h-full object-cover" />
      </motion.div>
      <div className="p-6">
        <h3 className="text-2xl font-bold text-white mb-4">{name}</h3>
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <p className="text-gray-400">Range</p>
            <p className="text-white font-semibold">{specs.range}</p>
          </div>
          <div>
            <p className="text-gray-400">0-60 mph</p>
            <p className="text-white font-semibold">{specs.acceleration}</p>
          </div>
          <div>
            <p className="text-gray-400">Top Speed</p>
            <p className="text-white font-semibold">{specs.topSpeed}</p>
          </div>
          <div>
            <p className="text-gray-400">Power</p>
            <p className="text-white font-semibold">{specs.power}</p>
          </div>
        </div>
        <p className="text-2xl font-bold text-white mb-4">Starting at {price}</p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full bg-white text-black py-3 rounded-full hover:bg-gray-200 transition-colors"
        >
          Configure
        </motion.button>
      </div>
    </motion.div>
  );
};

export default ModelCard;