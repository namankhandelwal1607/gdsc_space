import React, { useState, useEffect } from 'react';
import backgroundImage from '../assets/background.png';
import Starfield from '../components/StarField';
import earthimg from '../assets/earth.png';
import earthimg1 from '../assets/earth1.png';
import arrowimg from '../assets/arrowearth.png';
import diameter from '../assets/diameter.png';
import temperature from '../assets/temperature.png';
import InfoCard1 from '../components/InfoCard1';
import InfoCard from '../components/InfoCard';
import InfoCard2 from '../components/InfoCard2';
import rocketimg from '../assets/rocketearth.png';

function Earth() {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 600);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 600);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const title = '3. Earth';
  const description = 'Earth is the third planet from the Sun and the only known planet to support life. Earth is the only planet known to harbor life. It\'s a diverse and dynamic world with a wide range of ecosystems, climates, and geological features.';
  const title1 = 'Moon';
  const description1 = 'Earth has one natural satellite, the Moon, which plays a role in stabilizing the planet’s rotation and tides. The Moon’s gravitational pull causes ocean tides to rise and fall.';

  const containerStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    width: '100vw',
    position: 'relative',
    overflow: 'hidden',
  };

  const earthImageStyle1 = {
    position: 'absolute',
    bottom: isSmallScreen ? '5%' : '-35%',
    left: isSmallScreen ? '60%' :'50%',
    transform: 'translate(-50%, 50%)',
    width: isSmallScreen ? '70%' : '80%',
    zIndex: 1,
    opacity: 1,
  };

  const earthImageStyle2 = {
    position: 'absolute',
    bottom: isSmallScreen ? '-32%' : '-37%',
    left: '50%',
    transform: 'translate(-50%, 50%)',
    width: isSmallScreen ? '92%' : '82%',
    zIndex: 1,
    opacity: 1,
  };

  const arrowImageStyle = {
    position: 'absolute',
    right: isSmallScreen ? '2%' : '15%',
    bottom: isSmallScreen ? '30%' : '60%',
    transform: 'translate(-50%, 50%)',
    zIndex: 1,
    width: isSmallScreen ? '10%' : '15%',
    height: isSmallScreen ? '20%' : '30%',
    opacity: 1,
  };

  const rocketImageStyle = {
    position: 'absolute',
    left: isSmallScreen ? '-100%' : '5%',
    bottom: isSmallScreen ? '30%' : '40%',
    transform: 'translate(-50%, 50%)',
    zIndex: 1,
    width: isSmallScreen ? '15%' : '10%',
    height: isSmallScreen ? '20%' : '20%',
    opacity: 1,
  };

  const infoCardStyle = {
    position: 'absolute',
    top: isSmallScreen ? '10%' : '5%',
    left: isSmallScreen ? '5%' : '7%',
    zIndex: 1,
    width: isSmallScreen ? '90%' : '50%',
  };

  const infoCard2Style = {
    position: 'absolute',
    top: isSmallScreen ? '40%' : '25%',
    left: isSmallScreen ? '5%' : '20%',
    zIndex: 1,
    width: isSmallScreen ? '90%' : '40%',
  };

  const infoCard1ContainerStyle = {
    position: 'absolute',
    top: isSmallScreen ? '70%' : '8%',
    right: isSmallScreen ? '50%' : '3%',
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
        src={earthimg}
        alt="Earth"
        style={earthImageStyle1}
      />
      <img
        src={earthimg1}
        alt="Earth"
        style={earthImageStyle2}
      />
      <img
        src={arrowimg}
        alt="Arrow"
        style={arrowImageStyle}
      />
      <img
        src={rocketimg}
        alt="Rocket"
        style={rocketImageStyle}
      />

      <div style={infoCardStyle}>
        <InfoCard
          title={title}
          description={description}
        />
      </div>

      <div style={infoCard2Style}>
        <InfoCard2
          title={title1}
          description={description1}
        />
      </div>

      <div style={infoCard1ContainerStyle}>
        <InfoCard1 symbol={diameter} functionLabel="Diameter" value1="3,032" value2="Miles" />
      </div>
    </div>
  );
}

export default Earth;
