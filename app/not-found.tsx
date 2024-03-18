'use client';

import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';

// Import any other components or styles you need
const notFound = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: require('../public/404lottie.json'),
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  return (
    <div className='bg-black'>
      <Player
        autoplay
        loop
        src='https://lottie.host/d31413a3-2ae4-4ce2-931e-419cacaf8ee4/HLMpfjos1J.json'
        style={{ height: window.innerHeight - 100, width: window.innerWidth }}
      ></Player>
    </div>
  );
  // return <Lottie options={defaultOptions} height={400} width={400} />;
};

export default notFound;
