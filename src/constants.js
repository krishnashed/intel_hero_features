import pandas from "./Assets/pandas.png";
import numpy from "./Assets/numpy.png";
import scipy from "./Assets/scipy.jpg";
import numba from "./Assets/numba.png";
import xgboost from "./Assets/xgboost.png";
import tflow from "./Assets/tflow.png";
import pytorch from "./Assets/pytorch.png";
import sklearn from "./Assets/sklearn.png";
import openvino from "./Assets/openvino.jpg";
import intneural from "./Assets/intneural.jpg";
import modin from "./Assets/modin.jpg";
import bigDL from "./Assets/bigdl.jpg";
import huggingFace from "./Assets/hugging_face.svg";

import ipsec from "./Assets/ipsec.png";

import aws_emr from "./Assets/aws_emr.png";
import dataproc from "./Assets/dataproc.png";
import snowflake from "./Assets/snowflake.png";
import databricks from "./Assets/databricks.png";

import h2o from "./Assets/h2o.svg";
import cvat from "./Assets/cvat.png";

import nginx from "./Assets/nginx.png";
import haproxy from "./Assets/haproxy.png";
import nodejs from "./Assets/nodejs.png";
import java from "./Assets/java.png";

import vmware_horizon from "./Assets/vmware_horizon.png";
import citrix from "./Assets/citrix.png";

import oracle from "./Assets/oracle.png";
import postgresql from "./Assets/postgresql.png";
import mongodb from "./Assets/mongodb.png";
import cassandra from "./Assets/cassandra.png";
import clickhouse from "./Assets/clickhouse.png";
import couchbasedb from "./Assets/couchbasedb.png";
import rocksdb from "./Assets/rocksdb.png";
import redis from "./Assets/redis.svg";
import aerospike from "./Assets/aerospike.png";
import memcached from "./Assets/memcached.png";

import mariadb from "./Assets/mariadb.png";
import mysql from "./Assets/mysql.png";
import mssql from "./Assets/mssql.png";

import gramine from "./Assets/gramine.png";
import fortanix from "./Assets/fortanix.png";
import ansys from "./Assets/ansys.png";

import longhorn from "./Assets/longhorn.png";
import minio from "./Assets/minio.png";

import kafka from "./Assets/kafka.png";
import mqtt from "./Assets/mqtt.jpg";
import rabbitmq from "./Assets/rabbitmq.png";
import redpanda from "./Assets/redpanda.jpg";
import spark from "./Assets/spark.png";
import elasticsearch from "./Assets/elasticsearch.png";
import opensearch from "./Assets/opensearch.png";
import presto from "./Assets/presto.png";
import debezium from "./Assets/debezium.png";
import airflow from "./Assets/airflow.png";

import ffmpeg from "./Assets/ffmpeg.png";

import intel_integrated_performance_primitives from "./Assets/intel_integrated_performance_primitives.jpeg";
import intel_mkl from "./Assets/intel_mkl.jpeg";
import dpdk from "./Assets/dpdk.png";
import mpi from "./Assets/mpi.gif";
import sgx from "./Assets/sgx.png";
import pmdk from "./Assets/pmdk.png";
import spdk from "./Assets/spdk.png";
import opencv from "./Assets/opencv.png";

import intel_silicon_photonics from "./Assets/intel_silicon_photonics.png";
import intel_ethernet from "./Assets/intel_ethernet.png";
import barefoot from "./Assets/barefoot.jpeg";
import intel_xeon from "./Assets/intel_xeon.jpeg";
import intel_atom from "./Assets/intel_atom.png";
import intel_stratix from "./Assets/intel_stratix.png";
import intel_easic from "./Assets/intel_easic.png";
import intel_iris_xe from "./Assets/iris_xe.png";
import intel_movidius from "./Assets/intel_movidius.png";
import intel_habana from "./Assets/intel_habana.png";
import intel_agilex from "./Assets/intel_agilex.png";

const metabaseIP = "10.190.181.14";
const grafanaIP = "192.168.122.155";
const WebSSHIP = "192.168.122.71";

