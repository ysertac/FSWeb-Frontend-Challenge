import { data } from "../data";

const Skills = () => {
  return (
    <div className="bg-white dark:bg-spcDark">
      <div className=" text-[#777777] font-medium w-x max-mobil:w-full mx-auto flex max-mobil:flex-col justify-between">
        <h2 className="text-5xl max-mobil:text-3xl text-[#4832D3] dark:text-[#8f88ff] font-bold my-auto max-mobil:text-center max-mobil:pt-8">
          {data.skills.header}
        </h2>

        {/* Frontend */}
        <div className="inline-block my-10 max-mobil:flex max-mobil:w-4/5 max-mobil:justify-between max-mobil:mx-auto">
          {data.skills.frontend.map((skill) => (
            <div className="my-6">
              <img
                className="w-16 max-mobil:w-12 inline-block"
                src={skill.icon}
              />
              <span className="text-xl pl-4 max-mobil:hidden">
                {skill.name}
              </span>
            </div>
          ))}
        </div>

        {/* Backend */}
        <div className="inline-block my-10 max-mobil:flex max-mobil:w-4/5 max-mobil:justify-between max-mobil:mx-auto">
          {data.skills.backend.map((skill) => (
            <div className="my-6">
              <img
                className="w-16 max-mobil:w-12 inline-block"
                src={skill.icon}
              />
              <span className="text-xl pl-4 max-mobil:hidden">
                {skill.name}
              </span>
            </div>
          ))}
        </div>

        {/* Other Tools */}
        <div className="inline-block my-10 max-mobil:flex max-mobil:w-4/5 max-mobil:justify-between max-mobil:mx-auto">
          {data.skills.tools.map((skill) => (
            <div className="my-6">
              <img
                className="w-16 max-mobil:w-12 inline-block"
                src={skill.icon}
              />
              <span className="text-xl pl-4 max-mobil:hidden">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
