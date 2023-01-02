import '../styles/navbar.css'
import { Link } from 'react-router-dom'


const NavBar = () => {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">  Kat Keffner </Link>
      <ul>
        <li>
          <Link to="/aboutme">About </Link>
        </li>
        <li>
          <Link to="/skills">Skills</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar;
