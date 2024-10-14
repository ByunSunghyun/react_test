import React, { useState } from "react";
import { Link } from "react-router-dom";
import HamburgerMenu from "./HamburgerMenu";
import Autocomplete from "./Autocomplete";

function AddStock() {
  const [date, setDate] = useState("");

  const suggestions = {
    Apple: "AAPL",
    Alphabet: "GOOG",
    Tesla: "TSLA",
    Microsoft: "MSFT",
    Amazon: "AMZN",
    "Samsung Electronics": "005930.KS",
    "SK Hynix": "000660.KS",
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };
  return (
    <div>
      <HamburgerMenu />
      <Link to="/">홈으로 돌아가기</Link>
      <div>
        <main>
          <label htmlFor="stock-date">날짜 선택:</label>
          <input
            type="date"
            id="stock-date"
            value={date}
            onChange={handleDateChange}
          />
          <p></p>
          <Autocomplete suggestions={suggestions} />{" "}
          {/* 자동 완성 컴포넌트 사용 */}
        </main>
      </div>
    </div>
  );
}

export default AddStock;
