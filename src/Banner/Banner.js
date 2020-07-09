import React from 'react';
import PhoBanner from '../images/test-banner-pho.jpeg';

const Banner = () => {
  return(
    <img src={PhoBanner} alt="banner" style={{objectFit: 'cover',
      height: '16em', width: '100%', objectPosition: '0% 0%', filter: 'brightness(0.8) opacity(0.6)'}}></img>
  )
}

export default Banner;