import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { auth } from '../services/api';

interface AuthProps {
  type: 'signin' | 'signup';
}

const Auth: React.FC<AuthProps> = ({ type }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      if (type === 'signup') {
        if (formData.password !== formData.confirmPassword) {
          throw new Error('Passwords do not match');
        }
        await auth.register({
          name: formData.name,
          email: formData.email,
          password: formData.password
        });
      } else {
        await auth.login({
          email: formData.email,
          password: formData.password
        });
      }
      navigate('/');
    } catch (err: any) {
      setError(err.response?.data?.message || err.message || 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Image Section */}
      <div className="hidden lg:block lg:w-1/2 relative">
        <img 
          src={type === 'signin' 
            ? "https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&q=80" 
            : "https://images.unsplash.com/photo-1611016186353-9af58c69a533?auto=format&fit=crop&q=80"
          }
          alt="EvoMatic car"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Form Section */}
      <div className="w-full lg:w-1/2 bg-gray-900 flex items-center justify-center p-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md"
        >
          <h2 className="text-4xl font-bold text-white mb-8">
            {type === 'signin' ? 'Welcome Back' : 'Join EvoMatic'}
          </h2>
          
          {error && (
            <div className="bg-red-500/10 border border-red-500 text-red-500 px-4 py-2 rounded mb-4">
              {error}
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="space-y-6">
            {type === 'signup' && (
              <div>
                <label className="block text-white mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 rounded bg-gray-800 text-white border border-gray-700 focus:border-white focus:outline-none"
                  required
                />
              </div>
            )}
            
            <div>
              <label className="block text-white mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 rounded bg-gray-800 text-white border border-gray-700 focus:border-white focus:outline-none"
                required
              />
            </div>
            
            <div>
              <label className="block text-white mb-2">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full p-3 rounded bg-gray-800 text-white border border-gray-700 focus:border-white focus:outline-none"
                required
              />
            </div>

            {type === 'signup' && (
              <div>
                <label className="block text-white mb-2">Confirm Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full p-3 rounded bg-gray-800 text-white border border-gray-700 focus:border-white focus:outline-none"
                  required
                />
              </div>
            )}
            
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={loading}
              className="w-full bg-white text-black py-3 rounded-full hover:bg-gray-200 transition-colors disabled:opacity-50"
            >
              {loading ? 'Processing...' : type === 'signin' ? 'Sign In' : 'Create Account'}
            </motion.button>

            <p className="text-gray-400 text-center mt-6">
              {type === 'signin' ? (
                <>
                  Don't have an account?{' '}
                  <button
                    onClick={() => navigate('/signup')}
                    className="text-white hover:underline"
                  >
                    Sign up
                  </button>
                </>
              ) : (
                <>
                  Already have an account?{' '}
                  <button
                    onClick={() => navigate('/signin')}
                    className="text-white hover:underline"
                  >
                    Sign in
                  </button>
                </>
              )}
            </p>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Auth;