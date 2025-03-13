import React from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import About from "./components/About";
import Skill from "./components/Skill";
import Archiving from "./components/Archiving";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop"; // 추가
import "./styles/global.css"; // 스타일 추가

function App() {
  return (
    <>
      <Navbar />
      <Main />
      <About />
      <Skill />
      <Archiving />
      <Projects />
      <ScrollToTop /> {/* 스크롤 버튼 추가 */}
      <Footer />
    </>
  );
}

export default App;
