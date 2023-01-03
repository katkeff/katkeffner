import "../styles/navbar.css";
import { Link } from "react-scroll";

const NavBar = () => {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        {" "}
        Kat Keffner{" "}
      </Link>
      <ul>
        <li>
          <Link
            activeClass="active"
            to="aboutme"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="skills"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}>
            Projects
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
