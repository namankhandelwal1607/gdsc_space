import React from 'react';
import backgroundImage from '../assets/background.png';
import Starfield from '../components/StarField';
import uranusimg from '../assets/uranus.png';
import uranusimg2 from '../assets/uranus2.png';
import InfoCard from '../components/InfoCard';
import InfoCard1 from '../components/InfoCard1';
import diameter from '../assets/diameter.png';
import temperature from '../assets/temperature.png';
import "./HomeStyle.css";

function Uranus() {
  const title = '7. Uranus';
  const description = 'Uranus, often referred to as the "Ice Giant," is a unique and mysterious planet in our solar system. It stands out due to its distinct blue-green color and its unusual rotation axis.';

  return (
    <div 
      className="relative overflow-hidden h-[100vh] w-[100vw]" 
      style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <Starfield />

      <img
        src={uranusimg}
        alt="Uranus"
        className="absolute bottom-[15%] right-[-38%] sm:bottom-[-120%] sm:right-[-2%] sm:w-[90%] w-[80%] z-1 opacity-100 falling"
      />
      <img
        src={uranusimg2}
        alt="Uranus"
        className="absolute bottom-[18%] right-[-38%] sm:bottom-[-115%] sm:right-[0%] sm:w-[80%] w-[74%] z-0 opacity-100 falling"
      />

      <div className="absolute top-[10%] left-[5%] sm:top-[5%] sm:left-[7%] sm:w-[50%] w-[90%] z-1 opacity-100">
        <InfoCard
          title={title}
          description={description}
        />
      </div>

      <div className="absolute top-[60%] left-[-20%] sm:top-[5%] sm:left-[60%] sm:w-auto w-[70%] flex flex-col gap-4 p-4">
        <InfoCard1 symbol={diameter} functionLabel="Diameter" value1="31,518" value2="Miles" />
      </div>
      <div className="absolute top-[40%] left-[-20%] sm:top-[40%] sm:left-[0%] sm:w-auto w-[90%] flex flex-col gap-4 p-4">
        <InfoCard1 symbol={temperature} functionLabel="Day Time Temperature" value1="-197°" value2="Celsius" />
      </div>
    </div>
  );
}

export default Uranus;
