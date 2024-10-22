import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginMessage, setLoginMessage] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault(); // 기본 폼 제출 동작을 막습니다.

    try {
      // 서버로 로그인 요청을 보냅니다.
      const response = await axios.post("http://localhost:8080/api/login", {
        email,
        password,
      });

      // 로그인 성공 시
      if (response.data === "로그인 성공") {
        alert("로그인 성공");
        navigate("/home"); // 홈페이지로 리디렉션합니다.
      } else {
        // 로그인 실패 시
        setLoginMessage(response.data);
      }
    } catch (error) {
      // 서버 오류 또는 네트워크 오류 처리
      setLoginMessage("서버 오류가 발생했습니다. 나중에 다시 시도해주세요.");
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
