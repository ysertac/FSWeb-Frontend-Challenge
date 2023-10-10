import { useDispatch, useSelector } from "react-redux";
import { showData } from "./actions";
import Banner from "./components/Banner";

function App() {
  const first = useSelector((store) => store.first);
  const dispatch = useDispatch();
  const handleState = () => {
    dispatch(showData("ABC"));
  };

  //handleState();

  return (
    <div className="bg-black text-white mx-auto" style={{ width: "1440px" }}>
      <Banner />
    </div>
  );
}

export default App;
