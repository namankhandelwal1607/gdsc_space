import React, { useState, useEffect } from 'react';
import backgroundImage from '../assets/background.png';
import Starfield from '../components/StarField';
import uranusimg from '../assets/uranus.png';
import uranusimg2 from '../assets/uranus2.png';
import InfoCard from '../components/InfoCard';
import InfoCard1 from '../components/InfoCard1';
import diameter from '../assets/diameter.png';
import temperature from '../assets/temperature.png';

function Uranus() {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 450);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 450);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const title = '7. Uranus';
  const description = 'Uranus, often referred to as the "Ice Giant," is a unique and mysterious planet in our solar system. It stands out due to its distinct blue-green color and its unusual rotation axis.';

  const containerStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    width: '100vw',
    position: 'relative',
    overflow: 'hidden',
  };

  const uranusImgStyle = {
    position: 'absolute',
    bottom: isSmallScreen ? '15%' : '-100%',
    right: isSmallScreen ? '-40%' :'0%',
    width: isSmallScreen ? '90%' : '80%',
    zIndex: 1,
    opacity: 1,
  };

  const uranusImg2Style = {
    position: 'absolute',
    bottom: isSmallScreen ? '18%' : '-100%',
    right: isSmallScreen ? '-38%' :'0%',
    width: isSmallScreen ? '80%' : '74%',
    zIndex: 0,
    opacity: 1,
  };

  const infoCardStyle = {
    position: 'absolute',
    top: isSmallScreen ? '10%' : '5%',
    left: isSmallScreen ? '5%' : '7%',
    width: isSmallScreen ? '90%' : '40%',
    zIndex: 1,
    opacity: 1,
  };

  const infoCard1ContainerStyle = {
    position: 'absolute',
    top: isSmallScreen ? '60%' : '0%',
    left: isSmallScreen ? '-20%' : '60%',
    width: isSmallScreen ? '90%' : 'auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    padding: '0 16px',
  };

  const infoCard1ContainerStyle2 = {
    position: 'absolute',
    top: isSmallScreen ? '40%' : '40%',
    left: isSmallScreen ? '-20%' : '1%',
    width: isSmallScreen ? '90%' : 'auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    padding: '0 16px',
  };

  return (
    <div style={containerStyle}>
      <Starfield />

      <img
        src={uranusimg}
        alt="Uranus"
        style={uranusImgStyle}
      />
      <img
        src={uranusimg2}
        alt="Uranus"
        style={uranusImg2Style}
      />

      <div style={infoCardStyle}>
        <InfoCard
          title={title}
          description={description}
        />
      </div>

      <div style={infoCard1ContainerStyle}>
        <InfoCard1 symbol={diameter} functionLabel="Diameter" value1="31,518" value2="Miles" />
      </div>
      <div style={infoCard1ContainerStyle2}>
        <InfoCard1 symbol={temperature} functionLabel="Day Time Temperature" value1="-197°" value2="Celsius" />
      </div>
    </div>
  );
}

export default Uranus;
