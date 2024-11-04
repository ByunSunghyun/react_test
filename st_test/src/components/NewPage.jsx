import React from "react";
import { Link } from "react-router-dom";
import HamburgerMenu from "./HamburgerMenu/HamburgerMenu";

function NewPage() {
  return (
    <div>
      <HamburgerMenu />
      <h1>새로운 페이지</h1>
      <p>이것은 새로운 페이지입니다.</p>
      <Link to="/">홈으로 돌아가기</Link>
    </div>
  );
}

export default NewPage;
