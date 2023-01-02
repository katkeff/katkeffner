import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Home from './components/Home';
import DarkModeBtn from './components/DarkModeBtn';
import NavBar from './components/NavBar';
import { Route, Routes } from 'react-router-dom'



function App() {
  return (
    <div className="App">
      <NavBar />
      <DarkModeBtn />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
    </div>
  );
}

export default App;
