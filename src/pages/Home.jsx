import React, { useState, useEffect } from 'react';
import backgroundImage from '../assets/background.png';
import as1 from '../assets/as1.png';
import as2 from '../assets/as2.png';
import as3 from '../assets/as3.png';
import as4 from '../assets/as4.png';
import p1 from '../assets/p1.png';
import p2 from '../assets/p2.png';
import p3 from '../assets/p3.png';
import p4 from '../assets/p4.png';
import p5 from '../assets/p5.png';
import p6 from '../assets/p6.png';
import p7 from '../assets/p7.png';
import p8 from '../assets/p8.png';
import lb from '../assets/lb.svg';
import rt from '../assets/rt.svg';
import LearnMore from '../components/LearnMore';
import Starfield from '../components/StarField';
import stars from '../assets/stars.svg';
import '../App.css';
import { Link } from 'react-scroll';
import './HomeStyle.css';
function Home() {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 850);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 450);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const containerStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    width: '100vw',
    position: 'relative',
    overflowX: 'hidden',
    overflowY: 'hidden',
    fontFamily: 'Nova Square, sans-serif',
  };

  const starFieldStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 1,
    opacity: 0.5,
  };

  const svgStyle = (bottom, left, top, right) => ({
    position: 'absolute',
    bottom,
    left,
    top,
    right,
    zIndex: 2,
    opacity: 0.5,
  });

  const imageStyle = (top, left, bottom, right, width, height) => ({
    position: 'absolute',
    top,
    left,
    bottom,
    right,
    width,
    height,
    zIndex: 3,
  });

  const homeTextStyle = {
    position: 'absolute',
    top: '50%',
    left: isSmallScreen ? '50%':'50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
    zIndex: 4,
    fontFamily: 'Nova Square, sans-serif',
    width: isSmallScreen ? '50%':null,
  };

  return (
    <div style={containerStyle}>
      <Starfield />
      <img src={stars} alt="Stars SVG" style={starFieldStyle} />
      <img src={lb} alt="Lower Bottom SVG" style={svgStyle(0, 0, null, null)} />
      <img src={rt} alt="Right Top SVG" style={svgStyle(null, null, 0, 0)} />

      <img
        src={as1}
        alt="Image 1"
        className="falling"
        style={imageStyle('50px', '20px', null, null, isSmallScreen ? '100px' : '200px', isSmallScreen ? '75px' : '150px')}
      />
      <img
        src={as2}
        alt="Image 2"
        className="falling"
        style={imageStyle('100px', null, null, '20px', isSmallScreen ? '50px' : '100px', isSmallScreen ? '50px' : '100px')}
      />
      <img
        src={as3}
        alt="Image 3"
        className="falling"
        style={imageStyle(null, '20px', '50px', null, isSmallScreen ? '75px' : '150px', isSmallScreen ? '100px' : '200px')}
      />
      <img
        src={as4}
        alt="Image 4"
        className="falling"
        style={imageStyle(null, null, '100px', '20px', isSmallScreen ? '150px' : '300px', isSmallScreen ? '50px' : '100px')}
      />

      <div id="images">
        <Link to="mercury" smooth={true} duration={500}>
          <img
            src={p1}
            alt="p1"
            className="falling p1"
            style={imageStyle(isSmallScreen ? '20%':'70px', isSmallScreen ? '3%':'-2%', isSmallScreen ? null:null,isSmallScreen ? '3%': null, isSmallScreen ? '80px' : '160px', isSmallScreen ? '80px' : '160px')}
          />
        </Link>
        <Link to="venus" smooth={true} duration={500}>
          <img
            src={p2}
            alt="p2"
            className="falling p2"
            style={imageStyle(isSmallScreen ? '40%':'300px', isSmallScreen ? '3%':'250px', isSmallScreen ? null:null, isSmallScreen ? '3%':null, isSmallScreen ? '80px' : '62.67px', isSmallScreen ? '80px' : '62.67px')}
          />
        </Link>
        <Link to="saturn" smooth={true} duration={500}>
          <img
            src={p3}
            alt="p3"
            className="falling p3"
            style={imageStyle(isSmallScreen ? '40%':'250px', isSmallScreen ? null:'-10%', isSmallScreen ? null:null, isSmallScreen ? '3%':null, isSmallScreen ? '80px' : '400px', isSmallScreen ? '80px' : '400px')}
          />
        </Link>
        <Link to="uranus" smooth={true} duration={500}>
          <img
            src={p4}
            alt="p4"
            className="falling p4"
            style={imageStyle(isSmallScreen ? '60%':null,isSmallScreen ? null: '-1%',isSmallScreen ? null: '-5%', isSmallScreen ? '3%':null, isSmallScreen ? '80px' : '120px', isSmallScreen ? '80px' : '120px')}
          />
        </Link>
       <Link to="neptune" smooth={true} duration={500}>
          <img
            src={p5}
            alt="p5"
            className="falling p5"
            style={imageStyle(isSmallScreen ? '80%':null, isSmallScreen ? null:'50%', isSmallScreen ? null:'-6%', isSmallScreen ? '3%':null, isSmallScreen ? '80px' : '150px', isSmallScreen ? '80px' : '170px')}
          />
        </Link>
        <Link to="jupiter" smooth={true} duration={500}>
          <img
            src={p6}
            alt="p6"
            className="falling p6"
            style={imageStyle(isSmallScreen ? '20%':null, isSmallScreen ? null:null, isSmallScreen ? null:'-15%', isSmallScreen ? '3%':'-6%', isSmallScreen ? '80px' : '400px', isSmallScreen ? '80px' : '400px')}
          />
        </Link>
         <Link to="mars" smooth={true} duration={500}>
          <img
            src={p7}
            alt="p7"
            className="falling p7"
            style={imageStyle(isSmallScreen ? '80%':'100px', isSmallScreen ? '3%':null, isSmallScreen ? null:null, isSmallScreen ? null:'-5%', isSmallScreen ? '80px': null, isSmallScreen ? '80px' : '300px')}
          />
        </Link>
        <Link to="earth" smooth={true} duration={500}>
          <img
            src={p8}
            alt="p8"
            className="falling p8"
            style={imageStyle(isSmallScreen ? '60%':'20%', isSmallScreen ? '3%':null, isSmallScreen ? null:null, isSmallScreen ? null:'40%', isSmallScreen ? '80px' : '140px', isSmallScreen ? 'px' : '144px')}
          />
        </Link>
      </div>

      <div style={homeTextStyle} className='home-text'>
        <h1>
          Let's Get To Know Our Solar System Galaxy
        </h1>
        <p>
          Embark on a cosmic journey across the ethereal expanse of the solar system Galaxy and follow the orchestration of the cosmos, and the planets weaving stories of their timeless existence.
        </p>
        <LearnMore />
      </div>
    </div>
  );
}

export default Home;
