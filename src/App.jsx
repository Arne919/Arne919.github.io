import React from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import About from "./components/About";
import Skill from "./components/Skill";
import Archiving from "./components/Archiving";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Main />
      <About />
      <Skill />
      <Archiving />
      <Projects />
      <Footer />
    </>
  );
}

export default App;
