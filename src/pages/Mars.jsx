import React, { useState, useEffect } from 'react';
import backgroundImage from '../assets/background.png';
import Starfield from '../components/StarField';
import marsimg from '../assets/mars.png';
import marsimg1 from '../assets/mars1.png';
import InfoCard from '../components/InfoCard';
import InfoCard1 from '../components/InfoCard1';
import diameter from '../assets/diameter.png';
import tempn from '../assets/tempn.png';
import temperature from '../assets/temperature.png';
import arrowimg from '../assets/arrowmars.png';
import InfoCard3 from '../components/InfoCard3';

function Mars() {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 450);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 450);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const title = '4. Mars';
  const description = 'Mars, often referred to as the "Red Planet," is the fourth planet from the Sun and has captivated human imagination for centuries with its reddish appearance and potential for hosting life.';
  const title1 = 'Martian Moons';
  const description1 = 'Mars has two small moons, Phobos and Deimos, which are irregularly shaped and thought to be captured asteroids.';

  const containerStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    width: '100vw',
    position: 'relative',
    overflow: 'hidden',
  };

  const marsImageStyle1 = {
    position: 'absolute',
    bottom: isSmallScreen ? '35%' : '-30%',
    left: isSmallScreen ? '-40%' : '-20%',
    width: isSmallScreen ? '80%' : '60%',
    zIndex: 1,
    opacity: 1,
  };

  const marsImageStyle2 = {
    position: 'absolute',
    bottom: isSmallScreen ? '32%' : '-30%',
    left: isSmallScreen ? '-44%' : '-20%',
    width: isSmallScreen ? '70%' : '48%',
    zIndex: 1,
    opacity: 1,
  };

  const arrowImageStyle = {
    position: 'absolute',
    top: isSmallScreen ? '35%' : '40%',
    left: isSmallScreen ? '30%' : '35%',
    width: isSmallScreen ? '10%' : '5%',
    zIndex: 1,
    opacity: 1,
  };

  const infoCardStyle = {
    position: 'absolute',
    top: isSmallScreen ? '4%' : '4%',
    left: isSmallScreen ? '3%' : '5%',
    zIndex: 1,
    opacity: 1,
    width: isSmallScreen ? '94%' : '40%',
    padding: '0 16px',
  };

  const infoCard3Style = {
    position: 'absolute',
    top: isSmallScreen ? '37%' : '45%',
    left: isSmallScreen ? '29%' : '42%',
    zIndex: 1,
    opacity: 1,
    width: isSmallScreen ? '75%' : '25%',
    padding: '0 16px',
  };

  const infoCard1ContainerStyle = {
    position: 'absolute',
    top: isSmallScreen ? '65%' : '5%',
    right: isSmallScreen ? '0%' : '10%',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    padding: '0 16px',
    width: isSmallScreen ? '94%' : 'auto',
  };

  return (
    <div style={containerStyle}>
      <Starfield />

      <img
        src={marsimg}
        alt="Mars"
        style={marsImageStyle1}
      />
      <img
        src={marsimg1}
        alt="Mars"
        style={marsImageStyle2}
      />
      <img
        src={arrowimg}
        alt="Arrow"
        style={arrowImageStyle}
      />

      <div style={infoCardStyle}>
        <InfoCard
          title={title}
          description={description}
        />
      </div>

      <div style={infoCard3Style}>
        <InfoCard3
          title={title1}
          description={description1}
        />
      </div>

      <div style={infoCard1ContainerStyle}>
        <InfoCard1 symbol={diameter} functionLabel="Diameter" value1="3,032" value2="Miles" />
        <InfoCard1 symbol={temperature} functionLabel="Day Time Temperature" value1="±430°" value2="Celsius" />
        <InfoCard1 symbol={tempn} functionLabel="Night Time Temperature" value1="-180°" value2="Celsius" />
      </div>
    </div>
  );
}

export default Mars;
