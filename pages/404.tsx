import React from 'react';
import Lottie from 'react-lottie'; // Assuming you named the library import 'react-lottie'
import animationData from '../public/404lottie.json'; // Replace with your file path

// Import any other components or styles you need
const notFound = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
  };

  return <Lottie options={defaultOptions} height={400} width={400} />;
};

export default notFound;
