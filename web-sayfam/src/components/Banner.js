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
      {data.bannerTextContent.map((content) => (
        <p>{content}</p>
      ))}
      {/* <div
        className="inline-block "
        style={{ width: "30%", backgroundColor: "#CBF281" }}
      >
        ABC
      </div> */}
    </div>
  );
};

export default Banner;
