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
      {/* Logo */}
      <h2 className="nav-title">
        <Link to="/" onClick={() => setIsMenuOpen(false)}>
          <img src={logo} alt="Logo" className="nav-logo" />
        </Link>
      </h2>

      {!isMenuOpen && (
        <button
          className="burger-menu"
          onClick={() => setIsMenuOpen(true)}
          aria-label="Ouvrir le menu"
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
      )}

      {/* Croix centrée (mobile/tablette) */}
      {isMenuOpen && (
        <button
          className="close-menu"
          onClick={() => setIsMenuOpen(false)}
          aria-label="Fermer le menu"
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>
      )}

      {/* Icône contraste desktop */}
      <button
        className="contrast-icon desktop"
        onClick={toggleTheme}
        aria-label="Changer le contraste"
      >
        <FontAwesomeIcon icon={faCircleHalfStroke} />
      </button>

      {/* Menu burger */}
      <div className={`nav-right ${isMenuOpen ? "open" : ""}`}>
        {/* Icône contraste mobile */}
        <button
          className="contrast-icon mobile"
          onClick={toggleTheme}
          aria-label="Changer le contraste"
        >
          <FontAwesomeIcon icon={faCircleHalfStroke} />
        </button>

        {/* Liens navigation */}
        <ul>
          <li>
            <NavLink to="/" onClick={() => setIsMenuOpen(false)}>
              <FontAwesomeIcon icon={faUser} />
              <span className="nav-text">Accueil</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/competencies" onClick={() => setIsMenuOpen(false)}>
              <FontAwesomeIcon icon={faLaptopCode} />
              <span className="nav-text">Mon parcours</span>
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
      </div>
    </nav>
  );
}

export default Navbar;
