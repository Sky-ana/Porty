import Balatayo from '../assets/BalatayoImage.png';
import Abreu from '../assets/AbreuImage.png';
import Gonzales from '../assets/GonzalesImage.png';
import '../App.css';

import { Link } from 'react-router-dom';

{ /* import Team from '../Components/Team.jsx'; */}


const Team = () => {
  return (
    <div className='flex justify-center mt-20'>
      <div className="h-[350px] w-[90%] bg-[#fff]/15 backdrop-blur-md rounded-lg border-3 border-[#8F88EF]/20 shadow-xl mb-20 md:h-[440px] md:w-[90%] lg:h-[550px] lg:w-[90%] xl:w-[80%] xl:h-[650px] 2xl:w-[80%] 2xl:h-[1000px]">

        <div className="flex flex-row justify-center pt-10 gap-1 p-2 md:gap-3 2xl:pt-20 2xl:gap-10">
          {/* Column 1 */}
          <div className="flex flex-col items-center">
            <Link to="/balatayo" >
              <img src={Balatayo} alt="BalatayoImage" className="custom-pointer h-[100px] w-[100px] md:h-[200px] md:w-[190px] lg:h-[250px] lg:w-[240px] xl:h-[350px] xl:w-[330px] 2xl:h-[450px] 2xl:w-[430px] rounded-xl hover:scale-105 hover:border-[#5878E0] hover:border-4" />
              </Link>
            <p className="text-[1.2rem] text-[#5878E0] mt-4 md:text-[1.8rem] lg:text-[2rem] 2xl:text-[3.2rem]">E. Balatayo</p>
            <p className="text-[1.2rem] text-[#fff] mt-5 text-center md:text-[1.5rem] lg:text-[1.8rem] 2xl:text-[3rem]">Backend Developer</p>
          </div>
          
          {/* Column 2 */}
          <div className="flex flex-col items-center">
            <Link to="/abreu" >
              <img src={Abreu} alt="ABREUImage" className="custom-pointer h-[100px] w-[100px] md:h-[200px] md:w-[190px] lg:h-[250px] lg:w-[240px] xl:h-[350px] xl:w-[330px] 2xl:h-[450px] 2xl:w-[430px] rounded-xl hover:scale-105 hover:border-[#F1E167] hover:border-4" />
            </Link>
            <p className="text-[1.2rem] text-[#F1E167]  mt-4 md:text-[1.8rem] lg:text-[2rem] 2xl:text-[3.2rem]">X. Abreu</p>
            <p className="text-[1.2rem] text-[#fff]  max-w-lg text-center mt-5 md:text-[1.5rem] lg:text-[1.8rem] 2xl:text-[3rem]">
              Frontend Developer<br />Logo Designer
            </p>
          </div>
          
          {/* Column 3 */}
          <div className="flex flex-col items-center ">
            <Link to="/gonzales" >
              <img src={Gonzales} alt="GonzalesImage" className="custom-pointer h-[100px] w-[100px] md:h-[200px] md:w-[190px] lg:h-[250px] lg:w-[240px] xl:h-[350px] xl:w-[330px] 2xl:h-[450px] 2xl:w-[430px] rounded-xl hover:scale-105 hover:border-[#FF4A4A] hover:border-4" />
            </Link>
            <p className="text-[1.2rem] text-[#FF4A4A] mt-4 md:text-[1.8rem] lg:text-[2rem] 2xl:text-[3.2rem]">M. Gonzales</p>
            <p className="text-[1.2rem] text-[#fff] max-w-lg text-center mt-5 md:text-[1.5rem] lg:text-[1.8rem] 2xl:text-[3rem]">
              Frontend Developer<br />UI/UX Designer
            </p>
          </div>
        </div>
        
      </div>

    </div>

  );
};

export default Team;