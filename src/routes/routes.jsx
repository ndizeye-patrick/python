/** @format */

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import All from "../pages/All";
import FastB from "../pages/FastB";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<All />} />
        <Route path="/fastbai" element={<FastB />} />
      </Routes>
    </Router>
  );
}

export default App;
