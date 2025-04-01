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
        <p className='text-[22rem] text-[#FFFFFF] text-stroke ml-[3%]'> PROJECTS </p>
        <p className='max-w-[1800px] mx-auto text-[2.5rem] text-[#FFFFFF] leading-[1.2] mt-[-5%] ml-[3%]'> 
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>

        <div className='flex gap-2 ml-[3.5%] mt-[1%]'>
          <Link to="/balatayoprojects" >   
            <button className='h-10 w-10 bg-[#5878E0] rounded-sm border-3'>   
              <img src={PersonIcon} alt="Logo" className="h-7 pl-[3px]  ml-[2%] mt-[0.6%] " />
            </button>
          </Link>

          <Link to="/abreuprojects" >  
            <button className='h-10 w-10 bg-[#F1E167] rounded-sm border-3'>  
              <img src={PersonIcon} alt="Logo" className="h-7 pl-[3px]  ml-[2%] mt-[0.6%] " />
            </button>
          </Link>

          <Link to="/gonzalesprojects" >  
            <button className='h-10 w-10 bg-[#FF4A4A] rounded-sm border-3'> 
              <img src={PersonIcon} alt="Logo" className="h-7 pl-[3px]  ml-[2%] mt-[0.6%] " />
            </button>
          </Link>
        </div>

        <div className="ml-[10%] h-[900px] w-[80%] bg-[#fff]/15 backdrop-blur-md rounded-lg border-3 border-[#8F88EF]/40 shadow-xl mt-40">
        </div>
  
        <div className="ml-[10%] h-[900px] w-[80%] bg-[#fff]/15 backdrop-blur-md rounded-lg border-3 border-[#8F88EF]/40 shadow-xl mt-10">
        
        </div>
  
        <div className="ml-[10%] h-[900px] w-[80%] bg-[#fff]/15 backdrop-blur-md rounded-lg border-3 border-[#8F88EF]/40 shadow-xl mt-10 mb-[5%]">
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

export default ProjectsPage;
