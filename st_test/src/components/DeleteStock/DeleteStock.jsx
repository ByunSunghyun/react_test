import React from "react";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu"; // 상대 경로 수정
import Autocomplete from "../Autocomplete/Autocomplete"; // 상대 경로 수정

function DeleteStock() {
  return (
    <div className="delete-stock">
      <HamburgerMenu />
      <h1>Delete Stock</h1>
      <Autocomplete />
      {/* 추가적인 내용 */}
    </div>
  );
}

export default DeleteStock;