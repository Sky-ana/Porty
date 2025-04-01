import React from 'react';
import '../App.css';

import Creativity from '../assets/Creativity.svg';
import TimeManagement from '../assets/TimeManagement.svg';
import TeamworkAndCollaboration from '../assets/TeamworkAndCollaboration.svg';
import Abreu from '../assets/AbreuImage.png';
import Instagram from '../assets/Instagram.png';
import Python from '../assets/Python.svg';
import Php from '../assets/Php.svg';
import Lightroom from '../assets/Lightroom.svg';
import Cplusplus from '../assets/Cplusplus.svg';


{ /* import PortfolioAbreu from '../Components/PortfolioAbreu.jsx'; */}

const TeamPortfolioAbreu = () => {

  return (
  <div className="min-h-screen relative">  
    <div className="ml-28 mt-[1%]">
            <p className="text-[22rem] text-[#FFFFFF] text-stroke leading-[0.7]">
              Hello, <br /> I'm <span className="text-[#F1E167]">Abreu.</span>
            </p>
    
            <p className="max-w-[850px] mx-auto text-[2.5rem] text-[#fff] text-left ml-5 mt-[3%]">
            As a 3rd-year student at CVSU, I have a strong passion for graphic design and illustration. I enjoy expressing creativity through drawing, creating logos, and editing videos and photos. I also like exploring web design, always looking for new ways to make each project uniquely.
            </p>
    
            <div className="flex mt-[3%] gap-6">
              <div>
                <p className="max-w-[288px] mx-auto text-[2.5rem] text-[#fff] text-left ml-5 leading-[3]">
                  Web Designing <br />
                  Logo Design <br />
                  Illustration <br />
                  Photo/Video Editing <br />
                  <p className='text-strokesmall'> <span className='text-[#5878E0]'> Personal </span> Skills </p>
                </p>
              </div>
    
              <div className="flex flex-col gap-4 mt-[2.5%]">
    
                {/* Stat 1 */}
                <div className="w-120 ml-15 h-7 bg-white relative rounded ">
                  <div
                    className="absolute top-0 left-0 h-7 bg-gradient-to-r from-[#2C17EC] to-[#8BEDA9] "
                    style={{ width: '60%' }}
                  ></div>
                </div>
                
                {/* Stat 2 */}
                <div className="w-120 ml-15 h-7 bg-white relative mt-[14%] rounded">
                  <div
                    className="absolute top-0 left-0 h-7 bg-gradient-to-r from-[#2C17EC] to-[#8BEDA9] "
                    style={{ width: '50%' }}
                  ></div>
                </div>
                
                {/* Stat 3 */}
                <div className="w-120 ml-15 h-7 bg-white relative mt-[14%] rounded">
                  <div
                    className="absolute top-0 left-0 h-7 bg-gradient-to-r from-[#2C17EC] to-[#8BEDA9] "
                    style={{ width: '70%' }}
                  ></div>
                </div>
                
                {/* Stat 4 */}
                <div className="w-120 h-7 ml-15 bg-white relative mt-[14%] rounded">
                  <div
                    className="top-0 left-0 h-7 bg-gradient-to-r from-[#2C17EC] to-[#8BEDA9]"
                    style={{ width: '80%' }}
                  ></div>
                </div>
    
                
              </div>
    
              <div>
                <p className="max-w-[220px] mx-auto text-[2.5rem] text-[#fff] text-left ml-5 leading-[3]">
                  60% <br />
                  50% <br />
                  70% <br />
                  80% <br />
                </p>
              </div>
    
              <img src={Abreu} alt="AbreuImage" className="h-[665px] w-[665px] ml-[10%] mt-[-20%]" />
    
            </div>
          </div>
    
          <div className="flex ml-[6%] h-[80px] w-[90%] bg-[#fff]/15 backdrop-blur-md rounded-lg border-3 border-[#fff]/5 shadow-xl mb-30">
    
            <div className='flex flex-row space-x-4 h-12 mt-3 ml-5'> 
              <button className="flex items-center bg-[#78E28F] text-[#24242F] p-2 pl-3 rounded-xl w-45">
                <img src={Creativity} alt="About Us" className="h-8 w-8" />
                <span className="ml-5 text-[1.4rem]"> CREATIVITY </span>
              </button>
            </div>

            <div className='flex flex-row space-x-4 h-12 mt-3 ml-5'> 
              <button className="flex items-center bg-[#E89A6A] text-[#24242F] p-2 pl-5 rounded-xl w-60">
                <img src={TimeManagement} alt="About Us" className="h-8 w-8" />
                <span className="ml-5 text-[1.4rem]"> TIME MANAGEMENT </span>
              </button>
            </div>

            <div className='flex flex-row space-x-4 h-12 mt-3 ml-5'> 
              <button className="flex items-center bg-[#6277E0] text-[#24242F] p-2 pl-5 rounded-xl w-85">
                <img src={TeamworkAndCollaboration} alt="About Us" className="h-8 w-8" />
                <span className="ml-5 text-[1.4rem]"> TEAMWORK AND COLLABORATION </span>
              </button>
            </div>
          </div>
    
          <div className='flex mt-[3%] mb-[1%]'>
              <p className='text-strokesmall className="max-w-[220px] mx-auto text-[2.5rem] text-[#fff]  ml-[6.2%] '> <span className='text-[#5878E0]'> Find </span> me in </p>
    
              <p className='text-strokesmall className="max-w-[220px] mx-auto text-[2.5rem] text-[#fff]  ml-[65%] '> Primary Expertise </p>
          </div>
    
          <div className='flex gap-5 ml-[6%]'>
            <div className="flex h-[80px] w-[4%] bg-[#fff]/15 backdrop-blur-md rounded-lg border-3 border-[#fff]/5 shadow-xl mb-30 "> <img src={Instagram} alt="Logo" className="h-15 w-15 pl-4 pt-4" />
            </div>

            <div className="flex h-[80px] w-[4%] bg-[#fff]/15 backdrop-blur-md rounded-lg border-3 border-[#fff]/5 shadow-xl mb-30 ml-[71%]"> <img src={Cplusplus} alt="Logo" className="h-16 w-15 pl-4 pt-3" /> </div>

            <div className="flex h-[80px] w-[4%] bg-[#fff]/15 backdrop-blur-md rounded-lg border-3 border-[#fff]/5 shadow-xl mb-30"> <img src={Python} alt="Logo" className="h-16 w-15 pl-4 pt-3" /> </div>

            <div className="flex h-[80px] w-[4%] bg-[#fff]/15 backdrop-blur-md rounded-lg border-3 border-[#fff]/5 shadow-xl mb-30"> <img src={Php} alt="Logo" className="h-16 w-15 pl-4 pt-3" /> </div>

            <div className="flex h-[80px] w-[4%] bg-[#fff]/15 backdrop-blur-md rounded-lg border-3 border-[#fff]/5 shadow-xl mb-30"> <img src={Lightroom} alt="Logo" className="h-16 w-15 pl-4 pt-3" /> </div>

          </div>
    </div>
  );
};

export default TeamPortfolioAbreu;