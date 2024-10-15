import React, { useState } from "react";
import { Link } from "react-router-dom";
import HamburgerMenu from "./HamburgerMenu";
import Autocomplete from "./Autocomplete";

function AddStock() {
  const [date, setDate] = useState("");
  const [selectedStock, setSelectedStock] = useState(null);

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

  const handleStockClick = (stock) => {
    setSelectedStock(stock);
  };

  return (
    <div>
      <HamburgerMenu />
      <Link to="/">홈으로 돌아가기</Link>
      <div>
        <label htmlFor="stock-date">날짜 선택:</label>
        <input
          type="date"
          id="stock-date"
          value={date}
          onChange={handleDateChange}
        />
      </div>
      <Autocomplete suggestions={suggestions} />
      <ul>
        {Object.keys(suggestions).map((stock) => (
          <li key={stock} onClick={() => handleStockClick(stock)}>
            {stock}
            {selectedStock === stock && (
              <div>
                <button onClick={() => alert(`Button clicked for ${stock}`)}>
                  버튼
                </button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AddStock;
