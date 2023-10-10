import { useState } from "react";
import { data } from "../data";

const Header = () => {
  const [enabled, setEnabled] = useState(true);
  return (
    <div className="flex justify-between w-[960px] mx-auto">
      <div className="mt-10">
        <p
          style={{ color: "#CBF281" }}
          className="inline-block text-3xl font-bold"
        >
          {data.name}
        </p>
      </div>
      <div className="flex justify-between w-80 mt-5">
        <p className="inline-block text-sm font-bold">
          <span style={{ color: "#CAF181" }}>{data.lang}</span>'YE GEÇ
        </p>
        <div className="flex">
          <label class="inline-block relative items-center mr-5 cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={enabled}
              readOnly
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
            {data.darkMode}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
