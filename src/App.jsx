import React, { useState } from 'react';
import './App.css';
import Home from "./pages/Home";
import './index.css';
import Sun from './pages/Sun';
import Mercury from './pages/Mercury';
import Venus from './pages/Venus';
import Earth from './pages/Earth';
import Mars from './pages/Mars';
import Jupiter from './pages/Jupiter';
import Navbar from './components/NavBar';
import Saturn from './pages/Saturn';
import Uranus from './pages/Uranus';
import Neptune from './pages/Neptune';
import MeteoriteShower from './components/MeteoriteShower';

const customScrollbar = {
  '::-webkit-scrollbar': {
    width: '12px',
  },
  '::-webkit-scrollbar-track': {
    background: '#000', // Black track
  },
  '::-webkit-scrollbar-thumb': {
    background: '#000', // Black thumb
    borderRadius: '6px',
  },
  '::-webkit-scrollbar-thumb:hover': {
    background: '#000', // Black thumb on hover
  },
};

function App() {
  const [isSplashVisible, setSplashVisible] = useState(true);

  const handleAnimationEnd = () => {
    setSplashVisible(false);
  };

  return (
    <div style={customScrollbar}>
      {isSplashVisible ? (
        <MeteoriteShower onAnimationEnd={handleAnimationEnd} />
      ) : (
        <>
          <Navbar />
          <div id="home"><Home /></div>
          <div id="sun"><Sun /></div>
          <div id="mercury"><Mercury /></div>
          <div id="venus"><Venus /></div>
          <div id="earth"><Earth /></div>
          <div id="mars"><Mars /></div>
          <div id="jupiter"><Jupiter /></div>
          <div id="saturn"><Saturn /></div>
          <div id="uranus"><Uranus /></div>
          <div id="neptune"><Neptune /></div>
        </>
      )}
    </div>
  );
}

export default App;
