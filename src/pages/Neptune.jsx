import React from 'react';
import backgroundImage from '../assets/background.png';
import Starfield from '../components/StarField';
import neptuneimg from '../assets/neptune.png';
import InfoCard1 from '../components/InfoCard1';
import InfoCard2 from '../components/InfoCard2';
import diameter from '../assets/diameter.png';
import temperature from '../assets/temperature.png';
import Footer from '../components/Footer';
import "./HomeStyle.css";

function Neptune() {
  const title = '8. Neptune';
  const description = 'Neptune, often called the "Blue Giant," is the eighth and farthest planet from the Sun in our solar system. It is a gas giant known for its striking blue color and turbulent atmosphere.';

  return (
    <div 
      className="relative overflow-hidden h-[150vh] w-[100vw]" 
      style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <Starfield />

      <img
        src={neptuneimg}
        alt="Neptune"
        className="absolute top-[28%] left-1/3 sm:top-[28%] sm:left-[-15%] sm:w-[70%] w-[80%] z-2 falling"
      />
     
      <div className="absolute top-10 left-[5%] sm:top-5 sm:left-[40%] sm:w-[50%] w-[90%] z-1">
        <InfoCard2 title={title} description={description} />
      </div>

      <div className="absolute top-[40%] left-[-25%] sm:top-[25%] sm:left-[40%] sm:w-auto w-[90%] flex sm:flex-row flex-col gap-4 p-4">
        <InfoCard1 symbol={diameter} functionLabel="Diameter" value1="30,775" value2="Miles" />
        <InfoCard1 symbol={temperature} functionLabel="Day Time Temperature" value1="-218°" value2="Celsius" />
      </div>

      <div className="absolute bottom-[2%] left-1/2 transform -translate-x-1/2 w-[90vw] z-2">
        <Footer />
      </div>
    </div>
  );
}

export default Neptune;
