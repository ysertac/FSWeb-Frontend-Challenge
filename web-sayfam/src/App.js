import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { showData } from "./actions";

function App() {
  const storeName = useSelector((store) => store.name);
  const dispatch = useDispatch();
  const handleState = () => {
    dispatch(showData("ABC"));
  };
  handleState();
  return <div className="App">Hello World</div>;
}

export default App;
