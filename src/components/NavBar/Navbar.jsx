import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../Theme/ThemeContext";
import logo from "@/assets/logo.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleHalfStroke,
  faUser,
  faLaptopCode,
  faFolderOpen,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <nav className="navbar">
      <h2 className="nav-title">
        <Link to="/">
          <img src={logo} alt="Logo" className="nav-logo" />
          <span>Portfolio</span>
        </Link>
      </h2>
      <div className="nav-right">
        <ul>
          <li>
            <Link to="/">
              <FontAwesomeIcon icon={faUser} />
              <span className="nav-text">À propos</span>
            </Link>
          </li>
          <li>
            <Link to="/competencies">
              <FontAwesomeIcon icon={faLaptopCode} />
              <span className="nav-text">Compétences</span>
            </Link>
          </li>
          <li>
            <Link to="/projects">
              <FontAwesomeIcon icon={faFolderOpen} />
              <span className="nav-text">Projets</span>
            </Link>
          </li>
          <li>
            <Link to="/contact">
              <FontAwesomeIcon icon={faEnvelope} />
              <span className="nav-text">Contact</span>
            </Link>
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
