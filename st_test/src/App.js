import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import NewPage from "./components/NewPage1";
import AddStock from "./components/AddStock";
import "./App.css";
//import './components/Home.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/newpage" element={<NewPage />} />
        <Route path="/addstock" element={<AddStock />} />
      </Routes>
    </Router>
  );
}

export default App;
