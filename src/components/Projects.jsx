import React from "react";
import "../styles/components/Projects.css";

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-list">
        <div className="project">
          <h3>프로젝트 1</h3>
          <p>설명...</p>
        </div>
        <div className="project">
          <h3>프로젝트 2</h3>
          <p>설명...</p>
        </div>
      </div>
    </section>
  );
}

export default Projects;
