import React from 'react';
import { Phone, Mail, MessageCircle } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md border-b-4 border-orange-600">
      <div className="container mx-auto px-4">
        {/* Main Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between py-3 md:py-4">
          <div className="flex items-center space-x-3 mb-3 md:mb-0">
            <img 
              src="ChatGPT Image Sep 3, 2025, 10_55_13 AM.png" 
              alt="QWB Question Wala Bank Logo" 
              className="w-8 h-8 md:w-12 md:h-12 object-contain"
              loading="eager"
            />
            <div>
              <h1 className="text-lg md:text-2xl font-bold text-gray-800">QWB Question Wala Bank</h1>
              <p className="text-xs text-gray-600 hidden md:block">Your Trusted Question Bank</p>
            </div>
          </div>
          
          <div className="hidden md:flex items-center justify-end">
            <nav className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-700 hover:text-orange-600 font-medium">Home</a>
              <a href="#" className="text-gray-700 hover:text-orange-600 font-medium">About</a>
          
              <a href="#" className="text-gray-700 hover:text-orange-600 font-medium">Support</a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
