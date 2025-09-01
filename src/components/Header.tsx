import React from 'react';
import { BookOpen, Phone, Mail } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md border-b-4 border-orange-600">
      <div className="container mx-auto px-4">
        {/* Top Bar */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center py-2 text-xs border-b border-gray-200">
          <div className="flex flex-col md:flex-row md:items-center md:space-x-4 text-gray-600 mb-1 md:mb-0">
            <div className="flex items-center">
              <Phone className="w-4 h-4 mr-1" />
              <span>+91 98765 43210</span>
            </div>
            <div className="flex items-center mt-1 md:mt-0">
              <Mail className="w-4 h-4 mr-1" />
              <span>info@jutofficialhub.edu.in</span>
            </div>
          </div>
          <div className="text-gray-600 text-center md:text-right">
            🏛️ Government of Jharkhand | Official Portal
          </div>
        </div>
        
        {/* Main Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between py-4">
          <div className="flex items-center space-x-3 mb-3 md:mb-0">
            <div className="bg-orange-600 p-2 rounded-lg">
              <BookOpen className="w-6 h-6 md:w-8 md:h-8 text-white" />
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-gray-800">JUT Official Hub</h1>
              <p className="text-xs md:text-sm text-gray-600">Jharkhand University of Technology</p>
            </div>
          </div>
          
          <div className="flex items-center justify-center md:justify-end">
            <nav className="flex space-x-4 md:space-x-6 text-sm">
              <a href="#" className="text-gray-700 hover:text-orange-600 font-medium">Home</a>
              <a href="#" className="text-gray-700 hover:text-orange-600 font-medium">About</a>
              <a href="#" className="text-gray-700 hover:text-orange-600 font-medium">Contact</a>
              <a href="#" className="text-gray-700 hover:text-orange-600 font-medium">Support</a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;