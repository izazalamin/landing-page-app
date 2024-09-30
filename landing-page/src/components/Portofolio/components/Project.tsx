import { FC } from "react";
import Arrow from "../../../assets/arrow-1.svg"

const Project: FC<Project> = ({ name, roles, link }) => {
  return (
    <div className="flex justify-between border-b">
      <div>
        <div className="text-6xl font-normal">{name}</div>
        <div className="text-lg font-normal leading-[160%] mt-2">
          {roles.map((role, index) => (
            <>
              <span key={index}>{role}</span>
              {index < roles.length - 1 && <span className="mx-1">-</span>}
            </>
          ))}
        </div>
      </div>
      <div>
        <a href={link} target="_blank" rel="noreferrer">
          <button className="rounded-full border border-black hover:bg-black">
            <img src={Arrow} alt="arrow" className="p-2"/>
          </button>
        </a>
      </div>
    </div>
  );
}

export default Project;