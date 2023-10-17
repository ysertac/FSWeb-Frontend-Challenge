import { useState } from "react";
import { data } from "../data";

const Header = () => {
  const html = document.querySelector("html");
  const [enabled, setEnabled] = useState(
    html.classList.contains("dark") ? false : true
  );
  html.classList = localStorage.getItem("darkMode");
  const changeHandler = (e) => {
    e.preventDefault();
    html.classList.toggle("dark");
    localStorage.setItem("darkMode", html.classList);
  };
  return (
    <div className="flex justify-between w-x mx-auto">
      <div className="mt-10">
        <p className="inline-block text-3xl font-bold text-spcGreen">
          {data.header.name}
        </p>
      </div>
      <div className="flex justify-between w-80 mt-5">
        <p className="inline-block text-sm font-bold">
          <span className="text-[#CAF181]">{data.header.lang}</span>'YE GEÇ
        </p>
        <div className="flex">
          <label class="inline-block relative items-center mr-5 h-6 cursor-pointer">
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
              className="w-11 h-6 bg-gray-700 rounded-full peer  peer-focus:ring-green-100  peer-checked:after:translate-x-full peer-checked:after:border-[#8F88FF] after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-[#FFE86E] after:border-black after:border-2 after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#8F88FF]"
            ></div>
          </label>

          <p
            className="inline-block text-sm font-bold"
            style={{ color: "#4731d3" }}
          >
            {enabled ? data.header.darkMode : data.header.lightMode}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
