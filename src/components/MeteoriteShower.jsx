import React, { useEffect, useState } from 'react';
import './MeteoriteShower.css'; // Import the CSS file for styling

const MeteoriteShower = ({ onAnimationEnd }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Hide splash screen after animation ends
    const timer = setTimeout(() => {
      setIsVisible(false);
      onAnimationEnd(); // Call callback when animation ends
    }, 5000); // Duration of splash screen animation

    return () => clearTimeout(timer);
  }, [onAnimationEnd]);

  // Generate an array of meteorites with random positions, sizes, and colors
  const meteorites = Array.from({ length: 50 }, (_, index) => ({
    id: index,
    size: Math.random() * 5 + 2 + 'px', // Random size between 2px and 7px
    color: `hsl(${Math.random() * 360}, 100%, 75%)`, // Random color
    animationDuration: Math.random() * 2 + 3 + 's', // Random duration between 3s and 5s
    animationDelay: Math.random() * 5 + 's' // Random delay between 0s and 5s
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
