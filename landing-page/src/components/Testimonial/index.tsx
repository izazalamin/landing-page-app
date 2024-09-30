import { FC } from "react";
import Testi1 from '../../assets/testi-1.png';
import Testi2 from '../../assets/testi-2.png';

const Testimonial: FC = () => {
  return (
    <div className="flex ml-[92px] mt-[160px] mb-[141px]">
      <div className="text-4xl font-medium font-['PP_Neue_Montreal']">
        Testimonials
      </div>
      <div className="flex flex-col gap-10 font-['PP_Neue_Montreal'] ml-[206px] mr-[90px] text-[27px]">
        <div>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        </div>
        <div className="">
          <img src={Testi1} alt="testi-1" className="w-[240px] h-[64px]" />
        </div>
        <div>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        </div>
        <div>
          <img src={Testi2} alt="testi-2" className="" />
        </div>
      </div>
    </div>
  );
}

export default Testimonial;