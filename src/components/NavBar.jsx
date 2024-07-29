import React, { useState } from 'react';
import { Link } from 'react-scroll';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 w-full h-16 flex items-center justify-between px-6 bg-transparent backdrop-blur-md text-white z-50" style={{ fontFamily: 'Nova Square, sans-serif' }}>
      <div className="text-2xl sm:text-3xl font-bold text-white overflow-x-hidden overflow-y-hidden">
        Solar.io
      </div>
      <div className="hidden sm:flex space-x-6 text-white">
        <Link to="mercury" smooth={true} duration={500} className="hover:text-gray-300 cursor-pointer">Mercury</Link>
        <Link to="venus" smooth={true} duration={500} className="hover:text-gray-300 cursor-pointer">Venus</Link>
        <Link to="earth" smooth={true} duration={500} className="hover:text-gray-300 cursor-pointer">Earth</Link>
        <Link to="mars" smooth={true} duration={500} className="hover:text-gray-300 cursor-pointer">Mars</Link>
        <Link to="jupiter" smooth={true} duration={500} className="hover:text-gray-300 cursor-pointer">Jupiter</Link>
        <Link to="saturn" smooth={true} duration={500} className="hover:text-gray-300 cursor-pointer">Saturn</Link>
        <Link to="uranus" smooth={true} duration={500} className="hover:text-gray-300 cursor-pointer">Uranus</Link>
        <Link to="neptune" smooth={true} duration={500} className="hover:text-gray-300 cursor-pointer">Neptune</Link>
      </div>
     
      <div className={`fixed top-16 right-0 w-64 bg-transparent backdrop-blur-md text-white z-40 transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'} sm:hidden`}>
        <div className="flex flex-col items-center py-4 space-y-4">
          <Link to="mercury" smooth={true} duration={500} className="hover:text-gray-300 cursor-pointer" onClick={() => setIsOpen(false)}>Mercury</Link>
          <Link to="venus" smooth={true} duration={500} className="hover:text-gray-300 cursor-pointer" onClick={() => setIsOpen(false)}>Venus</Link>
          <Link to="earth" smooth={true} duration={500} className="hover:text-gray-300 cursor-pointer" onClick={() => setIsOpen(false)}>Earth</Link>
          <Link to="mars" smooth={true} duration={500} className="hover:text-gray-300 cursor-pointer" onClick={() => setIsOpen(false)}>Mars</Link>
          <Link to="jupiter" smooth={true} duration={500} className="hover:text-gray-300 cursor-pointer" onClick={() => setIsOpen(false)}>Jupiter</Link>
          <Link to="saturn" smooth={true} duration={500} className="hover:text-gray-300 cursor-pointer" onClick={() => setIsOpen(false)}>Saturn</Link>
          <Link to="uranus" smooth={true} duration={500} className="hover:text-gray-300 cursor-pointer" onClick={() => setIsOpen(false)}>Uranus</Link>
          <Link to="neptune" smooth={true} duration={500} className="hover:text-gray-300 cursor-pointer" onClick={() => setIsOpen(false)}>Neptune</Link>
        </div>
      </div>
      <div className="text-xs sm:text-sm text-white">
        © 2024 Solar.io
      </div>
    </div>
  );
}

export default Navbar;
