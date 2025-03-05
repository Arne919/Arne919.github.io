import React from "react";
import "../styles/components/Navbar.css"; // 스타일 불러오기

function Navbar() {
  return (
    <nav className="navbar">
      <h1>포트폴리오</h1>
      <ul>
        <li><a href="#main">Main</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
