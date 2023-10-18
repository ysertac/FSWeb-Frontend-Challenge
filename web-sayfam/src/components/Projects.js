import { data } from "../data";

const Projects = () => {
  return (
    <div className="bg-spcGreen dark:bg-spcBlack border dark:border-spcBlack py-10">
      <h2 className="text-spcBlue dark:text-spcGreen text-5xl leading-[48px] font-bold w-[960px] mx-auto pt-14">
        {data.projects.header}
      </h2>
      {data.projects.projects.map((project) => (
        <div className="flex w-[960px] mx-auto bg-white dark:bg-[#2b2727] rounded-l-2xl rounded-r-2xl my-10 shadow-2xl">
          <img
            src={project.img}
            className="w-[360px] h-[360px] rounded-l-2xl"
          />
          <div className="pl-10 flex flex-col h-72 my-auto justify-between">
            <h3 className="text-[#433bca] dark:text-[#c1baed] text-3xl leading-8 font-bold">
              {project.header}
            </h3>
            <p className="text-[#383838] text-base leading-5 font-normal dark:text-white">
              {project.sum}
            </p>
            <div className="flex flex-wrap">
              {project.used.map((tech) => (
                <span className="bg-spcBlue dark:bg-[#8173da] text-white inline-block font-medium text-sm left-4 p-2 mr-4 mb-3 rounded-full w-24 text-center">
                  {tech}
                </span>
              ))}
            </div>
            <div>
              {project.links.map((link) => (
                <a
                  className="text-[#120b39] dark:text-spcGreen text-base leading-4 font-medium underline mr-4"
                  href={link.path}
                  target="_blank"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Projects;
