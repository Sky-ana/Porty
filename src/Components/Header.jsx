import React from 'react';
import { Link } from 'react-router-dom';
import headerLogo from '../assets/3minds.png';
import homeIcon from '../assets/Home.png';
import aboutUsIcon from '../assets/2.png';
import teamMemberIcon from '../assets/4.png';
import projectsIcon from '../assets/1.png';

{
  /*
    import Header from '../Components/Header.jsx';
  */
}

const Header = () => {
  return (
    <div className="flex items-center ml-[1.5%] w-[100%]">
      <img src={headerLogo} alt="Logo" className="h-[72px] w-[72px] mr-4 mt-[1%] " />
      <hr className="border-t-[6px] border-[#FFFFFF] h-2 w-[80%]" />
      <div className='flex items-center '>
        <Link to="/">
          <img src={homeIcon} alt="Home" className="h-[64px] w-[90%] ml-3" />
        </Link>
        <Link to="/about">
          <img src={aboutUsIcon} alt="About Us" className="h-[48px] w-[90%] ml-3" />
        </Link>
        <Link to="/team">
          <img src={teamMemberIcon} alt="Team" className="h-[48px] w-[90%] ml-3" />
        </Link>
        <Link to="/projects">
          <img src={projectsIcon} alt="Projects" className="h-[48px] w-[48px] ml-3" />
        </Link>
      </div>
    </div>

  );
};

export default Header;
