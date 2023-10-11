import { data } from "../data";

const Skills = () => {
  return (
    <div className="bg-white text-[#777777] font-medium w-x mx-auto flex justify-between">
      <h2 className="text-5xl text-[#4832D3] font-bold my-auto">
        {data.skills.header}
      </h2>

      {/* Frontend */}
      <div className="inline-block my-10">
        {data.skills.frontend.map((skill) => (
          <div className="my-6">
            <img className="w-16 inline-block" src={skill.icon} />
            <span className="text-xl pl-4">{skill.name}</span>
          </div>
        ))}
      </div>

      {/* Backend */}
      <div className="inline-block my-10">
        {data.skills.backend.map((skill) => (
          <div className="my-6">
            <img className="w-16 inline-block" src={skill.icon} />
            <span className="text-xl pl-4">{skill.name}</span>
          </div>
        ))}
      </div>

      {/* Other Tools */}
      <div className="inline-block my-10">
        {data.skills.tools.map((skill) => (
          <div className="my-6">
            <img className="w-16 inline-block" src={skill.icon} />
            <span className="text-xl pl-4">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
