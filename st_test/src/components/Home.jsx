import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import HamburgerMenu from "./HamburgerMenu";
import "./Home.css"; // CSS 파일 임포트
import Autocomplete from "./Autocomplete";

const suggestions = {
  Apple: "AAPL",
  Alphabet: "GOOG",
  Tesla: "TSLA",
  Microsoft: "MSFT",
  Amazon: "AMZN",
  "Samsung Electronics": "005930.KS",
  "SK Hynix": "000660.KS",
};

function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    document.title = "Home";

    const urlParams = new URLSearchParams(window.location.search);
    const forceMobile = urlParams.get("mobile") === "true";

    if (forceMobile) {
      setIsMobile(true);
    } else {
      const userAgent = navigator.userAgent || navigator.vendor || window.opera;
      if (
        (/android/i.test(userAgent) || /iPad|iPhone|iPod/.test(userAgent)) &&
        !window.MSStream
      ) {
        setIsMobile(true);
      }
    }
  }, []);

  const navigate = useNavigate();

  const handleButtonClick = (path) => {
    navigate(path);
  };

  return (
    <div className="App">
      <header className="App-header">
        <HamburgerMenu />
        {}
        <h1>모바일용 웹사이트</h1>
        <p>이 웹사이트는 React로 만들어졌습니다.</p>
      </header>
      <main>
        <section>
          <h2>소개</h2>
          <p>
            이것은 {isMobile ? "모바일" : "PC"} 화면에 최적화된 예시
            웹사이트입니다.
          </p>
          <button onClick={() => handleButtonClick("/newpage")}>
            새로운 페이지로 이동
          </button>
        </section>
        <Autocomplete suggestions={suggestions} />{" "}
        {/* 자동 완성 컴포넌트 사용 */}
      </main>
    </div>
  );
}

export default Home;