let workloads = {
  ml_optimizations: {
    xgboost: `http://${metabaseIP}:5842/public/question/ec7b1ac1-a8e0-4fdb-82a6-52b345eaac7c`,
    scikit_learn: {
      elastic_net: `http://${metabaseIP}:5842/public/question/3b00e983-8e0e-4f23-bd56-74db6d693cfa`,
      kmeans: `http://${metabaseIP}:5842/public/question/0974e33e-f394-41e1-bbc0-c7d600a07681`,
      knn_mnist: `http://${metabaseIP}:5842/public/question/36a9ac72-eb5f-4f96-849c-3da3c2485601`,
      lasso_regression: `http://${metabaseIP}:5842/public/question/b142f4ee-1dc1-4a47-b1df-7257850a07be`,
      linear_regression: `http://${metabaseIP}:5842/public/question/c4d1eb76-38bd-4afc-83b6-dd5afcb57448`,
      nusvr: `http://${metabaseIP}:5842/public/question/0fc739b4-4c96-4e7f-9f50-6a3f3102d9ca`,
      ridge_regression: `http://${metabaseIP}:5842/public/question/64c3192c-aaa7-40c8-9f42-a3d30ff56aba`,
      svc: `http://${metabaseIP}:5842/public/question/08a55080-7ef7-4efe-a6a4-9e6cae3418b4`,
    },
  },
};

let workloadData = [
  {
    heading: "ML & DL",
    data: {
      "Intel Optimised Python": [
        {
          title: "NumPy",
          src: numpy,
        },
        {
          title: "SciPy",
          src: scipy,
        },
        {
          title: "Numba",
          src: numba,
        },
        {
          title: "Pandas",
          src: pandas,
        },
        {
          title: "Modin",
          src: modin,
        },
      ],
      "Intel Optimised ML": [
        {
          title: "SciKit Learn",
          src: sklearn,
          link: "/k8-workloads/sklearn-doc",
        },
        {
          title: "XGBoost",
          src: xgboost,
          link: "/k8-workloads/xgboost-doc",
        },
      ],
      "Intel Optimised DL Frameworks & Tools": [
        {
          title: "TensorFlow",
          src: tflow,
        },
        {
          title: "Pytorch",
          src: pytorch,
        },
        {
          title: "OpenVino",
          src: openvino,
          link: "/k8-workloads/openvino-doc",
        },
        {
          title: "Intel Neural Compressor",
          src: intneural,
        },
        {
          title: "Hugging Face",
          src: huggingFace,
        },
        {
          title: "BigDL",
          src: bigDL,
        },
      ],
      ML: [
        {
          title: "H2o.ai",
          src: h2o,
        },
        {
          title: "CVAT (Computer Vision Annotation Tool)",
          src: cvat,
          link: "/k8-workloads/cvat-doc",
        },
      ],
    },
  },
  {
    heading: "HPC",
    data: {
      Orchestrators: [
        {
          title: "Apache Airflow",
          src: airflow,
        },
        {
          title: "Debezium",
          src: debezium,
        },
      ],
      HPC: [
        {
          title: "Ansys",
          src: ansys,
          optimizations: ["HBM"],
        },
      ],
      Security: [
        {
          title: "Gramine",
          src: gramine,
          optimizations: ["SGX"],
        },
        {
          title: "Fortanix",
          src: fortanix,
          optimizations: ["SGX"],
        },
      ],
    },
  },
  {
    heading: "Frontend",
    data: {
      Web: [
        {
          title: "Nginx",
          src: nginx,
          optimizations: ["QAT", "DLB"],
          link: "/k8-workloads/nginx-doc",
        },
        {
          title: "HAProxy",
          src: haproxy,
          optimizations: ["QAT", "DLB"],
        },
        {
          title: "NodeJS",
          src: nodejs,
        },
        {
          title: "Java",
          src: java,
        },
      ],
      VDI: [
        {
          title: "VMware Horizon",
          src: vmware_horizon,
        },
        {
          title: "Citrix",
          src: citrix,
        },
      ],
      Networks: [
        {
          title: "IPsec",
          src: ipsec,
          optimizations: ["QAT"],
        },
      ],
    },
  },
  {
    heading: "Database",
    data: {
      OLTP: [
        {
          title: "Oracle",
          src: oracle,
        },
        {
          title: "MS SQL",
          src: mssql,
          optimizations: ["QAT"],
        },
        {
          title: "PostgreSQL",
          src: postgresql,
          link: "/k8-workloads/postgres-doc",
        },
        {
          title: "MySQL",
          src: mysql,
        },
        {
          title: "MariaDB",
          src: mariadb,
        },
      ],
      NoSQL: [
        {
          title: "Cassandra",
          src: cassandra,
          link: "/k8-workloads/cassandra-doc",
        },
        {
          title: "MongoDB",
          src: mongodb,
          link: "/k8-workloads/mongodb-doc",
        },
        {
          title: "RocksDB",
          src: rocksdb,
          optimizations: ["IAA"],
        },
        {
          title: "Couchbase",
          src: couchbasedb,
        },
        {
          title: "Clickhouse",
          src: clickhouse,
          optimizations: ["IAA"],
        },
      ],
      "In Memory": [
        {
          title: "Redis",
          src: redis,
          link: "/k8-workloads/redis-doc",
        },
        {
          title: "Aerospike",
          src: aerospike,
        },
        {
          title: "Memcached",
          src: memcached,
        },
      ],
      Storage: [
        {
          title: "Longhorn",
          src: longhorn,
          link: "/k8-workloads/longhorn-doc",
        },
        {
          title: "Minio",
          src: minio,
          optimizations: ["AVX512"],
          link: "/k8-workloads/minio-doc",
        },
      ],
    },
  },
  {
    heading: "Data",
    data: {
      Streaming: [
        {
          title: "Kafka",
          src: kafka,
          link: "/k8-workloads/kafka-doc",
        },
        {
          title: "MQTT",
          src: mqtt,
        },
        {
          title: "RabbitMQ",
          src: rabbitmq,
          link: "/k8-workloads/rabbit-doc",
        },
        {
          title: "RedPanda",
          src: redpanda,
        },
      ],
      Analytics: [
        {
          title: "Spark",
          src: spark,
          link: "/k8-workloads/spark-doc",
        },
        {
          title: "ElasticSearch",
          src: elasticsearch,
        },
        {
          title: "OpenSearch",
          src: opensearch,
          optimizations: ["QAT"],
        },
        {
          title: "Presto",
          src: presto,
        },
      ],
      "Big Data": [
        {
          title: "AWS EMR",
          src: aws_emr,
        },
        {
          title: "Dataproc",
          src: dataproc,
        },
        {
          title: "Snowflake",
          src: snowflake,
        },
        {
          title: "Databricks",
          src: databricks,
        },
      ],
      Media: [
        {
          title: "FFmpeg",
          src: ffmpeg,
        },
      ],
    },
  },
];

