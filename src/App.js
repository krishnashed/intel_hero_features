import React from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "./Pages/Landing";
import CategoryOptimizations from "./Pages/CategoryOptimizations";
import Demo from "./Pages/Demo";
import K8Workloads from "./Pages/K8Workloads";
import NginxDoc from "./Pages/NginxDoc";
import PostgresDoc from "./Pages/PostgresDoc";
import RabbitMQDoc from "./Pages/RabbitMQDoc";
import SparkDoc from "./Pages/SparkDoc";
import KafkaDoc from "./Pages/KafkaDoc";

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
      <Route path="/k8-workloads/nginx-doc" element={<NginxDoc />} />
      <Route path="/k8-workloads/postgres-doc" element={<PostgresDoc />} />
      <Route path="/k8-workloads/rabbit-doc" element={<RabbitMQDoc />} />
      <Route path="/k8-workloads/spark-doc" element={<SparkDoc />} />
      <Route path="/k8-workloads/kafka-doc" element={<KafkaDoc />} />
    </Routes>
  );
};

export default App;
