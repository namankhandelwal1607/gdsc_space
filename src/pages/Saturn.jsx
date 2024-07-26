import React, { useState, useEffect } from 'react';
import backgroundImage from '../assets/background.png';
import Starfield from '../components/StarField';
import saturnimg from '../assets/saturn.png';
import InfoCard1 from '../components/InfoCard1';
import InfoCard2 from '../components/InfoCard2';
import diameter from '../assets/diameter.png';
import temperature from '../assets/temperature.png';

function Saturn() {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 450);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 450);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const title = '6. Saturn';
  const description = 'Saturn, often referred to as the "Ringed Planet," is known for its stunning system of rings that encircle the planet\'s equator. It\'s the sixth planet from the Sun and is one of the most visually distinctive objects in our solar system, with more than 80 known satellites.';

  const containerStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    width: '100vw',
    position: 'relative',
    overflow: 'hidden',
  };

  const saturnImageStyle = {
    position: 'absolute',
    bottom: isSmallScreen ? '20%' : '-5%',
    left: isSmallScreen ? '40%' : '-15%',
    width: isSmallScreen ? '80%' : '70%',
    height: isSmallScreen ? 'auto' : 'auto',
    zIndex: 1,
    opacity: 1,
  };

  const infoCard2Style = {
    position: 'absolute',
    top: isSmallScreen ? '10%' : '5%',
    left: isSmallScreen ? '5%' : '40%',
    width: isSmallScreen ? '90%' : '50%',
    zIndex: 1,
    opacity: 1,
    padding: '0 16px',
  };

  const infoCard1ContainerStyle = {
    position: 'absolute',
    top: isSmallScreen ? '55%' : '30%',
    left: isSmallScreen ? '-25%' : '60%',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    padding: '0 16px',
    width: isSmallScreen ? '90%' : 'auto',
    flexWrap: 'wrap',
  };

  return (
    <div style={containerStyle}>
      <Starfield />

      <img
        src={saturnimg}
        alt="Saturn"
        style={saturnImageStyle}
      />

      <div style={infoCard2Style}>
        <InfoCard2
          title={title}
          description={description}
        />
      </div>

      <div style={infoCard1ContainerStyle}>
        <InfoCard1 symbol={diameter} functionLabel="Diameter" value1="72,367" value2="Miles" />
        <InfoCard1 symbol={temperature} functionLabel="Temperature" value1="-138°" value2="Celsius" />
      </div>
    </div>
  );
}

export default Saturn;
