import Project from "./Project.jsx";
import data from "../data/projectsData.js";

function Projects() {
  return (
    <div id="projects" className="my-20 lg:mb-28 px-4 sm:px-8 md:px-20 ">
      <h1 className="w-[90%] sm:w-full m-auto mb-7 sm:mb-10 lg:mb-14 tracking-wider font-semibold text-2xl">
        Few Projects
      </h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 place-items-center sm:place-items-end gap-8 ">
        {data.map((project) => {
          return (
            <Project
              key={project.id}
              image={project.img}
              name={project.name}
              live={project.live}
              source={project.source}
              desc={project.description}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
