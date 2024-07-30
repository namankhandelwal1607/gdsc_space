import React, { useEffect, useState } from 'react';
import './MeteoriteShower.css'; 

const MeteoriteShower = ({ onAnimationEnd }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      onAnimationEnd(); 
    }, 5000); 

    return () => clearTimeout(timer);
  }, [onAnimationEnd]);

  const meteorites = Array.from({ length: 50 }, (_, index) => ({
    id: index,
    size: Math.random() * 5 + 2 + 'px', 
    color: `hsl(${Math.random() * 360}, 100%, 75%)`, 
    animationDuration: Math.random() * 2 + 3 + 's', 
    animationDelay: Math.random() * 5 + 's' 
  }));

  return (
    <div className={`splash-screen ${!isVisible ? 'fade-out' : ''}`}>
      <div className="meteorites-container">
        {meteorites.map(meteorite => (
          <div
            key={meteorite.id}
            className="meteorite"
            style={{
              width: meteorite.size,
              height: meteorite.size,
              backgroundColor: meteorite.color,
              animationDuration: meteorite.animationDuration,
              animationDelay: meteorite.animationDelay,
            }}
          />
        ))}
        <div className="stars-container">
          {[...Array(100)].map((_, index) => (
            <div
              key={index}
              className="star"
              style={{
                top: `${Math.random() * 100}vh`,
                left: `${Math.random() * 100}vw`,
                width: `${Math.random() * 3 + 1}px`,
                height: `${Math.random() * 3 + 1}px`,
              }}
            />
          ))}
        </div>
      </div>
      <div className={`solar-text ${!isVisible ? 'fade-out' : ''}`}>Solar.io</div>
    </div>
  );
};

export default MeteoriteShower;
