import React, { useState, useEffect } from 'react';
import backgroundImage from '../assets/background.png';
import Starfield from '../components/StarField';
import venusimg from '../assets/venus.png';
import InfoCard from '../components/InfoCard';
import InfoCard1 from '../components/InfoCard1';
import diameter from '../assets/diameter.png';
import temperature from '../assets/temperature.png';

function Venus() {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 600);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 600);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const title = '2. Venus';
  const description = 'Venus is often referred to as Earth’s sister planet due to its similar size and composition, but it stands out with its extremely inhospitable environment';

  const containerStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    width: '100vw',
    position: 'relative',
    overflow: 'hidden',
  };

  const venusImageStyle1 = {
    position: 'absolute',
    bottom: isSmallScreen ? '10%' : '-80%',
    right: isSmallScreen ? '-20%' : '-20%',
    width: isSmallScreen ? '80%' : '80%',
    height: isSmallScreen ? '50%' : '160%',
    zIndex: 2,
    opacity: 1,
  };

  const venusImageStyle2 = {
    position: 'absolute',
    bottom: isSmallScreen ? '9%' : '-80%',
    right: isSmallScreen ? '-20%' : '-20%',
    width: isSmallScreen ? '85%' : '82%',
    height: isSmallScreen ? '53%' : '164%',
    zIndex: 1,
    opacity: 0.5,
  };

  const venusImageStyle3 = {
    position: 'absolute',
    bottom: isSmallScreen ? '9%' : '-80%',
    right: isSmallScreen ? '-20%' : '-20%',
    width: isSmallScreen ? '90%' : '84%',
    height: isSmallScreen ? '55%' : '168%',
    zIndex: 0,
    opacity: 0.2,
  };

  const infoCardStyle = {
    position: 'absolute',
    top: isSmallScreen ? '10%' : '5%',
    left: isSmallScreen ? '5%' : '7%',
    zIndex: 1,
    opacity: 1,
    width: isSmallScreen ? '90%' : '40%',
  };

  const infoCard1ContainerStyle = {
    position: 'absolute',
    top: isSmallScreen ? '40%' : '30%',
    left: isSmallScreen ? '-30%' : '7%',
    width: isSmallScreen ? '100%' : '90%',
    display: 'flex',
    flexDirection: isSmallScreen ? 'column' : 'column',
    gap: isSmallScreen ? '10px' : '16px',
    paddingTop: '5px',
  };

  return (
    <div style={containerStyle}>
      <Starfield />

      <img
        src={venusimg}
        alt="Venus"
        style={venusImageStyle1}
      />
      <img
        src={venusimg}
        alt="Venus"
        style={venusImageStyle2}
      />
      <img
        src={venusimg}
        alt="Venus"
        style={venusImageStyle3}
      />

      <div style={infoCardStyle}>
        <InfoCard
          title={title}
          description={description}
        />
      </div>

      <div style={infoCard1ContainerStyle}>
        <InfoCard1 symbol={diameter} functionLabel="Diameter" value1="7,521" value2="Miles" />
        <InfoCard1 symbol={temperature} functionLabel="Temperature" value1="±475°" value2="Celsius" />
      </div>
    </div>
  );
}

export default Venus;
