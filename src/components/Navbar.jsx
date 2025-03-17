import React, { useState, useEffect } from "react";
import "../styles/components/Navbar.css";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 950);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth > 950) {
        setMenuOpen(false); // ✅ 950px 이상에서는 자동으로 메뉴 닫기
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
    setMenuOpen(!menuOpen);
    if (!menuOpen) {
      setScrolled(true); // ✅ 햄버거 메뉴 열리면 네비게이션을 흰색으로 변경
    }
  };

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({
      behavior: "smooth",
    });
    setMenuOpen(false); // 클릭하면 메뉴 닫힘
  };

  return (
    <nav className={`navbar ${scrolled || (isMobile && menuOpen) ? "scrolled" : ""}`}>
      <div className="navbar-container">
        <div className="logo" onClick={() => scrollToSection("main")}>
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
