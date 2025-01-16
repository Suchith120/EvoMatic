import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Recycle, Factory, Wind } from 'lucide-react';

const Sustainability = () => {
  return (
    <div className="min-h-screen bg-gray-900 pt-20">
      {/* Hero Section */}
      <div className="relative h-[60vh]">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80')"
          }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative h-full flex items-center justify-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold text-white text-center"
          >
            Driving Sustainable Future
          </motion.h1>
        </div>
      </div>

      {/* Initiatives Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-black/50 p-8 rounded-lg"
          >
            <Leaf className="h-12 w-12 text-green-400 mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">Carbon Neutral Production</h3>
            <p className="text-gray-300">
              Our manufacturing facilities are powered by 100% renewable energy. We've achieved
              carbon neutrality across our entire production process through innovative
              recycling programs and sustainable practices.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-black/50 p-8 rounded-lg"
          >
            <Recycle className="h-12 w-12 text-green-400 mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">Battery Recycling Program</h3>
            <p className="text-gray-300">
              Our comprehensive battery recycling program ensures 98% of battery materials
              are recovered and reused in new battery production, creating a closed-loop
              system that minimizes environmental impact.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-black/50 p-8 rounded-lg"
          >
            <Factory className="h-12 w-12 text-green-400 mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">Sustainable Supply Chain</h3>
            <p className="text-gray-300">
              We partner exclusively with suppliers who meet our strict environmental
              standards. Our supply chain is continuously optimized to reduce carbon
              emissions and promote sustainable practices.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-black/50 p-8 rounded-lg"
          >
            <Wind className="h-12 w-12 text-green-400 mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">Renewable Energy Investment</h3>
            <p className="text-gray-300">
              We're investing heavily in renewable energy infrastructure, including solar
              and wind farms, to power our charging network and ensure truly zero-emission
              mobility.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Impact Stats */}
      <div className="bg-black/70 py-16 mt-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-white"
            >
              <h4 className="text-4xl font-bold mb-2">1M+</h4>
              <p className="text-gray-400">Trees Planted</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-white"
            >
              <h4 className="text-4xl font-bold mb-2">50%</h4>
              <p className="text-gray-400">Carbon Reduction</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-white"
            >
              <h4 className="text-4xl font-bold mb-2">98%</h4>
              <p className="text-gray-400">Materials Recycled</p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sustainability;