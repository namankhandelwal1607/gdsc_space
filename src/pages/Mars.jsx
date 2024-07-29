import React from 'react';
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
import "./HomeStyle.css";

function Mars() {
  const title = '4. Mars';
  const description = 'Mars, often referred to as the "Red Planet," is the fourth planet from the Sun and has captivated human imagination for centuries with its reddish appearance and potential for hosting life.';
  const title1 = 'Martian Moons';
  const description1 = 'Mars has two small moons, Phobos and Deimos, which are irregularly shaped and thought to be captured asteroids.';

  return (
    <div
      className="relative overflow-hidden h-screen w-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <Starfield />

      <img
        src={marsimg}
        alt="Mars"
        className="absolute z-10 opacity-100 sm:bottom-[-30%] sm:left-[-20%] sm:w-[60%] bottom-[35%] left-[-40%] w-[80%] falling"
      />
      <img
        src={marsimg1}
        alt="Mars"
        className="absolute z-10 opacity-100 sm:bottom-[-30%] sm:left-[-20%] sm:w-[48%] bottom-[32%] left-[-44%] w-[70%] falling"
      />
      <img
        src={arrowimg}
        alt="Arrow"
        className="absolute z-10 opacity-100 sm:top-[40%] sm:left-[35%] sm:w-[5%] top-[35%] left-[30%] w-[10%]"
      />

      <div className="absolute z-10 opacity-100 sm:top-[4%] sm:left-[5%] sm:w-[40%] top-[4%] left-[3%] w-[94%] px-4">
        <InfoCard
          title={title}
          description={description}
        />
      </div>

      <div className="absolute z-10 opacity-100 sm:top-[45%] sm:left-[42%] sm:w-[25%] top-[37%] left-[29%] w-[75%] px-4">
        <InfoCard3
          title={title1}
          description={description1}
        />
      </div>

      <div className="absolute flex flex-col gap-4 z-10 opacity-100 sm:top-[5%] sm:right-[10%] sm:w-auto top-[65%] right-0 w-[94%] px-4">
        <InfoCard1 symbol={diameter} functionLabel="Diameter" value1="3,032" value2="Miles" />
        <InfoCard1 symbol={temperature} functionLabel="Day Time Temperature" value1="±430°" value2="Celsius" />
        <InfoCard1 symbol={tempn} functionLabel="Night Time Temperature" value1="-180°" value2="Celsius" />
      </div>
    </div>
  );
}

export default Mars;
