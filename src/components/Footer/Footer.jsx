import React from "react";
import logo from "@/assets/logo.webp";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <img
          src={logo}
          alt="Logo de Guillaume Bourlier"
          className="footer-logo"
        />
        <p>- Développeur Web Front-End</p>
      </div>
    </footer>
  );
}

export default Footer;
