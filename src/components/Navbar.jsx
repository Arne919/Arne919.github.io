import React, { useState, useEffect } from "react";
import "../styles/components/Navbar.css";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 950);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    const handleResize = () => {
      if (window.innerWidth > 950) {
        setMenuOpen(false); // ✅ 폭이 넓어지면 메뉴 자동 닫힘
        setIsMobile(false);
      } else {
        setIsMobile(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled || menuOpen || isMobile ? "scrolled" : "transparent"}`}>
      <div className="navbar-container">
        <div className={`logo ${menuOpen || isMobile ? "black-logo" : ""}`} onClick={() => scrollToSection("main")}>
          KHK's Portfolio
        </div>

        <div className="hamburger" onClick={toggleMenu}>
          ☰
        </div>

        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li onClick={() => scrollToSection("about")}>About me</li>
          <li onClick={() => scrollToSection("skill")}>Skills</li>
          <li onClick={() => scrollToSection("archiving")}>Archiving</li>
          <li onClick={() => scrollToSection("projects")}>Projects</li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
