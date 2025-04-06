import React from 'react';
import Header from '../Components/Header.jsx';
import Footer from '../Components/Footer.jsx';
import { Link } from 'react-router-dom';
import TeamPortfolioBalatayo from '../Components/TeamPortfolioBalatayo.jsx';
import ProjectsSlider from '../Components/ProjectsSlider.jsx';
import Rocket from '../assets/Rocket.png';
import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';
import WhatIDoBalatayo from '../Components/WhatIDoBalatayo.jsx';

const TeamPageBalatayo = () => {
  const images = [image1, image2, image3];

  return (
    <div className="homepage min-h-screen relative">
      <Header />

      <div className='flex gap-2 ml-[4%] mt-[6%] mb-[2%]'>
        <Link to="/balatayo" >   
          <button className='h-6 w-6 bg-[#5878E0] rounded-full border-3'>   </button>
        </Link>

        <Link to="/abreu" >  
          <button className='h-6 w-6 bg-[#F1E167] rounded-full border-3'>  </button>
        </Link>

        <Link to="/gonzales" >  
          <button className='h-6 w-6 bg-[#FF4A4A] rounded-full border-3'> </button>
        </Link>
      </div>
        
      <TeamPortfolioBalatayo />

      <ProjectsSlider images={images} />

      <div className="flex flex-col items-center mt-[10%] 2xl:mt-[10%]">
        <button className="flex items-center"> 
          <img 
            src={Rocket} 
            alt="Home" 
            className="h-[50px] w-[50px] ml-3 sm:h-[50px] sm:w-[50px] md:h-[60px] md:w-[60px] lg:h-[70px] lg:w-[70px] xl:h-[70px] xl:w-[70px] 2xl:h-[80px] 2xl:w-[80px]" 
          /> 
        </button>
        <p className="text-[1.2rem] text-[#FFFFFF] leading-[1.2] mb-10 sm:text-[1.5rem] md:text-[1.5rem] lg:text-[2rem] xl:text-[2.1rem] 2xl:text-[2.5rem]">
          Back on top
        </p>
      </div>

      <Footer />
    </div>
  );
};

export default TeamPageBalatayo;

{
/* 
  <div className='flex gap-2 ml-[6%] mt-[6%]'>  
    <div className='h-6 w-6 bg-[#5878E0] rounded-full border-3'>   </div>
    <Link className='h-6 w-6 bg-[#F1E167] rounded-full border-3'>  </Link>
    <Link className='h-6 w-6 bg-[#FF4A4A] rounded-full border-3'> </Link>
  </div>

  <Link to="/Gonzales" >  
    <div className='h-6 w-6 bg-[#5878E0] rounded-full border-3'> helo </div>
  </Link>

*/
}
