import React from 'react';
import backgroundImage from '../assets/background.png';
import Starfield from '../components/StarField';
import Sunimg from '../assets/sun.png';
import sunshade from '../assets/sunshade.svg';
import InfoCard from '../components/InfoCard';
import InfoCard1 from '../components/InfoCard1';
import diameter from "../assets/diameter.png";
import temperature from "../assets/temperature.png";

function Sun() {
  const title = '. Sun';
  const description = 'The Sun is a huge, glowing ball of hot plasma at the centre of our solar system and provides the vital energy needed for life on Earth. This energy radiates outward in the form of light and heat, providing warmth and light to the entire solar system.';

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <Starfield />

 
        <div className="absolute top-[4%] left-[30%] sm:top-[10%] sm:left-[2%] sm:w-[50%] sm:h-[120%] md:top-[-20%] md:left-[0%] md:w-full md:h-[120%] w-[80%] h-[80%] z-0 opacity-50">
        <img src={sunshade} alt="Sun Shade" className="w-full h-full" />
      </div>

      <div className="absolute top-[15%] left-[30%] sm:top-[0%] sm:left-[10%] sm:w-[60%] md:top-[-80%] md:left-[15%] md:w-[90%] md:h-auto w-[70%] h-[70%] z-10">
        <img src={Sunimg} alt="Sun"  />
      </div>

      
      <div className="absolute top-[60%] left-[7%] sm:top-[40%] sm:left-[10%] sm:w-[60%] w-[90%] z-10 p-4">
        <InfoCard title={title} description={description} />
      </div>

      <div className="absolute top-[25%] left-[-30%] sm:top-[70%] sm:left-[10%] sm:w-[80%] flex flex-col sm:flex-row gap-4 sm:gap-2 w-[80%] p-4 z-10">
        <InfoCard1 symbol={diameter} functionLabel="Diameter" value1="870,000" value2="Miles" />
        <InfoCard1 symbol={temperature} functionLabel="Temperature" value1="±5,500°" value2="Celsius" />
      </div>
    </div>
  );
}

export default Sun;
