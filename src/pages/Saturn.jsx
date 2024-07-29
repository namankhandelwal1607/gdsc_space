import React from 'react';
import backgroundImage from '../assets/background.png';
import Starfield from '../components/StarField';
import saturnimg from '../assets/saturn.png';
import InfoCard1 from '../components/InfoCard1';
import InfoCard2 from '../components/InfoCard2';
import diameter from '../assets/diameter.png';
import temperature from '../assets/temperature.png';
import "./HomeStyle.css";


function Saturn() {
  const title = '6. Saturn';
  const description = 'Saturn, often referred to as the "Ringed Planet," is known for its stunning system of rings that encircle the planet\'s equator. It\'s the sixth planet from the Sun and is one of the most visually distinctive objects in our solar system, with more than 80 known satellites.';

  return (
    <div 
      className="relative overflow-hidden h-[100vh] w-[100vw]" 
      style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <Starfield />

      <img
        src={saturnimg}
        alt="Saturn"
        className="absolute bottom-[20%] left-[40%] w-[80%] sm:bottom-[-5%] sm:left-[-15%] sm:w-[70%] z-1 opacity-100 falling"
      />

      <div className="absolute top-[10%] left-[5%] w-[90%] sm:top-[5%] sm:left-[40%] sm:w-[50%] z-1 opacity-100 px-4">
        <InfoCard2
          title={title}
          description={description}
        />
      </div>

      <div className="absolute top-[55%] left-[-25%] w-[90%] sm:top-[30%] sm:left-[60%] sm:w-auto flex flex-col gap-4 p-4 flex-wrap">
        <InfoCard1 symbol={diameter} functionLabel="Diameter" value1="72,367" value2="Miles" />
        <InfoCard1 symbol={temperature} functionLabel="Temperature" value1="-138°" value2="Celsius" />
      </div>
    </div>
  );
}

export default Saturn;
