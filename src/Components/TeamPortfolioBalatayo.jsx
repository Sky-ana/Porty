import React from 'react';
import '../App.css';

import Leadership from '../assets/Leadership.svg';
import CriticalThinking from '../assets/CriticalThinking.svg';
import ProblemSolving from '../assets/ProblemSolving.svg';
import Balatayo from '../assets/BalatayoImage.png';
import linkedinIcon from '../assets/Linkedin.png';
import Python from '../assets/Python.svg';
import Php from '../assets/Php.svg';
import Java from '../assets/Java.svg';
import Cplusplus from '../assets/Cplusplus.svg';
import WhatIDoBalatayo from './WhatIDoBalatayo';


{ /* import PortfolioBalatayo from '../Components/PortfolioBalatayo.jsx'; */}

const TeamPortfolioBalatayo = () => {
  return (
  <div className="min-h-screen relative">  
    <div className=" mt-[1%] md:m-2">
      <p className="text-[clamp(4rem,18vw,25rem)] text-[#FFFFFF] text-strokesmall leading-[0.7] ml-[4%]">
        Hello, <br /> I'm <span className="text-[#5878E0]">Balatayo.</span>
      </p>

      <p className="max-w-[300px] mx-auto text-[1.2rem] text-[#fff] text-left ml-[4%] mt-[3%] md:text-[1.8rem] md:max-w-[600px] lg:text-[2rem] lg:max-w-[700px] xl:text-[2.2rem] xl:max-w-[750px] 2xl:text-[2.8rem] 2xl:max-w-[850px] ">
        A programmer that enjoys tinkering with databases and learning new codes and different ways to use them.
      </p>

      <img src={Balatayo} alt="BalatayoImage" className="h-[300px] w-[300px] mt-[2%] ml-[4%] md:hidden"/>

      <div className="flex mt-[10%] gap-5">
        <div className="flex-1">
          <div className="text-[1.2rem] text-[#fff] ml-2 space-y-2 md:text-[1.8rem] md:ml-[4%] lg:text-[2rem] xl:text-[2.2rem] 2xl:text-[2.8rem] 2xl:space-y-8">
            <div className="whitespace-nowrap">OOP</div>
            <div className="whitespace-nowrap">Database</div>
            <div className="whitespace-nowrap">Web development</div>
            <div className="whitespace-nowrap">Debugging</div>
          </div>
          <p className="hidden md:flex text-[1.6rem] text-[#fff] ml-2 mt-4 md:mt-35 md:text-[1.8rem] lg:text-[2rem] 2xl:text-[2.8rem]">
            <span className='text-[#5878E0]'> Personal  </span>      Skills
          </p>
        </div>

        <div className="hidden md:flex flex-col gap-3 mt-[2.4%]">
          {/* Stat 1 */}
          <div className="w-40 h-7 bg-white relative rounded md:h-2  lg:mt-[-4%] xl:mt-[-3%] xl:w-100 2xl:mr-15 2xl:w-300 2xl:h-4 2xl:mt-[-2.5%]">
            <div
              className="absolute top-0 left-0 h-7 rounded bg-gradient-to-r from-[#2C17EC] to-[#8BEDA9] md:h-2 2xl:h-4"
              style={{ width: '60%' }}
            ></div>
          </div>
          
          {/* Stat 2 */}
          <div className="w-40 h-7 bg-white relative mt-[14%] rounded md:h-2 :md:mt-[18%] lg:mt-[24%] xl:mt-[11%] xl:w-100 2xl:w-300 2xl:h-4 2xl:mt-[5.5%]">
            <div
              className="absolute top-0 left-0 h-7 rounded bg-gradient-to-r from-[#2C17EC] to-[#8BEDA9] md:h-2 2xl:h-4"
              style={{ width: '80%' }}
            ></div>
          </div>
          
          {/* Stat 3 */}
          <div className="w-40 h-7 bg-white relative mt-[13%] rounded md:h-2   md:mt-[22%] lg:mt-[25%] xl:mt-[10%] xl:w-100 2xl:w-300 2xl:h-4 2xl:mt-[5.5%]">
            <div
              className="absolute top-0 left-0 h-7 rounded bg-gradient-to-r from-[#2C17EC] to-[#8BEDA9] md:h-2 2xl:h-4"
              style={{ width: '50%' }}
            ></div>
          </div>
          
          {/* Stat 4 */}
          <div className="w-40 h-7 bg-white relative mt-[14%] rounded md:h-2   md:mt-[18%] lg:mt-[23%] xl:mt-[11%] xl:w-100 2xl:w-300 2xl:h-4 2xl:mt-[4.8%]">
            <div
              className="top-0 left-0 h-7 rounded bg-gradient-to-r from-[#2C17EC] to-[#8BEDA9] md:h-2 2xl:h-4"
              style={{ width: '75%' }}
            ></div>
          </div>
        </div>
    
        <div>
          <p className="text-[1.2rem] text-[#fff] text-left leading-[1.8] ml-25 mr-5  md:text-[1.8rem] md:ml-0 md:mt-[-10%] lg:text-[2rem] xl:text-[2.2rem] 2xl:text-[2.8rem] 2xl:leading-[2.1]">
            60% <br />
            80% <br />
            50% <br />
            75% <br />
          </p>
        </div>

        <img src={Balatayo} alt="BalatayoImage" className="h-[300px] w-[10%] mt-[2%] ml-[1%] hidden md:flex md:h-[300px] md:w-[500px] lg:h-[400px] lg:w-[400px] lg:mt-[-5%] xl:mr-[8%] xl:h-[500px] xl:w-[500px] xl:mt-[-8%] 2xl:h-[600px] 2xl:w-[600px] 2xl:mt-[-8%] 2xl:mr-[5%]"/>
    
      </div>
    </div>

  
    <div className="hidden md:flex ml-2 h-15 w-75 bg-[#fff]/15 backdrop-blur-md rounded-lg border-3 border-[#fff]/5 shadow-xl mb-30 md:w-[97%] md:gap-2 md:pl-1 md:mb-5 2xl:w-[95%] 2xl:gap-5 2xl:pl-8 2xl:mb-15 2xl:mt-8 2xl:ml-[2.5%] 2xl:h-22">
      <div className="flex flex-row space-x-4 h-8  2xl:h-15 mt-2 ml-1 md:mt-2.5"> 
        <button className="flex items-center bg-[#78E28F] text-[#24242F] p-1 pl-2 rounded-md w-40 2xl:w-70 2xl:pl-5 2xl:pt-3 2xl:rounded-xl ">
          <img src={Leadership} alt="About Us" className="h-6 w-6 2xl:h-10 2xl:w-10 " />
          <span className="ml-2 text-[1rem] md:text-[1.6rem] 2xl:text-[2.8rem]"> LEADERSHIP </span>
        </button>
      </div>

      <div className="flex flex-row space-x-4 h-8  2xl:h-15 mt-2 ml-1 md:mt-2.5"> 
        <button className="flex items-center bg-[#EF7676] text-[#24242F] p-1 pl-1 rounded-md w-20 md:w-55 2xl:w-95 2xl:pl-5 2xl:rounded-xl">
        <img src={ProblemSolving} alt="About Us" className="h-6 w-6 2xl:h-10 2xl:w-10" />
          <span className="ml-2 text-[1rem] md:text-[1.6rem] 2xl:text-[2.8rem] md:pt-1 "> 
          PROBLEM SOLVING </span>
        </button>
      </div>

      <div className="flex flex-row space-x-4 h-8  2xl:h-15 mt-2 ml-1 md:mt-2.5"> 
        <button className="flex items-center bg-[#E89A6A] text-[#24242F] p-1 pl-1 rounded-md w-25 md:w-53 xl:w-95 2xl:pl-5 2xl:rounded-xl">
        <img src={CriticalThinking} alt="About Us" className="h-6 w-6 2xl:h-10 2xl:w-10" />
          <span className="ml-2 text-[0.8rem] md:text-[1.6rem] 2xl:text-[2.8rem] md:pt-1 "> CRITICAL THINKING </span>
        </button>
      </div>
    </div>


    <div className="flex mt-[3%] mb-[1%] text-[1.6rem] w-full justify-between md:text-[1.8rem] md:mt-[2%] ">
      <p className="text-[#fff] ml-[4%] md:md:ml-[2%] lg:text-[2rem] 2xl:text-[2.8rem]">
        <span className="text-[#5878E0]">Find</span> me in
      </p>

      <div className="pr-[4%] md:md:pr-[4%] lg:text-[2rem] 2xl:text-[2.8rem]">
        <p className="text-[#fff]">Primary Expertise</p>
      </div>
    </div>


      <div className='flex gap-2 ml-[4%] mb-30 md:ml-[2%]'>
        <div className="flex h-10 w-10 bg-[#fff]/15 backdrop-blur-md border-3 border-[#fff]/5 shadow-xl rounded-md md:h-15 md:w-15 md:pr-1 2xl:h-25 2xl:w-25 2xl:pr-2"> 
          <img src={linkedinIcon} alt="Logo" className="h-8 w-8 pl-1 pt-1 md:h-12 md:w-15 2xl:h-20 2xl:w-21 2xl:pl-3 2xl:pt-3" />
        </div>
        <div className="w-full flex justify-end pr-[4%]">
          <div className="flex gap-2">
            <div className="flex h-10 w-10 bg-[#fff]/15 backdrop-blur-md border-3 border-[#fff]/5 shadow-xl rounded-md md:h-15 md:w-15 md:pr-1 2xl:h-25 2xl:w-25 2xl:pr-2"> 
              <img src={Python} alt="Python" className="h-8 w-8 pl-1 pt-1 md:h-12 md:w-15 2xl:h-20 2xl:w-21 2xl:pl-3 2xl:pt-3" />
            </div>

            <div className="flex h-10 w-10 bg-[#fff]/15 backdrop-blur-md border-3 border-[#fff]/5 shadow-xl rounded-md md:h-15 md:w-15 md:pr-1 2xl:h-25 2xl:w-25 2xl:pr-2"> 
              <img src={Php} alt="PHP" className="h-8  w-8 pl-1 pt-1 md:h-12 md:w-15 2xl:h-20 2xl:w-21 2xl:pl-3 2xl:pt-3" />
            </div>

            <div className="flex h-10 w-10 bg-[#fff]/15 backdrop-blur-md border-3 border-[#fff]/5 shadow-xl rounded-md md:h-15 md:w-15 md:pr-1 2xl:h-25 2xl:w-25 2xl:pr-2"> 
              <img src={Java} alt="Java" className="h-8 w-8 pl-1 pt-1 md:h-12 md:w-15 2xl:h-20 2xl:w-21 2xl:pl-3 2xl:pt-3" />
            </div>

            <div className="flex h-10 w-10 bg-[#fff]/15 backdrop-blur-md border-3 border-[#fff]/5 shadow-xl rounded-md md:h-15 md:w-15 md:pr-1 2xl:h-25 2xl:w-25 2xl:pr-2"> 
              <img src={Cplusplus} alt="C++" className="h-8 w-8 pl-1.5 pt-1 md:h-12 md:w-15 2xl:h-20 2xl:w-21 2xl:pl-3 2xl:pt-3" />
            </div>
          </div>
        </div>
      </div>


      <WhatIDoBalatayo />

      

  </div>
  );
};

export default TeamPortfolioBalatayo;