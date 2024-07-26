import React from 'react';
import background from '../assets/learnmore.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

function LearnMore() {
  // Inline styles for the button
  const buttonStyles = {
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    border: 'none',
    padding: '20px 40px',
    color: '#fff',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    transition: 'all 0.3s ease', // Smooth transition for responsiveness
  };

  // Inline styles for small screens
  const smallScreenStyles = {
    padding: '10px 20px',
    fontSize: '1.25rem',
  };

  // Function to get responsive styles based on window width
  const getResponsiveStyles = () => {
    if (typeof window !== 'undefined' && window.innerWidth <= 450) {
      return smallScreenStyles;
    }
    return {};
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '3rem' }}>
      <button
        style={{ ...buttonStyles, ...getResponsiveStyles() }}
      >
        Learn More
        <FontAwesomeIcon icon={faArrowDown} style={{ marginLeft: '10px' }} />
      </button>
    </div>
  );
}

export default LearnMore;
