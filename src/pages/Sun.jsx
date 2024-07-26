import React, { useState, useEffect } from 'react';
import backgroundImage from '../assets/background.png';
import Starfield from '../components/StarField';
import Sunimg from '../assets/sun.png';
import sunshade from '../assets/sunshade.svg';
import InfoCard from '../components/InfoCard';
import InfoCard1 from '../components/InfoCard1';
import diameter from "../assets/diameter.png";
import temperature from "../assets/temperature.png";

function Sun() {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 450);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 450);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const title = '. Sun';
  const description = 'The Sun is a huge, glowing ball of hot plasma at the centre of our solar system and provides the vital energy needed for life on Earth. This energy radiates outward in the form of light and heat, providing warmth and light to the entire solar system.';

  const containerStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    width: '100vw',
    position: 'relative',
    overflow: 'hidden',
  };

  

  const sunimgStyle = {
    position: 'absolute',
    top: isSmallScreen ? '10%' : '-130%',
    left: isSmallScreen ? '30%' :'0',
    width: isSmallScreen ? '70%' : '100%',
    zIndex: '10',
    height: isSmallScreen ? '70%' : 'auto',
  };

  const infoCardStyle = {
    position: 'absolute',
    top: isSmallScreen ? '60%' : '40%',
    left: isSmallScreen ? '7%' :'10%',
    width: isSmallScreen ? '90%' : '60%',
    zIndex: '10',
    opacity: '1', 
    padding: '0 16px',
  };

  const infoCard1Style = {
    position: 'absolute',
    top: isSmallScreen ? '25%' : '70%',
    left: isSmallScreen ?'-30%': '10%',
    width: '80%',
    display: 'flex',
    flexDirection: isSmallScreen ? 'column' : 'row',
    gap: isSmallScreen ? '16px' : '8px',
    padding: '0 16px',
  };

  return (
    <div style={containerStyle}>
      <Starfield />

    

      <div style={sunimgStyle}>
        <img src={Sunimg} alt="Sun" style={{ width: '100%' }} />
      </div>

      <div style={infoCardStyle}>
        <InfoCard title={title} description={description} />
      </div>

      <div style={infoCard1Style}>
        <InfoCard1 symbol={diameter} functionLabel="Diameter" value1="870,000" value2="Miles" />
        <InfoCard1 symbol={temperature} functionLabel="Temperature" value1="±5,500°" value2="Celsius" />
      </div>
    </div>
  );
}

export default Sun;
