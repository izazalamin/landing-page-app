import {FC} from "react";
import './styles.css';
import Testi1 from '../../assets/testi-1.png';
import Testi2 from '../../assets/testi-2.png';


const Testimonial: FC = () => {
  return (
    <div className="portofolio">
      <div className="left">
        Testimonials
      </div>
      <div className="right">
        <div>
        “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.” 
        </div>
        <div>
            <img src={Testi1} alt="testi-1" className="Testi-1"/>
        </div>
        <div>
        “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.”     
        </div>
        <div>
        <img src={Testi2} alt="testi-2" className="Testi-2"/>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;