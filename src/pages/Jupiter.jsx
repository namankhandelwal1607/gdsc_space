import React from 'react';
import backgroundImage from '../assets/background.png';
import Starfield from '../components/StarField';
import jupiterimg from '../assets/jupiter.png';
import InfoCard from '../components/InfoCard';
import InfoCard1 from '../components/InfoCard1';
import diameter from '../assets/diameter.png';
import temperature from '../assets/temperature.png';
import "./HomeStyle.css";


function Jupiter() {
  const title = '5. Jupiter';
  const description = 'Jupiter, the largest planet in our solar system, is a gas giant known for its immense size, powerful storms, and numerous moons.';

  return (
    <div
      className="relative overflow-hidden h-screen w-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <Starfield />

      <img
        src={jupiterimg}
        alt="Jupiter"
        className="absolute z-10 opacity-100 sm:top-[-50%] sm:right-[-20%] sm:w-[70%] sm:h-auto top-[30%] right-[-9%] w-[80%] h-[80%] falling"
      />

      <div className="absolute z-10 opacity-100 sm:top-[5%] sm:left-[7%] sm:w-[40%] top-[5%] left-[5%] w-[90%] px-4">
        <InfoCard
          title={title}
          description={description}
        />
      </div>

      <div className="absolute flex flex-col gap-4 z-10 opacity-100 sm:top-[30%] sm:left-[7%] sm:w-auto top-[40%] left-[-25%] w-[90%] px-4">
        <InfoCard1 symbol={diameter} functionLabel="Diameter" value1="86,881" value2="Miles" />
        <InfoCard1 symbol={temperature} functionLabel="Temperature" value1="-108°" value2="Celsius" />
      </div>
    </div>
  );
}

export default Jupiter;
