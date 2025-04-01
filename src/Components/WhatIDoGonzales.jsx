import React from 'react';
import Develop from '../assets/Develop.png';
import Creative from '../assets/Creative.png';
import Build from '../assets/Build.png';
import Teamwork from '../assets/Teamwork.png';
import Improve from '../assets/Improve.png';
import Edit from '../assets/Edit.png';


{ /* import WhatIDoGonzales from '../Components/WhatIDOAbreu.jsx'; */}

const WhatIDoGonzales = () => {
  return (
    <div>
      <p className="text-[22rem] text-[#FFFFFF] text-stroke leading-[0.7] ml-[3.5%]">
        What <span className="text-[#FF4A4A]">I DO</span>
      </p>

        <div className='ml-[15%]'>
          <div className='flex gap-8'>
            <div  className="ml-[3.5%] h-[400px] w-[25%] bg-[#fff]/15 backdrop-blur-md rounded-lg border-3 border-[#8F88EF]/40 shadow-xl mt-40 mb-30 pl-8">
              <img src={Creative} alt="Home" className="flex h-[95px] w-[95px] ml-72 mt-5" /> 
              <p className='max-w-[390px] text-[2.5rem] text-[#FFFFFF] leading-[1.2] mt-8 text-left'> 
                I create digital art and illustrations that bring ideas to life.
              </p>
            </div>

            <div  className="h-[400px] w-[25%] bg-[#fff]/15 backdrop-blur-md rounded-lg border-3 border-[#8F88EF]/40 shadow-xl mt-40 mb-30 pl-8">
              <img src={Develop} alt="Home" className="flex h-[95px] w-[95px] ml-72 mt-5"  /> 
              <p className='max-w-[390px] text-[2.5rem] text-[#FFFFFF] leading-[1.2] mt-8 text-left'> 
                Build responsive websites and UIs that merge modern design with intuitive functionality.
              </p>
            </div>

            <div  className="h-[400px] w-[25%] bg-[#fff]/15 backdrop-blur-md rounded-lg border-3 border-[#8F88EF]/40 shadow-xl mt-40 mb-30 pl-8">
              <img src={Teamwork} alt="Home" className="flex h-[95px] w-[95px] ml-72 mt-5" />
              <p className='max-w-[390px] text-[2.5rem] text-[#FFFFFF] leading-[1.2] mt-8 text-left'> 
              I manage creative projects and collaborate with teams to deliver innovative results.
              </p>
            </div>
          </div>

          <div className='flex gap-8 mt-[-13%]'>
            <div  className="ml-[3.5%] h-[400px] w-[25%] bg-[#fff]/15 backdrop-blur-md rounded-lg border-3 border-[#8F88EF]/40 shadow-xl mt-40 mb-30 pl-8">
              <img src={Build} alt="Home" className="flex h-[95px] w-[95px] ml-72 mt-5" /> 
              <p className='max-w-[390px] text-[2.5rem] text-[#FFFFFF] leading-[1.2] mt-8 text-left'> 
                I build and maintain my online presence using strategic social media and digital marketing.
              </p>
            </div>

            <div  className="h-[400px] w-[25%] bg-[#fff]/15 backdrop-blur-md rounded-lg border-3 border-[#8F88EF]/40 shadow-xl mt-40 mb-30 pl-8">
              <img src={Improve} alt="Home" className="flex h-[95px] w-[95px] ml-72 mt-5" /> 
              <p className='max-w-[390px] text-[2.5rem] text-[#FFFFFF] leading-[1.2] mt-8 text-left'> 
                I consistently experiment with diverse creative techniques to enhance my skills.
              </p>
            </div>

            <div  className="h-[400px] w-[25%] bg-[#fff]/15 backdrop-blur-md rounded-lg border-3 border-[#8F88EF]/40 shadow-xl mt-40 mb-30 pl-8">
              <img src={Edit} alt="Home" className="flex h-[95px] w-[95px] ml-72 mt-5" />
              <p className='max-w-[390px] text-[2.5rem] text-[#FFFFFF] leading-[1.2] mt-8 text-left'> 
                I edit photos to craft visually appealing images using a range of creative techniques.
              </p>
            </div>
          </div>
    
        </div>
    </div>
  );
};

export default WhatIDoGonzales;