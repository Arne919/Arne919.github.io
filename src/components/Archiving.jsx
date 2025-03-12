import React from "react";
import { FaLink } from "react-icons/fa";
import "../styles/components/Archiving.css";

const archives = [
  {
    image: "./assets/images/github-logo.png", // 로컬 이미지 또는 외부 URL 사용 가능
    description: "소스 코드 저장소",
    url: "https://github.com/Arne919",
  },
  {
    image: "./assets/images/notion-logo.png", // 노션 이미지
    description: "공부 목적의 노션",
    url: "https://flash-paprika-6cf.notion.site/Study-1a5080d6bc13809b9a52def0731600ca?pvs=4",
  },
];

// ✅ 도메인 + 경로만 출력하는 함수
function getShortURL(fullUrl) {
  const url = new URL(fullUrl);
  
  // Notion의 경우 서브 도메인 제거하고 "notion.so"로 표기
  if (url.hostname.includes("notion.site")) {
    return `notion.so${url.pathname.split('-')[0]}`; // Study 부분만 추출
  }

  return `${url.hostname}${url.pathname}`;
}

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

            <span className="archiving-url">
              {getShortURL(archive.url)}
            </span>
            <div className="archiving-des">{archive.description}</div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Archiving;
