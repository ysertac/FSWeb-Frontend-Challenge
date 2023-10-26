import Project from "../components/Project";
import { data, dataTR } from "../data";

const Projects = (props) => {
  const { language, repos } = props;
  return (
    <div className="bg-spcGreen dark:bg-spcBlack border dark:border-spcBlack py-10">
      <h2 className="text-spcBlue dark:text-spcGreen text-5xl leading-[48px] font-bold w-x max-mobil:w-full mx-auto pt-14 max-mobil:pt-5 max-mobil:text-center max-mobil:text-3xl">
        {language.includes("tr")
          ? dataTR.projects.header
          : data.projects.header}
      </h2>
      {repos.map((project) => (
        <Project project={project} />
      ))}
    </div>
  );
};
export default Projects;
