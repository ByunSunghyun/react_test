import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import "./Autocomplete.css"; // CSS 파일 임포트

function Autocomplete() {
  const [suggestions, setSuggestions] = useState([]); // 빈 배열로 초기화
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(0);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [userInput, setUserInput] = useState("");
  const suggestionsRef = useRef(null);

  useEffect(() => {
    // 데이터를 가져오는 함수
    const fetchData = async () => {
      try {
        // const response = await axios.get(
        //   "http://localhost:8080/api/getStockList"
        // ); // API 엔드포인트를 통해 데이터 가져오기
        const response = await axios.get("/api/getStockList"); // 상대 경로 사용
        const data = response.data;
        //console.log("Fetched data:", data); // 데이터 확인을 위한 로그 출력
        setSuggestions(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (suggestionsRef.current && activeSuggestionIndex !== null) {
      const activeElement =
        suggestionsRef.current.children[activeSuggestionIndex];
      if (activeElement) {
        activeElement.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }
    }
  }, [activeSuggestionIndex]);

  const handleChange = (e) => {
    const userInput = e.currentTarget.value.toLowerCase();

    const filteredSuggestions = suggestions.filter(
      (suggestion) =>
        suggestion.symbol.toLowerCase().includes(userInput) ||
        suggestion.companyName.toLowerCase().includes(userInput)
    );

    setFilteredSuggestions(filteredSuggestions);
    setActiveSuggestionIndex(0);
    setShowSuggestions(true);
    setUserInput(e.currentTarget.value);
  };

  const handleClick = (e) => {
    setFilteredSuggestions([]);
    setActiveSuggestionIndex(0);
    setShowSuggestions(false);
    setUserInput(e.currentTarget.innerText);
  };

  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      // Enter 키
      if (filteredSuggestions[activeSuggestionIndex]) {
        setUserInput(filteredSuggestions[activeSuggestionIndex].symbol);
        setActiveSuggestionIndex(0);
        setShowSuggestions(false);
      }
    } else if (e.keyCode === 38) {
      // 위쪽 방향키
      if (activeSuggestionIndex === 0) {
        return;
      }
      setActiveSuggestionIndex(activeSuggestionIndex - 1);
    } else if (e.keyCode === 40) {
      // 아래쪽 방향키
      if (activeSuggestionIndex === filteredSuggestions.length - 1) {
        return;
      }
      setActiveSuggestionIndex(activeSuggestionIndex + 1);
    }
  };

  const suggestionsListComponent = showSuggestions && (
    <ul className="suggestions" ref={suggestionsRef}>
      {filteredSuggestions.length ? (
        filteredSuggestions.map((suggestion, index) => {
          let className;
          if (index === activeSuggestionIndex) {
            className = "suggestion-active";
          }
          return (
            <li className={className} key={suggestion.id} onClick={handleClick}>
              {suggestion.symbol} ({suggestion.companyName})
            </li>
          );
        })
      ) : (
        <li>
          <em>No suggestions available</em>
        </li>
      )}
    </ul>
  );

  return (
    <div className="autocomplete">
      <input
        type="text"
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        value={userInput}
      />
      {suggestionsListComponent}
    </div>
  );
}

export default Autocomplete;
