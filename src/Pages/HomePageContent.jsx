import React from 'react';

import Header from '../Components/Header.jsx';
import Footer from '../Components/Footer.jsx';
import Carousel from '../Components/Carousel.jsx';

import Sparkle from '../assets/8.png';
import Saturn from '../assets/9.png';
import Sun from '../assets/5.png';
import Rocket from '../assets/Rocket.png';

const HomePageContent = () => {
  return (
    <div>
      <Header /> 
      <div>
          {
            <div className='leading-[0.7] text-center mt-70'>

              <p className='text-[3rem] text-[#FFFFFF] text-strokesmall '> PORTFOLIO </p>
              
              <span className='text-[22vw] text-[#FFFFFF] text-stroke '> <span className='text-[#F49959]'>3</span>MINDS</span>

              <p className='text-[3rem] text-[#FFFFFF] text-strokesmall pb-100'> Three Minds, One Vision </p>

              <div>
                <div className="flex justify-center items-center gap-9">
                  <img src={Sparkle} alt="Home" className="h-[95px] w-[95px] ml-3" />
                  <span className="mx-2 text-[5vw] text-[#FFFFFF] text-strokesmall "> INTRODUCTION </span>
                  <img src={Sparkle} alt="Home" className="h-[95px] w-[95px] ml-3" />
                </div>

                <p className='max-w-7xl mx-auto text-[2.5rem] text-[#FFFFFF] leading-[1.2]
                mt-15'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>

                  <div className="flex flex-row gap-5 justify-center items-center mt-12 mb-80">
                    <div className="w-9 h-9 bg-[#FFFFFF] rounded-full"></div>
                    <div className="w-9 h-9 bg-[#5878E0] rounded-full"></div>
                    <div className="w-9 h-9 bg-[#F1E167] rounded-full"></div>
                    <div className="w-9 h-9 bg-[#FF4A4A] rounded-full"></div>
                  </div>

              </div>
            </div>
          }
      </div>
      
      <Carousel /> 

      <div> 
        <div className="flex justify-end items-center gap-9 mt-80 mr-10">
          <img src={Saturn} alt="Home" className="h-[95px] w-[95px] ml-3" />
          <p className='mx-2 text-[5vw] text-[#F49958] text-strokesmall '> MISSION </p>
        </div>
        
        <div className="flex justify-end items-center gap-9 mt-10 mr-10">
          <p className='max-w-3xl text-[2.5rem] text-[#FFFFFF] leading-[1.2] text-right'> 
            At 3Minds, we bring together three creative minds to turn ideas into reality. We believe in teamwork, innovation, and quality, ensuring that every project we create reflects our shared vision. Our goal is to inspire, collaborate, and deliver outstanding work that makes a difference.
          </p>
        </div>

        <div className="flex  items-center gap-9 mt-80 ml-10">
          <p className='mx-2 text-[5vw] text-[#F49958] text-strokesmall '> VISION </p>
          <img src={Sun} alt="Home" className="h-[95px] w-[95px] ml-3" />
        </div>

        <div className="flex  items-center gap-9 mt-10 ml-10">
          <p className='max-w-3xl text-[2.5rem] text-[#FFFFFF] leading-[1.2]'>
            We aim to be a leading creative team known for fresh ideas, strong collaboration, and meaningful impact. With our combined skills and passion, we strive to push boundaries, grow together, and shape a future where creativity has no limits. 
          </p>
        </div>
      </div>
      
      <div className="flex flex-col items-center mt-20">
        <button className="flex items-center"> 
          <img src={Rocket} alt="Home" className="h-[95px] w-[95px] ml-3" /> 
        </button>
        <p className="text-[2.5rem] text-[#FFFFFF] leading-[1.2] mb-10">
          Back on top
        </p>
      </div>


      <Footer /> 
    </div>
  );
}

export default HomePageContent;

