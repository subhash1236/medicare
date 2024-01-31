/* eslint-disable no-unused-vars */
import React from 'react';

const Footer = () => {
  
  const footerStyle = {
    backgroundColor: '#333',
    color: '#fff',
    padding: '20px',
    textAlign: 'center',
  };

  const responsiveStyles = {
    '@media (max-width: 600px)': {
      padding: '15px',
      fontSize: '14px',
    },
  };

  const combinedStyles = { ...footerStyle, ...responsiveStyles };

  return (
    <footer style={footerStyle}>
      <div>
        <p>&copy; 2024 Medicare +</p>
      </div>
    </footer>
  );
};

export default Footer;
