import {FC} from "react";
import Arrow from "../../../assets/arrow-1.svg"

// Use object destructuring to get the properties of the project object
const Project: FC<Project> = ({ name, roles, link }) => {
  return (
    <div className="project-wrapper border-b">
      <div className="project-details">
        <div className="project-name">{name}</div>
        <div className="project-roles">
          {roles.map((role, index) => (
            <>
              <span key={index}>{role}</span>
              {index < roles.length - 1 && <span>-</span>}
            </>
          ))}
        </div>
      </div>
      <div className="project-link">
        <a href={link} target="_blank" rel="noreferrer">
          <button className="rounded-full border-[1px] border-black hover:bg-black"><img src={Arrow} alt="arrow" className="p-2"/></button>
        </a>
      </div>
    </div>
  );
}
export default Project;