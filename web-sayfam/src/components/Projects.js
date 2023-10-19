import { data } from "../data";

const Projects = () => {
  return (
    <div className="bg-spcGreen dark:bg-spcBlack border dark:border-spcBlack py-10">
      <h2 className="text-spcBlue dark:text-spcGreen text-5xl leading-[48px] font-bold w-x max-mobil:w-full mx-auto pt-14 max-mobil:pt-5 max-mobil:text-center max-mobil:text-3xl">
        {data.projects.header}
      </h2>
      {data.projects.projects.map((project) => (
        <div className="flex max-mobil:flex-col w-x max-mobil:w-11/12 mx-auto bg-white dark:bg-[#2b2727] rounded-2xl my-16 shadow-2xl max-mobil:h-[750px]">
          <img
            src={project.img}
            className="w-[480px] max-mobil:w-full h-[480px] max-mobil:h-[90vw] xl:rounded-l-2xl max-mobil:rounded-t-2xl"
          />
          <div className="px-10 flex flex-col h-72 max-mobil:h-[350px] my-auto max-mobil:my-5 justify-between">
            <h3 className="text-[#433bca] dark:text-[#c1baed] text-3xl max-mobil:text-2xl max-mobil:text-center leading-8 font-bold">
              {project.header}
            </h3>
            <p className="text-[#383838] text-base leading-5 font-normal max-mobil:text-center dark:text-white">
              {project.sum}
            </p>
            <div className="flex flex-wrap max-mobil:justify-between">
              {project.used.map((tech) => (
                <span className="bg-spcBlue dark:bg-[#8173da] text-white inline-block font-medium text-sm max-mobil:text-[12px] p-2 mr-4 max-mobil:mr-0 mb-3 rounded-full w-24 max-mobil:w-[30%] text-center">
                  {tech}
                </span>
              ))}
            </div>
            <div className="max-mobil:flex max-mobil:justify-around">
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
