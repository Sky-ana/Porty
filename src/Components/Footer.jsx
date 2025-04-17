import headerLogo from '../assets/3minds.png';
import contactIcon from '../assets/Phone.svg';
import firstPersonIcon from '../assets/Aperson.svg';
import secondPersonIcon from '../assets/Bperson.svg';
import thirdPersonIcon from '../assets/Gperson.svg';
import locationIcon from '../assets/Location.png';
import linkedinIcon from '../assets/Linkedin.png';
import instagramIcon from '../assets/Instagram.png';
import facebookIcon from '../assets/Facebook.png';
import '../App.css';

{
  /*
    import Footer from '../Components/Footer.jsx';
  */
}


const Footer = () => {
  return (
      <div className='select-none'>

        <hr className="flex justify-center flex-grow border-t-3 border-[#FFFFFF] h-2 w-[90%] m-5 mb-[1%] sm:w-[90%] md:w-[95%] lg:w-[95%] xl:w-[97%] xl:mb-[0%] 2xl:w-[98%] 2xl:mb-[-1%]" />

        <div className='text-[#726E95] text-[25px] sm:ml-[1%] md:ml-[-1%] lg:ml-[-1%] xl:ml-[-1.5%]'>
          <div className='flex flex-row'> 
            <img src={contactIcon} alt="Logo" className="custom-pointer h-3 w-3 ml-[4%] mt-[4%] mb-[2%] md:h-5  md:w-5  md:mt-[2.5%] 2xl:h-7 2xl:w-7 transition delay-10 duration-200 ease-in-out hover:-translate-y-1 hover:scale-120 hover:opacity-75 cursor-pointer" />
            <p className='text-[1.2rem] mt-[2%] mb-[2%] ml-[4%] xl:text-[1.5rem] 2xl:text-[2rem] xl:mt-[2%]'> CONTACT US </p>
          </div>

          <div className='flex flex-row'> 
            <img src={firstPersonIcon} alt="Logo" className="custom-pointer h-3 w-3 ml-[4%] mt-[0.8%] md:h-4 md:w-4 md:mt-[-0.6%] xl:mt-[-0.5%] 2xl:h-6 2xl:w-6 2xl:mt-[-0.8%] transition delay-10 duration-200 ease-in-out hover:-translate-y-1 hover:scale-120 hover:opacity-75 cursor-pointer" />
            <p className='text-[1.2rem] mt-[-1.3%] ml-[4%] xl:text-[1.5rem] 2xl:text-[2rem]'> ic.xyrilljohn.abreu@cvsu.edu.ph </p>
          </div>

          <div className='flex flex-row'> 
            <img src={secondPersonIcon} alt="Logo" className="custom-pointer h-3 w-3 ml-[4%] mt-[1.8%]  md:h-4 md:w-4 md:mt-[1%] xl:mt-[1%] 2xl:h-6 2xl:w-6 2xl:mt-[0.8%] transition delay-10 duration-200 ease-in-out hover:-translate-y-1 hover:scale-120 hover:opacity-75 cursor-pointer" />
            <p className='text-[1.2rem] mt-[0.3%] ml-[4%] xl:text-[1.5rem] 2xl:text-[2rem]'> ic.brielle.balatayo@cvsu.edu.ph </p>
          </div>

          <div className='flex flex-row'> 
            <img src={thirdPersonIcon} alt="Logo" className="custom-pointer h-3 w-3 ml-[4%] mt-[1.8%]  md:h-4 md:w-4 md:mt-[1%] xl:mt-[1%] 2xl:h-6 2xl:w-6 2xl:mt-[0.6%] transition delay-10 duration-200 ease-in-out hover:-translate-y-1 hover:scale-120 hover:opacity-75 cursor-pointer" />
            <p className='text-[1.2rem] mt-[0.1%] ml-[4%] xl:text-[1.5rem] 2xl:text-[2rem]'> ic.michaelrhoi.gonzales@cvsu.edu.ph </p>
          </div>

          <div className='flex flex-row'> 
            <img src={locationIcon} alt="Logo" className="custom-pointer h-3 w-3 ml-[4%] mt-[2%] md:h-4 md:w-4 md:mt-[1%] xl:mt-[1%] 2xl:h-6 2xl:w-6 2xl:mt-[0.8%] transition delay-10 duration-200 ease-in-out hover:-translate-y-1 hover:scale-120 hover:opacity-75 cursor-pointer" />
            <p className='text-[1.2rem] mt-[0.3%] ml-[4%] mb-[2%] xl:text-[1.5rem] 2xl:text-[2rem]'> Cavite Civic Center, Palico IV, Imus City, Cavite </p>
          </div>
        </div>
      </div>
  );
}

export default Footer;
