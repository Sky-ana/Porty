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
import firstPersonIcon from '../assets/Aperson.svg';
import secondPersonIcon from '../assets/Bperson.svg';
import thirdPersonIcon from '../assets/Gperson.svg';
import PersonIcon from '../assets/Person.svg';


const TeamPage = () => {
  return (
    <div className="homepage min-h-screen relative">
      <Header />

      <p className='text-[clamp(5rem,20vw,25rem)] leading-15 text-[#FFFFFF] text-strokesmall ml-[3%] mt-[8%] text-center 2xl:leading-55'> <span className='text-[#F49959]'>3</span>MINDS Team</p>

      <div className='flex gap-2 justify-center mt-[10%] mb-[-10%] md:mb-[3%] lg:mb-[2%] 2xl:mb-[4%]'>
        <Link to="/balatayo" >   
          <button className='h-5 w-5 bg-[#5878E0] rounded-sm border-3 md:h-10 md:w-10 2xl:h-15 2xl:w-15'> 
            <img src={PersonIcon} alt="Logo" className="h-2 pl-[3px] mt-[0.6%] md:h-7 2xl:h-11" />
          </button>
        </Link>

        <Link to="/abreu" >  
          <button className='h-5 w-5 bg-[#F1E167] rounded-sm border-3 md:h-10 md:w-10 2xl:h-15 2xl:w-15'> 
            <img src={PersonIcon} alt="Logo" className="h-2 pl-[3px] mt-[0.6%] md:h-7 2xl:h-11" />
          </button>
        </Link>

        <Link to="/gonzales" >  
          <button className='h-5 w-5 bg-[#FF4A4A] rounded-sm border-3 md:h-10 md:w-10 2xl:h-15 2xl:w-15'>
            <img src={PersonIcon} alt="Logo" className="h-2 pl-[3px] mt-[0.6%] md:h-7 2xl:h-11" />
          </button>
        </Link>
      </div>

      <Team />
      <br /> 
      <br /> 
      <Carousel/>

      <p className='text-[clamp(1.5rem,15vw,25rem)] text-[#FFFFFF] text-strokesmall mt-[30%] text-center 2xl:mt-[10%]'> LOGO BREAKDOWN </p>
      <div className='flex justify-center'> 
          <div className="relative">
            <img src={Blueprint} alt="Blueprint" className="h-[350px] w-[150px] rounded-sm object-cover md:h-[550px] md:w-[350px] lg:h-[750px] lg:w-[450px] xl:h-[750px] xl:w-[550px] 2xl:h-[1200px] 2xl:w-[1000px]"/>
            
            <div className="absolute top-5 left-19 transform -translate-x-1/2 flex gap-2 md:left-45 lg:left-57 xl:left-72 2xl:left-135 2xl:top-15">
              <img src={Logo} alt="Logo" className="w-auto h-[75px] md:h-[180px] lg:h-[250px] xl:h-[280px] 2xl:h-[500px]"/>
            </div>
            
            <p className="absolute top-[110px] left-2 text-white text-[0.8rem] text-center leading-[0.9] max-w-[140px] md:text-[1.5rem] md:max-w-[320px] md:left-4 md:top-[200px] lg:text-[1.8rem] lg:max-w-[420px] lg:left-4 lg:top-[320px] xl:max-w-[520px] 2xl:text-[2.8rem] 2xl:max-w-[720px] 2xl:left-35 2xl:top-[580px]">
              The "3MINDS" logo represents collaboration, creativity, and innovation.
              The three distinct sections of the logo symbolize three different perspectives or ideas coming together to form a cohesive and strong foundation.
              The blocky, pixel-art style gives it a modern yet nostalgic feel, reminiscent of digital creativity and problem-solving.
            </p>

            <div className="absolute bottom-8 left-19 transform -translate-x-1/2 flex gap-0.2 top-[310px] md:left-45 md:top-[480px] md:gap-2 lg:left-57 lg:top-[650px] lg:gap-3 xl:left-72 2xl:left-130 2xl:top-[1000px] 2xl:gap-5">
              <div className="w-12 h-5 bg-[#78140A] text-white border rounded-sm text-[0.8rem] pl-1 md:w-25 md:h-8 md:text-[1.5rem] md:pl-3 lg:w-30 lg:h-11 lg:text-[1.8rem] lg:pl-3 2xl:w-45 2xl:h-17 2xl:text-[2.8rem] 2xl:pl-4">
                #78140A
              </div>
              <div className="w-12 h-5 bg-[#EE9D53]  text-white border rounded-sm text-[0.8rem] pl-1 md:w-25 md:h-8 md:text-[1.5em] md:pl-3 lg:w-30 lg:h-11 lg:text-[1.8rem] lg:pl-3 2xl:w-45 2xl:h-17 2xl:text-[2.8rem] 2xl:pl-4">
                #EE9D53
              </div>
              <div className="w-12 h-5 bg-[#1E4C88] text-white border rounded-sm text-[0.8rem] pl-1 md:w-25 md:h-8 md:text-[1.5em] md:pl-3 lg:w-30 lg:h-11 lg:text-[1.8rem] lg:pl-3 2xl:w-45 2xl:h-17 2xl:text-[2.8rem] 2xl:pl-4">
                #1E4C88
              </div>
            </div>
        </div>

        <div className='flex flex-col'> 
          <div className="flex flex-col gap-1.5">
            <div className="relative">
              <img src={Blueprint} alt="Blueprint" className="h-[100px] w-[135px] ml-2 rounded-sm object-cover md:h-[250px] md:w-[350px] lg:h-[290px] lg:w-[450px] xl:h-[290px] xl:w-[550px] 2xl:h-[450px] 2xl:w-[800px]" />

              <div className="absolute inset-5 flex flex-col items-center top-2 left-5 md:top-[40px]">
                <div className="flex">
                  <img src={Yellow} alt="Logo" className="w-10 h-10 md:w-25 md:h-25 lg:w-32 lg:h-32 2xl:w-52 2xl:h-52"/>
                  <img src={Blue} alt="Logo" className="w-10 h-10 md:w-25 md:h-25 lg:w-32 lg:h-32 2xl:w-52 2xl:h-52"/>
                  <img src={Red} alt="Logo" className="w-10 h-10 md:w-25 md:h-25 lg:w-32 lg:h-32 2xl:w-52 2xl:h-52"/>
                </div>
                <p className=" text-white text-center text-[0.8rem] leading-2 max-w-[650px] md:text-[1.5rem] md:leading-5  lg:text-[1.8rem] lg:leading-7  2xl:text-[2.8rem] 2xl:leading-9">
                  Each color symbolizes a member's favorite color, serving as a personal representation.
                </p>
              </div>
            </div>

            <div className="relative">
              <img src={Blueprint} alt="Blueprint" className="h-[243px] w-[135px] ml-2 rounded-sm object-cover md:w-[350px] md:h-[290px] lg:h-[450px] lg:w-[450px] xl:h-[450px] xl:w-[550px] 2xl:h-[743px] 2xl:w-[800px]" />

              <p className='absolute bottom-40 left-1 w-full text-white text-center leading-9 text-[3rem] text-strokesmall md:text-[6rem] md:leading-5  md:bottom-55 lg:bottom-70 lg:text-[9rem] 2xl:bottom-130 2xl:text-[16rem]'>  <span className='text-[#F49958]'> 3</span>MINDS </p>

              <p className="absolute bottom-0 left-1 w-full text-white p-4 text-center leading-2.5 text-[0.8rem] md:text-[1.5rem] md:leading-5  md:bottom-2 lg:text-[1.8rem] lg:leading-7  lg:bottom-15 2xl:text-[2.8rem] 2xl:leading-9  2xl:bottom-40 2xl:max-w-[750px] 2xl:left-5">
                The bold, blocky font reflects strength and unity, with the number "3" representing the 3 Members. The contrast in color emphasizes the dynamic nature of the brand.
              </p>
            </div>

          </div>
        </div>

      </div>



      <div className="ml-[2%] h-[200px] w-[95%] bg-[#fff]/10 backdrop-blur-md rounded-lg border-2 border-[#8F88EF]/40 shadow-xl mt-10 xl:h-[240px] 2xl:h-[380px] 2xl:mt-50">
        <div className='flex ml-[2%] mt-[2%] p-2  lg:mt-[1%] xl:mt-[0.8%]'>
          <img src={secondPersonIcon} alt="Logo" className="h-5 w-5 lg:mt-[0.8%] xl:mt-[0.7%] 2xl:h-8 2xl:w-8 2xl:mt-[0.5%]" />
          <p className='mx-2 text-[1.4rem] text-[#Fff] mt-[-1%] ml-10 lg:mt-[-0.5%] lg:text-[1.8rem] xl:text-[2rem] 2xl:text-[3.2rem]'> <span className='text-[#5878E0]'> Balatayo, </span> Brielle Edrian A. </p>
        </div>

        <div className='flex ml-[2%] mt-[6%]'>
          <img src={Email} alt="Logo" className="h-5 w-5 mt-[-3.5%] ml-2 2xl:h-8 2xl:w-8 lg:mt-[-5%] 2xl:mt-[-4.7%]" />
          <p className='mx-2 text-[1.2rem] text-[#Fff] mt-[-4%] ml-10 lg:mt-[-5.5%] xl:text-[1.8rem] 2xl:text-[2.9rem]'> BryleBalatayo@gmail.com </p>
        </div>

        <div className='flex ml-[2%] mt-[3%]'>
          <img src={contactIcon} alt="Logo" className="h-5 w-5 mt-[-2%] ml-2 lg:mt-[-4%] xl:mt-[-3.7%] 2xl:h-8 2xl:w-8 " />
          <p className='mx-2 text-[1.2rem] text-[#Fff] mt-[-2.5%] ml-10 lg:mt-[-4.3%] xl:text-[1.8rem] 2xl:text-[2.9rem] xl:mt-[-4.6%]'> +63 915 340 6553 </p>
        </div>

        <div className='flex ml-[4%] mt-[3%]'>
          <img src={Address} alt="Logo" className="h-5 w-5 mt-[-1.5%] ml-[-1%] lg:mt-[-3%] xl:mt-[-3.5%] xl:ml-[-1.5%] 2xl:h-8 2xl:w-8" />
          <p className='mx-2 text-[1.2rem]  text-[#Fff] mt-[-2.5%] ml-8 max-w-[800px] lg:mt-[-3.5%] xl:text-[1.8rem] 2xl:text-[2.9rem] xl:mt-[-4.5%]'> Acacia Townhomes Toclong Kawit Cavite </p>
          
        </div>
      </div>

      <div className="ml-[2%] h-[200px] w-[95%] bg-[#fff]/10 backdrop-blur-md rounded-lg border-2 border-[#8F88EF]/40 shadow-xl mt-5    xl:h-[240px] 2xl:h-[380px]">
      <div className='flex ml-[2%] mt-[2%] p-2  lg:mt-[1%]'>
          <img src={firstPersonIcon} alt="Logo" className="h-5 w-5 lg:mt-[0.8%] xl:mt-[0.7%] 2xl:h-8 2xl:w-8 2xl:mt-[0.5%]" />
          <p className='mx-2 text-[1.4rem] text-[#Fff] mt-[-1%] ml-10 lg:mt-[-0.5%] lg:text-[1.8rem] xl:text-[2rem] 2xl:text-[3.2rem]'> <span className='text-[#F1E167]'> Abreu, </span> Xyrill John F. </p>
        </div>

        <div className='flex ml-[2%] mt-[6%]'>
          <img src={Email} alt="Logo" className="h-5 w-5 mt-[-3.5%] ml-2 lg:mt-[-5%] 2xl:h-8 2xl:w-8 2xl:h-9 2xl:mt-[-4.7%]" />
          <p className='mx-2 text-[1.2rem] text-[#Fff] mt-[-4%] ml-10 lg:mt-[-5.5%] xl:text-[1.8rem] 2xl:text-[2.9rem]'> Xyrilljohnabreu25@gmail.com </p>
        </div>

        <div className='flex ml-[2%] mt-[3%]'>
          <img src={contactIcon} alt="Logo" className="h-5 w-5 mt-[-2%] ml-2 lg:mt-[-4%] xl:mt-[-3.7%] 2xl:h-8 2xl:w-8 " />
          <p className='mx-2 text-[1.2rem] text-[#Fff] mt-[-2.5%] ml-10 lg:mt-[-4.3%] xl:text-[1.8rem] 2xl:text-[2.9rem] xl:mt-[-4.6%]'> +63 942 216 9425 </p>
        </div>

        <div className='flex ml-[2%] mt-[3%]'>
        <img src={Address} alt="Logo" className="h-5 w-5 mt-[-1.5%] ml-2 lg:mt-[-3%] xl:mt-[-3.5%] 2xl:h-8 2xl:w-8" />
        <p className='mx-2 text-[1.2rem]  text-[#Fff] mt-[-2.5%] ml-10 max-w-[900px] lg:mt-[-3.5%] xl:text-[1.8rem] 2xl:text-[2.9rem] xl:mt-[-4.5%]'> 230 Medrano Comp. Alapan 2B, Imus City, Cavite </p>
        </div>
      </div>

      <div className="ml-[2%] h-[200px] w-[95%] bg-[#fff]/10 backdrop-blur-md rounded-lg border-2 border-[#8F88EF]/40 shadow-xl mt-5  md:h-[210px]  xl:h-[240px] 2xl:h-[380px]">
      <div className='flex ml-[2%] mt-[2%] p-2  lg:mt-[1%]'>
          <img src={thirdPersonIcon} alt="Logo" className="h-5 w-5 lg:mt-[0.8%] xl:mt-[0.7%] 2xl:h-8 2xl:w-8 2xl:mt-[0.5%]" />
          <p className='mx-2 text-[1.4rem] text-[#Fff] mt-[-1%] ml-10 lg:mt-[-0.5%] lg:text-[1.8rem] xl:text-[2rem] 2xl:text-[3.2rem]'> <span className='text-[#FF4A4A]'> Gonzales, </span> Michael Rhoi L. </p>
        </div>

        <div className='flex ml-[2%] mt-[6%]'>
          <img src={Email} alt="Logo" className="h-5 w-5 mt-[-3.5%] ml-2 lg:mt-[-5%] 2xl:h-8 2xl:w-8 2xl:h-9 2xl:mt-[-4.7%]" />
          <p className='mx-2 text-[1.2rem] text-[#Fff] mt-[-4%] ml-10 lg:mt-[-5.5%] xl:text-[1.8rem] 2xl:text-[2.9rem]'> Michaelrhoigonzales@gmail.com </p>
        </div>

        <div className='flex ml-[2%] mt-[3%]'>
          <img src={contactIcon} alt="Logo" className="h-5 w-5 mt-[-2%] ml-2 lg:mt-[-4%] xl:mt-[-3.7%] 2xl:h-8 2xl:w-8 " />
          <p className='mx-2 text-[1.2rem] text-[#Fff] mt-[-2.5%] ml-10 lg:mt-[-4.3%] xl:text-[1.8rem] 2xl:text-[2.9rem] xl:mt-[-4.6%]'> +63 908 552 7790 </p>
        </div>

        <div className='flex ml-[2%] mt-[3%]'>
          <img src={Address} alt="Logo" className="h-5 w-5 mt-[-1.5%] ml-2 lg:mt-[-3%] xl:mt-[-3.5%] 2xl:h-8 2xl:w-8" />
          <p className='mx-2 text-[1.2rem]  text-[#Fff] mt-[-2.5%] ml-10 max-w-[800px] lg:mt-[-3.5%] xl:text-[1.8rem] 2xl:text-[2.9rem] xl:mt-[-4.5%]'> Sitio Pulo Anabu 2C Imus city, Cavite </p>
        </div>
        
      </div>

      <div className="flex flex-col items-center mt-[5%] 2xl:mt-[10%]">
        <button className="flex items-center"> 
          <img 
            src={Rocket} 
            alt="Home" 
            className="h-[50px] w-[50px] ml-3 sm:h-[50px] sm:w-[50px] md:h-[60px] md:w-[60px] lg:h-[70px] lg:w-[70px] xl:h-[70px] xl:w-[70px] 2xl:h-[80px] 2xl:w-[80px]" 
          /> 
        </button>
        <p className="text-[1.2rem] text-[#FFFFFF] leading-[1.2] mb-10 sm:text-[1.5rem] md:text-[1.5rem] lg:text-[2rem] xl:text-[2.1rem] 2xl:text-[2.5rem]">
          Back on top
        </p>
      </div>

      <Footer />
    </div>
  );
};

export default TeamPage;