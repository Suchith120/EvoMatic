import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Car, User } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-black/90 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-2">
            <Car className="h-8 w-8" />
            <span className="text-2xl font-bold">EvoMatic</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/models" className="hover:text-gray-300">Models</Link>
            <Link to="/technology" className="hover:text-gray-300">Technology</Link>
            <Link to="/sustainability" className="hover:text-gray-300">Sustainability</Link>
            <Link to="/signin" className="flex items-center space-x-1 hover:text-gray-300">
              <User className="h-5 w-5" />
              <span>Sign In</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/models" className="block px-3 py-2 hover:bg-gray-900">Models</Link>
            <Link to="/technology" className="block px-3 py-2 hover:bg-gray-900">Technology</Link>
            <Link to="/sustainability" className="block px-3 py-2 hover:bg-gray-900">Sustainability</Link>
            <Link to="/signin" className="block px-3 py-2 hover:bg-gray-900">Sign In</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;