import React from 'react';
import Header from '../Components/Header.jsx';
import Footer from '../Components/Footer.jsx';
import Rocket from '../assets/Rocket.png';
import PersonIcon from '../assets/Person.svg';
import { Link } from 'react-router-dom';



const ProjectsPage = () => {
  return (
    <div div className="homepage-bg min-h-screen">
      <Header />

      <div>
        <p className='text-[clamp(4rem,18vw,25rem)] text-[#FFFFFF] text-strokesmall ml-[3%]'> PROJECTS </p>
        <p className='max-w-[300px] mx-auto text-[1.2rem] text-[#fff] text-left ml-[4%] mt-[3%] md:text-[1.8rem] md:mt-[-2%] md:max-w-[600px] lg:mt-[-5%] lg:text-[2rem] lg:max-w-[700px] xl:text-[2.2rem] xl:max-w-[750px] 2xl:text-[2.8rem] 2xl:max-w-[2000px]'> 
          The 3Minds Team has worked on several projects together. Below are some of the school activities and projects they’ve completed as a group.
        </p>

        <div className='flex gap-1 justify-center mt-[10%] mb-[-10%] md:mb-[3%] lg:mb-[2%] 2xl:mb-[4%]'>
          <Link to="/balatayoprojects" >   
            <button className='h-5 w-5 bg-[#5878E0] rounded-sm border-3 md:h-10 md:w-10 2xl:h-15 2xl:w-15'> 
              <img src={PersonIcon} alt="Logo" className="h-3 pl-[1px] mt-[0.6%] md:pl-[3px] md:h-7 2xl:h-11" />
            </button>
          </Link>
  
          <Link to="/abreuprojects" >  
            <button className='h-5 w-5 bg-[#F1E167] rounded-sm border-3  md:h-10 md:w-10 2xl:h-15 2xl:w-15'> 
              <img src={PersonIcon} alt="Logo" className="h-3 pl-[1px] md:pl-[3px] mt-[0.6%] md:h-7 2xl:h-11" />
            </button>
          </Link>
  
          <Link to="/gonzalesprojects" >  
            <button className='h-5 w-5 bg-[#FF4A4A] rounded-sm border-3  md:h-10 md:w-10 2xl:h-15 2xl:w-15'>
              <img src={PersonIcon} alt="Logo" className="h-3 pl-[1px] mt-[0.6%] md:pl-[3px] md:h-7 2xl:h-11" />
            </button>
          </Link>
        </div>

        <div className="m-[2%] h-[400px] w-[96%] bg-[#fff]/15 backdrop-blur-md rounded-lg border-3 border-[#8F88EF]/40 shadow-xl mt-40 md:h-[500px] lg:h-[800px] xl:h-[850px] 2xl:h-[1000px] ">
        </div>
  
        <div className="m-[2%] h-[400px] w-[96%] bg-[#fff]/15 backdrop-blur-md rounded-lg border-3 border-[#8F88EF]/40 shadow-xl mt-10 md:h-[500px] lg:h-[800px] xl:h-[850px] 2xl:h-[1000px]">
        
        </div>
  
        <div className="m-[2%] h-[400px] w-[96%] bg-[#fff]/15 backdrop-blur-md rounded-lg border-3 border-[#8F88EF]/40 shadow-xl mt-10 mb-[5%] md:h-[500px] lg:h-[800px] xl:h-[850px] 2xl:h-[1000px]">
        </div>


      </div>

      <div className="flex flex-col items-center mt-[15%] 2xl:mt-[10%]">
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

export default ProjectsPage;
