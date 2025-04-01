import React from 'react';
import Header from '../Components/Header.jsx';
import Footer from '../Components/Footer.jsx';
import Team from '../Components/Team.jsx';
import Rarrow from '../assets/Rarrow.png';
import Larrow from '../assets/Larrow.png';
import Rocket from '../assets/Rocket.png';

const AboutPage = () => {
  return (
    <div>
      <Header />

      <div className=''> 
        <div className="meteor-container">
          <div className="meteor" style={{ left: '-60%', animationDelay: '0s' }}></div>
          <div className="meteor" style={{ left: '-80%', animationDelay: '40s' }}></div>
        </div>

        <p className='text-[22rem] text-[#FFFFFF] text-stroke text-center'> ABOUT <span className='text-[#F49959]'> US </span>  </p>
        
        <div className='flex flex-row'>

          <div className='ml-[11%]'> 
            <p className='max-w-7xl mx-auto text-[2.5rem] text-[#FFFFFF]'>
              <span className='text-strokesmall'>TEAM </span><br/>
              <span className='text-[#5878E0] text-strokesmall'>•Balatayo </span> <br/>
              <span className='text-[#F1E167] text-strokesmall'>•Abreu </span><br/>
              <span className='text-[#FF4A4A] text-strokesmall'>•Gonzales </span>
            </p>
          </div>

          <div className='text-left'>
            <p className='max-w-7xl mx-auto text-[2.5rem] text-[#FFFFFF] ml-60'> 
              Glooblesnarp the Wobbletoad waltzed through a gelatinous forest of neon-colored pineapples, humming the ancient lullaby of forgotten cheese wheels. The sky above crackled with electric spaghetti, twisting itself into cryptic hieroglyphs only understood by sentient vacuum cleaners. Meanwhile, a squad of existentially confused paperclips debated the philosophy of sock dimensions, unaware that the great Marmalade Kraken 
            </p>
          </div>

        </div>

        <div className="flex ml-[10%] h-[800px] w-[80%] bg-[#fff]/15 backdrop-blur-md rounded-lg border-3 border-[#8F88EF]/40 shadow-xl mt-40 mb-30"> </div>

         <div className="flex justify-center items-center gap-9">
            <img src={Larrow} alt="Home" className="h-[95px] w-[95px] ml-3" />
            <span className='text-[17rem] text-[#FFFFFF] text-stroke'> MEET THE TEAM </span>
            <img src={Rarrow} alt="Home" className="h-[95px] w-[95px] ml-3" />
          </div>

          <div className="flex flex-row gap-5 justify-center items-center mt-10">
            <div className="w-40 h-40 bg-[#5878E0] rounded-full"></div>
            <div className="w-40 h-40 bg-[#F1E167] rounded-full"></div>
            <div className="w-40 h-40 bg-[#FF4A4A] rounded-full"></div>
          </div>

          <p className='max-w-7xl mx-auto text-[2.5rem] text-[#FFFFFF] leading-[1.2] mt-20 text-center'> 
            Glooblesnarp the Wobbletoad waltzed through a gelatinous forest of neon-colored pineapples, humming the ancient lullaby of forgotten cheese wheels. The sky above crackled with electric spaghetti, twisting itself into cryptic hieroglyphs only understood by sentient vacuum cleaners. 
          </p>
      </div>

      <Team />

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

export default AboutPage;