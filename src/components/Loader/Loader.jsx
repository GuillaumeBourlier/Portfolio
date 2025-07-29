import React, { useEffect, useState } from "react";
import loaderImage from "@/assets/logo.webp";

const Loader = ({ onFinish }) => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(onFinish, 800);
    }, 2500);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className={`loader-container ${fadeOut ? "fade-out" : ""}`}>
      <div className="loader-logo">
        <img src={loaderImage} alt="Loader" loading="eager" />
        <div className="portfolio-text">portfolio</div>
      </div>
    </div>
  );
};

export default Loader;