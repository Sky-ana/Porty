import React from 'react';

import Experiment from '../assets/Experiment.png';
import Quality from '../assets/Quality.png';
import Handles from '../assets/Handles.png';


{ /* import WhatIDoBalatayo from '../Components/WhatIDOAbreu.jsx'; */}

const WhatIDoBalatayo = () => {
  return (
    <div>
      <p className="text-[clamp(5rem,22vw,25rem)] text-[#FFFFFF] leading-[0.7] ml-[4%] 2xl:mb-[4%]">
        What <span className="text-[#5878E0]">I DO</span>
      </p>

      <div>
        <div className='flex gap-1 m-1 md:flex md:justify-center lg:gap-3 2xl:lg:gap-6'>
          <div  className="h-65 w-[50%] bg-[#fff]/15 backdrop-blur-md rounded-md border-2 border-[#8F88EF]/40 shadow-xl mt-10 md:h-68 md:w-[46%] lg:h-70 lg:w-[42%] xl:h-75 xl:w-[30%] 2xl:h-140 2xl:w-[25%]">
            <img src={Experiment} alt="Home" className="flex h-12 w-10 mt-1 md:h-15 md:w-[13%] lg:h-15 lg:w-[11%] 2xl:h-25 2xl:w-[14%]" /> 
            <p className='max-w-[200px] text-[1.2rem] text-[#FFFFFF] leading-[1.2] mt-1 text-left pl-2 md:text-[1.8rem] md:max-w-[300px] lg:text-[2rem] lg:max-w-[350px]  lg:pt-[2%] 2xl:text-[2.8rem] 2xl:max-w-[550px] 2xl:pl-10'> 
              I experiment with and manage databases, optimizing data storage and retrieval for enhanced performance.
            </p>
          </div>

          <div  className="h-65 w-[50%] bg-[#fff]/15 backdrop-blur-md rounded-lg border-2 border-[#8F88EF]/40 shadow-xl mt-10 pl-2 md:h-68 md:w-[46%] lg:h-70 lg:w-[42%] xl:h-75 xl:w-[30%] 2xl:h-140 2xl:w-[25%]">
            <img src={Quality} alt="Home" className="flex h-12 w-10 mt-1 md:h-15 md:w-[13%] lg:h-15 lg:w-[11%] 2xl:h-25 2xl:w-[14%]" />
            <p className='max-w-[100px] text-[1.2rem] text-[#FFFFFF] leading-[1.2] text-left md:text-[1.8rem] md:max-w-[300px] lg:text-[2rem] lg:max-w-[350px]  lg:pt-[2%] 2xl:text-[2.8rem] 2xl:max-w-[550px] 2xl:pl-10'> 
              I rigorously test projects for optimal functionality and reliability.
            </p>
          </div>
        </div>

        <div className='flex gap-1 mt-1 m-1 md:flex md:justify-center lg:gap-3 lg:mt-3 2xl:mt-6 2xl:gap-6'>
          <div  className=" h-70 w-[50%] bg-[#fff]/15 backdrop-blur-md rounded-lg border-2 border-[#8F88EF]/40 shadow-xl mb-30 md:h-68 md:w-[46%] lg:h-80 lg:w-[42%] xl:h-80 xl:w-[30%] 2xl:h-140 2xl:w-[25%]">
            <img src={Handles} alt="Home" className="flex h-12 w-10 mt-1 md:h-15 md:w-[13%] lg:h-15 lg:w-[11%] 2xl:h-25 2xl:w-[14%]" /> 
            <p className='max-w-[750px] text-[1.2rem] text-[#FFFFFF] leading-[1.2] text-left pl-2 md:text-[1.8rem] md:max-w-[300px] lg:text-[2rem] lg:max-w-[350px]  lg:pt-[2%] 2xl:text-[2.8rem] 2xl:max-w-[550px] 2xl:pl-10'> 
              I primarily focus on backend development, ensuring robust server-side functionality and seamless integration with front-end systems.
            </p>
          </div>

          <div  className="h-70 w-[50%] bg-[#fff]/15 backdrop-blur-md rounded-lg border-2 border-[#8F88EF]/40 shadow-xl mb-30 md:h-68 md:w-[46%] lg:h-80 lg:w-[42%] xl:h-80 xl:w-[30%] 2xl:h-140 2xl:w-[25%]">
            <img src={Experiment} alt="Home" className="flex h-12 w-10 mt-1 md:h-15 md:w-[13%] lg:h-15 lg:w-[11%] 2xl:h-25 2xl:w-[14%]" />
            <p className='max-w-[390px] text-[1.2rem] text-[#FFFFFF] leading-[1.2] text-left pl-2 md:text-[1.8rem] md:max-w-[300px] lg:text-[2rem] lg:max-w-[350px]  lg:pt-[2%] 2xl:text-[2.8rem] 2xl:max-w-[550px] 2xl:pl-10'> 
              I experiment with backend and database code to boost innovation and performance.
            </p>
          </div>
        </div>
  
      </div>   
    </div>
  );
};

export default WhatIDoBalatayo;