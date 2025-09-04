import React, { useState, useEffect } from 'react';
import { MessageCircle, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200' 
        : 'bg-white/80 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Brand */}
          <div className="flex flex-col">
            <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
              QWB Question Wala Bank
            </h1>
            <p className="text-xs md:text-sm text-gray-600 font-medium hidden sm:block">
              Your Trusted Question Bank
            </p>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a 
              href="#" 
              className="text-gray-700 hover:text-blue-600 font-semibold transition-all duration-200 hover:scale-105 relative group"
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-full"></span>
            </a>
            <a 
              href="#" 
              className="text-gray-700 hover:text-blue-600 font-semibold transition-all duration-200 hover:scale-105 relative group"
            >
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-full"></span>
            </a>
            <button 
              onClick={() => window.open('https://wa.me/8797903378?text=Hello%2C%20I%20need%20help%20with%20study%20materials', '_blank')}
              className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-6 py-2.5 rounded-full font-semibold transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl transform hover:scale-105 hover:-translate-y-0.5"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Contact</span>
            </button>
            <a 
              href="#" 
              className="text-gray-700 hover:text-blue-600 font-semibold transition-all duration-200 hover:scale-105 relative group"
            >
              Support
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-full"></span>
            </a>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-lg">
            <nav className="px-4 py-4 space-y-3">
              <a 
                href="#" 
                className="block text-gray-700 hover:text-blue-600 font-semibold py-2 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </a>
              <a 
                href="#" 
                className="block text-gray-700 hover:text-blue-600 font-semibold py-2 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </a>
              <button 
                onClick={() => {
                  window.open('https://wa.me/8797903378?text=Hello%2C%20I%20need%20help%20with%20study%20materials', '_blank');
                  setIsMobileMenuOpen(false);
                }}
                className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-3 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center space-x-2 shadow-md"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Contact Us</span>
              </button>
              <a 
                href="#" 
                className="block text-gray-700 hover:text-blue-600 font-semibold py-2 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Support
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;