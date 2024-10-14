import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./HamburgerMenu.css"; // CSS 파일 임포트

function HamburgerMenu() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleButtonClick = (path) => {
    navigate(path);
    setMenuOpen(false); // 메뉴를 닫습니다.
  };

  return (
    <div className="hamburger-menu">
      <div className="menu-icon" onClick={toggleMenu}>
        &#9776; {/* 햄버거 메뉴 아이콘 */}
      </div>
      {menuOpen && (
        <div className="dropdown-menu">
          <button onClick={() => handleButtonClick("/")}>홈</button>
          <button onClick={() => handleButtonClick("/newpage")}>
            새로운 페이지
          </button>
          <button onClick={() => handleButtonClick("/addstock")}>
            AddStock
          </button>
        </div>
      )}
    </div>
  );
}

export default HamburgerMenu;
