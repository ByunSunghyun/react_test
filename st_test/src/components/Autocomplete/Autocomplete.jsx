import React, { useState } from "react";
import "./Autocomplete.css"; // CSS 파일 임포트

function Autocomplete({ suggestions }) {
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(0);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [userInput, setUserInput] = useState("");

  const handleChange = (e) => {
    const userInput = e.currentTarget.value;

    const filteredSuggestions = Object.entries(suggestions).filter(
      ([key, value]) =>
        key.toLowerCase().includes(userInput) ||
        value.toLowerCase().includes(userInput)
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
      // Enter key
      setUserInput(filteredSuggestions[activeSuggestionIndex]);
      setActiveSuggestionIndex(0);
      setShowSuggestions(false);
    } else if (e.keyCode === 38) {
      // Up arrow
      if (activeSuggestionIndex === 0) {
        return;
      }
      setActiveSuggestionIndex(activeSuggestionIndex - 1);
    } else if (e.keyCode === 40) {
      // Down arrow
      if (activeSuggestionIndex - 1 === filteredSuggestions.length) {
        return;
      }
      setActiveSuggestionIndex(activeSuggestionIndex + 1);
    }
  };

  const suggestionsListComponent = showSuggestions && userInput && (
    <ul className="suggestions">
      {filteredSuggestions.length ? (
        filteredSuggestions.map(([key, value], index) => {
          let className;
          if (index === activeSuggestionIndex) {
            className = "suggestion-active";
          }
          return (
            <li className={className} key={key} onClick={handleClick}>
              {key} ({value})
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
