import { data, dataTR } from "../data";

const Footer = (props) => {
  const { language } = props;
  return (
    <div className="dark:bg-spcDark">
      <div className="text-center w-[483px] max-mobil:w-11/12 mx-auto py-20">
        <h2 className="text-spcBlue dark:text-[#8f88ff] font-bold text-5xl max-mobil:text-3xl leading-[72px]">
          {language.includes("tr") ? dataTR.footer.header : data.footer.header}
        </h2>
        <p className="font-normal text-2xl max-mobil:text-xl leading-9 text-[#120b39] dark:text-white pt-5">
          {language.includes("tr") ? dataTR.footer.text : data.footer.text}
        </p>
        <p className="font-medium text-xl max-mobil:text-lg leading-6 text-spcBlue dark:text-[#8f88ff] underline pt-5">
          {data.footer.email}
        </p>
        <p className="font-medium text-xl max-mobil:text-lg leading-6 text-spcBlue dark:text-[#8f88ff] pt-5">
          {data.footer.mobile}
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
