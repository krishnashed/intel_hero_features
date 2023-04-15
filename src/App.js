import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "./Pages/Landing";
import CategoryOptimizations from "./Pages/CategoryOptimizations";
import Demo from "./Pages/Demo";
import K8Workloads from "./Pages/K8Workloads";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route
        path="/optimizations/:category"
        element={<CategoryOptimizations />}
      />
      <Route path="/:category/demo/:workload" element={<Demo />} />
      <Route path="/k8-workloads" element={<K8Workloads />} />
    </Routes>
  );
};

export default App;
