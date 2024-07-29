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
import "./HomeStyle.css";

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
        className="absolute bottom-[5%] sm:bottom-[-35%] left-[60%] sm:left-[50%] transform translate-x-[-50%] translate-y-[50%] w-[70%] sm:w-[80%] z-[1] opacity-[1]"
      />
      <img
        src={earthimg1}
        alt="Earth"
        className="absolute bottom-[-32%] sm:bottom-[-37%] left-[50%] transform translate-x-[-50%] translate-y-[50%] w-[92%] sm:w-[82%] z-[1] opacity-[1] "
      />
      <img
        src={arrowimg}
        alt="Arrow"
        className="absolute right-[2%] sm:right-[15%] bottom-[30%] sm:bottom-[60%] transform translate-x-[-50%] translate-y-[50%] w-[10%] sm:w-[15%] h-[20%] sm:h-[30%] z-[1] opacity-[1]"
      />
      <img
        src={rocketimg}
        alt="Rocket"
        className="absolute left-[-100%] sm:left-[5%] bottom-[30%] sm:bottom-[40%] transform translate-x-[-50%] translate-y-[50%] w-[15%] sm:w-[10%] h-[20%] sm:h-[20%] z-[1] opacity-[1]"
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
