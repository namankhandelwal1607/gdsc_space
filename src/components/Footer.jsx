import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 rounded-2xl">
      <div className="container mx-auto flex flex-col items-center text-center">
        <div className="flex flex-col md:flex-row justify-between w-full">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold" style={{ fontFamily: 'Nova Square, sans-serif' }}>Join The Education Community</h2>
            <p className="text-gray-400 mt-2" style={{ fontFamily: 'Nova Square, sans-serif' }}>Join the Education Community today and be part of a movement that's transforming minds and shaping tomorrows.</p>
          </div>
          <div className="flex flex-col md:flex-row items-center">
            <input type="email" placeholder="Enter your email" className="bg-gray-800 text-white p-2 rounded-full w-64 md:w-80 mb-4 md:mb-0 md:mr-4" style={{ fontFamily: 'Nova Square, sans-serif' }}/>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" style={{ fontFamily: 'Nova Square, sans-serif' }}>Subscribe</button>
          </div>
        </div>
        <div className="mt-6">
          <p className="text-gray-400">© 2023 Solarsystemdesign</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
