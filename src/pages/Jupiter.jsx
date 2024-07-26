import React, { useState, useEffect } from 'react';
import backgroundImage from '../assets/background.png';
import Starfield from '../components/StarField';
import jupiterimg from '../assets/jupiter.png';
import jupiterimg1 from '../assets/jupiter1.png';
import InfoCard from '../components/InfoCard';
import InfoCard1 from '../components/InfoCard1';
import diameter from '../assets/diameter.png';
import temperature from '../assets/temperature.png';

function Jupiter() {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 450);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 450);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const title = '5. Jupiter';
  const description = 'Jupiter, the largest planet in our solar system, is a gas giant known for its immense size, powerful storms, and numerous moons.';

  const containerStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    width: '100vw',
    position: 'relative',
    overflow: 'hidden',
  };

  const jupiterImageStyle1 = {
    position: 'absolute',
    top: isSmallScreen ? '30%' : '-50%',
    right: isSmallScreen ? '-9%' : '-20%',
    width: isSmallScreen ? '80%' : '70%',
    height: isSmallScreen ? '80%' : 'auto',
    zIndex: 1,
    opacity: 1,
  };

  

  const infoCardStyle = {
    position: 'absolute',
    top: isSmallScreen ? '5%' : '5%',
    left: isSmallScreen ? '5%' : '7%',
    width: isSmallScreen ? '90%' : '40%',
    zIndex: 1,
    opacity: 1,
    padding: '0 16px',
  };

  const infoCard1ContainerStyle = {
    position: 'absolute',
    top: isSmallScreen ? '40%' : '30%',
    left: isSmallScreen ? '-25%' : '7%',
    display: 'flex',
    flexDirection: isSmallScreen ? 'column' : 'column',
    gap: isSmallScreen ? '16px' : '8px',
    padding: '0 16px',
    width: '90%',
    flexWrap: 'wrap',
  };

  return (
    <div style={containerStyle}>
      <Starfield />

      <img
        src={jupiterimg}
        alt="Jupiter"
        style={jupiterImageStyle1}
      />
      

      <div style={infoCardStyle}>
        <InfoCard
          title={title}
          description={description}
        />
      </div>

      <div style={infoCard1ContainerStyle}>
        <InfoCard1 symbol={diameter} functionLabel="Diameter" value1="86,881" value2="Miles" />
        <InfoCard1 symbol={temperature} functionLabel="Temperature" value1="-108°" value2="Celsius" />
      </div>
    </div>
  );
}

export default Jupiter;
