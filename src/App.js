import Home from "./components/Home";
import DarkModeBtn from "./components/DarkModeBtn";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <DarkModeBtn />
      <NavBar />
      <Home />
    </div>
  );
}

export default App;
