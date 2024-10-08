import { useState } from "react";
import { AiFillGithub } from "react-icons/ai";
import { VscEye } from "react-icons/vsc";

function Projects({ image, name, live, source }) {
  const [isMouseEnter, setIsMouseEnter] = useState(false);
  return (
    <div
      className="w-full cursor-pointer rounded-sm sm:rounded-md overflow-hidden relative"
      onMouseEnter={() => setIsMouseEnter(true)}
      onMouseLeave={() => setIsMouseEnter(false)}
    >
      <img alt="project" src={image} className="object-contain w-full h-full" />
      <div
        className={`flex-col justify-center items-center gap-4 absolute top-0 left-0 w-full h-full bg-[rgba(14,17,20,0.93)] transition-all duration-200 ${
          isMouseEnter ? "flex" : "hidden"
        }`}
      >
        <p className="text-2xl md:text-4xl xl:text-3xl">{name}</p>
        <div className="flex justify-between items-center gap-6">
          <a
            href={live}
            target="_blank"
            className="flex items-center gap-2 py-2 px-4 sm:py-3 sm:px-6 bg-[#EC6E59] sm:bg-transparent hover:bg-[#EC6E59] rounded-[8px] transition duration-200"
            title="Visit Website"
          >
            Demo <VscEye />
          </a>
          <a
            href={source}
            target="_blank"
            className="flex items-center gap-2 py-2 px-4 sm:py-3 sm:px-6 bg-[#EC6E59] sm:bg-transparent hover:bg-[#EC6E59] rounded-[8px] transition duration-200"
            title="Show Code"
          >
            code <AiFillGithub />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;
