import React from "react";
import { FaLink } from "react-icons/fa";
import "../styles/components/Archiving.css";

const archives = [
  {
    image: "/src/assets/images/github-logo.png", // 로컬 이미지 또는 외부 URL 사용 가능
    description: "소스 코드 저장소",
    url: "https://github.com/Arne919",
  },
  {
    image: "/src/assets/images/notion-logo.png", // 노션 이미지
    description: "공부 목적의 노션",
    url: "https://flash-paprika-6cf.notion.site/Study-1a5080d6bc13809b9a52def0731600ca?pvs=4",
  },
];

function Archiving() {
  return (
    <section id="archiving" className="archiving">
      <div className="archiving-title">
        <FaLink className="archiving-icon-link" />
        <div className="archiving-icon-text">ARCHIVING</div>
      </div>

      <div className="archiving-container">
        {archives.map((archive, index) => (
          <a key={index} href={archive.url} target="_blank" rel="noopener noreferrer" className="archiving-card">
          <img src={archive.image} alt={archive.name} className="archiving-image" />

          <div className="archiving-des">{archive.description}</div>
          <span className="archiving-url">
            {new URL(archive.url).hostname}
          </span>
        </a>
        ))}
      </div>
    </section>
  );
}

export default Archiving;
