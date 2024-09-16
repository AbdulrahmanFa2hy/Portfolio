import Project from "./Project.jsx";
import data from "../data/projectsData.js";

function Projects() {
  return (
    <div id="projects" className="my-16 px-4 sm:px-8 md:px-20 ">
      <div>
        <h1 className="mb-4 sm:mb-16 tracking-wider font-semibold text-2xl">
          Few Projects
        </h1>
      </div>

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
