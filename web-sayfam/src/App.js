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

  return (
    <div className="bg-white text-white mx-auto">
      <Banner />
      <Skills />
      <Profile />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
