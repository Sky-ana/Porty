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
      <div className=''>
        <hr className="flex justify-center flex-grow border-t-6 border-[#FFFFFF] h-2 w-[96%] ml-[40px]" />

        <div className='text-[#726E95] text-[25px]'>
          <div className='flex flex-row'> 
            <img src={contactIcon} alt="Logo" className="h-5 w-5 ml-[2%] mt-[1.4%]" />
            <p className='mt-[1%] ml-[2%]'> CONTACT US </p>
            <img src={headerLogo} alt="Logo" className="h-15 w-15 ml-[77%] mt-[1.4%]" />
            <p className='mt-[1%] ml-[0.5%] text-[50px] text-[#F49958]'> 3 </p> <p className=' text-[#FFFFFF] mt-[1%] text-[50px]'> Minds </p>
          </div>

          <div className='flex flex-row'> 
            <img src={firstPersonIcon} alt="Logo" className="h-5 w-5 ml-[2%] mt-[-1%]" />
            <p className='mt-[-1.3%] ml-[2%]'> ic.xyrilljohn.abreu@cvsu.edu.ph </p>
          </div>

          <div className='flex flex-row'> 
            <img src={secondPersonIcon} alt="Logo" className="h-5 w-5 ml-[2%] mt-[0.6%]" />
            <p className='mt-[0.3%] ml-[2%]'> ic.brielle.balatayo@cvsu.edu.ph </p>
          </div>

          <div className='flex flex-row'> 
            <img src={thirdPersonIcon} alt="Logo" className="h-5 w-5 ml-[2%] mt-[0.4%]" />
            <p className='mt-[0.1%] ml-[2%]'> ic.michaelrhoi.gonzales@cvsu.edu.ph </p>
          </div>

          <div className='flex flex-row'> 
            <img src={locationIcon} alt="Logo" className="h-5 w-5 ml-[2%] mt-[0.7%]" />
            <p className='mt-[0.3%] ml-[2%]'> Cavite Civic Center, Palico IV, Imus City, Cavite </p>
            <div className='flex flex-row space-x-4 ml-[62%] mb-10'>
              <img src={linkedinIcon} alt="Logo" className="h-10 ml-[2%]" />
              <img src={instagramIcon} alt="Logo" className="h-10 ml-[2%]" />
              <img src={facebookIcon} alt="Logo" className="h-10 ml-[2%]" />
            </div>
          </div>
        </div>
      </div>
  );
}

export default Footer;
