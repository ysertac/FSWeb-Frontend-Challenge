import axios from "axios";
import { data } from "../data";
import { useEffect, useState } from "react";

const Project = (props) => {
  const { project } = props;
  const [projectImage, setProjectImage] = useState();
  useEffect(() => {
    axios
      .get(
        `https://api.github.com/repos/ysertac/${project.name}/contents/main.jpg`
      )
      .then((res) => setProjectImage(res.data.download_url))
      .catch((err) => console.warn(err.response.data.message));
  }, [project]);

  return (
    <div className="flex max-mobil:flex-col w-x max-mobil:w-11/12 mx-auto bg-white dark:bg-[#2b2727] rounded-2xl my-16 shadow-2xl max-mobil:h-[750px]">
      <img
        src={projectImage}
        className="w-2/5 max-mobil:w-full h-[480px] max-mobil:h-[90vw] xl:rounded-l-2xl max-mobil:rounded-t-2xl"
      />
      <div className="px-10 flex flex-col h-72 max-mobil:h-[600px] my-auto max-mobil:my-5 justify-between">
        <h3 className="text-[#433bca] dark:text-[#c1baed] text-3xl max-mobil:text-2xl max-mobil:text-center leading-8 font-bold">
          {project.name}
        </h3>
        <p className="text-[#383838] text-base leading-5 font-normal max-mobil:text-center dark:text-white">
          {project.description}
        </p>
        <div className="flex flex-wrap max-mobil:justify-between">
          {project.topics.map((tech) => (
            <span className="bg-spcBlue dark:bg-[#8173da] text-white inline-block font-medium text-sm max-mobil:text-[12px] p-2 mr-4 max-mobil:mr-0 mb-3 rounded-full w-24 max-mobil:w-[30%] text-center">
              {tech}
            </span>
          ))}
        </div>
        <div className="max-mobil:flex max-mobil:justify-around">
          <a
            className="text-[#120b39] dark:text-spcGreen text-base leading-4 font-medium underline mr-4"
            href={project.homepage}
            target="_blank"
          >
            View Site
          </a>
          <a
            className="text-[#120b39] dark:text-spcGreen text-base leading-4 font-medium underline mr-4"
            href={project.svn_url}
            target="_blank"
          >
            gitHub
          </a>
        </div>
      </div>
    </div>
  );
};
export default Project;
