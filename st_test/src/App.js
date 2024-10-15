import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import NewPage from "./components/NewPage1";
import AddStock from "./components/AddStock";
import DeleteStock from "./components/DeleteStock";
import "./App.css";
//import './components/Home.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/newpage" element={<NewPage />} />
        <Route path="/addstock" element={<AddStock />} />
        <Route path="/deletestock" element={<DeleteStock />} />
      </Routes>
    </Router>
  );
}

export default App;
