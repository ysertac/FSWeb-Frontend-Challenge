import { data } from "../data";

const Footer = () => {
  return (
    <div className="dark:bg-spcDark">
      <div className="text-center w-[483px] mx-auto py-20">
        <h2 className="text-spcBlue dark:text-[#8f88ff] font-bold text-5xl leading-[72px]">
          {data.footer.header}
        </h2>
        <p className="font-normal text-2xl leading-9 text-[#120b39] dark:text-white pt-5">
          {data.footer.text}
        </p>
        <p className="font-medium text-xl leading-6 text-spcBlue dark:text-[#8f88ff] underline pt-5">
          {data.footer.email}
        </p>
        <div className="flex justify-between w-52 mx-auto pt-5">
          {data.footer.icons.map((icon) => (
            <a href={icon.path} className="text-spcBlue dark:text-[#8f88ff]">
              {icon.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Footer;
