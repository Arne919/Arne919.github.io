import React from "react";
import Navbar from "../components/Navbar";
import Main from "../components/Main";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

import "../styles/pages/Home.css"; // 페이지 스타일

function Home() {
  return (
    <div className="home">
      <Navbar />
      <Main />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
