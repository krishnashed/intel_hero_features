import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Landing from "./Pages/Landing";
import CategoryOptimizations from "./Pages/CategoryOptimizations";
import Demo from "./Pages/Demo";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route
        path="/optimizations/:category"
        element={<CategoryOptimizations />}
      />
      <Route path="/:category/demo/:workload" element={<Demo />} />
    </Routes>
  );
};

export default App;
