import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu"; // 상대 경로 수정
import "./Home.css"; // CSS 파일 임포트
import axios from "axios";

function Home() {
  const [isMobile, setIsMobile] = useState(false);
  const [ip, setIp] = useState("");

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
    // IP 주소를 가져오는 부분
    const fetchData = async () => {
      try {
        console.log("Fetching IP address..."); // 디버깅 로그
        const response = await axios.get("/api/getIp", {
          headers: {
            "Content-Type": "application/json",
          },
        });
        console.log("Response:", response); // 응답 확인
        const data = response.data;
        setIp(data);
      } catch (error) {
        console.error("Error details:", error.response || error); // 상세 오류 정보
      } finally {
        console.log("IP address fetched."); // 완료 메시지
      }
    };

    fetchData();
  }, []);

  const navigate = useNavigate();

  const handleButtonClick = (path) => {
    navigate(path);
  };

  return (
    <div className={`App ${isMobile ? "mobile" : ""}`}>
      <header className="App-header">
        <HamburgerMenu />
        <button onClick={() => handleButtonClick("/addstock")}>
          Add Stock
        </button>
        <button onClick={() => handleButtonClick("/deletestock")}>
          Delete Stock
        </button>
        <p>Your IP address is: {ip}</p>
      </header>
    </div>
  );
}

export default Home;
