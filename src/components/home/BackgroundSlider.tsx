import React, { useEffect, useState } from 'react';

interface BackgroundSliderProps {
  images: string[];
}

const BackgroundSlider: React.FC<BackgroundSliderProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div
      className="absolute inset-0 z-0 bg-cover bg-center transition-all duration-1000"
      style={{
        backgroundImage: `url(${images[currentIndex]})`,
        opacity: 0.4,
      }}
    ></div>
  );
};

export default BackgroundSlider;
