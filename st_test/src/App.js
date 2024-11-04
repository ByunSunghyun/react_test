import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "./components/Home/Home";
import NewPage from "./components/NewPage";
import AddStock from "./components/AddStock/AddStock";
import DeleteStock from "./components/DeleteStock/DeleteStock";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";

import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/signin" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/newpage" element={<NewPage />} />
        <Route path="/addstock" element={<AddStock />} />
        <Route path="/deletestock" element={<DeleteStock />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;