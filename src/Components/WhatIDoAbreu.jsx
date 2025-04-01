import React from 'react';
import Develop from '../assets/Develop.png';
import Create from '../assets/Create.png';
import Edit from '../assets/Edit.png';
import Camera from '../assets/Camera.png';

{ /* import WhatIDoAbreu from '../Components/WhatIDOAbreu.jsx'; */}

const WhatIDoAbreu = () => {
  return (
    <div>
      <p className="text-[22rem] text-[#FFFFFF] text-stroke leading-[0.7] ml-[3.5%]">
        What <span className="text-[#F1E167]">I DO</span>
      </p>

        <div className='flex gap-8'>
          <div  className="ml-[3.5%] h-[600px] w-[22%] bg-[#fff]/15 backdrop-blur-md rounded-lg border-3 border-[#8F88EF]/40 shadow-xl mt-40 mb-30">
            <img src={Develop} alt="Home" className="flex h-[95px] w-[95px] ml-89 mt-5" /> 
            <p className='max-w-[390px] text-[2.5rem] text-[#FFFFFF] leading-[1.2] mt-20 ml-10 text-center'> 
              I design and develop websites and user interfaces that merge aesthetics with usability, delivering exceptional digital experiences.
            </p>
          </div>

          <div  className="h-[600px] w-[22%] bg-[#fff]/15 backdrop-blur-md rounded-lg border-3 border-[#8F88EF]/40 shadow-xl mt-40 mb-30">
            <img src={Create} alt="Home" className="flex h-[95px] w-[95px] ml-89 mt-5" /> 
            <p className='max-w-[390px] text-[2.5rem] text-[#FFFFFF] leading-[1.2] mt-20 ml-10 text-center'> 
              I create digital and traditional art and illustrations, including custom logo designs.
            </p>
          </div>

          <div  className="h-[600px] w-[22%] bg-[#fff]/15 backdrop-blur-md rounded-lg border-3 border-[#8F88EF]/40 shadow-xl mt-40 mb-30">
            <img src={Edit} alt="Home" className="flex h-[95px] w-[95px] ml-89 mt-5" />
            <p className='max-w-[390px] text-[2.5rem] text-[#FFFFFF] leading-[1.2] mt-20 ml-10 text-center'> 
              I offer professional photo and video editing services, transforming raw content into polished visuals.
            </p>
          </div>

          <div  className="h-[600px] w-[22%] bg-[#fff]/15 backdrop-blur-md rounded-lg border-3 border-[#8F88EF]/40 shadow-xl mt-40 mb-30">
            <img src={Camera} alt="Home" className="flex h-[95px] w-[95px] ml-85 mt-5" />
            <p className='max-w-[390px] text-[2.5rem] text-[#FFFFFF] leading-[1.2] mt-20 ml-10 text-center'> 
            I engage in photography as a creative hobby, capturing unique moments and exploring visual storytelling.
            </p>
          </div>
        </div>
    </div>
  );
};

export default WhatIDoAbreu;