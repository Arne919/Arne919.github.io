import React from "react";
import { FaLink } from "react-icons/fa";
import "../styles/components/Projects.css";

const projects = [
  {
    // category: "병원 시뮬레이션",
    category: ["병원 시뮬레이션", "진행 중"],
    date: "2025-03-03 ~ 2025.04.11 (6인 팀 프로젝트)",
    title: "병원에서 자율주행하며 도움주는 로봇(ROS2) 시뮬레이션 및 웹사이트",
    details: [
      "ROS2 기반의 자율주행 로봇 시뮬레이션 개발",
      "유니티에서 3D 환경 및 오브젝트 배치하여 시뮬레이션 구축",
      "웹사이트 백엔드 API 연동",
      "사용자 친화적인 UI/UX 설계 및 최적화",
    ],
    link: "",
    stack: ["TypeScript", "Next.js", "Tailwind CSS", "Unity", "Jira", "GitLab", "Notion", "Figma"], //"ERD Cloud", 
  },
  {
    category: "포트폴리오 웹사이트",
    date: "2025-03 (1인 개인 프로젝트)",
    title: "포트폴리오 웹사이트",
    details: [
      "나만의 포트폴리오를 위한 웹사이트 개발",
      "반응형 디자인 적용으로 다양한 기기에서 최적화",
      "Framer Motion을 활용한 인터랙티브 애니메이션 효과 추가",
      "GitHub를 이용한 빌드 및 배포(처음)"
    ],
    link: "",
    stack: ["React", "JavaScript" , "GitHub"],
  },
  {
    category: "FoodThink",
    date: "2025-01-13 ~ 2025-02-21 (6인 팀 프로젝트)",
    title: "AI 추천 및 음성 인식·제스처 기반 레시피 웹사이트",
    details: [
      "1인 가구 및 요리 초보자를 위한 맞춤형 레시피 추천 플랫폼",
      "AI 기반 추천 시스템으로 사용자의 기호에 맞는 메뉴 추천",
      "랜덤 레시피 추천 기능 ('오늘 뭐 먹지?')",
      "웹사이트 백엔드 API 연동",
      "사용자 친화적인 UI/UX 설계 및 최적화",
    ],
    link: "",
    stack: ["React", "Vanilla JS", "Jira", "GitLab", "Notion", "Postman", "ERD Cloud", "Figma"],
  },
  {
    category: "MovieMonster",
    date: "2025-01-13 ~ 2025-02-21 (2인 팀 프로젝트)",
    title: "영화 검색, 리뷰 공유, 랭킹 시스템을 제공하는 영화 웹사이트",
    // title: "사용자들이 영화 검색, 리뷰 공유, 랭킹 시스템을 통해 경쟁할 수 있는 영화 웹사이트",
    details: [
      "TMDB API를 활용한 영화 검색 및 상세 정보 제공",
      "YouTube API 연동을 통한 예고편 영상 재생 기능",
      "사용자별 맞춤 영화 카테고리 생성 및 관리 기능",
      "3가지 유형의 영화 퀴즈 게임 제작 (포스터, 명대사, 한줄평 기반)",
      "사용자 포인트 기반 랭킹 시스템 개발 및 시각적 랭크 표시",
      "Django REST Framework를 활용한 백엔드 API 구축 및 프론트엔드 연동",
      "Vue.js 및 CSS3를 활용한 UI/UX 설계 및 최적화",
    ],
    link: "https://github.com/Arne919/MovieMonster",
    stack: ["Vue.js", "CSS3", "Django", "DRF", "SQLite(로컬 DB)", "GitLab", "Notion", "Postman", "ERD Cloud", "TMDB API", "Youtube API"],
  },
];

function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="project-title">
        <FaLink className="project-icon-link" />
        <div className="project-icon-text">PROJECTS</div>
      </div>
      <div className="project-list">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-header">
              {/* ✅ category가 배열인지 확인 후 map 실행 */}
              {Array.isArray(project.category) ? (
                project.category.map((cat, idx) => (
                  <span key={idx} className="project-category">{cat}</span>
                ))
              ) : (
                <span className="project-category">{project.category}</span>
              )}
            </div>

            <div className="project-date">{project.date}</div>
            <div className="project-title-text">{project.title}</div>

            <ul className="project-details">
              {project.details.map((detail, idx) => (
                <li key={idx}>{detail}</li>
              ))}
            </ul>

            {project.link && (
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                {project.link}
              </a>
            )}

            <div className="project-stack">
              {project.stack.map((tech, idx) => (
                <span key={idx} className="project-tag">{tech}</span>
              ))}
            </div>

            <div className="project-buttons">
              <button className="readme-button">📖 README</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
