import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Skills from './components/Skills';
import DarkModeBtn from './components/DarkModeBtn';
import './styles/links.scss';
import './styles/darkMode.css'

function App() {
  return (
    <div className="App">
      <DarkModeBtn />
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
