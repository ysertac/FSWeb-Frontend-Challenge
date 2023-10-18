import { data } from "../data";
import Header from "./Header";

const Banner = () => {
  return (
    <div className="h-[671px] bg-headerLightMode dark:bg-headerDarkMode">
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
            {data.banner.buttons.map((button) => (
              <a
                className="bg-white dark:bg-spcDark dark:text-white text-[#3730A3] p-3 mr-3 border rounded-md font-medium text-lg"
                href={button.path}
                target="_blank"
              >
                {button.icon} {button.name}
              </a>
            ))}
          </div>
        </div>
        <div>
          <img
            className="rounded-3xl w-[350px] shadow-2xl"
            src={data.banner.pp}
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
