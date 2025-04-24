import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { useState, useEffect } from 'react';

import Header from '../Components/Header.jsx';
import Footer from '../Components/Footer.jsx';
import Rocket from '../assets/Rocket.png';
import PersonIcon from '../assets/Person.svg';
import { Link } from 'react-router-dom';


import CAD1 from '../assets/CAD1.svg';
import CAD2 from '../assets/CAD2.svg';
import CAD3 from '../assets/CAD3.svg';

import TRU1 from '../assets/TRU1.svg';
import TRU2 from '../assets/TRU2.svg';
import TRU3 from '../assets/TRU3.svg';

import DDL1 from '../assets/DDL1.svg';
import DDL2 from '../assets/DDL2.svg';
import DDL3 from '../assets/DDL3.svg';



const ProjectsPage = () => {

  const cadImages = [CAD1, CAD2, CAD3];
  const truImages = [TRU1, TRU2, TRU3];
  const ddlImages = [DDL1, DDL2, DDL3];
  
  const [cadIndex, setCadIndex] = useState(0);
  const [truIndex, setTruIndex] = useState(0);
  const [ddlIndex, setDdlIndex] = useState(0);
  
  const [cadFade, setCadFade] = useState(true);
  const [truFade, setTruFade] = useState(true);
  const [ddlFade, setDdlFade] = useState(true);
  
  useEffect(() => {
    const cadTimer = setInterval(() => {
      setCadFade(false);
      setTimeout(() => {
        setCadIndex(prev => (prev + 1) % cadImages.length);
        setCadFade(true);
      }, 300);
    }, 8000);
  
    const truTimer = setInterval(() => {
      setTruFade(false);
      setTimeout(() => {
        setTruIndex(prev => (prev + 1) % truImages.length);
        setTruFade(true);
      }, 300);
    }, 8000);
  
    const ddlTimer = setInterval(() => {
      setDdlFade(false);
      setTimeout(() => {
        setDdlIndex(prev => (prev + 1) % ddlImages.length);
        setDdlFade(true);
      }, 300);
    }, 8000);
  
    return () => {
      clearInterval(cadTimer);
      clearInterval(truTimer);
      clearInterval(ddlTimer);
    };
  }, []);
  
  return (
    <div div className="homepage-bg min-h-screen select-none">
      <Header />

      <div>
        <p className='text-[clamp(4rem,18vw,25rem)] text-[#FFFFFF] text-strokesmall ml-[3%]'> PROJECTS </p>
        <p className='max-w-[300px] mx-auto text-[1.2rem] text-[#fff] text-left ml-[4%] mt-[3%] md:text-[1.8rem] md:mt-[-2%] md:max-w-[600px] lg:mt-[-5%] lg:text-[2rem] lg:max-w-[700px] xl:text-[2.2rem] xl:max-w-[750px] 2xl:text-[2.8rem] 2xl:max-w-[2000px]'> 
          <Typewriter
            words={['The 3Minds Team has worked on several projects together. Below are some of the school activities and projects they’ve completed as a group.']}
            loop={1}
            typeSpeed={50}
            deleteSpeed={0}
            delaySpeed={1000}
          />
        </p>

        <div className='flex gap-5 justify-center mt-[10%] mb-[-10%] md:mb-[3%] lg:mb-[2%] 2xl:mb-[4%]'>
          <Link to="/balatayoprojects" >   
            <button className='custom-pointer h-5 w-5 bg-[#5878E0] rounded-sm border-3 md:h-10 md:w-10 2xl:h-15 2xl:w-15 transition delay-10 duration-200 ease-in-out hover:-translate-y-1 hover:scale-120 hover:opacity-75 cursor-pointer'> 
              <img src={PersonIcon} alt="Logo" className="h-3 pl-[1px] mt-[0.6%] md:pl-[3px] md:h-7 2xl:h-11" />
            </button>
          </Link>
  
          <Link to="/abreuprojects" >  
            <button className='custom-pointer h-5 w-5 bg-[#F1E167] rounded-sm border-3  md:h-10 md:w-10 2xl:h-15 2xl:w-15 transition delay-10 duration-200 ease-in-out hover:-translate-y-1 hover:scale-120 hover:opacity-75 cursor-pointer'> 
              <img src={PersonIcon} alt="Logo" className="h-3 pl-[1px] md:pl-[3px] mt-[0.6%] md:h-7 2xl:h-11" />
            </button>
          </Link>
  
          <Link to="/gonzalesprojects" >  
            <button className='custom-pointer h-5 w-5 bg-[#FF4A4A] rounded-sm border-3  md:h-10 md:w-10 2xl:h-15 2xl:w-15 transition delay-10 duration-200 ease-in-out hover:-translate-y-1 hover:scale-120 hover:opacity-75 cursor-pointer'>
              <img src={PersonIcon} alt="Logo" className="h-3 pl-[1px] mt-[0.6%] md:pl-[3px] md:h-7 2xl:h-11" />
            </button>
          </Link>
        </div>



        <div className="flex flex-col items-center">
          <div className="relative mx-auto w-[60%] mt-20 mb-5 2xl:mt-[8%] group">
            <img
              src={cadImages[cadIndex]}
              alt="CAD"
              className={`h-auto w-full bg-[#fff]/15 backdrop-blur-md rounded-lg border-3 border-[#100E30]/40 shadow-xl transition-opacity duration-500 ease-in-out ${cadFade ? 'opacity-100' : 'opacity-0'}`}
            />

            <div className="absolute inset-0 flex items-center justify-center bg-black/40 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-[2rem] text-center font-medium pl-20 pr-20">Ctrl + Alt + Delight" is one of the group projects by 3Minds. it's a kiosk-style web system that mainly sells cookies, 3Minds used tools like HTML, CSS, and PHP to build Ctrl Alt Delight.</p>
            </div>
          </div>

  
          <div className="relative mx-auto w-[60%] mt-20 mb-5 2xl:mt-[8%] group">
            <img
              src={truImages[cadIndex]}
              alt="TRU"
              className={`h-auto w-full bg-[#fff]/15 backdrop-blur-md rounded-lg border-3 border-[#100E30]/40 shadow-xl transition-opacity duration-500 ease-in-out ${truFade ? 'opacity-100' : 'opacity-0'}`}
            />

            <div className="absolute inset-0 flex items-center justify-center bg-black/40 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-[2rem] text-center font-medium pl-20 pr-20">Tools R' Us" is a point-of-sale (POS) system that sells a variety of tools and includes a receipt printing feature. 3Minds used Java to develop Tools R' Us.</p>
            </div>
          </div>

          <div className="relative mx-auto w-[60%] mt-20 mb-5 2xl:mt-[8%] group">
            <img
              src={ddlImages[cadIndex]}
              alt="DDL"
              className={`h-auto w-full bg-[#fff]/15 backdrop-blur-md rounded-lg border-3 border-[#100E30]/40 shadow-xl transition-opacity duration-500 ease-in-out ${ddlFade ? 'opacity-100' : 'opacity-0'}`}
            />

            <div className="absolute inset-0 flex items-center justify-center bg-black/40 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-[2rem] text-center font-medium pl-20 pr-20"> Dreamy D' Lite is the first system developed by 3Minds. It uses Python as its main programming language and served as their starting point in building complete software systems. </p>
            </div>
          </div>

        </div>



      </div>

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
  );
};

export default ProjectsPage;
