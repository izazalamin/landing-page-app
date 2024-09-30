import { FC } from "react";
// import './styles.css';
import { DUMMY_PROJECTS } from "../../constants/projectList";
import Project from "./components/Project";

const About: FC = () => {
  return (
    <section className="flex w-[calc(100%-160px)] pt-20">
      <h2 className="text-4xl font-medium leading-normal w-[30%] font-['PP_Neue_Montreal',sans-serif]">
        About
      </h2>
      <div className="w-[70%] flex flex-col pl-10">
        <p className="font-['PP_Neue_Montreal',sans-serif] text-[27px] font-normal">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur.
        </p>
      </div>
    </section>
  );
};

const Portofolio: FC = () => {
  return (
    <div className="flex flex-col w-[calc(100%-160px)] p-20">
      <About />
      <div className="flex mt-20">
        <div className="w-[30%] text-4xl font-medium font-['PP_Neue_Montreal',sans-serif]">
          Recent Work
        </div>
        <div className="w-[70%] flex flex-col gap-16">
          {DUMMY_PROJECTS.map((project, index) => (
            <Project key={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portofolio;