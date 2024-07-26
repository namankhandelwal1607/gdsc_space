import React, { useState, useEffect } from 'react';
import backgroundImage from '../assets/background.png';
import Starfield from '../components/StarField';
import Mercuryimg from '../assets/mercury1.png';
import InfoCard from '../components/InfoCard';
import InfoCard1 from '../components/InfoCard1';
import diameter from '../assets/diameter.png';
import tempn from '../assets/tempn.png';
import temperature from '../assets/temperature.png';

function Mercury() {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 450);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 450);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const title = '1. Mercury';
  const description = 'Mercury is the closest planet to the Sun and is known for its extreme temperatures and barren, rocky surface. It is one of the four terrestrial planets in our solar system, characterized by their solid, rocky composition.';

  const containerStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    width: '100vw',
    position: 'relative',
    overflow: 'hidden',
  };

  const mercuryImageStyle1 = {
    position: 'absolute',
    top: isSmallScreen ? '45%' : '10%',
    left: isSmallScreen ? '55%' : '-15%',
    width: isSmallScreen ? '75%' : '50%',
    height: isSmallScreen ? '80%' : '80%',
    zIndex: 2,
    opacity: 1,
  };

  const mercuryImageStyle2 = {
    position: 'absolute',
    top: isSmallScreen ? '43%' : '8%',
    left: isSmallScreen ? '51%' : '-15%',
    width: isSmallScreen ? '78%' : '51%',
    height: isSmallScreen ? '80%' : '85%',  
    zIndex: 1,
    opacity: 0.6,
  };

  const mercuryImageStyle3 = {
    position: 'absolute',
    top: isSmallScreen ? '41%' : '6%',
    left: isSmallScreen ? '49%' : '-15%',
    width: isSmallScreen ? '75%' : '52%',
    height: isSmallScreen ? '85%' : '85%',
    zIndex: 1,
    opacity: 0.3,
  };

  const infoCardStyle = {
    position: 'absolute',
    top: isSmallScreen ? '10%' : '5%',
    left: isSmallScreen ? '3%' : '40%',
    width: isSmallScreen ? '90%' : '50%',
    zIndex: 1,
    opacity: 1,
    padding: '0 16px',
  };

  const infoCard1ContainerStyle = {
    position: 'absolute',
    top: isSmallScreen ? '42%' : '40%', // Adjusted to avoid overflow
    left: isSmallScreen ? '-20%' : '40%',
    display: 'flex',
    flexDirection: isSmallScreen ? 'column' : 'row',
    gap: isSmallScreen ? '16px' : '8px',
    padding: '0 16px',
    width: '90%',
    flexWrap: 'wrap',
  };

  return (
    <div style={containerStyle}>
      <Starfield />

      <img
        src={Mercuryimg}
        alt="Mercury"
        style={mercuryImageStyle1}
      />
      <img
        src={Mercuryimg}
        alt="Mercury"
        style={mercuryImageStyle2}
      />
      <img
        src={Mercuryimg}
        alt="Mercury"
        style={mercuryImageStyle3}
      />

      <div style={infoCardStyle}>
        <InfoCard
          title={title}
          description={description}
        />
      </div>

      <div style={infoCard1ContainerStyle}>
        <InfoCard1 symbol={diameter} functionLabel="Diameter" value1="3,032" value2="Miles" />
        <InfoCard1 symbol={temperature} functionLabel="Day Time Temperature" value1="±430°" value2="Celsius" />
        <div style={{ width: '100%', marginTop: '3%' }}>
          <InfoCard1 symbol={tempn} functionLabel="Night Time Temperature" value1="-180°" value2="Celsius" />
        </div>
      </div>
    </div>
  );
}

export default Mercury;
