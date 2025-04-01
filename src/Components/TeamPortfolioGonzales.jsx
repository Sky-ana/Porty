import React from 'react';
import '../App.css';

import Creativity from '../assets/Creativity.svg';
import Adaptability from '../assets/Adaptability.svg';
import TeamworkAndCollaboration from '../assets/TeamworkAndCollaboration.svg';
import Gonzales from '../assets/GonzalesImage.png';
import linkedinIcon from '../assets/Linkedin.png';
import instagramIcon from '../assets/Instagram.png';
import facebookIcon from '../assets/Facebook.png';
import Aseprite from '../assets/AsepriteIcon.svg';
import AdobeIllustrator from '../assets/AdobeIllustratorIcon.svg';
import Procreate from '../assets/ProcreateIcon.svg';
import Figma from '../assets/FigmaIcon.svg';
import Photoshop from '../assets/PhotoshopIcon.svg';

{ /* import PortfolioGonzales from '../Components/PortfolioGonzales.jsx'; */}

const TeamPortfolioGonzales = () => {

  return (
  <div className="min-h-screen relative">  
    <div className="ml-28 mt-[1%]">
            <p className="text-[22rem] text-[#FFFFFF] text-stroke leading-[0.7]">
              Hello, <br /> I'm <span className="text-[#FF4A4A]">Gonzales.</span>
            </p>
    
            <p className="max-w-[850px] mx-auto text-[2.5rem] text-[#fff] text-left ml-5 mt-[3%]">
              I’m a 3rd year student of CVSU, I have a passion for graphic design and illustrations.
              I always try to add my own touch on every creative project I take on.
            </p>
    
            <div className="flex mt-[3%] gap-6">
              <div>
                <p className="max-w-[220px] mx-auto text-[2.5rem] text-[#fff] text-left ml-5 leading-[3]">
                  Web Designing <br />
                  Graphic Design <br />
                  Illustration <br />
                  UI/UX <br />
                  <p className='text-strokesmall'> <span className='text-[#ff4a4a]'> Personal </span> Skills </p>
                </p>
              </div>
    
              <div className="flex flex-col gap-4 mt-[2.5%]">
    
                {/* Stat 1 */}
                <div className="w-120 ml-15 h-7 bg-white relative rounded ">
                  <div
                    className="absolute top-0 left-0 h-7 bg-gradient-to-r from-[#EC1717] to-[#EE9D53] "
                    style={{ width: '60%' }}
                  ></div>
                </div>
                
                {/* Stat 2 */}
                <div className="w-120 ml-15 h-7 bg-white relative mt-[14%] rounded">
                  <div
                    className="absolute top-0 left-0 h-7 bg-gradient-to-r from-[#EC1717] to-[#EE9D53] "
                    style={{ width: '40%' }}
                  ></div>
                </div>
                
                {/* Stat 3 */}
                <div className="w-120 ml-15 h-7 bg-white relative mt-[14%] rounded">
                  <div
                    className="absolute top-0 left-0 h-7 bg-gradient-to-r from-[#EC1717] to-[#EE9D53] "
                    style={{ width: '80%' }}
                  ></div>
                </div>
                
                {/* Stat 4 */}
                <div className="w-120 h-7 ml-15 bg-white relative mt-[14%] rounded">
                  <div
                    className="top-0 left-0 h-7 bg-gradient-to-r from-[#EC1717] to-[#EE9D53]"
                    style={{ width: '60%' }}
                  ></div>
                </div>
    
                
              </div>
    
              <div>
                <p className="max-w-[220px] mx-auto text-[2.5rem] text-[#fff] text-left ml-5 leading-[3]">
                  60% <br />
                  40% <br />
                  80% <br />
                  60% <br />
                </p>
              </div>
    
              <img src={Gonzales} alt="BalatayoImage" className="h-[665px] w-[665px] ml-[10%] mt-[-11%]" />
    
            </div>
    </div>
    
          <div className="flex ml-[6%] h-[80px] w-[90%] bg-[#fff]/15 backdrop-blur-md rounded-lg border-3 border-[#fff]/5 shadow-xl mb-30">
    
            <div className='flex flex-row space-x-4 h-12 mt-3 ml-5'> 
              <button className="flex items-center bg-[#F1E167] text-[#24242F] p-2 pl-3 rounded-xl w-42">
                <img src={Creativity} alt="About Us" className="h-8 w-8" />
                <span className="ml-5 text-[1.4rem]"> Creativity </span>
              </button>
            </div>
    
            <div className='flex flex-row space-x-4 h-12 mt-3 ml-5'> 
              <button className="flex items-center bg-[#EF7676] text-[#24242F] p-2 rounded-xl w-45">
                <img src={Adaptability} alt="About Us" className="h-8 w-8" />
                <span className="ml-5 text-[1.4rem]"> Adaptability </span>
              </button>
            </div>
    
            <div className='flex flex-row space-x-4 h-12 mt-3 ml-5'> 
              <button className="flex items-center bg-[#A6FADF] text-[#24242F] p-2 pl-5 rounded-xl w-85">
                <img src={TeamworkAndCollaboration} alt="About Us" className="h-8 w-8" />
                <span className="ml-5 text-[1.4rem]"> Teamwork and Collaboration </span>
              </button>
            </div>
          </div>
    
          <div className='flex mt-[3%] mb-[1%]'>
              <p className='text-strokesmall className="max-w-[220px] mx-auto text-[2.5rem] text-[#fff]  ml-[6.2%] '> <span className='text-[#ff4a4a]'> Find </span> me in </p>
    
              <p className='text-strokesmall className="max-w-[220px] mx-auto text-[2.5rem] text-[#fff]  ml-[65%] '> Primary Expertise </p>
          </div>
    
          <div className='flex gap-5 ml-[6%]'>
            <div className="flex h-[80px] w-[4%] bg-[#fff]/15 backdrop-blur-md rounded-lg border-3 border-[#fff]/5 shadow-xl mb-30"> <img src={instagramIcon} alt="Logo" className="h-15 w-15 pl-4 pt-4" />
            </div>
    
            <div className="flex h-[80px] w-[4%] bg-[#fff]/15 backdrop-blur-md rounded-lg border-3 border-[#fff]/5 shadow-xl mb-30"> <img src={facebookIcon} alt="Logo" className="h-15 w-15 pl-4 pt-4" />
            </div>
    
            <div className="flex h-[80px] w-[4%] bg-[#fff]/15 backdrop-blur-md rounded-lg border-3 border-[#fff]/5 shadow-xl mb-30"> <img src={linkedinIcon} alt="Logo" className="h-15 w-15 pl-4 pt-4" />
            </div>
    
            <div className="flex h-[80px] w-[4%] bg-[#fff]/15 backdrop-blur-md rounded-lg border-3 border-[#fff]/5 shadow-xl mb-30 ml-[56.5%]"> <img src={Aseprite} alt="Logo" className="h-15 w-15 pl-4 pt-4" />
            </div>
    
            <div className="flex h-[80px] w-[4%] bg-[#fff]/15 backdrop-blur-md rounded-lg border-3 border-[#fff]/5 shadow-xl mb-30"> <img src={AdobeIllustrator} alt="Logo" className="h-15 w-15 pl-4 pt-4" />
            </div>
    
            <div className="flex h-[80px] w-[4%] bg-[#fff]/15 backdrop-blur-md rounded-lg border-3 border-[#fff]/5 shadow-xl mb-30"> <img src={Procreate} alt="Logo" className="h-15 w-15 pl-4 pt-4" />
            </div>
    
            <div className="flex h-[80px] w-[4%] bg-[#fff]/15 backdrop-blur-md rounded-lg border-3 border-[#fff]/5 shadow-xl mb-30"> <img src={Figma} alt="Logo" className="h-15 w-15 pl-4 pt-4" />
            </div>
    
            <div className="flex h-[80px] w-[4%] bg-[#fff]/15 backdrop-blur-md rounded-lg border-3 border-[#fff]/5 shadow-xl mb-30"> <img src={Photoshop} alt="Logo" className="h-15 w-15 pl-4 pt-4" />
            </div>
          </div>
  </div>

  
  );
};

export default TeamPortfolioGonzales;