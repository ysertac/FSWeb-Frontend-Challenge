import Banner from "./layouts/Banner";
import Skills from "./layouts/Skills";
import Profile from "./layouts/Profile";
import Projects from "./layouts/Projects";
import Footer from "./layouts/Footer";
import axios from "axios";
import { useEffect, useState } from "react";
const url = "https://api.github.com/users/ysertac";
const imgPath = "./assets/ecommerce.png";

function App() {
  //handleState();
  const html = document.querySelector("html");
  const language = localStorage.getItem("language")
    ? localStorage.getItem("language")
    : "en";
  html.lang = language ? language : "en";

  const [profile, setProfile] = useState({});
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    axios
      .get(url)
      .then((res) => setProfile(res.data))
      .catch((err) => console.log(err));
    axios
      .get(`${url}/starred?direction=asc`)
      .then((res) => setRepos(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="bg-white text-white mx-auto">
      <Banner html={html} language={language} profile={profile} />
      <Skills language={language} />
      <Profile language={language} />
      <Projects language={language} repos={repos} />
      <Footer language={language} />
    </div>
  );
}

export default App;
