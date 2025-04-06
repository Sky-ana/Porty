import React from 'react';
import { Link } from 'react-router-dom';
import headerLogo from '../assets/3minds.png';
import homeIcon from '../assets/Home.png';
import aboutUsIcon from '../assets/2.png';
import teamMemberIcon from '../assets/4.png';
import projectsIcon from '../assets/1.png';

const Header = () => {
  return (
    <header className="flex items-center justify-between px-4 py-2 mt-[1%] sm:px-6 md:px-8 lg:px-10">

      <div className="flex items-center flex-shrink-0">
        <img 
          src={headerLogo} 
          alt="3Minds Logo" 
          className="h-10 w-10  mr-3 ml-[-2%] sm:h-14 sm:w-14 md:h-16 md:w-16 lg:h-18 lg:w-18 "
        />
      </div>


      <div className="flex-1">
        <div className="border-t-[3px] border-white h-2 w-[98%] md:w-[98%] lg:w-[98%] xl:w-[98%] xl:border-t-[5px] 2xl:w-[98%] 2xl:border-t-[6px]" />
      </div>



      <nav className="flex items-center space-x-0 sm:space-x-3 md:space-x-4 lg:space-x-5">
        <Link to="/" className="p-1 hover:opacity-80 transition-opacity">
          <img 
            src={homeIcon} 
            alt="Home" 
            className="h-10 w-10 sm:h-10 sm:w-10 md:h-15 md:w-12"
          />
        </Link>
        <Link to="/about" className="p-1 hover:opacity-80 transition-opacity">
          <img 
            src={aboutUsIcon} 
            alt="About Us" 
            className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12"
          />
        </Link>
        <Link to="/team" className="p-1 hover:opacity-80 transition-opacity">
          <img 
            src={teamMemberIcon} 
            alt="Team" 
            className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12"
          />
        </Link>
        <Link to="/projects" className="p-1 hover:opacity-80 transition-opacity">
          <img 
            src={projectsIcon} 
            alt="Projects" 
            className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12"
          />
        </Link>
      </nav>
    </header>
  );
};

export default Header;
