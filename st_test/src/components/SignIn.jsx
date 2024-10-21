import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginMessage, setLoginMessage] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault(); // 기본 폼 제출 동작을 막습니다.

    // 로그인 로직을 여기에 추가합니다.
    // 예를 들어, 서버에 로그인 요청을 보내고 응답을 처리합니다.
    // 여기서는 간단히 로그인 성공으로 가정하고 리디렉션합니다.
    if (email === "test@example.com" && password === "password") {
      alert("로그인 성공");
      navigate("/"); // 홈페이지로 리디렉션합니다.
    } else {
      setLoginMessage("이메일 또는 비밀번호가 잘못되었습니다.");
    }
  }

  return (
    <div className="signin-container">
      <h2>로그인</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">이메일:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">비밀번호:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {loginMessage && <p className="loginMessage">{loginMessage}</p>}
        <button type="submit">로그인</button>
      </form>
    </div>
  );
}

export default SignIn;
