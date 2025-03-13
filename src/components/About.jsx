import React from "react";
import { FaUser, FaPhone, FaEnvelope, FaCalendarAlt, FaMapMarkerAlt, FaGraduationCap, FaLink } from "react-icons/fa";
import "../styles/components/About.css";

function About() {
  return (
    <section id="about" className="about">
      {/* ✅ 제목을 더 보기 좋게 정렬 */}
      <div className="about-title">
        <FaLink className="about-icon-link" /> 
        <div className="about-icon-text">ABOUT ME</div>
      </div>

      <div className="about-container">
        {/* ✅ 모든 정보 아이템을 하나의 배열로 정리 */}
        {[
          { icon: <FaUser />, label: "이름", value: "강혜경" },
          { icon: <FaCalendarAlt />, label: "생년월일", value: "96.09.19" },
          { icon: <FaMapMarkerAlt />, label: "위치", value: "부산광역시 강서구" },
          { icon: <FaPhone />, label: "연락처", value: "010-5695-6890" },
          { icon: <FaEnvelope />, label: "이메일", value: "ghgghg96@naver.com" },
          { icon: <FaGraduationCap />, label: "학력", value: "울산대학교 (수학과)" },
        ].map((item, index) => (
          <div className="about-item" key={index}>
            <div className="about-icon">{item.icon}</div>
            <div className="about-qa">
              <div className="about-q">{item.label}</div>
              <div className="about-a">{item.value}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default About;
