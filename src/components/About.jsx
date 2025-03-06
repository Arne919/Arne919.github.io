import React from "react";
import { FaUser, FaPhone, FaEnvelope, FaCalendarAlt, FaMapMarkerAlt, FaGraduationCap, FaLink } from "react-icons/fa";
import "../styles/components/About.css";

function About() {
  return (
    <section id="about" className="about">
      {/* ✅ 제목을 더 보기 좋게 정렬 */}
      <h2 className="about-title">
        <FaLink className="icon-link" /> ABOUT ME
      </h2>
      <hr className="about-divider" />

      <div className="about-container">
        {/* 왼쪽 */}
        <div className="about-item">
          <FaUser className="about-icon" />
          <div>
            <h3>이름</h3>
            <p>강혜경</p>
          </div>
        </div>
        <div className="about-item">
          <FaPhone className="about-icon" />
          <div>
            <h3>연락처</h3>
            <p>010-5695-6890</p>
          </div>
        </div>

        {/* 가운데 */}
        <div className="about-item">
          <FaCalendarAlt className="about-icon" />
          <div>
            <h3>생년월일</h3>
            <p>96.09.19</p>
          </div>
        </div>
        <div className="about-item">
          <FaEnvelope className="about-icon" />
          <div>
            <h3>이메일</h3>
            <p>ghgghg96@naver.com</p>
          </div>
        </div>

        {/* 오른쪽 */}
        <div className="about-item">
          <FaMapMarkerAlt className="about-icon" />
          <div>
            <h3>위치</h3>
            <p>부산광역시 강서구</p>
          </div>
        </div>
        <div className="about-item">
          <FaGraduationCap className="about-icon" />
          <div>
            <h3>학력</h3>
            <p>울산대학교 (컴퓨터공학부)</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
