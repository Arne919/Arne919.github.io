import React, { useState, useEffect } from "react";
import "../styles/components/Navbar.css";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({
      behavior: "smooth",
    });
    setMenuOpen(false); // 클릭하면 메뉴 닫힘
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        {/* 로고 클릭 시 메인 섹션으로 이동 */}
        <div className="logo" onClick={() => scrollToSection("main")}>
          KHK's Portfolio
        </div>

        {/* 햄버거 메뉴 버튼 (1000px 이하에서만 보임) */}
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>

        {/* 네비게이션 링크 (1000px 이하일 때는 숨김) */}
        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li onClick={() => scrollToSection("about")}>About me</li>
          <li onClick={() => scrollToSection("skill")}>Skills</li>
          <li onClick={() => scrollToSection("projects")}>Projects</li>
          <li onClick={() => scrollToSection("contact")}>Contact</li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
