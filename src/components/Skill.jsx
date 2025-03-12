import React from "react";
import { FaLink, FaCode, FaHtml5, FaServer, FaCloud } from "react-icons/fa";
import "../styles/components/Skill.css";

const skills = [
  {
    category: "Language",
    icon: <FaCode className="icon" />,
    items: [
      { name: "JavaScript", className: "javascript" },
      { name: "Python", className: "python" },
    ],
  },
  {
    category: "Frontend",
    icon: <FaHtml5 className="icon" />,
    items: [
      { name: "React.js", className: "gray" },
      { name: "Vue.js", className: "green2" },
      { name: "HTML5", className: "pink" },
      { name: "CSS3", className: "sky" },
      { name: "Bootstrap", className: "bootstrap" },
    ],
  },
  {
    category: "Backend",
    icon: <FaServer className="icon" />,
    items: [
      { name: "Django", className: "green" },
      { name: "Node.js", className: "blue" },
    ],
  },
  {
    category: "Tools",
    icon: <FaCloud className="icon" />,
    items: [
      { name: "Github", className: "black" },
      { name: "Gitlab", className: "orange" },
      { name: "Notion", className: "yellow" },
      { name: "Jira", className: "blue2" },
      { name: "Figma", className: "red" },
      // { name: "Unity", className: "dark" },
    ],
  },
];

const Skill = () => {
  return (
    <section id="skill" className="skill">
      <div className="skill-title">
        <FaLink className="skill-icon-link" />
        <div className="skill-icon-text">
          SKILLS
        </div> 
      </div>

      <div className="skill-box">
        {skills.map((skill, index) => (
          <div key={index} className="skill-category">
            <div className="skill-header">
              {skill.icon}
              <span>{skill.category}</span>
            </div>
            <div className="skill-tags">
              {skill.items.map((item, idx) => (
                <span key={idx} className={`tag ${item.className}`}>
                  {item.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skill;
