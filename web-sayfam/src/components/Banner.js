import { data } from "../data";
import Header from "./Header";

const Banner = () => {
  return (
    <div
      style={{
        height: "671px",
        backgroundImage: "linear-gradient(to right, #4731D3 70% , #CBF281 70%)",
      }}
    >
      <Header />
      <div className="w-x mx-auto flex justify-between items-end mt-10">
        <div className="mb-5">
          <p className="text-spcGreen text-[54px] font-bold leading-[60px]">
            {data.banner.textContent[0]}
          </p>
          <p className="leading-8 font-normal text-2xl w-[525px] mt-6">
            {data.banner.textContent[1]}
          </p>
          <div className="mt-10">
            <a
              className="bg-white text-[#3730A3] p-3 mr-3 border rounded-md font-medium text-lg"
              href={data.banner.buttons.gitHub.path}
              target="_blank"
            >
              {data.banner.buttons.gitHub.icon}{" "}
              {data.banner.buttons.gitHub.name}
            </a>
            <a
              className="bg-white text-[#3730A3] p-3 border rounded-md font-medium text-lg"
              target="_blank"
              href={data.banner.buttons.in.path}
            >
              {data.banner.buttons.in.icon} {data.banner.buttons.in.name}
            </a>
          </div>
        </div>
        <div>
          <img className="rounded-3xl w-[350px]" src={data.banner.pp} />
        </div>
      </div>
    </div>
  );
};

export default Banner;
