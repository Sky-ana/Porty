import React from 'react';
import Header from '../Components/Header.jsx';
import Footer from '../Components/Footer.jsx';
import Carousel from '../Components/Carousel.jsx';
import Team from '../Components/Team.jsx';
import { Link } from 'react-router-dom';

import Blueprint from '../assets/Blueprint.png';
import Logo from '../assets/3minds.png';
import Red from '../assets/Red.png';
import Yellow from '../assets/Yellow.png';
import Blue from '../assets/Blue.png';
import Rocket from '../assets/Rocket.png';
import contactIcon from '../assets/Phone.svg';
import Address from '../assets/Address.svg';
import Email from '../assets/Email.svg';
import linkedinIcon from '../assets/Linkedin.png';
import instagramIcon from '../assets/Instagram.png';
import facebookIcon from '../assets/Facebook.png';
import firstPersonIcon from '../assets/Aperson.svg';
import secondPersonIcon from '../assets/Bperson.svg';
import thirdPersonIcon from '../assets/Gperson.svg';
import PersonIcon from '../assets/Person.svg';


const TeamPage = () => {
  return (
    <div className="homepage min-h-screen relative">
      <Header />

      <p className='text-[22rem] text-[#FFFFFF] text-stroke ml-[3%]'> <span className='text-[#F49959]'>3</span>MINDS Team</p>

      <div className='flex gap-2 justify-center'>
        <Link to="/balatayo" >   
          <button className='h-10 w-10 bg-[#5878E0] rounded-sm border-3'> 
            <img src={PersonIcon} alt="Logo" className="h-7 pl-[3px]  ml-[2%] mt-[0.6%] " />
          </button>
        </Link>

        <Link to="/abreu" >  
          <button className='h-10 w-10 bg-[#F1E167] rounded-sm border-3'> 
            <img src={PersonIcon} alt="Logo" className="h-7 pl-[3px]  ml-[2%] mt-[0.6%] " />
          </button>
        </Link>

        <Link to="/gonzales" >  
          <button className='h-10 w-10 bg-[#FF4A4A] rounded-sm border-3'>
            <img src={PersonIcon} alt="Logo" className="h-7 pl-[3px]  ml-[2%] mt-[0.6%] " />
          </button>
        </Link>
      </div>

      <Team />
      <br /> <br /> <br /> <br /> <br /> <br />
      <Carousel/>

      <p className='text-[18rem] text-[#FFFFFF] text-stroke mt-[8%] text-center'> LOGO BREAKDOWN </p>
      <div className='flex justify-center'> 
          <div className="relative">
                <img src={Blueprint} alt="Blueprint" className="h-[800px] w-[1000px] ml-3 rounded-xl object-cover mr-[10px]"/>
                
                <div className="absolute top-10 left-1/2 transform -translate-x-1/2 flex gap-4">
                  <img src={Logo} alt="Logo" className="w-110 h-110" />
                </div>
                
                <p className="absolute top-[450px] left-10 text-white p-4 max-w-4xl text-[2.5rem] text-center leading-[0.9]">
                  The "3MINDS" logo represents collaboration, creativity, and innovation.
                  The three distinct sections of the logo symbolize three different perspectives or ideas coming together to form a cohesive and strong foundation.
                  The blocky, pixel-art style gives it a modern yet nostalgic feel, reminiscent of digital creativity and problem-solving.
                </p>

                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-5">
                  <div className="w-35 h-14 bg-[#78140A] pl-4 pt-0.5 text-white border rounded-md text-[2rem]">
                    #78140A
                  </div>
                  <div className="w-35 h-14 bg-[#EE9D53] pl-4 pt-0.5 text-white border rounded-md text-[2rem]">
                    #EE9D53
                  </div>
                  <div className="w-35 h-14 bg-[#1E4C88] pl-4 pt-0.5 text-white border rounded-md text-[2rem]">
                    #1E4C88
                  </div>
                </div>
        </div>

        <div className='flex flex-col'> 
          <div className="flex flex-col items-center gap-5">
          <div className="relative">
            <img src={Blueprint} alt="Blueprint" className="h-[370px] w-[700px] ml-3 rounded-xl object-cover" />
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="flex ">
                <img src={Yellow} alt="Logo" className="w-60 h-60 rounded-xl p-4" />
                <img src={Blue} alt="Logo" className="w-60 h-60 rounded-xl p-4" />
                <img src={Red} alt="Logo" className="w-60 h-60 rounded-xl p-4" />
              </div>
              <p className=" text-white text-center text-[2.5rem] leading-8 max-w-[600px] px-4">
                Each color represents the favorite colors of each member; these colors also differentiate them.
              </p>
            </div>
          </div>

          <div className="relative">
            <img src={Blueprint} alt="Blueprint" className="h-[400px] w-[700px] ml-3 rounded-xl object-cover" />

            <p className='absolute bottom-65 left-0 w-full text-white p-4 text-center leading-9 text-[9rem] text-strokesmall'>  <span className='text-[#F49958]'> 3</span>MINDS </p>

            <p className="absolute bottom-5 left-0 w-full text-white p-4 text-center leading-9 text-[2.5rem]">
              The bold, blocky font reflects strength and unity, with the number "3" representing teamwork and multiple perspectives working together. The contrast in color emphasizes the dynamic nature of the brand.
            </p>
          </div>

        </div>
    </div>

      </div>



      <div className="ml-[10%] h-[500px] w-[80%] bg-[#fff]/15 backdrop-blur-md rounded-lg border-3 border-[#8F88EF]/40 shadow-xl mt-40">
        <div className='flex ml-[2%] mt-[2%]'>
          <img src={secondPersonIcon} alt="Logo" className="h-20 w-20" />
          <p className='mx-2 text-[5rem] text-[#Fff] text-strokesmall mt-[-1.5%] ml-10'> <span className='text-[#5878E0]'> Balatayo, </span> Brielle Edrian A. </p>
        </div>

        <div className='flex ml-[2%] mt-[6%]'>
          <img src={Email} alt="Logo" className="h-10 w-10 mt-[-1.5%] " />
          <p className='mx-2 text-[3rem] text-[#Fff] mt-[-2.5%] ml-10'> BryleBalatayo@gmail.com </p>
        </div>

        <div className='flex ml-[2%] mt-[3%]'>
          <img src={contactIcon} alt="Logo" className="h-10 w-10 mt-[-1.5%] " />
          <p className='mx-2 text-[3rem] text-[#Fff] mt-[-2.5%] ml-10'> +63 915 340 6553 </p>
        </div>

        <div className='flex ml-[2%] mt-[3%]'>
          <img src={Address} alt="Logo" className="h-10 w-10 mt-[-1.5%] " />
          <p className='mx-2 text-[3rem] text-[#Fff] mt-[-2.5%] ml-10'> Acacia Townhomes Toclong Kawit Cavite </p>
          <img src={linkedinIcon} alt="Logo" className="h-15 w-15 mt-[0.5%] ml-[45%] " />
        </div>
      </div>

      <div className="ml-[10%] h-[500px] w-[80%] bg-[#fff]/15 backdrop-blur-md rounded-lg border-3 border-[#8F88EF]/40 shadow-xl mt-10">
      <div className='flex ml-[2%] mt-[2%]'>
          <img src={firstPersonIcon} alt="Logo" className="h-20 w-20" />
          <p className='mx-2 text-[5rem] text-[#Fff] text-strokesmall mt-[-1.5%] ml-10'> <span className='text-[#F1E167]'> Abreu, </span> Xyrill John F. </p>
        </div>

        <div className='flex ml-[2%] mt-[6%]'>
          <img src={Email} alt="Logo" className="h-10 w-10 mt-[-1.5%] " />
          <p className='mx-2 text-[3rem] text-[#Fff] mt-[-2.5%] ml-10'> Xyrilljohnabreu25@gmail.com </p>
        </div>

        <div className='flex ml-[2%] mt-[3%]'>
          <img src={contactIcon} alt="Logo" className="h-10 w-10 mt-[-1.5%] " />
          <p className='mx-2 text-[3rem] text-[#Fff] mt-[-2.5%] ml-10'> +63 942 216 9425 </p>
        </div>

        <div className='flex ml-[2%] mt-[3%]'>
          <img src={Address} alt="Logo" className="h-10 w-10 mt-[-1.5%] " />
          <p className='mx-2 text-[3rem] text-[#Fff] mt-[-2.5%] ml-10'> 230 Medrano Comp. Alapan 2B, Imus City, Cavite </p>
          <img src={instagramIcon} alt="Logo" className="h-15 w-15 mt-[0.5%] ml-[38%] " />
        </div>
      </div>

      <div className="ml-[10%] h-[500px] w-[80%] bg-[#fff]/15 backdrop-blur-md rounded-lg border-3 border-[#8F88EF]/40 shadow-xl mt-10 mb-[5%]">
      <div className='flex ml-[2%] mt-[2%]'>
          <img src={thirdPersonIcon} alt="Logo" className="h-20 w-20" />
          <p className='mx-2 text-[5rem] text-[#Fff] text-strokesmall mt-[-1.5%] ml-10'> <span className='text-[#FF4A4A]'> Gonzales, </span> Michael Rhoi L. </p>
        </div>

        <div className='flex ml-[2%] mt-[6%]'>
          <img src={Email} alt="Logo" className="h-10 w-10 mt-[-1.5%] " />
          <p className='mx-2 text-[3rem] text-[#Fff] mt-[-2.5%] ml-10'> RhoiGonzales32@gmail.com </p>
        </div>

        <div className='flex ml-[2%] mt-[3%]'>
          <img src={contactIcon} alt="Logo" className="h-10 w-10 mt-[-1.5%] " />
          <p className='mx-2 text-[3rem] text-[#Fff] mt-[-2.5%] ml-10'> +63 908 552 7790 </p>
        </div>

        <div className='flex ml-[2%] mt-[3%]'>
          <img src={Address} alt="Logo" className="h-10 w-10 mt-[-1.5%] " />
          <p className='mx-2 text-[3rem] text-[#Fff] mt-[-2.5%] ml-10'> Sitio Pulo Anabu 2C Imus city, Cavite </p>
          <img src={facebookIcon} alt="Logo" className="h-15 w-15 mt-[0.5%] ml-[40%] " />
          <img src={instagramIcon} alt="Logo" className="h-15 w-15 mt-[0.5%] ml-[1%] " />
          <img src={linkedinIcon} alt="Logo" className="h-15 w-15 mt-[0.5%] ml-[1%] " />
        </div>
        
      </div>

      <div className="flex flex-col items-center mt-20">
        <button className="flex items-center"> 
          <img src={Rocket} alt="Home" className="h-[95px] w-[95px] ml-3" /> 
        </button>
        <p className="text-[2.5rem] text-[#FFFFFF] leading-[1.2] mb-10">
          Back on top
        </p>
      </div>

      <Footer />
    </div>
  );
};

export default TeamPage;