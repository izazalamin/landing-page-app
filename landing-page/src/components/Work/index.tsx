import {FC} from "react";
import Work1 from "../../assets/work-1.png";
import Work2 from "../../assets/work-2.png";
import Work3 from "../../assets/work-3.png";
import Work4 from "../../assets/work-4.png";
import Work5 from "../../assets/work-5.png";
import Work6 from "../../assets/work-6.png";
import Work7 from "../../assets/work-7.png";


const Work: FC = () => {
  return (
    <div className="container mx-auto shadow-md flex flex-col justify-center items-center">
        <section className="max-w-7x1 overflow-x-scroll rounded-md flex flex-row justify-center items-center gap-10">
            <div className="carousel-item bg-gray-300 shadow-md">
                <img src={Work1} alt="work1" className="Work-1 p-10" />
            </div>
            <div className="carousel-item bg-gray-300 shadow-md">
                <img src={Work2} alt="work1" className="Work-1 p-10" />
            </div>
            <div className="carousel-item bg-gray-300 shadow-md">
                <img src={Work3} alt="work1" className="Work-1 p-10" />
            </div>
            <div className="carousel-item bg-gray-300 shadow-md">
                <img src={Work4} alt="work1" className="Work-1 p-10" />
            </div>  
        </section>
        <section className="overflow-x-scroll  rounded-md flex flex-row justify-center items-center gap-10 mt-10">
        <div className="carousel-item bg-gray-300 shadow-md">
                <img src={Work5} alt="work1" className="Work-1 p-10" />
            </div>
            <div className="carousel-item bg-gray-300 shadow-md">
                <img src={Work6} alt="work1" className="Work-1 p-10" />
            </div>
            <div className="carousel-item bg-gray-300 shadow-md">
                <img src={Work7} alt="work1" className="Work-1 p-10" />
            </div>
            <div className="carousel-item bg-gray-300 shadow-md">
                <img src={Work1} alt="work1" className="Work-1 p-10" />
            </div> 
            
        </section>
    </div>
  );
}

export default Work;