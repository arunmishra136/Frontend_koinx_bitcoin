// src/components/Header.jsx
import React from "react";

const Header = () => {
  return (
    <header className="bg-white shadow-md p-4 flex items-center justify-between w-full h-12">
      {/* Logo */}
      <div className="text-xl font-bold text-blue-500 flex items-center">
        <span>Koin</span>
        <span className="text-orange-500">X</span>
        <sup className="text-sm ml-1 text-gray-500">™</sup>
      </div>

      {/* Navigation Links */}
      <nav className="hidden md:flex space-x-6 text-gray-700 font-semibold ml-auto">
        <a href="#crypto-taxes" className="hover:text-blue-500">
          Crypto Taxes
        </a>
        <a href="#free-tools" className="hover:text-blue-500">
          Free Tools
        </a>
        <a href="#resource-center" className="hover:text-blue-500">
          Resource Center
        </a>
      </nav>

      {/* Get Started Button */}
      <button className="bg-blue-500 text-white px-4 py-2  hover:bg-blue-600 rounded-lg ml-4">
        Get Started
      </button>
    </header>
  );
};

export default Header;
