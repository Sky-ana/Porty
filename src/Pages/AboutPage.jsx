import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

import Header from '../Components/Header.jsx';
import Footer from '../Components/Footer.jsx';
import Team from '../Components/Team.jsx';
import Rarrow from '../assets/Rarrow.png';
import Larrow from '../assets/Larrow.png';
import Rocket from '../assets/Rocket.png';

import Cover from '../assets/CoverImage.jpeg';

const AboutPage = () => {
  return (
    <div className='select-none'>
      <Header />

      <div className=''> 
        <p className='text-[clamp(6rem,20vw,25rem)] text-[#FFFFFF] text-strokesmall text-center'> ABOUT <span className='text-[#F49959]'> US </span>  </p>
        
        <div className='flex flex-row'>

          <div className='ml-[5%]'> 
            <p className='max-w-7xl mx-auto text-[1.5rem] text-[#FFFFFF]'>
              <span className='lg:text-[2rem] 2xl:text-[3rem]'>TEAM </span><br/>
              <span className='text-[#5878E0] lg:text-[2rem] 2xl:text-[2.5rem]'>•Balatayo </span> <br/>
              <span className='text-[#F1E167] lg:text-[2rem] 2xl:text-[2.5rem]'>•Abreu </span><br/>
              <span className='text-[#FF4A4A] lg:text-[2rem] 2xl:text-[2.5rem]'>•Gonzales </span>
            </p>
          </div>

          <div className="w-full max-w-[1000px] mx-auto text-left ml-[15%]">
            <p className="w-full text-[1.2rem] text-[#FFFFFF] leading-[1.2] min-h-[120px] lg:text-[2.5rem]">
              <Typewriter
                words={[
                  '3MINDS is a project by BSIT students from Cavite State University - Imus Campus. It combines our individual skills into one portfolio to showcase our work and highlight the value of teamwork, creativity, and shared vision'
                ]}
                loop={1}
                typeSpeed={50}
                deleteSpeed={0}
                delaySpeed={1000}
              />
            </p>
          </div>

        </div>

        <img
          img src={Cover} alt="CoverImage"
          className="ml-[6%] h-auto w-[90%] bg-[#fff]/15 backdrop-blur-md rounded-lg border-3 border-[#8F88EF]/40 shadow-xl mt-20 mb-30 2xl:mt-[8%]"
        />



         <div className="flex justify-center items-center gap-3">
            <img src={Larrow} alt="Home" className="h-[30px] w-[30px] lg:h-[50px] lg:w-[50px] 2xl:h-[90px] 2xl:w-[90px]" />
            <span className='text-[clamp(2rem,13vw,25rem)] text-[#FFFFFF] text-strokesmall'> MEET THE TEAM </span>
            <img src={Rarrow} alt="Home" className="h-[30px] w-[30px] lg:h-[50px] lg:w-[50px] 2xl:h-[90px] 2xl:w-[90px]" />
          </div>

          <div className="flex flex-row gap-5 justify-center items-center mt-5">
            <div className="w-12 h-12 bg-[#5878E0] rounded-full"></div>
            <div className="w-12 h-12 bg-[#F1E167] rounded-full"></div>
            <div className="w-12 h-12 bg-[#FF4A4A] rounded-full"></div>
          </div>

          <p className='max-w-[370px] mx-auto text-[1.2rem] text-[#FFFFFF] leading-[1.2] mt-20 text-center md:max-w-[580px] md:text-[1.8rem] lg:max-w-[700px] lg:text-[2rem] xl:max-w-[900px] 2xl:text-[2.5rem] 2xl:max-w-[1200px] 2xl:mb-[5%]'> 
            Behind 3MINDS is a dedicated team, driven by a shared passion for design, development, and problem-solving. Each member brings unique skills and ideas, working collaboratively to turn creative visions into reality. Our expertise spans branding, digital art, and web solutions, ensuring a balance of innovation and technical excellence.
          </p>
      </div>

      <Team />


      <div className="flex flex-col items-center mt-[30%] 2xl:mt-[10%]">
        <button className="flex items-center" 
        onClick={() => window.scrollTo({ top: 0})}
        
        > 
          <img 
            src={Rocket} 
            alt="Home" 
            className="h-[50px] w-[50px] ml-3 sm:h-[50px] sm:w-[50px] md:h-[60px] md:w-[60px] lg:h-[70px] lg:w-[70px] xl:h-[70px] xl:w-[70px] 2xl:h-[80px] 2xl:w-[80px] animate-bounce cursor-pointer custom-pointer hover:scale-115 hover:opacity-75" 
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

export default AboutPage;