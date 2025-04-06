import React, { useState } from 'react';
import Back from '../assets/Back.png';
import Next from '../assets/Next.png';

const ProjectsSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [transitionDirection, setTransitionDirection] = useState(null); 

  const prevIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
  const nextIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;

  const handleNext = () => {
    if (animating) return;
    setTransitionDirection('next');
    setAnimating(true);
    setTimeout(() => {
      setCurrentIndex(nextIndex);
      setAnimating(false);
      setTransitionDirection(null);
    }, 500);
  };

  const handlePrev = () => {
    if (animating) return;
    setTransitionDirection('prev');
    setAnimating(true);
    setTimeout(() => {
      setCurrentIndex(prevIndex);
      setAnimating(false);
      setTransitionDirection(null);
    }, 500);
  };

  return (
    
    <div className="relative">
      <div>
        <p className="text-[clamp(1rem,20vw,25rem)] text-[#FFFFFF] ml-[4%]"> Projects </p> 
      </div>
  
      <div className="flex justify-center items-center relative">
        
        <button onClick={handlePrev} className="z-50 mt-[-20%] md:mt-[-10%] ">
          <img src={Back} alt="Next" className="h-6 w-60 md:h-10 md:w-60 lg:h-15 lg:w-60 2xl:h-25" />
        </button>

        <div className="relative h-50 w-1000 bg-[#fff]/15 backdrop-blur-md rounded-lg border border-[#8F88EF]/20 shadow-xl mb-20 mx-4 overflow-hidden md:h-120 md:w-1000 lg:h-150 lg:w-1000 xl:h-180 xl:w-1000 2xl:h-350 2xl:w-1000">
          
          <img
            src={images[currentIndex]}
            alt="Slider"
            className={`absolute inset-0 object-cover w-full h-full rounded-lg transition-all duration-500 ${
              animating && transitionDirection === 'next' ? 'animate-slideOutToLeft' : ''
            } ${
              animating && transitionDirection === 'prev' ? 'animate-slideOutToRight' : ''
            }`}
          />
          
          {animating && transitionDirection === 'next' && (
            <img
              src={images[nextIndex]}
              alt="Next slider"
              className="absolute inset-0 object-cover w-full h-full rounded-lg transition-all duration-500 animate-slideInFromRight"
            />
          )}
          {animating && transitionDirection === 'prev' && (
            <img
              src={images[prevIndex]}
              alt="Previous slider"
              className="absolute inset-0 object-cover w-full h-full rounded-lg transition-all duration-500 animate-slideInFromLeft"
            />
          )}
        </div>

        <button onClick={handleNext} className="z-50 mt-[-20%] md:mt-[-10%] ">
          <img src={Next} alt="Next" className="h-6 w-60 md:h-10 md:w-60 lg:h-15 lg:w-60 2xl:h-25" />
        </button>
      </div>
    </div>
  );
};

export default ProjectsSlider;
