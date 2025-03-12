import React from "react";
import { FaUser, FaPhone, FaEnvelope, FaCalendarAlt, FaMapMarkerAlt, FaGraduationCap, FaLink } from "react-icons/fa";
import "../styles/components/About.css";

function About() {
  return (
    <section id="about" className="about">
      {/* ✅ 제목을 더 보기 좋게 정렬 */}
      <div className="about-title">
        <FaLink className="about-icon-link" /> 
        <div className="about-icon-text">
          ABOUT ME
        </div>
      </div>

      <div className="about-container">
        {/* 왼쪽 */}
        <div className="abount-column">
          <div className="about-item">
            <FaUser className="about-icon" />
            <div className="about-qa">
              <div className="about-q">이름</div>
              <div className="about-a">강혜경</div>
            </div>
          </div>
          <div className="about-item">
            <FaPhone className="about-icon" />
            <div className="about-qa">
              <div className="about-q">연락처</div>
              <div className="about-a">010-5695-6890</div>
            </div>
          </div>
        </div>

        {/* 가운데 */}
        <div className="abount-column">
          <div className="about-item">
            <FaCalendarAlt className="about-icon" />
            <div className="about-qa">
              <div className="about-q">생년월일</div>
              <div className="about-a">96.09.19</div>
            </div>
          </div>
          <div className="about-item">
            <FaEnvelope className="about-icon" />
            <div className="about-qa">
              <div className="about-q">이메일</div>
              <div className="about-a">ghgghg96@naver.com</div>
            </div>
          </div>
        </div>

        {/* 오른쪽 */}
        <div className="abount-column">
          <div className="about-item">
            <FaMapMarkerAlt className="about-icon" />
            <div className="about-qa">
              <div className="about-q">위치</div>
              <div className="about-a">부산광역시 강서구</div>
            </div>
          </div>
          <div className="about-item">
            <FaGraduationCap className="about-icon" />
            <div className="about-qa">
              <div className="about-q">학력</div>
              <div className="about-a">울산대학교 (수학과)</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
