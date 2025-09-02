import React from 'react';
import { Phone, Mail, MessageCircle } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md border-b-4 border-orange-600">
      <div className="container mx-auto px-4">
        {/* Top Bar */}
        <div className="hidden md:flex md:justify-between md:items-center py-2 text-xs border-b border-gray-200">
          <div className="flex flex-col md:flex-row md:items-center md:space-x-4 text-gray-600 mb-1 md:mb-0">
            <div className="flex items-center">
              <Phone className="w-4 h-4 mr-1" />
              <a href="tel:+918797903378" className="hover:text-orange-600 transition-colors">
                +91 87979 03378
              </a>
            </div>
            <div className="flex items-center mt-1 md:mt-0">
              <Mail className="w-4 h-4 mr-1" />
              <a href="mailto:info@jutofficialhub.edu.in" className="hover:text-orange-600 transition-colors">
                info@jutofficialhub.edu.in
              </a>
            </div>
          </div>
          <div className="text-gray-600 text-center md:text-right">
            🏛️ Government of Jharkhand | Official Portal
          </div>
        </div>
        
        {/* Main Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between py-3 md:py-4">
          <div className="flex items-center space-x-3 mb-3 md:mb-0">
            <img 
              src="/image copy copy.png" 
              alt="JUT Official Hub Logo" 
              className="w-8 h-8 md:w-12 md:h-12 object-contain"
              loading="eager"
            />
            <div>
              <h1 className="text-lg md:text-2xl font-bold text-gray-800">JUT Official Hub</h1>
              <p className="text-xs text-gray-600 hidden md:block">Jharkhand University of Technology</p>
            </div>
          </div>
          
          <div className="hidden md:flex items-center justify-end">
            <nav className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-700 hover:text-orange-600 font-medium">Home</a>
              <a href="#" className="text-gray-700 hover:text-orange-600 font-medium">About</a>
              <a 
                href="https://wa.me/918797903378?text=Hello%2C%20I%20need%20help%20with%20JUT%20study%20materials" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-orange-600 font-medium flex items-center"
              >
                <MessageCircle className="w-4 h-4 mr-1" />
                Contact
              </a>
              <a href="#" className="text-gray-700 hover:text-orange-600 font-medium">Support</a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;