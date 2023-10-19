import { data } from "../data";
import Header from "./Header";

const Banner = () => {
  return (
    <div className="h-[671px] max-mobil:h-[900px] bg-headerLightMode dark:bg-headerDarkMode max-mobil:bg-spcBlue dark:max-mobil:bg-spcDarkBlue dark:max-mobil:bg-none max-[540px]:bg-none">
      <Header />
      <div className="w-x max-mobil:w-full max-mobil:h-[700px] mx-auto flex max-mobil:flex-col-reverse justify-between max-mobil:justify-between items-end max-mobil:items-start mt-10">
        <div className="mb-5 max-mobil:w-4/5 max-mobil:mx-auto max-mobil:text-center">
          <p className="text-spcGreen text-[54px] max-mobil:text-3xl w-[500px] max-mobil:w-4/5 max-mobil:text-center font-bold leading-[60px] max-mobil:mx-auto">
            {data.banner.textContent[0]}
          </p>
          <p className="leading-8 font-normal text-2xl max-mobil:text-xl w-[500px] max-mobil:w-4/5 max-mobil:text-center max-mobil:mx-auto mt-6">
            {data.banner.textContent[1]}
          </p>
          <div className="mt-10 2xl:w-64 flex justify-between">
            {data.banner.buttons.map((button) => (
              <a
                className="bg-white dark:bg-spcDark dark:text-white text-[#3730A3] p-3 border rounded-md font-medium text-lg"
                href={button.path}
                target="_blank"
              >
                {button.icon} {button.name}
              </a>
            ))}
          </div>
        </div>
        <div className="max-mobil:w-11/12 max-mobil:mx-auto">
          <img
            className="rounded-3xl w-[350px] max-mobil:w-11/12 shadow-2xl max-mobil:mx-auto"
            src={data.banner.pp}
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