let libraries = {
  heading: "Libraries",
  data: [
    {
      title: "Intel Math Kernel Library",
      src: intel_mkl,
    },
    {
      title: "Intel Integrated Performance Primitives",
      src: intel_integrated_performance_primitives,
    },
    {
      title: "Data Plane Development Kit",
      src: dpdk,
    },
    {
      title: "Message Passing Interface",
      src: mpi,
    },
    {
      title: "Software Guard Extensions",
      src: sgx,
    },
    {
      title: "Storage Performance Development Kit",
      src: spdk,
    },
    {
      title: "Persistent Memory Development Kit",
      src: pmdk,
    },
    {
      title: "OpenCV",
      src: opencv,
    },
  ],
};

let optimizations = [
  "ADQ",
  "DPDK",
  "AVX512",
  "DLBoost",
  "QAT",
  "AMX",
  "DLB",
  "DSA",
  "IAA",
  "HBM",
  "SGX",
];

let silicon = {
  heading: "Silicon",
  data: [
    {
      title: "Intel® Silicon Photonics",
      src: intel_silicon_photonics,
    },
    {
      title: "Intel® Ethernet",
      src: intel_ethernet,
    },
    {
      title: "Barefoot Networks",
      src: barefoot,
    },
    {
      title: "Intel® Xeon",
      src: intel_xeon,
    },
    {
      title: "Intel® Atom",
      src: intel_atom,
    },
    {
      title: "Intel® STRATiX",
      src: intel_stratix,
    },
    {
      title: "Intel® eASIC",
      src: intel_easic,
    },
    {
      title: "Intel® Xe",
      src: intel_iris_xe,
    },
    {
      title: "Intel® Movidius",
      src: intel_movidius,
    },
    {
      title: "Intel® Habana",
      src: intel_habana,
    },
    {
      title: "Intel® Agilex",
      src: intel_agilex,
    },
  ],
};

export {
  workloads,
  metabaseIP,
  grafanaIP,
  WebSSHIP,
  workloadData,
  libraries,
  optimizations,
  silicon,
};
