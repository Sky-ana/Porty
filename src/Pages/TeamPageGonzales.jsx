import React from 'react';
import Header from '../Components/Header.jsx';
import Footer from '../Components/Footer.jsx';
import { Link } from 'react-router-dom';
import ProjectsSlider from '../Components/ProjectsSlider.jsx';

import Rocket from '../assets/Rocket.png';
import CAD1 from '../assets/CAD1.svg';
import TRU1 from '../assets/TRU1.svg';
import DDL1 from '../assets/DDL1.svg';

import TeamPortfolioGonzales from '../Components/TeamPortfolioGonzales.jsx';
import WhatIDoGonzales from '../Components/WhatIDoGonzales.jsx';


const TeamPageGonzales = () => {
  const images = [CAD1, TRU1, DDL1];
  
  return (
    <div className="relative">
      <div className="absolute pointer-events-none z-[-1] w-full h-full overflow-hidden">
        <img
          src="/assets/Uranus.svg"
          alt="Neptune"
          className="absolute top-420 w-[600px] h-auto object-contain left-[-20%] md:w-[800px] md:top-480 md:left-[-20%] lg:w-[1000px] lg:top-480 lg:left-[-20%] xl:w-[1500px] xl:left-[-20%] xl:top-520 2xl:w-[2000px] 2xl:top-650 2xl:left-[-20%]"
        />
      </div>

      <div className="homepage min-h-screen relative">
        <Header />

        <div className='flex gap-2 ml-[4%] mt-[6%] mb-[2%]'>
          <Link to="/balatayo" >   
            <button className='custom-pointer h-6 w-6 bg-[#5878E0] rounded-full border-3 transition delay-150 duration-200 ease-in-out hover:-translate-y-1 hover:scale-120 hover:opacity-75 cursor-pointer'>   </button>
          </Link>

          <Link to="/abreu" >  
            <button className='custom-pointer h-6 w-6 bg-[#F1E167] rounded-full border-3 transition delay-150 duration-200 ease-in-out hover:-translate-y-1 hover:scale-120 hover:opacity-75 cursor-pointer'>  </button>
          </Link>

          <Link to="/gonzales" >  
            <button className='custom-pointer h-6 w-6 bg-[#FF4A4A] rounded-full border-3 transition delay-150 duration-200 ease-in-out hover:-translate-y-1 hover:scale-120 hover:opacity-75 cursor-pointer'> </button>
          </Link>
        </div>
    
        <TeamPortfolioGonzales />

        <WhatIDoGonzales />

        <ProjectsSlider images={images} />

        <div className="flex flex-col items-center mt-[10%] 2xl:mt-[10%] select-none">
          <button className="flex items-center" 
          onClick={() => window.scrollTo({ top: 0})}
          
          > 
            <img 
              src={Rocket} 
              alt="Home" 
              className="custom-pointer h-[50px] w-[50px] ml-3 sm:h-[50px] sm:w-[50px] md:h-[60px] md:w-[60px] lg:h-[70px] lg:w-[70px] xl:h-[70px] xl:w-[70px] 2xl:h-[80px] 2xl:w-[80px] animate-bounce cursor-pointer hover:scale-115 hover:opacity-75" 
            /> 
          </button>
          <p className="text-[1.2rem] text-[#FFFFFF] leading-[1.2] mb-10 sm:text-[1.5rem] md:text-[1.5rem] lg:text-[2rem] xl:text-[2.1rem] 2xl:text-[2.5rem]">
            Back on top
          </p>
        </div>

        <Footer />

      </div>

    </div>
  );
};

export default TeamPageGonzales;
