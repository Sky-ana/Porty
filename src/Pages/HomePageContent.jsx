import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

import Header from '../Components/Header.jsx';
import Footer from '../Components/Footer.jsx';
import Carousel from '../Components/Carousel.jsx';

import Sparkle from '../assets/8.png';
import Saturn from '../assets/9.png';
import Sun from '../assets/5.png';
import Rocket from '../assets/Rocket.png';

const HomePageContent = () => {
  return (
    <div className="relative">
      <div className="absolute pointer-events-none z-[-1] w-full h-full overflow-hidden">
        <img
          src="/assets/Earth.svg"
          alt="Earth"
          className="absolute left-20 top-20 w-[600px] h-auto object-contain md:left-60 md:w-[800px] lg:left-80 lg:w-[900px] lg:top-1 xl:left-130 xl:w-[1200px] xl:top-[-4%] 2xl:left-150 2xl:w-[1800px] 2xl:top-[-5%]"
        />
      </div>

      <div className="absolute pointer-events-none z-[-1] w-full h-full overflow-hidden">
        <img
          src="/assets/Moon.svg"
          alt="Moon"
          className="absolute left-[-25%] top-480 w-[600px] h-auto object-contain md:w-[800px] lg:w-[900px] lg:top-520 xl:w-[1200px] xl:top-590 2xl:w-[1800px] 2xl:top-700 2xl:left-180"
        />
      </div>

      <div>

        

        <Header />

        <div>
            {
              <div className='leading-[0.7] text-center mt-50'>
                
                <div className='flex flex-col justify-center select-none'>
                  <p className='text-[1.8rem] text-[#FFFFFF] mt-[1%] text-strokesmall sm:text-[2.2rem] md:text-[2.5rem] xl:mt-[-0.8%] 2xl:mt-[0%] 2xl:text-[3rem]'>
                  <Typewriter
                    words={['Portfolio']}
                    loop={1}
                    typeSpeed={50}
                    deleteSpeed={0}
                    delaySpeed={1000}
                  />
                  </p>
                  
                  <span className='text-[clamp(6rem,20vw,25rem)] text-[#FFFFFF] text-strokesmall '> <span className='text-[#F49959]'>3</span>MINDS</span>

                  <p className='text-[1.8rem] text-[#FFFFFF] mt-[1%] text-strokesmall mb-50 sm:text-[2.2rem] md:text-[2.5rem] xl:mt-[-0.8%] 2xl:mt-[0%] 2xl:text-[3rem]'>
                    <Typewriter
                      words={['Three Minds, One Vision']}
                      loop={1}
                      typeSpeed={50}
                      deleteSpeed={0}
                      delaySpeed={1000}
                    />
                  </p>
                </div>

                <div className='2xl:mt-[8%] select-none'>
                  <div className="flex justify-center items-center">
                    <img src={Sparkle} alt="Home" className="h-[30px] w-[30px] sm:h-[70px] sm:w-[70px] md:h-[75px] md:w-[75px] lg:h-[85px] lg:w-[85px]  xl:h-[90px] xl:w-[90px]  2xl:h-[95px] 2xl:w-[95px] ml-3" />


                    <span className="text-[clamp(3rem,5vw,5rem)] text-[#FFFFFF] text-strokesmall"> INTRODUCTION </span>

                    <img src={Sparkle} alt="Home" className="h-[30px] w-[30px] sm:h-[70px] sm:w-[70px] md:h-[75px] md:w-[75px] lg:h-[85px] lg:w-[85px]  xl:h-[90px] xl:w-[90px]  2xl:h-[95px]" />

                  </div>

                  <p className='max-w-[350px] mx-auto text-[1.2rem] text-[#FFFFFF] leading-[1.2] mt-15 sm:max-w-[500px] sm:text-[1.5rem] md:max-w-[640px] lg:max-w-[720px] lg:text-[1.8rem] xl:max-w-[890px] xl:text-[2rem] 2xl:max-w-[1200px] 2xl:text-[3.1rem] '> Welcome to 3MINDS, where creativity, collaboration, and innovation come together. This portfolio represents the synergy of three unique minds, each bringing fresh ideas and strategic thinking to every project. From branding and digital art to web solutions, we blend passion, energy, and reliability to create impactful designs. Our logo reflects this philosophy, with deep red symbolizing determination, warm orange for creativity, and cool blue for stability.
              
                  </p>

                  <div className="flex flex-row gap-2 justify-center items-center mt-8 mb-50">
                    <div className="w-5 h-5 bg-[#FFFFFF] rounded-full sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 xl:w-9 xl:h-9 2xl:w-10 2xl:h-10 "></div>
                    <div className="w-5 h-5 bg-[#5878E0] rounded-full sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 xl:w-9 xl:h-9 2xl:w-10 2xl:h-10"></div>
                    <div className="w-5 h-5 bg-[#F1E167] rounded-full sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 xl:w-9 xl:h-9 2xl:w-10 2xl:h-10"></div>
                    <div className="w-5 h-5 bg-[#FF4A4A] rounded-full sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 xl:w-9 xl:h-9 2xl:w-10 2xl:h-10"></div>
                  </div>
                </div>
              </div>
            }
        </div>
        
        <Carousel />

        <div className='select-none'> 
          {/* Mission Section */}
          <div className="flex justify-end items-center gap-2 mt-25 mr-1 sm:mt-40 sm:mr-5 md:mt-48 md:mr-6 lg:mt-40 lg:mr-8 xl:mt-50 xl:mr-10 2xl:mt-60 2xl:mr-[5%]">

            <img src={Saturn} alt="Home" className="h-[50px] w-[50px] ml-3 sm:h-[70px] sm:w-[70px] md:h-[80px] md:w-[80px] lg:h-[85px] lg:w-[85px] xl:h-[90px] xl:w-[90px] 2xl:h-[95px] 2xl:w-[95px]" />

            <p className='mx-2 text-[3rem] text-[#F49958] text-strokesmall sm:text-[7vw] md:text-[8vw] lg:text-[8vw] xl:text-[8vw] 2xl:text-[8vw] '> 
              MISSION 
            </p>
          </div>
          
          <div className="flex justify-end items-center gap-9 mt-10 mr-4 sm:mt-5 sm:mr-5 md:mt-6 md:mr-6 lg:mt-8 lg:mr-8 xl:mt-10 xl:mr-10 2xl:mt-12 2xl:mr-12">
            <p className='max-w-[250px] text-[1.2rem] text-[#FFFFFF] leading-[1.2] text-right sm:text-[1.5rem] sm:max-w-[500px] md:text-[1.5rem] lg:text-[1.8rem] lg:max-w-[700px] xl:text-[2rem] 2xl:text-[2.5rem] 2xl:max-w-[800px] 2xl:mr-[4%]'> 
              <Typewriter
                words={['At 3Minds, we bring together three creative minds to turn ideas into reality. We believe in teamwork, innovation, and quality, ensuring that every project we create reflects our shared vision. Our goal is to inspire, collaborate, and deliver outstanding work that makes a difference.']}
                loop={1}
                typeSpeed={50}
                deleteSpeed={0}
                delaySpeed={1000}
              />
            </p>
          </div>

          {/* Vision Section */}
          <div className="flex items-center gap-3 mt-30 ml-1 sm:mt-40 sm:ml-5 md:mt-48 md:ml-6 lg:mt-56 lg:ml-8 xl:mt-64 xl:ml-10 2xl:mt-80 2xl:ml-[5%]">
            <p className='mx-2 text-[3rem] text-[#F49958] text-strokesmall sm:text-[7vw] md:text-[8vw] lg:text-[8vw] xl:text-[8vw] 2xl:text-[8vw]'> 
              VISION 
            </p>
            <img src={Sun} alt="Home" className="h-[50px] w-[50px] ml-3 sm:h-[70px] sm:w-[70px] md:h-[80px] md:w-[80px] lg:h-[85px] lg:w-[85px] xl:h-[90px] xl:w-[90px] 2xl:h-[95px] 2xl:w-[95px]" />
          </div>

          <div className="flex items-center gap-9 mt-10 ml-5 sm:mt-5 sm:ml-5 md:mt-6 md:ml-6 lg:mt-8 lg:ml-8 xl:mt-10 xl:ml-10 2xl:mt-12 2xl:ml-12">

            <p className='max-w-[250px] text-[1.2rem] text-[#FFFFFF] leading-[1.2] sm:text-[1.5rem] sm:max-w-[500px] md:text-[1.5rem] lg:text-[1.8rem] lg:max-w-[700px] xl:text-[2rem] 2xl:text-[2.5rem] 2xl:max-w-[800px] 2xl:ml-[4%]'>
              <Typewriter
                words={['We aim to be a leading creative team known for fresh ideas, strong collaboration, and meaningful impact. With our combined skills and passion, we strive to push boundaries, grow together, and shape a future where creativity has no limits. ']}
                loop={1}
                typeSpeed={50}
                deleteSpeed={0}
                delaySpeed={1000}
              />
            </p>
          </div>
        </div>

        
        <div className="flex flex-col items-center mt-[30%] 2xl:mt-[10%] select-none ">
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

    </div>
  );
}

export default HomePageContent;

