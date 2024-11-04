import React from "react";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu"; // 상대 경로 수정
import Autocomplete from "../Autocomplete/Autocomplete"; // 상대 경로 수정

function AddStock() {
  return (
    <div className="add-stock">
      <HamburgerMenu />
      <h1>Add Stock</h1>
      <Autocomplete />
      {/* 추가적인 내용 */}
    </div>
  );
}

export default AddStock;