import React, { useState } from 'react';
import backgroundImage from '../assets/background.png';
import Starfield from '../components/StarField';
import venusimg from '../assets/venus.png';
import InfoCard from '../components/InfoCard';
import InfoCard1 from '../components/InfoCard1';
import diameter from '../assets/diameter.png';
import temperature from '../assets/temperature.png';
import "./HomeStyle.css";

function Venus() {
  const title = '2. Venus';
  const description = 'Venus is often referred to as Earth’s sister planet due to its similar size and composition, but it stands out with its extremely inhospitable environment';

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <Starfield />

      <img
        src={venusimg}
        alt="Venus"
        className="absolute bottom-10 right-[-20%] w-4/5 h-1/2 sm:bottom-[-80%] sm:right-[-20%] sm:w-4/5 sm:h-[160%] z-2 opacity-100 falling"
      />
      <img
        src={venusimg}
        alt="Venus"
        className="absolute bottom-9 right-[-20%] w-[85%] h-[53%] sm:bottom-[-80%] sm:right-[-20%] sm:w-[82%] sm:h-[164%] z-1 opacity-50 falling"
      />
      <img
        src={venusimg}
        alt="Venus"
        className="absolute bottom-9 right-[-20%] w-[90%] h-[55%] sm:bottom-[-80%] sm:right-[-20%] sm:w-[84%] sm:h-[168%] z-0 opacity-20 falling"
      />

      <div className="absolute top-10 left-5 sm:top-5 sm:left-7 z-1 opacity-100 w-11/12 sm:w-2/5">
        <InfoCard
          title={title}
          description={description}
        />
      </div>

      <div className="absolute top-60 left-[-30%] sm:top-30 sm:left-7 w-full sm:w-9/10 flex flex-col sm:flex-col gap-10 sm:gap-16 pt-5">
        <InfoCard1 symbol={diameter} functionLabel="Diameter" value1="7,521" value2="Miles" />
        <InfoCard1 symbol={temperature} functionLabel="Temperature" value1="±475°" value2="Celsius" />
      </div>
    </div>
  );
}

export default Venus;
