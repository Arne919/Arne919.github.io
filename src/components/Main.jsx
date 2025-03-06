import React, { useState, useEffect } from "react";
import "../styles/components/Main.css";

function Main() {
  const text = `안녕하세요 :)\n주니어 프론트엔드 개발자 강혜경입니다.`; // 개행 포함
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const startTyping = setTimeout(() => {
      if (index < text.length) {
        const timeout = setTimeout(() => {
          setDisplayText((prevText) => prevText + text[index]);
          setIndex(index + 1);
        }, 50);

        return () => clearTimeout(timeout);
      }
    }, 100); // 1초 뒤에 타이핑 시작

    return () => clearTimeout(startTyping);
  }, [index, text]);

  // 📌 특정 섹션으로 스크롤 이동
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section id="main" className="main">
      <div className="typing-container">
        {displayText.split("\n").map((line, idx) => (
          <div key={idx} className="typing-line">
            {line}
            {idx === displayText.split("\n").length - 1 && <span className="cursor">|</span>}
          </div>
        ))}
      </div>
      <br />
      <br />
      <hr />
      <br />
      <p className="description">
        저는 수학 문제 푸는 것을 좋아해서 수학과 전공을 선택하였습니다.<br />
        이후 수학과 비슷한 논리적 사고를 요구하는 코딩에 흥미가 생겼고,<br />
        관련 교육 과정을 이수하며 프론트엔드 개발자를 꿈꾸게 되었습니다.<br />
        <br />
        사용자 중심의 인터페이스 설계와 성능 최적화에 대한 고민을 하며,<br />
        적재적소에 알맞은 기술을 적용하여 최고의 UX를 제공할 수 있는<br />
        프론트엔드 개발자가 되고 싶습니다.
      </p>

      {/* 📌 더 알아보기 버튼 추가 */}
      <button className="more-button" onClick={() => scrollToSection("about")}>
        더 알아보기 ↓
      </button>
    </section>
  );
}

export default Main;
