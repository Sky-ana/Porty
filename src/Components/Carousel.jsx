import MindsIcon from '../assets/3Minds.svg';
import Creative from '../assets/Creative.svg';
import Pixel from '../assets/Pixel.svg';
import Responsive from '../assets/Responsive.svg';
import Figma from '../assets/Figma.svg';
import Person from '../assets/Person.svg';
import Portfolio from '../assets/Portfolio.svg';
import Frontend from '../assets/Frontend.svg';
import Backend from '../assets/Backend.svg';

import '../App.css';
{
  /*
    import Carousel from '../Components/Carousel.jsx';
  */
}


const Carousel = () => {
  return (
      <div className="overflow-hidden">
        <div className='flex flex-row gap-5 animate-scroll xl:gap-15'>

          <div className='flex flex-row space-x-4'> 
            <button className="flex items-center bg-[#F49958] text-[#24242F] p-2 pl-3 rounded-md w-30 h-8 sm:h-10 sm:rounded md:w-35 2xl:h-15 2xl:w-48 2xl:rounded-xl">
              <img src={MindsIcon} alt="About Us" className="h-5 w-8" />
              <span className="ml-5 text-[1.2rem] sm:text-[1.5rem] 2xl:text-[1.6rem] ">3Minds</span>
            </button>
          </div>

          <div className='flex flex-row space-x-4 '> 
            <button className="flex items-center bg-[#78E28F] text-[#24242F] p-2 rounded-sm  w-30 h-8 sm:h-10 sm:rounded md:w-38 2xl:h-15 2xl:w-40 2xl:rounded-xl">
              <img src={Creative} alt="About Us" className="h-5 w-8" />
              <span className="ml-5 text-[1.2rem] sm:text-[1.5rem] 2xl:text-[1.6rem] "> Creative </span>
            </button>
          </div>

          <div className='flex flex-row space-x-4 '> 
            <button className="flex items-center bg-[#F6AAEC] text-[#24242F] p-2 pl-5 rounded-sm w-30 h-8 sm:h-10 sm:rounded md:w-35 2xl:h-15 2xl:rounded-xl" >
              <img src={Pixel} alt="About Us" className="h-5 w-8" />
              <span className="ml-5 text-[1.2rem] sm:text-[1.5rem] 2xl:text-[1.6rem] "> Pixel </span>
            </button>
          </div>

          <div className='flex flex-row space-x-4 '> 
            <button className="flex items-center bg-[#A6FADF] text-[#24242F] p-2 pl-5 rounded-sm w-45 h-8 md:w-48 md:h-10 2xl:h-15 2xl:w-48 2xl:rounded-xl">
              <img src={Responsive} alt="About Us" className="h-5 w-8" />
              <span className="ml-5 text-[1.2rem] sm:text-[1.5rem] 2xl:text-[1.6rem] "> Responsive </span>
            </button>
          </div>

          <div className='flex flex-row space-x-4 '> 
            <button className="flex items-center bg-[#EF7676] text-[#24242F] p-2 pl-5 rounded-sm  w-35 h-8 md:w-40 md:h-10 2xl:h-15 2xl:rounded-xl">
              <img src={Figma} alt="About Us" className="h-5 w-8" />
              <span className="ml-5 text-[1.2rem] sm:text-[1.5rem] 2xl:text-[1.6rem] "> Figma </span>
            </button>
          </div>

          <div className='flex flex-row space-x-4 '> 
            <button className="flex items-center bg-[#FF4A4A] text-[#24242F] p-2 pl-5 rounded-sm w-40 h-8 md:w-42 md:h-10 2xl:h-15 2xl:w-48 2xl:rounded-xl">
              <img src={Person} alt="About Us" className="h-5 w-8" />
              <span className="ml-5 text-[1.2rem] sm:text-[1.5rem] 2xl:text-[1.6rem] "> Gonzales </span>
            </button>
          </div>

          <div className='flex flex-row space-x-4 '> 
            <button className="flex items-center bg-[#5878E0] text-[#24242F] p-2 pl-5 rounded-sm w-40 h-8 md:w-42 md:h-10 2xl:h-15 2xl:w-48 2xl:rounded-xl">
              <img src={Person} alt="About Us" className="h-5 w-8" />
              <span className="ml-5 text-[1.2rem] sm:text-[1.5rem] 2xl:text-[1.6rem] "> Balatayo </span>
            </button>
          </div>

          <div className='flex flex-row space-x-4 '> 
            <button className="flex items-center bg-[#F1E167] text-[#24242F] p-2 pl-5 rounded-sm w-35 h-8 md:w-42 md:h-10 2xl:h-15 2xl:rounded-xl">
              <img src={Person} alt="About Us" className="h-5 w-8" />
              <span className="ml-5 text-[1.2rem] sm:text-[1.5rem] 2xl:text-[1.6rem] "> Abreu </span>
            </button>
          </div>

          <div className='flex flex-row space-x-4 '> 
            <button className="flex items-center bg-[#f46ab6] text-[#24242F] p-2 pl-5 rounded-sm w-42 h-8 md:w-42 md:h-10 2xl:h-15 2xl:w-48 2xl:rounded-xl">
              <img src={Portfolio} alt="About Us" className="h-5 w-8" />
              <span className="ml-5 text-[1.2rem] sm:text-[1.5rem] 2xl:text-[1.6rem] "> Portfolio </span>
            </button>
          </div>

          <div className='flex flex-row space-x-4 '> 
            <button className="flex items-center bg-[#A969E1] text-[#24242F] p-2 pl-5 rounded-sm w-43 h-8 md:w-45 md:h-10 2xl:h-15 2xl:w-48 2xl:rounded-xl">
              <img src={Frontend} alt="About Us" className="h-5 w-8" />
              <span className="ml-5 text-[1.2rem] sm:text-[1.5rem] 2xl:text-[1.6rem] "> Frontend </span>
            </button>
          </div>

          <div className='flex flex-row space-x-4 '> 
            <button className="flex items-center bg-[#DEEDFF] text-[#24242F] p-2 pl-5 rounded-sm w-43 h-8 md:w-42 md:h-10 2xl:h-15 2xl:rounded-xl">
              <img src={Backend} alt="About Us" className="h-5 w-8" />
              <span className="ml-5 text-[1.2rem] sm:text-[1.5rem] 2xl:text-[1.6rem] "> Backend </span>
            </button>
          </div>


          {
            /* Duplicated Butons */
          }

          <div className='flex flex-row space-x-4'> 
            <button className="flex items-center bg-[#F49958] text-[#24242F] p-2 pl-3 rounded-md w-30 h-8 sm:h-10 sm:rounded md:w-35 2xl:h-15 2xl:w-48 2xl:rounded-xl">
              <img src={MindsIcon} alt="About Us" className="h-5 w-8" />
              <span className="ml-5 text-[1.2rem] sm:text-[1.5rem] 2xl:text-[1.6rem] ">3Minds</span>
            </button>
          </div>

          <div className='flex flex-row space-x-4 '> 
            <button className="flex items-center bg-[#78E28F] text-[#24242F] p-2 rounded-sm  w-30 h-8 sm:h-10 sm:rounded md:w-38 2xl:h-15 2xl:w-40 2xl:rounded-xl">
              <img src={Creative} alt="About Us" className="h-5 w-8" />
              <span className="ml-5 text-[1.2rem] sm:text-[1.5rem] 2xl:text-[1.6rem] "> Creative </span>
            </button>
          </div>

          <div className='flex flex-row space-x-4 '> 
            <button className="flex items-center bg-[#F6AAEC] text-[#24242F] p-2 pl-5 rounded-sm w-30 h-8 sm:h-10 sm:rounded md:w-35 2xl:h-15 2xl:rounded-xl" >
              <img src={Pixel} alt="About Us" className="h-5 w-8" />
              <span className="ml-5 text-[1.2rem] sm:text-[1.5rem] 2xl:text-[1.6rem] "> Pixel </span>
            </button>
          </div>

          <div className='flex flex-row space-x-4 '> 
            <button className="flex items-center bg-[#A6FADF] text-[#24242F] p-2 pl-5 rounded-sm w-45 h-8 md:w-48 md:h-10 2xl:h-15 2xl:w-48 2xl:rounded-xl">
              <img src={Responsive} alt="About Us" className="h-5 w-8" />
              <span className="ml-5 text-[1.2rem] sm:text-[1.5rem] 2xl:text-[1.6rem] "> Responsive </span>
            </button>
          </div>

          <div className='flex flex-row space-x-4 '> 
            <button className="flex items-center bg-[#EF7676] text-[#24242F] p-2 pl-5 rounded-sm  w-35 h-8 md:w-40 md:h-10 2xl:h-15 2xl:rounded-xl">
              <img src={Figma} alt="About Us" className="h-5 w-8" />
              <span className="ml-5 text-[1.2rem] sm:text-[1.5rem] 2xl:text-[1.6rem] "> Figma </span>
            </button>
          </div>

          <div className='flex flex-row space-x-4 '> 
            <button className="flex items-center bg-[#FF4A4A] text-[#24242F] p-2 pl-5 rounded-sm w-40 h-8 md:w-42 md:h-10 2xl:h-15 2xl:w-48 2xl:rounded-xl">
              <img src={Person} alt="About Us" className="h-5 w-8" />
              <span className="ml-5 text-[1.2rem] sm:text-[1.5rem] 2xl:text-[1.6rem] "> Gonzales </span>
            </button>
          </div>

          <div className='flex flex-row space-x-4 '> 
            <button className="flex items-center bg-[#5878E0] text-[#24242F] p-2 pl-5 rounded-sm w-40 h-8 md:w-42 md:h-10 2xl:h-15 2xl:w-48 2xl:rounded-xl">
              <img src={Person} alt="About Us" className="h-5 w-8" />
              <span className="ml-5 text-[1.2rem] sm:text-[1.5rem] 2xl:text-[1.6rem] "> Balatayo </span>
            </button>
          </div>

          <div className='flex flex-row space-x-4 '> 
            <button className="flex items-center bg-[#F1E167] text-[#24242F] p-2 pl-5 rounded-sm w-35 h-8 md:w-42 md:h-10 2xl:h-15 2xl:rounded-xl">
              <img src={Person} alt="About Us" className="h-5 w-8" />
              <span className="ml-5 text-[1.2rem] sm:text-[1.5rem] 2xl:text-[1.6rem] "> Abreu </span>
            </button>
          </div>

          <div className='flex flex-row space-x-4 '> 
            <button className="flex items-center bg-[#f46ab6] text-[#24242F] p-2 pl-5 rounded-sm w-42 h-8 md:w-42 md:h-10 2xl:h-15 2xl:w-48 2xl:rounded-xl">
              <img src={Portfolio} alt="About Us" className="h-5 w-8" />
              <span className="ml-5 text-[1.2rem] sm:text-[1.5rem] 2xl:text-[1.6rem] "> Portfolio </span>
            </button>
          </div>

          <div className='flex flex-row space-x-4 '> 
            <button className="flex items-center bg-[#A969E1] text-[#24242F] p-2 pl-5 rounded-sm w-43 h-8 md:w-45 md:h-10 2xl:h-15 2xl:w-48 2xl:rounded-xl">
              <img src={Frontend} alt="About Us" className="h-5 w-8" />
              <span className="ml-5 text-[1.2rem] sm:text-[1.5rem] 2xl:text-[1.6rem] "> Frontend </span>
            </button>
          </div>

          <div className='flex flex-row space-x-4 '> 
            <button className="flex items-center bg-[#DEEDFF] text-[#24242F] p-2 pl-5 rounded-sm w-43 h-8 md:w-42 md:h-10 2xl:h-15 2xl:rounded-xl">
              <img src={Backend} alt="About Us" className="h-5 w-8" />
              <span className="ml-5 text-[1.2rem] sm:text-[1.5rem] 2xl:text-[1.6rem] "> Backend </span>
            </button>
          </div>

        </div>
      </div>
  );
}

export default Carousel;