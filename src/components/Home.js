import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Contact from "./Contact";
import Skills from ".//Skills";

function Home() {
  return (
    <div>
      <div id="aboutme">
        <AboutMe />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
}

export default Home;
