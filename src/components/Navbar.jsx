import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">Mon Portfolio</h1>
      <ul>
        <li><Link to="/">Accueil</Link></li>
        <li><Link to="/competencies">Compétences</Link></li>
        <li><Link to="/projects">Mes Projets</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;