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
              <div className='flex flex-row gap-15 animate-scroll'>
      
                <div className='flex flex-row space-x-4'> 
                  <button className="flex items-center bg-[#F49958] text-[#24242F] p-2 pl-3 rounded-xl w-35">
                    <img src={MindsIcon} alt="About Us" className="h-8 w-8" />
                    <span className="ml-5 text-[1.4rem]">3Minds</span>
                  </button>
                </div>
      
                <div className='flex flex-row space-x-4 '> 
                  <button className="flex items-center bg-[#78E28F] text-[#24242F] p-2 rounded-xl w-40">
                    <img src={Creative} alt="About Us" className="h-8 w-8" />
                    <span className="ml-5 text-[1.4rem]"> Creative </span>
                  </button>
                </div>
      
                <div className='flex flex-row space-x-4 '> 
                  <button className="flex items-center bg-[#F6AAEC] text-[#24242F] p-2 pl-5 rounded-xl w-35">
                    <img src={Pixel} alt="About Us" className="h-8 w-8" />
                    <span className="ml-5 text-[1.4rem]"> Pixel </span>
                  </button>
                </div>
      
                <div className='flex flex-row space-x-4 '> 
                  <button className="flex items-center bg-[#A6FADF] text-[#24242F] p-2 pl-5 rounded-xl w-48">
                    <img src={Responsive} alt="About Us" className="h-8 w-8" />
                    <span className="ml-5 text-[1.4rem]"> Responsive </span>
                  </button>
                </div>
      
                <div className='flex flex-row space-x-4 '> 
                  <button className="flex items-center bg-[#EF7676] text-[#24242F] p-2 pl-5 rounded-xl w-40">
                    <img src={Figma} alt="About Us" className="h-8 w-8" />
                    <span className="ml-5 text-[1.4rem]"> Figma </span>
                  </button>
                </div>
      
                <div className='flex flex-row space-x-4 '> 
                  <button className="flex items-center bg-[#FF4A4A] text-[#24242F] p-2 pl-5 rounded-xl w-45">
                    <img src={Person} alt="About Us" className="h-8 w-8" />
                    <span className="ml-5 text-[1.4rem]"> Gonzales </span>
                  </button>
                </div>
      
                <div className='flex flex-row space-x-4 '> 
                  <button className="flex items-center bg-[#5878E0] text-[#24242F] p-2 pl-5 rounded-xl w-45">
                    <img src={Person} alt="About Us" className="h-8 w-8" />
                    <span className="ml-5 text-[1.4rem]"> Balatayo </span>
                  </button>
                </div>
      
                <div className='flex flex-row space-x-4 '> 
                  <button className="flex items-center bg-[#F1E167] text-[#24242F] p-2 pl-5 rounded-xl w-38">
                    <img src={Person} alt="About Us" className="h-8 w-8" />
                    <span className="ml-5 text-[1.4rem]"> Abreu </span>
                  </button>
                </div>
      
                <div className='flex flex-row space-x-4 '> 
                  <button className="flex items-center bg-[#f46ab6] text-[#24242F] p-2 pl-5 rounded-xl w-42">
                    <img src={Portfolio} alt="About Us" className="h-8 w-8" />
                    <span className="ml-5 text-[1.4rem]"> Portfolio </span>
                  </button>
                </div>
      
                <div className='flex flex-row space-x-4 '> 
                  <button className="flex items-center bg-[#A969E1] text-[#24242F] p-2 pl-5 rounded-xl w-43">
                    <img src={Frontend} alt="About Us" className="h-8 w-8" />
                    <span className="ml-5 text-[1.4rem]"> Frontend </span>
                  </button>
                </div>
      
                <div className='flex flex-row space-x-4 '> 
                  <button className="flex items-center bg-[#DEEDFF] text-[#24242F] p-2 pl-5 rounded-xl w-43">
                    <img src={Backend} alt="About Us" className="h-8 w-8" />
                    <span className="ml-5 text-[1.4rem]"> Backend </span>
                  </button>
                </div>
      
      
                {
                  /* Duplicated Butons */
                }
      
                <div className='flex flex-row space-x-4'> 
                  <button className="flex items-center bg-[#F49958] text-[#24242F] p-2 pl-3 rounded-xl w-35">
                    <img src={MindsIcon} alt="About Us" className="h-8 w-8" />
                    <span className="ml-5 text-[1.4rem]">3Minds</span>
                  </button>
                </div>
      
                <div className='flex flex-row space-x-4 '> 
                  <button className="flex items-center bg-[#78E28F] text-[#24242F] p-2 rounded-xl w-40">
                    <img src={Creative} alt="About Us" className="h-8 w-8" />
                    <span className="ml-5 text-[1.4rem]"> Creative </span>
                  </button>
                </div>
      
                <div className='flex flex-row space-x-4 '> 
                  <button className="flex items-center bg-[#F6AAEC] text-[#24242F] p-2 pl-5 rounded-xl w-35">
                    <img src={Pixel} alt="About Us" className="h-8 w-8" />
                    <span className="ml-5 text-[1.4rem]"> Pixel </span>
                  </button>
                </div>
      
                <div className='flex flex-row space-x-4 '> 
                  <button className="flex items-center bg-[#A6FADF] text-[#24242F] p-2 pl-5 rounded-xl w-48">
                    <img src={Responsive} alt="About Us" className="h-8 w-8" />
                    <span className="ml-5 text-[1.4rem]"> Responsive </span>
                  </button>
                </div>
      
                <div className='flex flex-row space-x-4 '> 
                  <button className="flex items-center bg-[#EF7676] text-[#24242F] p-2 pl-5 rounded-xl w-40">
                    <img src={Figma} alt="About Us" className="h-8 w-8" />
                    <span className="ml-5 text-[1.4rem]"> Figma </span>
                  </button>
                </div>
      
                <div className='flex flex-row space-x-4 '> 
                  <button className="flex items-center bg-[#FF4A4A] text-[#24242F] p-2 pl-5 rounded-xl w-45">
                    <img src={Person} alt="About Us" className="h-8 w-8" />
                    <span className="ml-5 text-[1.4rem]"> Gonzales </span>
                  </button>
                </div>
      
                <div className='flex flex-row space-x-4 '> 
                  <button className="flex items-center bg-[#5878E0] text-[#24242F] p-2 pl-5 rounded-xl w-45">
                    <img src={Person} alt="About Us" className="h-8 w-8" />
                    <span className="ml-5 text-[1.4rem]"> Balatayo </span>
                  </button>
                </div>
      
                <div className='flex flex-row space-x-4 '> 
                  <button className="flex items-center bg-[#F1E167] text-[#24242F] p-2 pl-5 rounded-xl w-38">
                    <img src={Person} alt="About Us" className="h-8 w-8" />
                    <span className="ml-5 text-[1.4rem]"> Abreu </span>
                  </button>
                </div>
      
                <div className='flex flex-row space-x-4 '> 
                  <button className="flex items-center bg-[#f46ab6] text-[#24242F] p-2 pl-5 rounded-xl w-42">
                    <img src={Portfolio} alt="About Us" className="h-8 w-8" />
                    <span className="ml-5 text-[1.4rem]"> Portfolio </span>
                  </button>
                </div>
      
                <div className='flex flex-row space-x-4 '> 
                  <button className="flex items-center bg-[#A969E1] text-[#24242F] p-2 pl-5 rounded-xl w-43">
                    <img src={Frontend} alt="About Us" className="h-8 w-8" />
                    <span className="ml-5 text-[1.4rem]"> Frontend </span>
                  </button>
                </div>
      
                <div className='flex flex-row space-x-4 '> 
                  <button className="flex items-center bg-[#DEEDFF] text-[#24242F] p-2 pl-5 rounded-xl w-43">
                    <img src={Backend} alt="About Us" className="h-8 w-8" />
                    <span className="ml-5 text-[1.4rem]"> Backend </span>
                  </button>
                </div>
      
              </div>
            </div>
  );
}

export default Carousel;