import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <h2>Mon Portfolio</h2>
      <ul>
        <li><Link to="/">À propos</Link></li>
        <li><Link to="/competencies">Compétences</Link></li>
        <li><Link to="/projects">Projets</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;