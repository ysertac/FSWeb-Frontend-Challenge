import { useDispatch, useSelector } from "react-redux";
import { showData } from "./actions";
import Banner from "./components/Banner";
import Skills from "./components/Skills";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  const first = useSelector((store) => store.first);
  const dispatch = useDispatch();
  const handleState = () => {
    dispatch(showData("ABC"));
  };

  //handleState();
  const html = document.querySelector("html");
  html.lang = localStorage.getItem("language").includes("tr") ? "tr" : "en";
  const language = localStorage.getItem("language");
  return (
    <div className="bg-white text-white mx-auto">
      <Banner html={html} language={language} />
      <Skills html={html} language={language} />
      <Profile html={html} language={language} />
      <Projects html={html} language={language} />
      <Footer html={html} language={language} />
    </div>
  );
}

export default App;
