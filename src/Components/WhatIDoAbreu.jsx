import React from 'react';
import Develop from '../assets/Develop.png';
import Create from '../assets/Create.png';
import Edit from '../assets/Edit.png';
import Camera from '../assets/Camera.png';

{ /* import WhatIDoAbreu from '../Components/WhatIDOAbreu.jsx'; */}

const WhatIDoAbreu = () => {
  return (
    <div className='select-none'>
      <p className="text-[clamp(5rem,22vw,25rem)] text-[#FFFFFF] leading-[0.7] ml-[4%] 2xl:mb-[4%]">
        What <span className="text-[#F1E167]">I DO</span>
      </p>

      <div className='gap-1 m-5 hidden md:flex md:justify-center md:gap-2 lg:gap-3 2xl:lg:gap-6 '>
        <div  className="h-[490px] w-[25%] bg-[#fff]/15 backdrop-blur-md rounded-lg border-2 border-[#8F88EF]/40 shadow-xl mt-40 mb-30 xl:w-[20%] 2xl:h-[650px] hover:scale-102">
          <img src={Develop} alt="Home" className="flex h-12 w-10 mt-1 md:h-15 md:w-[35%] lg:h-15 lg:w-[23%] 2xl:h-25 2xl:w-[20%]"/> 
          <p className='max-w-[200px] text-[1.2rem] text-[#FFFFFF] leading-[1.2] mt-1 text-left pl-2 md:text-[1.8rem] md:max-w-[300px] lg:text-[2rem] lg:max-w-[350px] 2xl:text-[2.8rem] 2xl:max-w-[350px] 2xl:pl-10 '> 
            I design and develop websites and user interfaces that merge aesthetics with usability, delivering exceptional digital experiences.
          </p>
        </div>

        <div  className="h-[490px] w-[25%] bg-[#fff]/15 backdrop-blur-md rounded-lg border-2 border-[#8F88EF]/40 shadow-xl mt-40 mb-30 xl:w-[20%] 2xl:h-[650px] hover:scale-102">
          <img src={Create} alt="Home" className="flex h-12 w-10 mt-1 md:h-15 md:w-[35%] lg:h-15 lg:w-[23%] 2xl:h-25 2xl:w-[20%]"/> 
          <p className='max-w-[200px] text-[1.2rem] text-[#FFFFFF] leading-[1.2] mt-1 text-left pl-2 md:text-[1.8rem] md:max-w-[300px] lg:text-[2rem] lg:max-w-[350px] 2xl:text-[2.8rem] 2xl:max-w-[350px] 2xl:pl-10'> 
            I create digital and traditional art and illustrations, including custom logo designs.
          </p>
        </div>
        
        <div  className="h-[490px] w-[25%] bg-[#fff]/15 backdrop-blur-md rounded-lg border-2 border-[#8F88EF]/40 shadow-xl mt-40 mb-30 xl:w-[20%] 2xl:h-[650px] hover:scale-102">
          <img src={Edit} alt="Home" className="flex h-12 w-10 mt-1 md:h-15 md:w-[35%] lg:h-15 lg:w-[23%] 2xl:h-25 2xl:w-[20%]"/>
          <p className='max-w-[200px] text-[1.2rem] text-[#FFFFFF] leading-[1.2] mt-1 text-left pl-2 md:text-[1.8rem] md:max-w-[300px] lg:text-[2rem] lg:max-w-[350px] 2xl:text-[2.8rem] 2xl:max-w-[350px] 2xl:pl-10'> 
            I offer professional photo and video editing services, transforming raw content into polished visuals.
          </p>
        </div>

        <div  className="h-[490px] w-[25%] bg-[#fff]/15 backdrop-blur-md rounded-lg border-2 border-[#8F88EF]/40 shadow-xl mt-40 mb-30 xl:w-[20%] 2xl:h-[650px] hover:scale-102">
          <img src={Camera} alt="Home" className="flex h-12 w-10 mt-1 pl-2 md:h-15 md:w-[35%] lg:h-15 lg:w-[23%] 2xl:h-25 2xl:w-[20%]"/>
          <p className='max-w-[200px] text-[1.2rem] text-[#FFFFFF] leading-[1.2] mt-1 text-left pl-2 md:text-[1.8rem] md:max-w-[300px] lg:text-[2rem] lg:max-w-[350px] 2xl:text-[2.8rem] 2xl:max-w-[350px] 2xl:pl-10'> 
          I engage in photography as a creative hobby, capturing unique moments and exploring visual storytelling.
          </p>
        </div>
      </div>

      {/* What I Do On Phones*/}
      <div className='md:hidden'>
        <div className='flex  gap-1 m-1 md:justify-center lg:gap-3 2xl:lg:gap-6'>
          <div  className="h-70 w-[50%] bg-[#fff]/15 backdrop-blur-md rounded-md border-2 border-[#8F88EF]/40 shadow-xl mt-10 md:h-68 md:w-[46%] lg:h-70 lg:w-[42%] xl:h-75 xl:w-[30%] 2xl:h-140 2xl:w-[25%]">
            <img src={Develop} alt="Home" className="flex h-12 w-10 mt-1 md:h-15 md:w-[35%] lg:h-15 lg:w-[23%] 2xl:h-25 2xl:w-[20%]" /> 
            <p className='max-w-[200px] text-[1.2rem] text-[#FFFFFF] leading-[1.2] mt-1 text-left pl-2 md:text-[1.8rem] md:max-w-[300px] lg:text-[2rem] lg:max-w-[350px] 2xl:text-[2.8rem] 2xl:max-w-[350px] 2xl:pl-10'> 
              I design and develop websites and user interfaces that merge aesthetics with usability, delivering exceptional digital experiences.
            </p>
          </div>

          <div  className="h-70 w-[50%] bg-[#fff]/15 backdrop-blur-md rounded-lg border-2 border-[#8F88EF]/40 shadow-xl mt-10 pl-2 md:h-68 md:w-[46%] lg:h-70 lg:w-[42%] xl:h-75 xl:w-[30%] 2xl:h-140 2xl:w-[25%]">
            <img src={Create} alt="Home" className="flex h-12 w-10 mt-1 md:h-15 md:w-[35%] lg:h-15 lg:w-[23%] 2xl:h-25 2xl:w-[20%]" />
            <p className='max-w-[100px] text-[1.2rem] text-[#FFFFFF] leading-[1.2] text-left md:text-[1.8rem] md:max-w-[300px] lg:text-[2rem] lg:max-w-[350px] 2xl:text-[2.8rem] 2xl:max-w-[350px] 2xl:pl-10'> 
              I create digital and traditional art and illustrations, including custom logo designs.  
            </p>
          </div>
        </div>

        <div className='flex gap-1 mt-1 m-1 md:flex md:justify-center lg:gap-3 lg:mt-3 2xl:mt-6 2xl:gap-6'>
          <div  className=" h-70 w-[50%] bg-[#fff]/15 backdrop-blur-md rounded-lg border-2 border-[#8F88EF]/40 shadow-xl mb-30 xl:w-[20%] 2xl:h-[650px] hover:scale-102 md:h-68 md:w-[46%] lg:h-75 lg:w-[42%] xl:h-75 xl:w-[30%] 2xl:h-140 2xl:w-[25%]">
            <img src={Edit} alt="Home" className="flex h-12 w-10 mt-1 md:h-15 md:w-[35%] lg:h-15 lg:w-[23%] 2xl:h-25 2xl:w-[20%]" /> 
            <p className='max-w-[750px] text-[1.2rem] text-[#FFFFFF] leading-[1.2] text-left pl-2 md:text-[1.8rem] md:max-w-[300px] lg:text-[2rem] lg:max-w-[350px] 2xl:text-[2.8rem] 2xl:max-w-[350px] 2xl:pl-10'> 
             I offer professional photo and video editing services, transforming raw content into polished visuals.
            </p>
          </div>

          <div  className="h-70 w-[50%] bg-[#fff]/15 backdrop-blur-md rounded-lg border-2 border-[#8F88EF]/40 shadow-xl mb-30 xl:w-[20%] 2xl:h-[650px] hover:scale-102 md:h-68 md:w-[46%] lg:h-75 lg:w-[42%] xl:h-75 xl:w-[30%] 2xl:h-140 2xl:w-[25%]">
            <img src={Camera} alt="Home" className="flex h-12 w-10 mt-1 md:h-15 md:w-[35%] lg:h-15 lg:w-[23%] 2xl:h-25 2xl:w-[20%]" />
            <p className='max-w-[390px] text-[1.2rem] text-[#FFFFFF] leading-[1.2] text-left pl-2 md:text-[1.8rem] md:max-w-[300px] lg:text-[2rem] lg:max-w-[350px] 2xl:text-[2.8rem] 2xl:max-w-[350px] 2xl:pl-10'> 
              I engage in photography as a creative hobby, capturing unique moments and exploring visual storytelling.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIDoAbreu;