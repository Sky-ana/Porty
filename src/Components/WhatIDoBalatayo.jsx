import React from 'react';

import Experiment from '../assets/Experiment.png';
import Quality from '../assets/Quality.png';
import Handles from '../assets/Handles.png';


{ /* import WhatIDoBalatayo from '../Components/WhatIDOAbreu.jsx'; */}

const WhatIDoBalatayo = () => {
  return (
    <div>
      <p className="text-[22rem] text-[#FFFFFF] text-stroke leading-[0.7] ml-[3.5%]">
        What <span className="text-[#5878E0]">I DO</span>
      </p>

        <div className='ml-[15%]'>
          <div className='flex gap-8'>
            <div  className="ml-[3.5%] h-[400px] w-[50%] bg-[#fff]/15 backdrop-blur-md rounded-lg border-3 border-[#8F88EF]/40 shadow-xl mt-40 mb-30 pl-8">
              <img src={Experiment} alt="Home" className="flex h-[95px] w-[85px] ml-185 mt-5" /> 
              <p className='max-w-[750px] text-[2.5rem] text-[#FFFFFF] leading-[1.2] mt-8 text-left'> 
                I experiment with and manage databases, optimizing data storage and retrieval for enhanced performance.
              </p>
            </div>

            <div  className="h-[400px] w-[25%] bg-[#fff]/15 backdrop-blur-md rounded-lg border-3 border-[#8F88EF]/40 shadow-xl mt-40 mb-30 pl-8">
              <img src={Quality} alt="Home" className="flex h-[95px] w-[85px] ml-72 mt-5" />
              <p className='max-w-[390px] text-[2.5rem] text-[#FFFFFF] leading-[1.2] mt-8 text-left'> 
                I rigorously test projects for optimal functionality and reliability.
              </p>
            </div>
          </div>

          <div className='flex gap-8 mt-[-13%]'>
            <div  className="ml-[3.5%] h-[400px] w-[50%] bg-[#fff]/15 backdrop-blur-md rounded-lg border-3 border-[#8F88EF]/40 shadow-xl mt-40 mb-30 pl-8">
              <img src={Handles} alt="Home" className="flex h-[95px] w-[85px] ml-185 mt-5" /> 
              <p className='max-w-[750px] text-[2.5rem] text-[#FFFFFF] leading-[1.2] mt-8 text-left'> 
                I primarily focus on backend development, ensuring robust server-side functionality and seamless integration with front-end systems.
              </p>
            </div>

            <div  className="h-[400px] w-[25%] bg-[#fff]/15 backdrop-blur-md rounded-lg border-3 border-[#8F88EF]/40 shadow-xl mt-40 mb-30 pl-8">
              <img src={Experiment} alt="Home" className="flex h-[95px] w-[85px] ml-72 mt-5" />
              <p className='max-w-[390px] text-[2.5rem] text-[#FFFFFF] leading-[1.2] mt-8 text-left'> 
                I experiment with backend and database code to boost innovation and performance.
              </p>
            </div>
          </div>
    
        </div>
    </div>
  );
};

export default WhatIDoBalatayo;