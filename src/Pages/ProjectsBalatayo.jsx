import React from 'react';
import Carousel from '../Components/Carousel.jsx'

import Header from '../Components/Header.jsx';
import Footer from '../Components/Footer.jsx';
import Rocket from '../assets/Rocket.png';
import { Link } from 'react-router-dom';
import PersonIcon from '../assets/Person.svg';


const ProjectsBalatayo = () => {
  return (
    <div div className="homepage min-h-screen">
      <Header />
      <p className='text-[22rem] text-[#FFFFFF] text-stroke ml-[3%] '> PROJECTS </p>
      <div className='flex gap-2 ml-[3.5%] mt-[-6%] mb-[5%]'>
        <Link to="/balatayoprojects" >   
          <button className='h-10 w-10 bg-[#5878E0] rounded-sm border-3'>   
            <img src={PersonIcon} alt="Logo" className="h-7 pl-[3px]  ml-[2%] mt-[0.6%] " />
          </button>
        </Link>

        <Link to="/abreuprojects" >  
          <button className='h-10 w-10 bg-[#F1E167] rounded-sm border-3'>  
            <img src={PersonIcon} alt="Logo" className="h-7 pl-[3px]  ml-[2%] mt-[0.6%] " />
          </button>
        </Link>

        <Link to="/gonzalesprojects" >  
          <button className='h-10 w-10 bg-[#FF4A4A] rounded-sm border-3'> 
            <img src={PersonIcon} alt="Logo" className="h-7 pl-[3px]  ml-[2%] mt-[0.6%] " />
          </button>
        </Link>
      </div>

  

      <p className='max-w-[1500px] text-[2.5rem] text-[#FFFFFF] leading-[1.2] ml-[3%] mb-[8%]'>
        Glooblesnarp the Wobbletoad waltzed through a gelatinous forest of neon-colored pineapples, humming the ancient lullaby of forgotten cheese wheels.
      </p>

      <Carousel />

      <p className='text-[20rem] text-[#FFFFFF] text-stroke ml-[3%] mt-[3%] mb-[5%]'> <span className='text-[#5878E0]'> SOLO </span> PROJECTS </p>

      <div className='flex gap-10 justify-center '>
        <div className="ml-[3%] h-[900px] w-[900px] bg-[#fff]/15 backdrop-blur-md rounded-lg border-3 border-[#8F88EF]/40 shadow-xl">
        </div>

        <div className=" h-[900px] w-[900px] bg-[#fff]/15 backdrop-blur-md rounded-lg border-3 border-[#8F88EF]/40 shadow-xl"></div>
      </div>

      <div className='flex gap-10 justify-center mt-[2%]'>
        <div className="ml-[3%] h-[900px] w-[900px] bg-[#fff]/15 backdrop-blur-md rounded-lg border-3 border-[#8F88EF]/40 shadow-xl">
        </div>

        <div className=" h-[900px] w-[900px] bg-[#fff]/15 backdrop-blur-md rounded-lg border-3 border-[#8F88EF]/40 shadow-xl"></div>
      </div>
      
      <div className='flex gap-10 justify-center mt-[2%]'>
        <div className="ml-[3%] h-[900px] w-[1850px] bg-[#fff]/15 backdrop-blur-md rounded-lg border-3 border-[#8F88EF]/40 shadow-xl">
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
};

export default ProjectsBalatayo;
