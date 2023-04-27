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
import RedisDoc from "./Pages/RedisDoc";
import MinioDoc from "./Pages/MinioDoc";
import QATDoc from "./Pages/QATDoc";
import Cvat from "./Pages/Cvat";
import LonghornDoc from "./Pages/LonghornDoc";
import CassandraDoc from "./Pages/CassandraDoc";
import MongodbDoc from "./Pages/MongodbDoc";
import OpenvinoDoc from "./Pages/OpenvinoDoc";
import ScikitLearnDoc from "./Pages/ScikitLearn";

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
      <Route path="/k8-workloads/redis-doc" element={<RedisDoc />} />
      <Route path="/k8-workloads/minio-doc" element={<MinioDoc />} />
      <Route path="/k8-workloads/qat-doc" element={<QATDoc />} />
      <Route path="/k8-workloads/cvat-doc" element={<Cvat />} />
      <Route path="/k8-workloads/longhorn-doc" element={<LonghornDoc />} />
      <Route path="/k8-workloads/cassandra-doc" element={<CassandraDoc />} />
      <Route path="/k8-workloads/mongodb-doc" element={<MongodbDoc />} />
      <Route path="/k8-workloads/openvino-doc" element={<OpenvinoDoc />} />
      <Route path="/k8-workloads/sklearn-doc" element={<ScikitLearnDoc />} />
    </Routes>
  );
};

export default App;
