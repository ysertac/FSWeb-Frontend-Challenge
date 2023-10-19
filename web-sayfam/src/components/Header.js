import { useState } from "react";
import { data, dataTR } from "../data";

const Header = (props) => {
  const { html, language } = props;
  const [enabled, setEnabled] = useState(
    !localStorage.getItem("darkMode").includes("dark")
  );
  html.classList = localStorage.getItem("darkMode");
  const changeHandler = (e) => {
    e.stopPropagation();
    html.classList.toggle("dark");
    localStorage.setItem("darkMode", html.classList);
  };

  const langHandler = (e) => {
    html.lang == "tr" ? (html.lang = "en") : (html.lang = "tr");
    localStorage.setItem("language", html.lang);
    window.location.reload();
  };
  return (
    <div className="flex justify-between w-x mx-auto max-mobil:flex-col max-mobil:w-4/5 max-mobil:text-center">
      <div className="mt-10">
        <p className="inline-block text-3xl font-bold text-spcGreen">
          {data.header.name}
        </p>
      </div>
      <div className="flex justify-between w-80 mt-5 max-mobil:w-4/5 max-mobil:mx-auto">
        <p
          onClick={langHandler}
          className="inline-block text-sm font-bold text-[#d9d9d9] dark:text-[#777777] max-mobil:text-[12px] cursor-pointer"
        >
          <span className="text-[#CAF181] dark:text-[#BAB2E7]">
            {language.includes("tr") ? dataTR.header.lang : data.header.lang}
          </span>
          {language.includes("tr") ? " SWITCH" : "'YE GEÇ"}
        </p>
        <div className="flex">
          <label class="inline-block relative items-center mr-5 h-6 cursor-pointer max-mobil:mr-3 max-mobil:h-4">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={enabled}
              readOnly
              onChange={changeHandler}
            />
            <div
              onClick={() => {
                setEnabled(!enabled);
              }}
              className="w-11 max-mobil:w-7 h-6 max-mobil:h-4 bg-gray-700 rounded-full peer  peer-focus:ring-green-100  peer-checked:after:translate-x-full peer-checked:after:border-[#8F88FF] after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-[#FFE86E] after:border-black after:border-2 after:rounded-full after:h-5 max-mobil:after:h-3 after:w-5 max-mobil:after:w-3 after:transition-all peer-checked:bg-[#8F88FF]"
            ></div>
          </label>

          <p className="inline-block text-sm font-bold text-spcBlue max-mobil:text-spcGreen dark:text-[#d9d9d9] max-mobil:text-[12px]">
            {language.includes("tr")
              ? enabled
                ? dataTR.header.darkMode
                : dataTR.header.lightMode
              : enabled
              ? data.header.darkMode
              : data.header.lightMode}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
