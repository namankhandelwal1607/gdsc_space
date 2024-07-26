import React, { useState, useEffect } from 'react';
import infoimg from "../assets/infoimg.png";
import card from "../assets/card.png";

const InfoCard1 = ({ symbol, functionLabel, value1, value2 }) => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 450);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 450);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const cardStyle = {
    height: isSmallScreen ? '120px' : '154px',
    width: isSmallScreen ? '200px' : '300px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    transition: 'box-shadow 0.3s ease',
    borderRadius: '0.5rem',
    overflow: 'hidden',
    position: 'relative',
    paddingRight: isSmallScreen ? '0px':'20px',
    paddingLeft: isSmallScreen ? '0px': '20px',
  };

  const bgImageStyle = {
    position: 'absolute',
    inset: '0',
    backgroundImage: `url(${card})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  const contentStyle = {
    position: 'relative',
    zIndex: '10',
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    color: 'white',
    padding: '0.5rem',
    fontFamily: 'Nova Square, sans-serif',
  };

  const symbolStyle = {
    width: isSmallScreen ? '30px' : '50px',
    height: isSmallScreen ? '45px' : '65px',
  };

  const textStyle = {
    flexGrow: '1',
    marginLeft: '1rem',
    overflowWrap: 'break-word',
  };

  const labelStyle = {
    fontSize: isSmallScreen ? '0.9rem' : '1rem',
    fontFamily: 'Nova Square, sans-serif',
    fontWeight: 'bold',
    textAlign: 'right',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    marginBottom: '0.25rem',
  };

  const valueStyle = {
    fontSize: isSmallScreen ? '1rem' : '2rem',
    fontFamily: 'Nova Square, sans-serif',
    fontWeight: 'bold',
    textAlign: 'right',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    marginBottom: '0.25rem',
  };

  return (
    <div style={cardStyle} className="shadow-md hover:shadow-lg rounded-lg overflow-hidden relative ml-5">
      <div style={bgImageStyle}></div>
      <div style={contentStyle} className="relative z-10 flex items-center h-full text-white p-4">
        <img src={symbol} alt="Symbol" style={symbolStyle} />
        <div style={textStyle} className="flex-grow ml-4">
          <div style={labelStyle} className="font-extrabold text-right truncate">
            {functionLabel}
          </div>
          <div style={valueStyle} className="font-extrabold text-right truncate">
            {value1}
          </div>
          <div style={valueStyle} className="font-extrabold text-right truncate">
            {value2}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoCard1;
