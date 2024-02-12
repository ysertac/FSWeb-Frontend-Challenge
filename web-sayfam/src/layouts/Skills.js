import { data, dataTR } from "../data";

const Skills = (props) => {
  const { language } = props;
  return (
    <div className="bg-white dark:bg-spcDark">
      <div className=" text-[#777777] font-medium w-x max-mobil:w-full mx-auto flex max-mobil:flex-col justify-between">
        <h2 className="text-5xl max-mobil:text-3xl text-[#4832D3] dark:text-[#8f88ff] font-bold my-auto max-mobil:text-center max-mobil:pt-8">
          {language.includes("tr") ? dataTR.skills.header : data.skills.header}
        </h2>

        {/* Frontend */}
        <div className="inline-block my-10 max-mobil:my-4 max-mobil:flex max-mobil:w-4/5 max-mobil:justify-between max-mobil:mx-auto">
          {data.skills.frontend.map((skill) => (
            <a className="my-6 block" href={skill.link} target="_blank">
              <img
                className="w-16 max-mobil:w-12 inline-block"
                src={skill.icon}
              />
              <span className="text-xl pl-4 max-mobil:hidden">
                {skill.name}
              </span>
            </a>
          ))}
        </div>

        {/* Mid */}
        <div className="inline-block my-10 max-mobil:my-4 max-mobil:flex max-mobil:w-4/5 max-mobil:justify-between max-mobil:mx-auto">
          {data.skills.mid.map((skill) => (
            <a className="my-6 block" href={skill.link} target="_blank">
              <img
                className="w-16 max-mobil:w-12 inline-block"
                src={skill.icon}
              />
              <span className="text-xl pl-4 max-mobil:hidden">
                {skill.name}
              </span>
            </a>
          ))}
        </div>

        {/* Backend */}
        <div className="inline-block my-10 max-mobil:my-4 max-mobil:flex max-mobil:w-4/5 max-mobil:justify-between max-mobil:mx-auto">
          {data.skills.backend.map((skill) => (
            <a className="my-6 block" href={skill.link} target="_blank">
              <img
                className="w-16 max-mobil:w-12 inline-block"
                src={skill.icon}
              />
              <span className="text-xl pl-4 max-mobil:hidden">
                {skill.name}
              </span>
            </a>
          ))}
        </div>

        {/* Other Tools */}
        <div className="inline-block my-10 max-mobil:my-4 max-mobil:flex max-mobil:w-4/5 max-mobil:justify-between max-mobil:mx-auto">
          {data.skills.tools.map((skill) => (
            <a className="my-6 block" href={skill.link} target="_blank">
              <img
                className="w-16 max-mobil:w-12 inline-block"
                src={skill.icon}
              />
              <span className="text-xl pl-4 max-mobil:hidden">
                {skill.name}
              </span>
            </a>
          ))}
        </div>

        {/* Other Tools 2 */}
        <div className="inline-block my-10 max-mobil:my-4 max-mobil:flex max-mobil:w-4/5 max-mobil:justify-between max-mobil:mx-auto">
          {data.skills.tools2.map((skill) => (
            <a className="my-6 block" href={skill.link} target="_blank">
              <img
                className="w-16 max-mobil:w-12 inline-block"
                src={skill.icon}
              />
              <span className="text-xl pl-4 max-mobil:hidden">
                {skill.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
