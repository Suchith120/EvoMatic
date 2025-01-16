import React from 'react';
import ModelCard from '../components/ModelCard';
import { motion } from 'framer-motion';

const Models = () => {
  const models = [
    {
      name: "EvoMatic GT",
      specs: {
        range: "800 km",
        acceleration: "2.3s",
        topSpeed: "320 km/h",
        power: "1,100 hp"
      },
      imageUrl: "https://images.unsplash.com/photo-1615829386703-e2bb66a7cb7d?auto=format&fit=crop&q=80",
      price: "$175,000"
    },
    {
      name: "EvoMatic Sport",
      specs: {
        range: "650 km",
        acceleration: "3.1s",
        topSpeed: "280 km/h",
        power: "750 hp"
      },
      imageUrl: "https://images.unsplash.com/photo-1554744512-d6c603f27c54?auto=format&fit=crop&q=80",
      price: "$125,000"
    },
    {
      name: "EvoMatic SUV",
      specs: {
        range: "720 km",
        acceleration: "3.5s",
        topSpeed: "250 km/h",
        power: "850 hp"
      },
      imageUrl: "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&q=80",
      price: "$145,000"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold text-white mb-12 text-center"
        >
          Our Models
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {models.map((model, index) => (
            <ModelCard key={index} {...model} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Models;