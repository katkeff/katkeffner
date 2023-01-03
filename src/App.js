import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
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
