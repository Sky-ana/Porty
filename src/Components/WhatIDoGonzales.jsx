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
    <div className='select-none'>
      <p className="text-[clamp(5rem,22vw,25rem)] text-[#FFFFFF] leading-[0.7] ml-[4%] 2xl:mb-[4%]">
        What <span className="text-[#5878E0]">I DO</span>
      </p>

      <div>
        <div className='flex gap-1 m-1 md:flex md:justify-center lg:gap-3 2xl:lg:gap-6'>
          <div  className="h-70 w-[33%] bg-[#fff]/15 backdrop-blur-md rounded-md border-2 border-[#8F88EF]/40 shadow-xl mt-10 md:h-68 md:w-[48%] lg:h-75 lg:w-[42%] xl:h-75 xl:w-[30%] 2xl:h-140 2xl:w-[25%] hover:scale-102">
            <img src={Creative} alt="Home" className="flex h-12 w-10 mt-1 md:h-15 md:w-[25%] lg:h-15 lg:w-[20%] xl:w-[15%] 2xl:h-25 2xl:w-[16%]" /> 
            <p className='max-w-[200px] text-[1.2rem] text-[#FFFFFF] leading-[1.2] mt-1 text-left pl-2 md:text-[1.8rem] md:max-w-[300px] lg:text-[2rem] lg:pt-[5%] lg:max-w-[350px] 2xl:text-[2.8rem] 2xl:max-w-[550px] 2xl:pl-10'> 
              I create digital art and illustrations that bring ideas to life.
            </p>
          </div>

          <div  className="h-70 w-[33%] bg-[#fff]/15 backdrop-blur-md rounded-lg border-2 border-[#8F88EF]/40 shadow-xl mt-10 pl-2 md:h-68 md:w-[48%] lg:h-75 lg:w-[42%] xl:h-75 xl:w-[30%] 2xl:h-140 2xl:w-[25%] hover:scale-102">
            <img src={Develop} alt="Home" className="flex h-12 w-10 mt-1 md:h-15 md:w-[25%] lg:h-15 lg:w-[20%] lg:pt-[1%] xl:w-[15%] 2xl:h-25 2xl:w-[16%]" />
            <p className='max-w-[100px] text-[1.2rem] text-[#FFFFFF] leading-[1.2] text-left md:text-[1.8rem] md:max-w-[300px] lg:text-[2rem] lg:pt-[5%] lg:max-w-[350px] 2xl:text-[2.8rem] 2xl:max-w-[550px] 2xl:pl-10'> 
              build responsive websites and UIs that merge modern design with intuitive functionality.
            </p>
          </div>

          <div  className="h-70 w-[33%] bg-[#fff]/15 backdrop-blur-md rounded-lg border-2 border-[#8F88EF]/40 shadow-xl mt-10 pl-2 md:h-68 md:w-[48%] lg:h-75 lg:w-[42%] xl:h-75 xl:w-[30%] 2xl:h-140 2xl:w-[25%] hover:scale-102">
            <img src={Teamwork} alt="Home" className="flex h-12 w-10 mt-1 md:h-15 md:w-[25%] lg:h-15 lg:w-[20%] lg:pt-[1%] xl:w-[15%] 2xl:h-25 2xl:w-[16%]" />
            <p className='max-w-[100px] text-[1.2rem] text-[#FFFFFF] leading-[1.2] text-left md:text-[1.8rem] md:max-w-[300px] lg:text-[2rem] lg:pt-[5%] lg:max-w-[350px] 2xl:text-[2.8rem] 2xl:max-w-[550px] 2xl:pl-10'> 
              I manage creative projects and collaborate with teams to deliver innovative results.
            </p>
          </div>
        </div>

        <div className='flex gap-1 mt-1 m-1 md:flex md:justify-center lg:gap-3 lg:mt-3 2xl:mt-6 2xl:gap-6'>
          <div  className=" h-75 w-[33%] bg-[#fff]/15 backdrop-blur-md rounded-lg border-2 border-[#8F88EF]/40 shadow-xl mb-30 md:h-68 md:w-[48%] lg:h-75 lg:w-[42%] xl:h-75 xl:w-[30%] 2xl:h-140 2xl:w-[25%] hover:scale-102">
            <img src={Build} alt="Home" className="flex h-12 w-10 mt-1 md:h-15 md:w-[25%] lg:h-15 lg:w-[20%] lg:pt-[1%] xl:w-[15%] 2xl:h-25 2xl:w-[16%]" /> 
            <p className='max-w-[750px] text-[1.2rem] text-[#FFFFFF] leading-[1.2] text-left pl-2 md:text-[1.8rem] md:max-w-[300px] lg:text-[2rem] lg:pt-[5%] lg:max-w-[350px] 2xl:text-[2.8rem] 2xl:max-w-[550px] 2xl:pl-10'> 
              I build and maintain my online presence using strategic social media and digital marketing.
            </p>
          </div>

          <div  className="h-75 w-[33%] bg-[#fff]/15 backdrop-blur-md rounded-lg border-2 border-[#8F88EF]/40 shadow-xl mb-30 md:h-68 md:w-[48%] lg:h-75 lg:w-[42%] xl:h-75 xl:w-[30%] 2xl:h-140 2xl:w-[25%] hover:scale-102">
            <img src={Improve} alt="Home" className="flex h-12 w-10 mt-1 md:h-15 md:w-[25%] lg:h-15 lg:w-[20%] lg:pt-[1%] xl:w-[15%] 2xl:h-25 2xl:w-[16%]" />
            <p className='max-w-[390px] text-[1.2rem] text-[#FFFFFF] leading-[1.2] text-left pl-2 md:text-[1.8rem] md:max-w-[300px] lg:text-[2rem] lg:pt-[5%] lg:max-w-[350px] 2xl:text-[2.8rem] 2xl:max-w-[550px] 2xl:pl-10'> 
              I consistently experiment with diverse creative techniques to enhance my skills.
            </p>
          </div>

          <div  className="h-75 w-[33%] bg-[#fff]/15 backdrop-blur-md rounded-lg border-2 border-[#8F88EF]/40 shadow-xl mb-30 md:h-68 md:w-[48%] lg:h-75 lg:w-[42%] xl:h-75 xl:w-[30%] 2xl:h-140 2xl:w-[25%] hover:scale-102">
            <img src={Edit} alt="Home" className="flex h-12 w-10 mt-1 md:h-15 md:w-[25%] lg:h-15 lg:w-[20%] lg:pt-[1%] xl:w-[15%] 2xl:h-25 2xl:w-[16%]" />
            <p className='max-w-[390px] text-[1.2rem] text-[#FFFFFF] leading-[1.2] text-left pl-2 md:text-[1.8rem] md:max-w-[300px] lg:text-[2rem] lg:pt-[5%] lg:max-w-[350px] 2xl:text-[2.8rem] 2xl:max-w-[550px] 2xl:pl-10'> 
              I edit photos to craft visually appealing images using a range of creative techniques.
            </p>
          </div>
        </div>
  
      </div>   
    </div>
  );
};

export default WhatIDoGonzales;