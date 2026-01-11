import React from 'react';

interface HeaderProps {
  onLegalClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onLegalClick }) => {
  return (
    <header className="bg-white shadow-sm border-b-2 border-orange-500 sticky top-0 z-40">
      <div className="container mx-auto px-3 py-3">
        {/* Main Header */}
        <div className="flex items-center justify-between">
          {/* Logo and Title */}
          <div className="flex items-center space-x-2 flex-1">
            <img
              src="ChatGPT Image Sep 3, 2025, 10_55_13 AM.png"
              alt="QWB Logo"
              className="w-10 h-10 object-contain"
              loading="eager"
            />
            <div className="flex-1 min-w-0">
              <h1 className="text-base md:text-lg font-bold text-gray-800 truncate">QWB Question Bank</h1>
              <p className="text-xs text-orange-600 font-medium truncate">✓ Trusted by 50,000+ Students</p>
            </div>
          </div>

          {/* Navigation - Just Legal link */}
          <div className="flex items-center flex-shrink-0 ml-2">
            <button
              onClick={onLegalClick}
              className="text-xs text-gray-500 hover:text-gray-700 underline px-2 py-1"
            >
              Legal
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;