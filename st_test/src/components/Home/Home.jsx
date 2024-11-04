import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu"; // 상대 경로 수정
import "./Home.css"; // CSS 파일 임포트
import Autocomplete from "../Autocomplete/Autocomplete"; // 상대 경로 수정

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
    <div className={`App ${isMobile ? "mobile" : ""}`}>
      <header className="App-header">
        <HamburgerMenu />
        <Autocomplete suggestions={suggestions} />
        <button onClick={() => handleButtonClick("/signin")}>Sign In</button>
        <button onClick={() => handleButtonClick("/signup")}>Sign Up</button>
      </header>
    </div>
  );
}

export default Home;