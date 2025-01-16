import React from 'react';
import Hero from '../components/Hero';
import { motion } from 'framer-motion';
import { Battery, Zap, Timer } from 'lucide-react';

const Home = () => {
  return (
    <div>
      <Hero />
      
      {/* Features Section */}
      <section className="bg-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-12"
          >
            <div className="text-center">
              <Battery className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">800km Range</h3>
              <p className="text-gray-400">Industry-leading battery technology</p>
            </div>
            <div className="text-center">
              <Zap className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">1,100 HP</h3>
              <p className="text-gray-400">Unmatched electric performance</p>
            </div>
            <div className="text-center">
              <Timer className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">2.3s 0-60</h3>
              <p className="text-gray-400">Breathtaking acceleration</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Latest Model Section */}
      <section className="relative h-screen">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80')"
          }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white max-w-lg"
            >
              <h2 className="text-5xl font-bold mb-4">The New EvoMatic GT</h2>
              <p className="text-xl mb-8">Experience the perfect fusion of sustainable luxury and unprecedented performance.</p>
              <button className="bg-white text-black px-8 py-3 rounded-full hover:bg-gray-200 transition-colors">
                Learn More
              </button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;