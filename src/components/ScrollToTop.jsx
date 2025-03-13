import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa"; // 화살표 아이콘
import "../styles/components/ScrollToTop.css"; // 스타일 파일

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // 스크롤 이벤트 핸들러
  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // 클릭 시 최상단으로 스크롤
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // 스크롤 감지 이벤트 등록
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <button
      className={`scroll-to-top ${isVisible ? "visible" : ""}`}
      onClick={scrollToTop}
    >
      <FaArrowUp className="arrow-icon" />
    </button>
  );
};

export default ScrollToTop;
