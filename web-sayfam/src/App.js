import Banner from "./components/Banner";
import Skills from "./components/Skills";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  //handleState();
  const html = document.querySelector("html");
  const language = localStorage.getItem("language")
    ? localStorage.getItem("language")
    : "en";
  html.lang = language ? language : "en";
  return (
    <div className="bg-white text-white mx-auto">
      <Banner html={html} language={language} />
      <Skills language={language} />
      <Profile language={language} />
      <Projects language={language} />
      <Footer language={language} />
    </div>
  );
}

export default App;
