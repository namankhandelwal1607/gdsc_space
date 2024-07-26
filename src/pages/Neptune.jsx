import React, { useState, useEffect } from 'react';
import backgroundImage from '../assets/background.png';
import Starfield from '../components/StarField';
import neptuneimg from '../assets/neptune.png';
import neptuneimg1 from '../assets/neptune1.png';
import InfoCard1 from '../components/InfoCard1';
import InfoCard from '../components/InfoCard';
import InfoCard2 from '../components/InfoCard2';
import diameter from '../assets/diameter.png';
import temperature from '../assets/temperature.png';
import Footer from '../components/Footer';

function Neptune() {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 450);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 450);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const title = '8. Neptune';
  const description = 'Neptune, often called the "Blue Giant," is the eighth and farthest planet from the Sun in our solar system. It is a gas giant known for its striking blue color and turbulent atmosphere.';

  const containerStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '150vh',
    width: '100vw',
    position: 'relative',
    overflow: 'hidden',
  };

  const neptuneImgStyle = {
    position: 'absolute',
    top: isSmallScreen ? '30%' : '30%',
    left: isSmallScreen ? '50%' : '-20%',
    width: isSmallScreen ? '80%' : '70%',
    zIndex: 2,
    opacity: 1,
  };

  

  const infoCardStyle = {
    position: 'absolute',
    top: isSmallScreen ? '10%' : '5%',
    left: isSmallScreen ? '5%' : '40%',
    width: isSmallScreen ? '90%' : '50%',
    zIndex: 1,
    opacity: 1,
  };

  const infoCard1ContainerStyle = {
    position: 'absolute',
    top: isSmallScreen ? '40%' : '25%',
    left: isSmallScreen ? '-25%' : '40%',
    width: isSmallScreen ? '90%' : 'auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    padding: '0 16px',
  };

  const footerStyle = {
    position: 'absolute',
    bottom: '2%',
    left: '50%',
    width: '90vw',
    transform: 'translateX(-50%)',
    zIndex: 2,
  };

  return (
    <div style={containerStyle}>
      <Starfield />

      <img
        src={neptuneimg}
        alt="Neptune"
        style={neptuneImgStyle}
      />
     
      <div style={infoCardStyle}>
        <InfoCard2 title={title} description={description} />
      </div>

      <div style={infoCard1ContainerStyle}>
        <InfoCard1 symbol={diameter} functionLabel="Diameter" value1="30,775" value2="Miles" />
        <InfoCard1 symbol={temperature} functionLabel="Day Time Temperature" value1="-218°" value2="Celsius" />
      </div>

      <div style={footerStyle}>
        <Footer />
      </div>
    </div>
  );
}

export default Neptune;
