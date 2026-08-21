import React, { useState, useEffect } from 'react';

interface CarouselProps {
  items: React.ReactNode[];
  autoPlay?: boolean;
  interval?: number;
}

export const Carousel: React.FC<CarouselProps> = ({ 
  items, 
  autoPlay = false, 
  interval = 3000 
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play feature ke liye
  useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, interval);
    return () => clearInterval(timer);
  }, [autoPlay, interval, items.length]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  return (
    <div className="relative w-full max-w-xl mx-auto overflow-hidden rounded-lg shadow-lg bg-gray-100">
      {/* Carousel Items Container */}
      <div 
        className="flex transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {items.map((item, index) => (
          <div key={index} className="w-full shrink-0 flex items-center justify-center p-6 min-h-[250px]">
            {item}
          </div>
        ))}
      </div>

      {/* Previous Button */}
      <button 
        onClick={prevSlide}
        className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition"
      >
        ❮
      </button>

      {/* Next Button */}
      <button 
        onClick={nextSlide}
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition"
      >
        ❯
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex space-x-2">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              currentIndex === index ? 'bg-indigo-600 w-6' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};