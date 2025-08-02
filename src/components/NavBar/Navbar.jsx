import React, { useState, useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import { ThemeContext } from "../Theme/ThemeContext";
import logo from "@/assets/logo.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleHalfStroke,
  faUser,
  faLaptopCode,
  faFolderOpen,
  faEnvelope,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const { toggleTheme } = useContext(ThemeContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <h2 className="nav-title">
        <Link to="/" onClick={() => setIsMenuOpen(false)}>
          <img src={logo} alt="Logo" className="nav-logo" />
        </Link>
      </h2>

      <button
        className="burger-menu"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Ouvrir ou fermer le menu de navigation"
      >
        <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} size="lg" />
      </button>

      <div className={`nav-right ${isMenuOpen ? "open" : ""}`}>
        <ul>
          <li>
            <NavLink to="/" onClick={() => setIsMenuOpen(false)}>
              <FontAwesomeIcon icon={faUser} />
              <span className="nav-text">À propos</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/competencies" onClick={() => setIsMenuOpen(false)}>
              <FontAwesomeIcon icon={faLaptopCode} />
              <span className="nav-text">Compétences</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" onClick={() => setIsMenuOpen(false)}>
              <FontAwesomeIcon icon={faFolderOpen} />
              <span className="nav-text">Projets</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" onClick={() => setIsMenuOpen(false)}>
              <FontAwesomeIcon icon={faEnvelope} />
              <span className="nav-text">Contact</span>
            </NavLink>
          </li>
        </ul>
        <button
          onClick={toggleTheme}
          className="contrast-button"
          aria-label="Changer le contraste"
        >
          <FontAwesomeIcon icon={faCircleHalfStroke} size="lg" />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
