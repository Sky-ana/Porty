import Balatayo from '../assets/BalatayoImage.png';
import Abreu from '../assets/AbreuImage.png';
import Gonzales from '../assets/GonzalesImage.png';
import '../App.css';

import { Link } from 'react-router-dom';

{ /* import Team from '../Components/Team.jsx'; */}


const Team = () => {
  return (
    <div className='flex justify-center mt-20'>
      <div className="h-[800px] w-[80%] bg-[#fff]/15 backdrop-blur-md rounded-lg border-3 border-[#8F88EF]/20 shadow-xl mb-20">

        <div className="flex flex-row justify-center gap-6 pt-20">
          {/* Column 1 */}
          <div className="flex flex-col items-center">
            <Link to="/balatayo" >
              <img src={Balatayo} alt="BalatayoImage" className="h-[365px] w-[365px]" />
              </Link>
            <p className="text-[2.5rem] text-[#5878E0] text-strokesmall mt-4">E. Balatayo</p>
            <p className="text-[2.5rem] text-[#fff] text-strokesmall mt-10">Backend Developer</p>
          </div>
          
          {/* Column 2 */}
          <div className="flex flex-col items-center">
            <Link to="/abreu" >
              <img src={Abreu} alt="ABREUImage" className="h-[365px] w-[365px]" />
            </Link>
            <p className="text-[2.5rem] text-[#F1E167] text-strokesmall mt-4">X. Abreu</p>
            <p className="text-[2.5rem] text-[#fff] text-strokesmall max-w-lg text-center mt-10">
              Frontend Developer<br />Logo Designer
            </p>
          </div>
          
          {/* Column 3 */}
          <div className="flex flex-col items-center ">
            <Link to="/gonzales" >
              <img src={Gonzales} alt="GonzalesImage" className="h-[365px] w-[365px]" />
            </Link>
            <p className="text-[2.5rem] text-[#FF4A4A] text-strokesmall mt-4">M. Gonzales</p>
            <p className="text-[2.5rem] text-[#fff] text-strokesmall max-w-lg text-center mt-10">
              Frontend Developer<br />UI/UX Designer
            </p>
          </div>
        </div>
        
      </div>

    </div>

  );
};

export default Team;