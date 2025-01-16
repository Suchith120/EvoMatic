import React from 'react';
import { motion } from 'framer-motion';
import { Battery, Cpu, Zap, Shield } from 'lucide-react';

const Technology = () => {
  return (
    <div className="min-h-screen bg-gray-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold text-white mb-16 text-center"
        >
          Revolutionary Technology
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-black/50 p-8 rounded-lg"
          >
            <Battery className="h-12 w-12 text-white mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">Advanced Battery Technology</h3>
            <p className="text-gray-300">
              Our proprietary battery technology delivers industry-leading range and longevity.
              With advanced thermal management and smart charging capabilities, EvoMatic vehicles
              maintain optimal performance in all conditions.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-black/50 p-8 rounded-lg"
          >
            <Cpu className="h-12 w-12 text-white mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">AI-Powered Systems</h3>
            <p className="text-gray-300">
              EvoMatic's artificial intelligence system continuously learns and adapts to your
              driving style, optimizing performance, range, and comfort in real-time.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-black/50 p-8 rounded-lg"
          >
            <Zap className="h-12 w-12 text-white mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">Electric Powertrain</h3>
            <p className="text-gray-300">
              Our next-generation electric powertrain delivers unprecedented performance and
              efficiency, with advanced torque vectoring and regenerative braking systems.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-black/50 p-8 rounded-lg"
          >
            <Shield className="h-12 w-12 text-white mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">Safety Innovation</h3>
            <p className="text-gray-300">
              Advanced driver assistance systems and structural engineering make EvoMatic
              vehicles among the safest on the road, with predictive collision avoidance
              and autonomous emergency responses.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Technology;