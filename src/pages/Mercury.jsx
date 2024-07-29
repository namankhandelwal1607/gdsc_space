import React from 'react';
import backgroundImage from '../assets/background.png';
import Starfield from '../components/StarField';
import Mercuryimg from '../assets/mercury1.png';
import InfoCard from '../components/InfoCard';
import InfoCard1 from '../components/InfoCard1';
import diameter from '../assets/diameter.png';
import tempn from '../assets/tempn.png';
import temperature from '../assets/temperature.png';
import "./HomeStyle.css"; 

function Mercury() {
  const title = '1. Mercury';
  const description = 'Mercury is the closest planet to the Sun and is known for its extreme temperatures and barren, rocky surface. It is one of the four terrestrial planets in our solar system, characterized by their solid, rocky composition.';

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <Starfield />

      <img
        src={Mercuryimg}
        alt="Mercury"
        className="absolute top-[45%] left-[55%] w-[75%] h-[80%] sm:top-[10%] sm:left-[-15%] sm:w-[50%] sm:h-[80%] z-2 opacity-100 falling"
      />
      <img
        src={Mercuryimg}
        alt="Mercury"
        className="absolute top-[43%] left-[51%] w-[78%] h-[80%] sm:top-[8%] sm:left-[-15%] sm:w-[51%] sm:h-[85%] z-1 opacity-60 falling"
      />
      <img
        src={Mercuryimg}
        alt="Mercury"
        className="absolute top-[41%] left-[49%] w-[75%] h-[85%] sm:top-[6%] sm:left-[-15%] sm:w-[52%] sm:h-[85%] z-1 opacity-30 falling"
      />

      <div className="absolute top-[10%] left-[3%] w-[90%] sm:top-[5%] sm:left-[40%] sm:w-[50%] z-1 p-4 opacity-100">
        <InfoCard title={title} description={description} />
      </div>

      <div className="absolute top-[42%] left-[-20%] sm:top-[40%] sm:left-[40%] flex flex-col sm:flex-row gap-4 sm:gap-2 p-4 w-[90%] flex-wrap z-1">
        <InfoCard1 symbol={diameter} functionLabel="Diameter" value1="3,032" value2="Miles" />
        <InfoCard1 symbol={temperature} functionLabel="Day Time Temperature" value1="±430°" value2="Celsius" />
        <div className="w-full mt-3">
          <InfoCard1 symbol={tempn} functionLabel="Night Time Temperature" value1="-180°" value2="Celsius" />
        </div>
      </div>
    </div>
  );
}

export default Mercury;
