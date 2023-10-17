import { data } from "../data";

const Footer = () => {
  return (
    <div>
      <div className="text-center w-[483px] mx-auto py-20">
        <h2 className="text-spcBlue font-bold text-5xl leading-[72px]">
          {data.footer.header}
        </h2>
        <p className="font-normal text-2xl leading-9 text-[#120b39] pt-5">
          {data.footer.text}
        </p>
        <p className="font-medium text-xl leading-6 text-spcBlue underline pt-5">
          {data.footer.email}
        </p>
        <div className="flex justify-between w-52 mx-auto pt-5">
          {data.footer.icons.map((icon) => (
            <a href={icon.path} className="text-spcBlue">
              {icon.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Footer;
