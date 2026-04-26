import { Link } from "react-router-dom";
import "../styles.css";

function Navbar() {
 return (
  <nav id="nav">
  <Link id="headerP" to="/">My Portfolio</Link>
   <ul className="navbar-nav">
    <li><Link to="/">Home</Link></li>
    <li><Link to="/about">About</Link></li>
    <li><Link to="/projects">Projects</Link></li>
    <li><Link to="/contact">Contact</Link></li>
   </ul>
  </nav>
 );
}

export default Navbar;